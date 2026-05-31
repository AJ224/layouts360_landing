import type { Metadata } from "next"
import { SeoPageShell } from "@/components/marketing/seo-landing"
import { SolutionsHubContent } from "@/components/marketing/solutions-hub-content"
import { PAGE_KEYWORDS } from "@/lib/seo-keywords"
import { absoluteUrl } from "@/lib/site-seo"

export const metadata: Metadata = {
  title: "Real Estate Software Solutions | Plot, CRM, Booking & ERP | Layouts360",
  description:
    "Browse Layouts360 solutions: plot management, inventory, real estate CRM, booking management, channel partners, sales automation, and ERP for Indian developers.",
  keywords: [...PAGE_KEYWORDS.solutions],
  alternates: { canonical: absoluteUrl("/solutions") },
  openGraph: {
    title: "Real Estate Software Solutions | Layouts360",
    description:
      "Plot management, CRM, booking, channel partners, and sales automation for layout developers in India.",
    type: "website",
    url: absoluteUrl("/solutions"),
  },
}

export default function SolutionsPage() {
  return (
    <SeoPageShell>
      <SolutionsHubContent />
    </SeoPageShell>
  )
}
