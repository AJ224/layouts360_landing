import type { Metadata } from "next"
import { SeoPageShell } from "@/components/marketing/seo-landing"
import { SolutionsHubContent } from "@/components/marketing/solutions-hub-content"
import { PAGE_KEYWORDS } from "@/lib/seo-keywords"
import { buildPageMetadata } from "@/lib/page-metadata"

export const metadata: Metadata = buildPageMetadata({
  title: "Real Estate Software Solutions",
  description:
    "Browse Layouts360 solutions: plot management, inventory management, real estate CRM, booking, channel partners, sales automation, and ERP for Indian developers.",
  path: "/solutions",
  keywords: [...PAGE_KEYWORDS.solutions],
  ogTitle: "Real Estate Software Solutions",
  ogDescription:
    "Plot management, inventory management, CRM, booking, and channel partners for layout developers in India.",
})

export default function SolutionsPage() {
  return (
    <SeoPageShell>
      <SolutionsHubContent />
    </SeoPageShell>
  )
}
