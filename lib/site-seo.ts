import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { getAllPosts } from "@/lib/blog"
import { getAllCompares } from "@/lib/compare"
import { shouldIndexArticle, shouldIndexStaticPath } from "@/lib/indexing-policy"
import { LANDING_PAGE_PATHS } from "@/lib/landing-page-keys"
import { SITE_URL, absoluteUrl } from "@/lib/site-url"
import type { SitemapEntry, SitemapPageConfig } from "@/types/sitemap"

export { SITE_HOST, SITE_URL, absoluteUrl } from "@/lib/site-url"

export const DISCOVERY_URLS = {
  sitemap: `${SITE_URL}/sitemap.xml`,
  robots: `${SITE_URL}/robots.txt`,
  llms: `${SITE_URL}/llms.txt`,
  llmsFull: `${SITE_URL}/llms-full.txt`,
} as const

/** Fixed dates — bump only when a URL’s content meaningfully changes. */
const LAST_MOD = {
  baseline: new Date("2026-01-13"),
  mdxLandings: new Date("2026-06-01"),
  trustPages: new Date("2026-05-31"),
} as const

const HIGH_PRIORITY_LANDING_PATHS = new Set([
  "/real-estate-plot-management-software",
  "/real-estate-inventory-management",
  "/real-estate-inventory-management-software",
  "/real-estate-booking-management-software",
  "/real-estate-crm",
  "/real-estate-crm-software",
  "/best-real-estate-crm-software",
])

const TRUST_PAGES = ["/about", "/case-studies"] as const

const landingsDirectory = path.join(process.cwd(), "content/landings")

function page(
  path: string,
  lastModified: Date,
  priority: number,
  changeFrequency: SitemapPageConfig["changeFrequency"] = "monthly",
): SitemapPageConfig {
  return { path, lastModified, priority, changeFrequency }
}

function landingLastModified(landingPath: string): Date {
  const slug = landingPath.replace(/^\//, "")
  const filePath = path.join(landingsDirectory, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) {
    return LAST_MOD.mdxLandings
  }
  const { data } = matter(fs.readFileSync(filePath, "utf8"))
  if (typeof data.dateModified === "string") {
    const parsed = new Date(data.dateModified)
    if (!Number.isNaN(parsed.getTime())) {
      return parsed
    }
  }
  return LAST_MOD.mdxLandings
}

function landingSitemapPages(): SitemapPageConfig[] {
  return Object.values(LANDING_PAGE_PATHS).map((landingPath) =>
    page(
      landingPath,
      landingLastModified(landingPath),
      HIGH_PRIORITY_LANDING_PATHS.has(landingPath) ? 0.9 : 0.85,
    ),
  )
}

const STATIC_PAGES: SitemapPageConfig[] = [
  page("", LAST_MOD.baseline, 1),
  ...landingSitemapPages(),
  page("/solutions", LAST_MOD.mdxLandings, 0.85),
  ...TRUST_PAGES.map((p) => page(p, LAST_MOD.trustPages, 0.7)),
  page("/features", LAST_MOD.baseline, 0.8),
  page("/pricing", LAST_MOD.baseline, 0.8),
  page("/blog", LAST_MOD.baseline, 0.7, "weekly"),
  page("/contact", LAST_MOD.baseline, 0.7),
  page("/faq", LAST_MOD.baseline, 0.6),
]

function toEntry(config: SitemapPageConfig): SitemapEntry {
  return {
    url: absoluteUrl(config.path || "/"),
    lastModified: config.lastModified,
    changeFrequency: config.changeFrequency,
    priority: config.priority,
  }
}

function contentEntries(
  basePath: "blog" | "compare",
  posts: Array<{ slug: string; date: string; content: string }>,
): SitemapEntry[] {
  return posts
    .filter((post) => shouldIndexArticle(post.content))
    .map((post) => ({
      url: absoluteUrl(`/${basePath}/${post.slug}`),
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
}

export function getSitemapEntries(): SitemapEntry[] {
  const staticEntries = STATIC_PAGES.filter((p) => shouldIndexStaticPath(p.path)).map(toEntry)

  return [
    ...staticEntries,
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

  const landings = Object.values(LANDING_PAGE_PATHS)
    .map((landingPath) => {
      const slug = landingPath.replace(/^\//, "")
      const filePath = path.join(landingsDirectory, `${slug}.mdx`)
      if (!fs.existsSync(filePath)) {
        return null
      }
      const { data } = matter(fs.readFileSync(filePath, "utf8"))
      return {
        title: data.title as string,
        url: `${SITE_URL}${landingPath}`,
        excerpt: data.description as string,
        primaryKeyword: data.primaryKeyword as string,
      }
    })
    .filter((item): item is NonNullable<typeof item> => item !== null)

  return {
    landings,
    guides: getAllPosts().map((p) => toItem("blog", p)),
    comparisons: getAllCompares().map((p) => toItem("compare", p)),
  }
}
