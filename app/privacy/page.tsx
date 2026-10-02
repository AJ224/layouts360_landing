import type { Metadata } from "next"
import { PrivacyContent } from "@/components/marketing/privacy-content"
import { SeoPageShell } from "@/components/marketing/seo-landing"
import { COMPANY } from "@/lib/company"
import { buildPageMetadata } from "@/lib/page-metadata"

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy",
  description: `How ${COMPANY.legalName} (Layouts360) collects, uses, and protects personal data under India's DPDP Act for our website and SaaS platform.`,
  path: "/privacy",
  keywords: ["Layouts360 privacy policy", "DPDP", "data protection", "OriginGrey"],
  ogTitle: "Privacy Policy | Layouts360",
  ogDescription: "Privacy practices for the Layouts360 platform and website.",
})

export default function PrivacyPage() {
  return (
    <SeoPageShell>
      <PrivacyContent />
    </SeoPageShell>
  )
}
