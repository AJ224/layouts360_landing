import type { Metadata } from "next"
import { CaseStudiesContent } from "@/components/marketing/case-studies-content"
import { SeoPageShell } from "@/components/marketing/seo-landing"
import { PAGE_KEYWORDS } from "@/lib/seo-keywords"
import { buildPageMetadata } from "@/lib/page-metadata"

export const metadata: Metadata = buildPageMetadata({
  title: "The Plot Sales Playbook — Manual Ops Cost Real Money",
  description:
    "Plot sales playbook: Excel ops cost, Meta ads, and why unofficial WhatsApp blast tools get numbers banned — plus better official solutions. Illustrative case math.",
  path: "/case-studies",
  keywords: [...PAGE_KEYWORDS.caseStudies],
  ogTitle: "The Plot Sales Playbook | Layouts360",
  ogDescription:
    "Ops leaks, Meta marketing, and WhatsApp ban risk — with spelled-out case math for layout teams.",
})

export default function CaseStudiesPage() {
  return (
    <SeoPageShell>
      <CaseStudiesContent />
    </SeoPageShell>
  )
}
