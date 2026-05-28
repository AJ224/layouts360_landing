import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { NOINDEX_FOLLOW_ROBOTS } from "@/lib/indexing-policy"

export const metadata: Metadata = {
  title: "Comparisons",
  robots: NOINDEX_FOLLOW_ROBOTS,
  alternates: {
    canonical: "https://layouts360.com/blog#comparisons",
  },
}

/** Compare listings live on /blog; articles stay at /compare/[slug] */
export default function CompareIndexPage() {
  redirect("/blog#comparisons")
}
