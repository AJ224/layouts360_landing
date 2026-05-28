export type SitemapChangeFrequency = "weekly" | "monthly"

export type SitemapEntry = {
  url: string
  lastModified: Date
  changeFrequency: SitemapChangeFrequency
  priority: number
}

export type SitemapPageConfig = {
  path: string
  priority: number
  changeFrequency: SitemapChangeFrequency
  lastModified: Date
}
