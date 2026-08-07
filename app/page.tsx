import Hero from "@/components/marketing/hero"
import Footer from "@/components/marketing/footer"
import { TrustStrip } from "@/components/marketing/home/trust-strip"
import { CoreCapabilitiesSection } from "@/components/marketing/home/core-capabilities-section"
import { WhyToolsFailSection } from "@/components/marketing/home/why-tools-fail-section"
import { IndustriesServedSection } from "@/components/marketing/home/industries-served-section"
import { WhoShouldUseSection } from "@/components/marketing/home/who-should-use-section"
import { CustomerWorkflowSection } from "@/components/marketing/home/customer-workflow-section"
import { HomeFaqSection } from "@/components/marketing/home/home-faq-section"
import { ProofSection } from "@/components/marketing/home/proof-section"
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
  title: "Plot Management Software for Real Estate Developers | Layouts360",
  description:
    "Layouts360 is real estate plot management software—interactive layout maps, plot inventory, booking, CRM, and payment tracking for developers, builders, and townships. From ₹2,000/month.",
  keywords: [...PAGE_KEYWORDS.home],
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    title: "Plot Management Software for Real Estate Developers | Layouts360",
    description:
      "Interactive layout maps, live plot inventory, CRM, booking, and payment tracking for real estate developers, builders, and township projects.",
    url: SITE_URL,
  },
}

export default function Page() {
  return (
    <main className="bg-white min-h-screen">
      <Hero />
      <TrustStrip />

      {/* Problems developers face */}
      <SoundFamiliarSection />

      {/* Why Excel, WhatsApp, and generic CRM fail */}
      <WhyToolsFailSection />

      {/* How Layouts360 works */}
      <HowItWorksSection />

      {/* Features — full capability list */}
      <CoreCapabilitiesSection />
      <PlotManagementSoftwareSection />

      {/* Benefits / proof */}
      <OneSystemSection />
      <ManagementGridSection />
      <RealLocationSection />
      <MultipleLayoutsSection />
      <ResponsiveShowcaseSection />

      {/* Industries served & who should use it */}
      <IndustriesServedSection />
      <WhoShouldUseSection />

      {/* Customer workflow */}
      <CustomerWorkflowSection />

      {/* FAQ */}
      <HomeFaqSection />

      {/* Testimonials / proof */}
      <ProofSection />

      {/* Call to action */}
      <CtaSectionNew />
      <Footer />
    </main>
  )
}
