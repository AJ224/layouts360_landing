import type { Metadata } from "next"
import { countWords } from "@/lib/content-quality"
import { LANDING_PAGE_PATHS } from "@/lib/landing-page-keys"

/** Redirect-only or stub routes — never index. */
export const NOINDEX_STATIC_PATHS = ["/compare"] as const

/**
 * Thin duplicates of a stronger hub page.
 * `/features` holds full content; detail URLs stay for users but skip index.
 */
export const NOINDEX_PATH_PATTERNS: ReadonlyArray<RegExp> = [/^\/features\/[^/]+$/]

/**
 * Indexable SEO landings — tight pillar set only.
 * Everything else redirects (LANDING_CONSOLIDATION_REDIRECTS) or stays noindex.
 */
export const INDEXABLE_LANDING_PATHS = new Set<string>([
  "/real-estate-plot-management-software",
  "/real-estate-inventory-management-software",
  "/real-estate-crm-software",
  "/best-real-estate-crm-software",
  "/affordable-real-estate-crm",
  "/real-estate-channel-partner-management-software",
  "/online-plot-booking-software",
  "/real-estate-accounting-software",
  "/commercial-real-estate-software",
  "/360-management-software",
])

const ALL_LANDING_PATHS = new Set(Object.values(LANDING_PAGE_PATHS))

/** Overlapping landings → pillar (301). Prefer single-hop destinations. */
export const LANDING_CONSOLIDATION_REDIRECTS: ReadonlyArray<{
  source: string
  destination: string
}> = [
  // → plot pillar
  { source: "/layout-management-software", destination: "/real-estate-plot-management-software" },
  { source: "/digital-layout-maps", destination: "/real-estate-plot-management-software" },
  { source: "/township-management-software", destination: "/real-estate-plot-management-software" },
  { source: "/launch-day-plot-sales-software", destination: "/real-estate-plot-management-software" },
  // → inventory pillar
  { source: "/real-estate-inventory-management", destination: "/real-estate-inventory-management-software" },
  { source: "/property-inventory-management-platform", destination: "/real-estate-inventory-management-software" },
  { source: "/apartment-inventory-management-software", destination: "/real-estate-inventory-management-software" },
  { source: "/real-estate-asset-management-software", destination: "/real-estate-inventory-management-software" },
  // → CRM pillar
  { source: "/real-estate-crm", destination: "/real-estate-crm-software" },
  { source: "/real-estate-client-management-software", destination: "/real-estate-crm-software" },
  { source: "/real-estate-lead-management-software", destination: "/real-estate-crm-software" },
  { source: "/real-estate-sales-automation-software", destination: "/real-estate-crm-software" },
  { source: "/site-visit-management", destination: "/real-estate-crm-software" },
  { source: "/affordable-crm-for-realtors", destination: "/affordable-real-estate-crm" },
  // → booking pillar
  { source: "/real-estate-booking-management-software", destination: "/online-plot-booking-software" },
  // → accounting / suite
  { source: "/real-estate-back-office-software", destination: "/real-estate-accounting-software" },
  { source: "/real-estate-erp-software", destination: "/360-management-software" },
]

/** True competitor / differentiator comps only. */
export const INDEXABLE_COMPARE_SLUGS = new Set<string>([
  "layouts360-vs-plotforms",
  "layouts360-vs-blindersoe",
  "real-estate-crm-software-india-leadsquared-selldo-vs-layouts360",
  "digital-plot-management-vs-manual-excel",
  "unified-real-estate-crm-vs-excel-spreadsheets",
  "purpose-built-real-estate-software-vs-generic-crm",
  "real-estate-inventory-management-excel-vs-live-inventory",
])

/** Distinct guide intent — not landing rehashes. */
export const INDEXABLE_BLOG_SLUGS = new Set<string>([
  "plot-management-software-india",
  "excel-vs-plot-management-software",
  "what-is-layouts360",
  "what-is-real-estate-inventory-management",
  "what-is-real-estate-crm-software",
  "how-to-digitize-real-estate-business",
  "best-real-estate-inventory-management-software-india-2026",
  "top-10-real-estate-crm-software-india",
  "saas-vs-custom-agency-real-estate",
  "why-pdf-maps-kill-sales",
])

/** Non-allowlisted articles are not indexed (prefer expand allowlist over auto-index). */
export const MIN_INDEXABLE_ARTICLE_WORDS = 900

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
  if (NOINDEX_PATH_PATTERNS.some((pattern) => pattern.test(path))) {
    return false
  }
  if (LANDING_CONSOLIDATION_REDIRECTS.some((r) => r.source === path)) {
    return false
  }
  if (ALL_LANDING_PATHS.has(path)) {
    return INDEXABLE_LANDING_PATHS.has(path)
  }
  return true
}

export type ArticleKind = "blog" | "compare"

export function shouldIndexArticle(
  markdownBody: string,
  kind: ArticleKind = "blog",
  slug?: string,
): boolean {
  if (!slug) return countWords(markdownBody) >= MIN_INDEXABLE_ARTICLE_WORDS
  if (kind === "compare") return INDEXABLE_COMPARE_SLUGS.has(slug)
  return INDEXABLE_BLOG_SLUGS.has(slug)
}

export function robotsForArticle(
  markdownBody: string,
  kind: ArticleKind = "blog",
  slug?: string,
): Metadata["robots"] {
  return shouldIndexArticle(markdownBody, kind, slug) ? INDEXABLE_ROBOTS : NOINDEX_FOLLOW_ROBOTS
}

export function robotsForStaticPath(path: string): Metadata["robots"] {
  return shouldIndexStaticPath(path) ? INDEXABLE_ROBOTS : NOINDEX_FOLLOW_ROBOTS
}
