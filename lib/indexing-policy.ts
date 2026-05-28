import type { Metadata } from "next"
import { isSubstantiveArticle } from "@/lib/content-quality"

/** Redirect-only or stub routes — never index. */
export const NOINDEX_STATIC_PATHS = ["/compare"] as const

/**
 * Thin duplicates of a stronger hub page.
 * `/features` holds full content; detail URLs stay for users but skip index.
 */
export const NOINDEX_PATH_PATTERNS: ReadonlyArray<RegExp> = [/^\/features\/[^/]+$/]

export const INDEXABLE_ROBOTS: Metadata["robots"] = {
  index: true,
  follow: true,
}

export const NOINDEX_FOLLOW_ROBOTS: Metadata["robots"] = {
  index: false,
  follow: true,
}

export function shouldIndexStaticPath(path: string): boolean {
  if (NOINDEX_STATIC_PATHS.includes(path as (typeof NOINDEX_STATIC_PATHS)[number])) {
    return false
  }
  return !NOINDEX_PATH_PATTERNS.some((pattern) => pattern.test(path))
}

export function shouldIndexArticle(markdownBody: string): boolean {
  return isSubstantiveArticle(markdownBody)
}

export function robotsForArticle(markdownBody: string): Metadata["robots"] {
  return shouldIndexArticle(markdownBody) ? INDEXABLE_ROBOTS : NOINDEX_FOLLOW_ROBOTS
}

export function robotsForStaticPath(path: string): Metadata["robots"] {
  return shouldIndexStaticPath(path) ? INDEXABLE_ROBOTS : NOINDEX_FOLLOW_ROBOTS
}
