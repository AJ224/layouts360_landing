import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { NOINDEX_FOLLOW_ROBOTS } from "@/lib/indexing-policy"
import { absoluteUrl } from "@/lib/site-seo"

export const metadata: Metadata = {
  title: "Comparisons",
  robots: NOINDEX_FOLLOW_ROBOTS,
  alternates: {
    canonical: absoluteUrl("/blog"),
  },
}

/** Compare listings live on /blog; articles stay at /compare/[slug] */
export default function CompareIndexPage() {
  redirect("/blog#comparisons")
}
