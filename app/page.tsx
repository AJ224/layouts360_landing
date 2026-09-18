import Hero from "@/components/marketing/hero"
import Footer from "@/components/marketing/footer"
import { FeatureCardsSection } from "@/components/marketing/home/feature-cards-section"
import { WhyToolsFailSection } from "@/components/marketing/home/why-tools-fail-section"
import { WhoShouldUseSection } from "@/components/marketing/home/who-should-use-section"
import { PlatformInventorySection } from "@/components/marketing/home/platform-inventory-section"
import { DigitizationPricingSection } from "@/components/marketing/home/digitization-pricing-section"
import { HomeFaqSection } from "@/components/marketing/home/home-faq-section"
import { ProofSection } from "@/components/marketing/home/proof-section"
import { StopDoubleBookingsSection } from "@/components/marketing/home/stop-double-bookings-section"
import { ChannelPartnersSection } from "@/components/marketing/home/channel-partners-section"
import {
  SoundFamiliarSection,
  RealLocationSection,
  HowItWorksSection,
  CtaSectionNew,
} from "@/components/marketing/landing-sections"
import { LocaleHtmlLang } from "@/components/marketing/locale-html-lang"
import { getRequestLocale } from "@/lib/i18n/locale-server"
import { getHomeContent } from "@/lib/i18n/home-content"

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
  const locale = getRequestLocale()
  const content = getHomeContent(locale)

  return (
    <main className="bg-white min-h-screen">
      <LocaleHtmlLang locale={locale} />
      <Hero content={content.hero} locale={locale} />
      <SoundFamiliarSection content={content.problem} />
      <RealLocationSection content={content.showUnit} />
      <PlatformInventorySection content={content.platform} />
      <StopDoubleBookingsSection content={content.doubleBookings} />
      <HowItWorksSection content={content.howItWorks} />
      <ChannelPartnersSection content={content.channelPartners} />
      <WhyToolsFailSection content={content.whyToolsFail} />
      <FeatureCardsSection content={content.features} />
      <WhoShouldUseSection content={content.inventoryTypes} />
      <DigitizationPricingSection content={content.digitization} />
      <ProofSection content={content.proof} />
      <HomeFaqSection content={content.faq} />
      <CtaSectionNew content={content.cta} />
      <Footer />
    </main>
  )
}
