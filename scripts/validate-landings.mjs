/**
 * Validates content/landings/*.mdx: frontmatter, FAQ count, body word count.
 * Run: node scripts/validate-landings.mjs
 */
import fs from "fs"
import path from "path"
import matter from "gray-matter"

const MIN_WORDS = 1500
const MAX_WORDS = 2600
const MIN_FAQS = 12
const MAX_FAQS = 20
const dir = path.join(process.cwd(), "content/landings")

function countWords(text) {
  return text
    .replace(/[#*_\`\[\]()>-]/g, " ")
    .split(/\s+/)
    .filter(Boolean).length
}

const files = fs
  .readdirSync(dir)
  .filter((f) => f.endsWith(".mdx") && !f.startsWith("_"))

let failed = false

for (const file of files) {
  const slug = file.replace(/\.mdx$/, "")
  const raw = fs.readFileSync(path.join(dir, file), "utf8")
  const { data, content } = matter(raw)
  const words = countWords(content)
  const faqs = data.faqs ?? []

  if (!data.pageKey || !data.path || !data.primaryKeyword) {
    console.error(`[${slug}] missing required frontmatter (pageKey, path, primaryKeyword)`)
    failed = true
  }
  if (words < MIN_WORDS) {
    console.error(`[${slug}] body ${words} words (min ${MIN_WORDS})`)
    failed = true
  }
  if (words > MAX_WORDS) {
    console.warn(`[${slug}] body ${words} words (soft max ${MAX_WORDS})`)
  }
  if (faqs.length < MIN_FAQS || faqs.length > MAX_FAQS) {
    console.error(`[${slug}] ${faqs.length} FAQs (expected ${MIN_FAQS}-${MAX_FAQS})`)
    failed = true
  }
  if (!data.heroIntro || data.heroIntro.length < 2) {
    console.error(`[${slug}] heroIntro needs at least 2 paragraphs`)
    failed = true
  }
}

if (failed) {
  process.exit(1)
}

console.log(`Validated ${files.length} landing MDX files (≥${MIN_WORDS} words, ${MIN_FAQS}-${MAX_FAQS} FAQs).`)
