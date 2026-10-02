import type { Metadata } from "next"
import { TermsContent } from "@/components/marketing/terms-content"
import { SeoPageShell } from "@/components/marketing/seo-landing"
import { COMPANY } from "@/lib/company"
import { buildPageMetadata } from "@/lib/page-metadata"

export const metadata: Metadata = buildPageMetadata({
  title: "Terms & Conditions",
  description: `Terms governing use of the Layouts360 website and SaaS platform operated by ${COMPANY.legalName}, aligned with our Master Services Agreement.`,
  path: "/terms",
  keywords: ["Layouts360 terms", "terms and conditions", "MSA", "OriginGrey"],
  ogTitle: "Terms & Conditions | Layouts360",
  ogDescription: "Terms of use for Layouts360 website and platform.",
})

export default function TermsPage() {
  return (
    <SeoPageShell>
      <TermsContent />
    </SeoPageShell>
  )
}
