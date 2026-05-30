import Hero from "@/components/marketing/hero"
import Footer from "@/components/marketing/footer"
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
  title: "Real Estate Software & Plot Management | Layouts360",
  description:
    "All-in-one real estate software for Indian developers—plot management, inventory, real estate CRM, accounting, and interactive digital layouts. From ₹2,000/month.",
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
