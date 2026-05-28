import { MetadataRoute } from "next"
import { getSitemapEntries } from "@/lib/site-seo"

export default function sitemap(): MetadataRoute.Sitemap {
  return getSitemapEntries()
}
