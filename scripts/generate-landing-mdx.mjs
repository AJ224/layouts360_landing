/**
 * Generates content/landings/*.mdx from configs. Run: node scripts/generate-landing-mdx.mjs
 */
import fs from "fs"
import path from "path"
import { buildLandingBody } from "./landing-body-builder.mjs"
import { LANDING_CONFIGS } from "./landing-page-configs.mjs"

const root = process.cwd()
const outDir = path.join(root, "content/landings")

function yamlQuote(s) {
  if (typeof s !== "string") return s
  return `"${s.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`
}

function toFrontmatter(doc) {
  const lines = ["---"]
  for (const [k, v] of Object.entries(doc)) {
    if (v === undefined) continue
    if (Array.isArray(v)) {
      if (v.length === 0) continue
      if (typeof v[0] === "object" && "question" in v[0]) {
        lines.push(`${k}:`)
        for (const item of v) {
          lines.push(`  - question: ${yamlQuote(item.question)}`)
          lines.push(`    answer: ${yamlQuote(item.answer)}`)
        }
      } else if (typeof v[0] === "object" && "href" in v[0]) {
        lines.push(`${k}:`)
        for (const item of v) {
          lines.push(`  - href: ${item.href}`)
          lines.push(`    label: ${yamlQuote(item.label)}`)
        }
      } else {
        lines.push(`${k}:`)
        for (const item of v) {
          lines.push(`  - ${yamlQuote(item)}`)
        }
      }
    } else {
      lines.push(`${k}: ${yamlQuote(String(v))}`)
    }
  }
  lines.push("---", "")
  return lines.join("\n")
}

let written = 0
for (const cfg of LANDING_CONFIGS) {
  const body = buildLandingBody(cfg)
  const frontmatter = {
    pageKey: cfg.pageKey,
    path: cfg.path,
    primaryKeyword: cfg.primaryKeyword,
    title: cfg.title,
    description: cfg.description,
    keywords: cfg.keywords,
    ogTitle: cfg.ogTitle,
    ogDescription: cfg.ogDescription,
    breadcrumbLabel: cfg.breadcrumbLabel,
    softwareDescription: cfg.softwareDescription,
    heroIntro: cfg.heroIntro,
    faqs: cfg.faqs,
    relatedLinks: cfg.relatedLinks,
    ctaTitle: cfg.ctaTitle,
    ctaDescription: cfg.ctaDescription,
    ...(cfg.variant ? { variant: cfg.variant } : {}),
    dateModified: "2026-06-01",
  }

  const slug = cfg.path.replace(/^\//, "")
  const file = path.join(outDir, `${slug}.mdx`)
  fs.writeFileSync(file, toFrontmatter(frontmatter) + body)
  written++
}

console.log(`Wrote ${written} landing MDX files to content/landings/`)
