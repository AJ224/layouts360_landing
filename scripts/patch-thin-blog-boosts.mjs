/**
 * Appends topic-specific boosts to thin blogs (no generic filler).
 * Run: node scripts/patch-thin-blog-boosts.mjs
 */
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { BLOG_SECTION_BOOSTS } from "./blog-section-boosts.mjs"

const blogDir = path.join(process.cwd(), "content/blog")

function insertBeforeClosing(content, block) {
  const trimmed = block.trim()
  const marker = trimmed.slice(0, 36)
  if (content.includes(marker)) return content

  if (content.includes("## Closing thought")) {
    return content.replace("## Closing thought", `${trimmed}\n\n## Closing thought`)
  }
  if (content.includes("## Next steps")) {
    return content.replace("## Next steps", `${trimmed}\n\n## Next steps`)
  }
  return `${content.trim()}\n\n${trimmed}\n`
}

let patched = 0
for (const file of fs.readdirSync(blogDir)) {
  if (!file.endsWith(".mdx")) continue
  const slug = file.replace(/\.mdx$/, "")
  const boost = BLOG_SECTION_BOOSTS[slug]
  if (!boost) continue

  const filePath = path.join(blogDir, file)
  const raw = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(raw)
  const next = insertBeforeClosing(content, boost)
  if (next === content) continue

  const out = `---
title: ${JSON.stringify(data.title)}
date: ${JSON.stringify(data.date)}
excerpt: ${JSON.stringify(data.excerpt)}
author: ${JSON.stringify(data.author ?? "Abhinandan Jain")}
tags: ${JSON.stringify(data.tags ?? [])}
---

${next.trim()}
`
  fs.writeFileSync(filePath, out)
  patched++
  console.log("patched", slug)
}

console.log(`Done. Patched ${patched} posts.`)
