import { getAllPosts, type BlogPost } from "@/lib/blog"
import { getAllCompares, type ComparePost } from "@/lib/compare"

export type ContentKind = "blog" | "compare"

export interface FeedItem {
  slug: string
  title: string
  date: string
  excerpt: string
  author: string
  coverImage?: string
  tags?: string[]
  content: string
  kind: ContentKind
  href: string
}

function toFeedItem(
  post: BlogPost | ComparePost,
  kind: ContentKind,
): FeedItem {
  const basePath = kind === "blog" ? "/blog" : "/compare"
  return {
    slug: post.slug,
    title: post.title,
    date: post.date,
    excerpt: post.excerpt,
    author: post.author,
    coverImage: post.coverImage,
    tags: post.tags,
    content: post.content,
    kind,
    href: `${basePath}/${post.slug}`,
  }
}

export function getBlogFeedItems(): FeedItem[] {
  return getAllPosts().map((post) => toFeedItem(post, "blog"))
}

export function getCompareFeedItems(): FeedItem[] {
  return getAllCompares().map((post) => toFeedItem(post, "compare"))
}

export function getAllFeedItemsSorted(): FeedItem[] {
  return [...getBlogFeedItems(), ...getCompareFeedItems()].sort((a, b) =>
    a.date < b.date ? 1 : -1,
  )
}
