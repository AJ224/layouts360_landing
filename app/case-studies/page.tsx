import type { Metadata } from "next"
import { CaseStudiesContent } from "@/components/marketing/case-studies-content"
import { SeoPageShell } from "@/components/marketing/seo-landing"
import { PAGE_KEYWORDS } from "@/lib/seo-keywords"
import { buildPageMetadata } from "@/lib/page-metadata"

export const metadata: Metadata = buildPageMetadata({
  title: "Case Studies",
  description:
    "Customer stories from layout developers using Layouts360 for inventory, launch day sales, and channel partner management in India.",
  path: "/case-studies",
  keywords: [...PAGE_KEYWORDS.caseStudies],
  ogTitle: "Layouts360 Case Studies",
  ogDescription: "How developers digitize plot sales with live inventory and CRM.",
})

export default function CaseStudiesPage() {
  return (
    <SeoPageShell>
      <CaseStudiesContent />
    </SeoPageShell>
  )
}
