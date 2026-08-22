import type { Metadata } from "next"
import { PAGE_KEYWORDS } from "@/lib/seo-keywords"
import { buildPageMetadata } from "@/lib/page-metadata"

export const metadata: Metadata = buildPageMetadata({
  title: "Features",
  description:
    "Explore Layouts360 features: interactive digital layouts, real estate inventory management, CRM, plot booking, and payment tracking—built for layout developers.",
  path: "/features",
  keywords: [...PAGE_KEYWORDS.features],
  ogTitle: "Layouts360 Features",
  ogDescription:
    "Digital layouts, live inventory, real estate CRM, and payment tracking in one platform.",
})

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
