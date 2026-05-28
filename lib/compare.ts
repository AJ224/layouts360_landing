import fs from "fs"
import path from "path"
import matter from "gray-matter"

const compareDirectory = path.join(process.cwd(), "content/compare")

export interface ComparePost {
  slug: string
  title: string
  date: string
  excerpt: string
  author: string
  coverImage?: string
  tags?: string[]
  content: string
}

function mapFileToPost(fileName: string): ComparePost {
  const slug = fileName.replace(/\.mdx$/, "")
  const fullPath = path.join(compareDirectory, fileName)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    author: data.author,
    coverImage: data.coverImage,
    tags: data.tags,
    content,
  } as ComparePost
}

export function getAllCompares(): ComparePost[] {
  if (!fs.existsSync(compareDirectory)) {
    return []
  }

  return fs
    .readdirSync(compareDirectory)
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map(mapFileToPost)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getCompareBySlug(slug: string): ComparePost | null {
  try {
    return mapFileToPost(`${slug}.mdx`)
  } catch {
    return null
  }
}

export function getAllCompareSlugs(): string[] {
  return getAllCompares().map((post) => post.slug)
}
