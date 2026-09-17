import Hero from "@/components/marketing/hero"
import Footer from "@/components/marketing/footer"
import { FeatureCardsSection } from "@/components/marketing/home/feature-cards-section"
import { WhyToolsFailSection } from "@/components/marketing/home/why-tools-fail-section"
import { WhoShouldUseSection } from "@/components/marketing/home/who-should-use-section"
import { CustomerWorkflowSection } from "@/components/marketing/home/customer-workflow-section"
import { PlatformInventorySection } from "@/components/marketing/home/platform-inventory-section"
import { DigitizationPricingSection } from "@/components/marketing/home/digitization-pricing-section"
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
import { buildPageMetadata } from "@/lib/page-metadata"

export const metadata: Metadata = buildPageMetadata({
  title: "Layouts360 | Live Inventory & Sales System for Plots, Flats & Apartments",
  description:
    "Turn your real-estate layout into a live sales system. Manage plots, flats, and apartment inventory: visualize, hold, book, and track from one platform.",
  path: "/",
  keywords: [...PAGE_KEYWORDS.home],
  titleAbsolute: true,
  ogTitle: "Layouts360 | Live Inventory & Sales System for Real Estate",
  ogDescription:
    "Interactive inventory for plots, flats, and apartments, plus CRM and sales workflow. Replace Excel and WhatsApp.",
})

export default function Page() {
  return (
    <main className="bg-white min-h-screen">
      <Hero />
      <SoundFamiliarSection />
      <PlatformInventorySection />
      <HowItWorksSection />
      <CustomerWorkflowSection />
      <WhyToolsFailSection />
      <OneSystemSection />
      <RealLocationSection />
      <FeatureCardsSection />
      <WhoShouldUseSection />
      <DigitizationPricingSection />
      <ProofSection />
      <HomeFaqSection />
      <CtaSectionNew />
      <Footer />
    </main>
  )
}
