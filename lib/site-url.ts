/** Canonical production host (non-www). Shared by middleware, metadata, and sitemap. */
export const SITE_HOST = "layouts360.com" as const
export const SITE_URL = `https://${SITE_HOST}`

export function absoluteUrl(path: string = ""): string {
  if (!path || path === "/") return SITE_URL
  const normalized = path.startsWith("/") ? path : `/${path}`
  return `${SITE_URL}${normalized}`
}
