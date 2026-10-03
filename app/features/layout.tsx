import type { Metadata } from "next"
import { PAGE_KEYWORDS } from "@/lib/seo-keywords"
import { buildPageMetadata } from "@/lib/page-metadata"

export const metadata: Metadata = buildPageMetadata({
  title: "Features — Live map, hold, book, CRM",
  description:
    "See how Layouts360 works: live plot and flat maps, holds that stop double booking, unit-linked CRM, broker logins, and buyer-facing layout links.",
  path: "/features",
  keywords: [...PAGE_KEYWORDS.features],
  ogTitle: "Layouts360 Features",
  ogDescription:
    "Live inventory map, hold and booking, plot-linked CRM, and channel partner access — one system for layout developers.",
})

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
