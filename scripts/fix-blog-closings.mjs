/**
 * Removes identical generic blog closings and inserts per-topic closings.
 * Run: node scripts/fix-blog-closings.mjs
 */
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import {
  GENERIC_CLOSE_END,
  GENERIC_CLOSE_START,
  TOPIC_BLOG_CLOSINGS,
} from "./blog-topic-closings.mjs"

const blogDir = path.join(process.cwd(), "content/blog")

function stripGenericClose(content) {
  const start = content.indexOf(GENERIC_CLOSE_START)
  if (start === -1) return content
  const end = content.indexOf(GENERIC_CLOSE_END, start)
  if (end === -1) return content.slice(0, start).trim()
  return `${content.slice(0, start).trim()}\n\n`
}

function applyClosing(content, slug) {
  const closing = TOPIC_BLOG_CLOSINGS[slug]
  if (!closing) return content
  const block = `## Closing thought\n\n${closing.trim()}`
  if (content.includes(closing.slice(0, 40))) return content
  if (content.includes("## Next steps")) {
    return content.replace(GENERIC_CLOSE_END, `${block}\n\n${GENERIC_CLOSE_END}`)
  }
  return `${content.trim()}\n\n${block}\n`
}

let fixed = 0
for (const file of fs.readdirSync(blogDir)) {
  if (!file.endsWith(".mdx")) continue
  const slug = file.replace(/\.mdx$/, "")
  const filePath = path.join(blogDir, file)
  const raw = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(raw)

  let newContent = stripGenericClose(content)
  const hadGeneric = content.includes(GENERIC_CLOSE_START)
  if (TOPIC_BLOG_CLOSINGS[slug]) {
    newContent = applyClosing(newContent, slug)
  }

  if (newContent === content) continue

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
  console.log(`✓ ${slug}${hadGeneric ? " (removed generic block)" : ""}`)
  fixed++
}

console.log(`\nFixed ${fixed} blog posts.`)
