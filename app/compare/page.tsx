import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { NOINDEX_FOLLOW_ROBOTS } from "@/lib/indexing-policy"
import { buildPageMetadata } from "@/lib/page-metadata"

export const metadata: Metadata = buildPageMetadata({
  title: "Comparisons",
  description: "Software comparisons for Indian plot developers. See the blog for guides and side-by-side reviews.",
  path: "/blog",
  robots: NOINDEX_FOLLOW_ROBOTS,
})

/** Compare listings live on /blog; articles stay at /compare/[slug] */
export default function CompareIndexPage() {
  redirect("/blog#comparisons")
}
