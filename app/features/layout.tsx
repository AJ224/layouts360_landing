import type { Metadata } from "next"
import { PAGE_KEYWORDS } from "@/lib/seo-keywords"
import { absoluteUrl } from "@/lib/site-seo"

export const metadata: Metadata = {
  title: "Features | Real Estate Plot Management & CRM Software",
  description:
    "Explore Layouts360 features: interactive digital layouts, real estate inventory management, CRM, plot booking, and payment tracking—built for layout developers.",
  keywords: [...PAGE_KEYWORDS.features],
  alternates: {
    canonical: absoluteUrl("/features"),
  },
  openGraph: {
    title: "Layouts360 Features | Real Estate Software",
    description:
      "Digital layouts, live inventory, real estate CRM, and payment tracking in one platform.",
    url: absoluteUrl("/features"),
  },
}

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
