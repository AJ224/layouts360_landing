import type { Metadata } from "next"
import { CaseStudiesContent } from "@/components/marketing/case-studies-content"
import { SeoPageShell } from "@/components/marketing/seo-landing"
import { PAGE_KEYWORDS } from "@/lib/seo-keywords"
import { buildPageMetadata } from "@/lib/page-metadata"

export const metadata: Metadata = buildPageMetadata({
  title: "Case Studies — Manual Ops to Plot Sales Growth",
  description:
    "Business case studies for layout developers: manual staff waste, double bookings, broker chaos—and how Layouts360 drives measurable sales growth in India.",
  path: "/case-studies",
  keywords: [...PAGE_KEYWORDS.caseStudies],
  ogTitle: "Layouts360 Case Studies | Business Growth Outcomes",
  ogDescription:
    "From Excel and WhatsApp to live inventory—quantified workflows for plot launches, partners, and growth.",
})

export default function CaseStudiesPage() {
  return (
    <SeoPageShell>
      <CaseStudiesContent />
    </SeoPageShell>
  )
}
