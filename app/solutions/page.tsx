import type { Metadata } from "next"
import { SeoPageShell } from "@/components/marketing/seo-landing"
import { SolutionsHubContent } from "@/components/marketing/solutions-hub-content"
import { PAGE_KEYWORDS } from "@/lib/seo-keywords"
import { buildPageMetadata } from "@/lib/page-metadata"

export const metadata: Metadata = buildPageMetadata({
  title: "Solutions — Plot, inventory, CRM, booking",
  description:
    "Fix PDF layouts, double booking, broker fights, and CRM that doesn’t know the plot. Layouts360 solutions for plot developers, apartments, and channel partners.",
  path: "/solutions",
  keywords: [...PAGE_KEYWORDS.solutions],
  ogTitle: "Layouts360 Solutions",
  ogDescription:
    "Start with the job that hurts: live maps, inventory, plot-linked CRM, booking, and channel partners.",
})

export default function SolutionsPage() {
  return (
    <SeoPageShell>
      <SolutionsHubContent />
    </SeoPageShell>
  )
}
