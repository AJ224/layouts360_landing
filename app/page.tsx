import Hero from "@/components/marketing/hero"
import Footer from "@/components/marketing/footer"
import { TrustStrip } from "@/components/marketing/home/trust-strip"
import { CoreCapabilitiesSection } from "@/components/marketing/home/core-capabilities-section"
import { WhyToolsFailSection } from "@/components/marketing/home/why-tools-fail-section"
import { WhoShouldUseSection } from "@/components/marketing/home/who-should-use-section"
import { CustomerWorkflowSection } from "@/components/marketing/home/customer-workflow-section"
import { HomeFaqSection } from "@/components/marketing/home/home-faq-section"
import { ProofSection } from "@/components/marketing/home/proof-section"
import {
  SoundFamiliarSection,
  OneSystemSection,
  RealLocationSection,
  HowItWorksSection,
  CtaSectionNew,
} from "@/components/marketing/landing-sections"

import { Metadata } from "next"
import { PAGE_KEYWORDS } from "@/lib/seo-keywords"
import { SITE_URL, absoluteUrl } from "@/lib/site-seo"

export const metadata: Metadata = {
  title: "Layouts360 | Live Plot Maps, Inventory & CRM for Real Estate Companies",
  description:
    "Layouts360 is the sales platform for real estate companies—live layout maps, inventory, booking, CRM, and channel partner tools. Replace Excel and WhatsApp. Sales Platform from ₹2,000/month.",
  keywords: [...PAGE_KEYWORDS.home],
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    title: "Layouts360 | Live Plot Maps, Inventory & CRM for Real Estate Companies",
    description:
      "Live layout maps, plot inventory, CRM, booking, and payments for real estate companies selling layouts and townships—not generic PropTech.",
    url: SITE_URL,
  },
}

export default function Page() {
  return (
    <main className="bg-white min-h-screen">
      {/* 1. Promise */}
      <Hero />
      <TrustStrip />

      {/* 2. Pain */}
      <SoundFamiliarSection />

      {/* 3. Why status quo fails */}
      <WhyToolsFailSection />

      {/* 4. How Layouts360 works — setup, then sales journey */}
      <HowItWorksSection />
      <CustomerWorkflowSection />

      {/* 5. Product proof — one system + real maps */}
      <OneSystemSection />
      <RealLocationSection />

      {/* 6. Capabilities (highlights → full features page) */}
      <CoreCapabilitiesSection />

      {/* 7. Who it's for */}
      <WhoShouldUseSection />

      {/* 8. Proof → FAQ → CTA */}
      <ProofSection />
      <HomeFaqSection />
      <CtaSectionNew />
      <Footer />
    </main>
  )
}
