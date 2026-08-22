import type { Metadata } from "next"
import { AboutContent } from "@/components/marketing/about-content"
import { SeoPageShell } from "@/components/marketing/seo-landing"
import { PRIMARY_TAGLINE } from "@/lib/brand"
import { PAGE_KEYWORDS } from "@/lib/seo-keywords"
import { buildPageMetadata } from "@/lib/page-metadata"

export const metadata: Metadata = buildPageMetadata({
  title: "About Layouts360",
  description: `${PRIMARY_TAGLINE} Learn about our team, focus, and contact details in Pune.`,
  path: "/about",
  keywords: [...PAGE_KEYWORDS.about],
  ogTitle: "About Layouts360",
  ogDescription: PRIMARY_TAGLINE,
})

export default function AboutPage() {
  return (
    <SeoPageShell>
      <AboutContent />
    </SeoPageShell>
  )
}
