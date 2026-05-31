import type { Metadata } from "next"
import { CaseStudiesContent } from "@/components/marketing/case-studies-content"
import { SeoPageShell } from "@/components/marketing/seo-landing"
import { PAGE_KEYWORDS } from "@/lib/seo-keywords"
import { absoluteUrl } from "@/lib/site-seo"

export const metadata: Metadata = {
  title: "Case Studies | Layout Developers Using Layouts360",
  description:
    "Customer stories from layout developers using Layouts360 for inventory, launch day sales, and channel partner management in India.",
  keywords: [...PAGE_KEYWORDS.caseStudies],
  alternates: { canonical: absoluteUrl("/case-studies") },
  openGraph: {
    title: "Layouts360 Case Studies",
    description: "How developers digitize plot sales with live inventory and CRM.",
    type: "website",
    url: absoluteUrl("/case-studies"),
  },
}

export default function CaseStudiesPage() {
  return (
    <SeoPageShell>
      <CaseStudiesContent />
    </SeoPageShell>
  )
}
