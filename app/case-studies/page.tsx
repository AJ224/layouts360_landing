import type { Metadata } from "next"
import { CaseStudiesContent } from "@/components/marketing/case-studies-content"
import { SeoPageShell } from "@/components/marketing/seo-landing"
import { PAGE_KEYWORDS } from "@/lib/seo-keywords"
import { buildPageMetadata } from "@/lib/page-metadata"

export const metadata: Metadata = buildPageMetadata({
  title: "The Plot Sales Playbook — Manual Ops Cost Real Money",
  description:
    "How layout developers actually lose money to Excel, WhatsApp, and verbal holds — staff hours, ₹ risk, and case studies with the operating math. Illustrative composites.",
  path: "/case-studies",
  keywords: [...PAGE_KEYWORDS.caseStudies],
  ogTitle: "The Plot Sales Playbook | Layouts360",
  ogDescription:
    "The staff hours, the ₹ risk, and what changes when plot inventory goes live — with spelled-out case math.",
})

export default function CaseStudiesPage() {
  return (
    <SeoPageShell>
      <CaseStudiesContent />
    </SeoPageShell>
  )
}
