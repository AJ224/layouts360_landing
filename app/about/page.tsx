import type { Metadata } from "next"
import { AboutContent } from "@/components/marketing/about-content"
import { SeoPageShell } from "@/components/marketing/seo-landing"
import { PRIMARY_TAGLINE } from "@/lib/brand"
import { PAGE_KEYWORDS } from "@/lib/seo-keywords"
import { absoluteUrl } from "@/lib/site-seo"

export const metadata: Metadata = {
  title: "About Layouts360 | Real Estate Software Company India",
  description: `${PRIMARY_TAGLINE} Learn about our team, focus, and contact details in Pune.`,
  keywords: [...PAGE_KEYWORDS.about],
  alternates: { canonical: absoluteUrl("/about") },
  openGraph: {
    title: "About Layouts360",
    description: PRIMARY_TAGLINE,
    type: "website",
    url: absoluteUrl("/about"),
  },
}

export default function AboutPage() {
  return (
    <SeoPageShell>
      <AboutContent />
    </SeoPageShell>
  )
}
