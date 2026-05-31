/**
 * Expands blog posts under MIN_WORDS with topic-specific SEO/GEO sections only.
 * Does NOT append a shared generic closing — use blog-topic-closings.mjs per slug.
 * Run: node scripts/expand-thin-blogs.mjs
 */
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { TOPIC_BLOG_CLOSINGS } from "./blog-topic-closings.mjs"
import { THIN_BLOG_EXPANSIONS } from "./expand-thin-blog-sections.mjs"

const MIN_WORDS = 400
const blogDir = path.join(process.cwd(), "content/blog")

function countWords(text) {
  return text.trim().split(/\s+/).filter(Boolean).length
}

function insertExpansion(content, expansion) {
  const block = expansion.trim()
  if (content.includes(block.slice(0, 40))) {
    return content
  }
  if (content.includes("## Next steps")) {
    return content.replace("## Next steps", `${block}\n\n## Next steps`)
  }
  return `${content.trim()}\n\n${block}\n`
}

function insertTopicClosing(content, slug) {
  const closing = TOPIC_BLOG_CLOSINGS[slug]
  if (!closing || content.includes("## Closing thought")) return content
  const block = `## Closing thought\n\n${closing.trim()}`
  if (content.includes("## Next steps")) {
    return content.replace("## Next steps", `${block}\n\n## Next steps`)
  }
  return `${content.trim()}\n\n${block}\n`
}

let updated = 0
let skipped = 0
const warnings = []

for (const file of fs.readdirSync(blogDir)) {
  if (!file.endsWith(".mdx")) continue
  const slug = file.replace(/\.mdx$/, "")
  const filePath = path.join(blogDir, file)
  const raw = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(raw)
  const words = countWords(content)

  let newContent = content
  const expansion = THIN_BLOG_EXPANSIONS[slug]

  if (expansion && !content.includes("## GEO: quick answers")) {
    newContent = insertExpansion(newContent, expansion)
  }

  newContent = insertTopicClosing(newContent, slug)

  const newWords = countWords(newContent)

  if (newWords === words) {
    skipped++
    continue
  }

  if (newWords < MIN_WORDS) {
    warnings.push(`${slug}: ${newWords} words — add topic-specific copy in expand-thin-blog-sections.mjs`)
  }

  const out = `---
title: ${JSON.stringify(data.title)}
date: ${JSON.stringify(data.date)}
excerpt: ${JSON.stringify(data.excerpt)}
author: ${JSON.stringify(data.author ?? "Abhinandan Jain")}
tags: ${JSON.stringify(data.tags ?? [])}
---

${newContent.trim()}
`
  fs.writeFileSync(filePath, out)
  console.log(`✓ ${slug}: ${words} → ${newWords} words`)
  updated++
}

console.log(`\nUpdated ${updated} posts, skipped ${skipped}.`)
if (warnings.length) {
  console.warn("\nStill under minimum (no generic filler applied):")
  warnings.forEach((w) => console.warn(`  - ${w}`))
}
