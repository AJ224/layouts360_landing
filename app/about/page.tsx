import type { Metadata } from "next"
import { AboutContent } from "@/components/marketing/about-content"
import { SeoPageShell } from "@/components/marketing/seo-landing"
import { COMPANY } from "@/lib/company"
import { PAGE_KEYWORDS } from "@/lib/seo-keywords"
import { buildPageMetadata } from "@/lib/page-metadata"

export const metadata: Metadata = buildPageMetadata({
  title: "About Layouts360 — Making Tech Simple for Real Estate Teams",
  description:
    "Making tech simple for real estate teams. You run the business — we keep spreadsheets, chat chaos, and ops hazards out of the way. Based in Pune.",
  path: "/about",
  keywords: [...PAGE_KEYWORDS.about],
  ogTitle: "About Layouts360 | Making Tech Simple",
  ogDescription: COMPANY.vision,
})

export default function AboutPage() {
  return (
    <SeoPageShell variant="immersive">
      <AboutContent />
    </SeoPageShell>
  )
}
