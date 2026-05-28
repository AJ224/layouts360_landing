import { getAllPosts } from "@/lib/blog"
import { getAllCompares } from "@/lib/compare"
import { servicesConfig } from "@/lib/services-config"
import type { SitemapEntry, SitemapPageConfig } from "@/types/sitemap"

export const SITE_URL = "https://layouts360.com"

export const DISCOVERY_URLS = {
  sitemap: `${SITE_URL}/sitemap.xml`,
  robots: `${SITE_URL}/robots.txt`,
  llms: `${SITE_URL}/llms.txt`,
  llmsFull: `${SITE_URL}/llms-full.txt`,
} as const

/** Fixed dates — do not bump on routine deploys (Search Console stability). */
const LAST_MOD = {
  baseline: new Date("2026-01-13"),
  seoJan21: new Date("2026-01-21"),
  seoJan22: new Date("2026-01-22"),
} as const

const SEO_JAN_21 = [
  "/real-estate-plot-management-software",
  "/real-estate-inventory-management-software",
] as const

const SEO_JAN_22 = [
  "/real-estate-asset-management-software",
  "/real-estate-accounting-software",
  "/commercial-real-estate-software",
  "/real-estate-client-management-software",
] as const

function page(
  path: string,
  lastModified: Date,
  priority: number,
  changeFrequency: SitemapPageConfig["changeFrequency"] = "monthly",
): SitemapPageConfig {
  return { path, lastModified, priority, changeFrequency }
}

const STATIC_PAGES: SitemapPageConfig[] = [
  page("", LAST_MOD.baseline, 1),
  ...SEO_JAN_21.map((path) => page(path, LAST_MOD.seoJan21, 0.9)),
  ...SEO_JAN_22.map((path) => page(path, LAST_MOD.seoJan22, 0.9)),
  page("/features", LAST_MOD.baseline, 0.8),
  page("/pricing", LAST_MOD.baseline, 0.8),
  page("/blog", LAST_MOD.baseline, 0.7, "weekly"),
  page("/contact", LAST_MOD.baseline, 0.7),
  page("/faq", LAST_MOD.baseline, 0.6),
]

function toEntry(config: SitemapPageConfig): SitemapEntry {
  return {
    url: `${SITE_URL}${config.path}`,
    lastModified: config.lastModified,
    changeFrequency: config.changeFrequency,
    priority: config.priority,
  }
}

function contentEntries(
  basePath: "blog" | "compare",
  posts: Array<{ slug: string; date: string }>,
): SitemapEntry[] {
  return posts.map((post) => ({
    url: `${SITE_URL}/${basePath}/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }))
}

export function getSitemapEntries(): SitemapEntry[] {
  return [
    ...STATIC_PAGES.map(toEntry),
    ...servicesConfig.map((service) =>
      toEntry(page(`/features/${service.id}`, LAST_MOD.baseline, 0.6)),
    ),
    ...contentEntries("compare", getAllCompares()),
    ...contentEntries("blog", getAllPosts()),
  ]
}

export function getLlmsContentIndex() {
  const toItem = (basePath: "blog" | "compare", p: { slug: string; title: string; excerpt: string }) => ({
    title: p.title,
    url: `${SITE_URL}/${basePath}/${p.slug}`,
    excerpt: p.excerpt,
  })

  return {
    guides: getAllPosts().map((p) => toItem("blog", p)),
    comparisons: getAllCompares().map((p) => toItem("compare", p)),
  }
}
