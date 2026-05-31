import Hero from "@/components/marketing/hero"
import Footer from "@/components/marketing/footer"
import { ProductSuiteSection } from "@/components/marketing/home/product-suite-section"
import { TrustStrip } from "@/components/marketing/home/trust-strip"
import { PRIMARY_TAGLINE } from "@/lib/brand"
import {
  SoundFamiliarSection,
  PlotManagementSoftwareSection,
  OneSystemSection,
  RealLocationSection,
  HowItWorksSection,
  ManagementGridSection,
  MultipleLayoutsSection,
  ResponsiveShowcaseSection,
  CtaSectionNew
} from "@/components/marketing/landing-sections"

import { Metadata } from "next"
import { PAGE_KEYWORDS } from "@/lib/seo-keywords"
import { SITE_URL, absoluteUrl } from "@/lib/site-seo"

export const metadata: Metadata = {
  title: "Real Estate Plot & Inventory Management Software | Layouts360",
  description: `${PRIMARY_TAGLINE} From ₹2,000/month.`,
  keywords: [...PAGE_KEYWORDS.home],
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    title: "Real Estate Software for Layout Developers | Layouts360",
    description:
      "Plot management software with live inventory, CRM, payment tracking, and satellite layout maps.",
    url: SITE_URL,
  },
}

export default function Page() {
  return (
    <main className="bg-white min-h-screen">
      <Hero />
      <TrustStrip />
      <ProductSuiteSection />
      <SoundFamiliarSection />
      <PlotManagementSoftwareSection />
      <OneSystemSection />
      <RealLocationSection />
      <HowItWorksSection />
      <ManagementGridSection />
      <MultipleLayoutsSection />
      <ResponsiveShowcaseSection />
      <CtaSectionNew />
      <Footer />
    </main>
  )
}
