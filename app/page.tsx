import Hero from "@/components/marketing/hero"
import Footer from "@/components/marketing/footer"
import { FeatureCardsSection } from "@/components/marketing/home/feature-cards-section"
import { ConnectedPlatformSection } from "@/components/marketing/home/connected-platform-section"
import { ProductShowcaseSection } from "@/components/marketing/home/product-showcase-section"
import { BuiltForSection } from "@/components/marketing/home/built-for-section"
import { PlatformInventorySection } from "@/components/marketing/home/platform-inventory-section"
import { HomeFaqSection } from "@/components/marketing/home/home-faq-section"
import { ProofSection } from "@/components/marketing/home/proof-section"
import { StatsSection } from "@/components/marketing/home/stats-section"
import { StopDoubleBookingsSection } from "@/components/marketing/home/stop-double-bookings-section"
import { ChannelPartnersSection } from "@/components/marketing/home/channel-partners-section"
import { HowItWorksSection, CtaSectionNew } from "@/components/marketing/landing-sections"
import { LocaleHtmlLang } from "@/components/marketing/locale-html-lang"
import { getRequestLocale } from "@/lib/i18n/locale-server"
import { getHomeContent } from "@/lib/i18n/home-content"

import { Metadata } from "next"
import { PAGE_KEYWORDS } from "@/lib/seo-keywords"
import { buildPageMetadata } from "@/lib/page-metadata"

export const metadata: Metadata = buildPageMetadata({
  title: "Layouts360 | Real Estate Software for Plot, Inventory & CRM",
  description:
    "Real estate software for Indian layout developers—plot management, live inventory, CRM, and booking in one platform. Replace Excel and WhatsApp double bookings.",
  path: "/",
  keywords: [...PAGE_KEYWORDS.home],
  titleAbsolute: true,
  ogTitle: "Layouts360 | Real Estate Software for Plot Developers",
  ogDescription:
    "Plot management, inventory, and real estate CRM with live digital layouts. Built for Indian developers—not generic PropTech.",
})

export default function Page() {
  const locale = getRequestLocale()
  const content = getHomeContent(locale)

  return (
    <main className="min-h-screen overflow-x-clip bg-ground">
      <LocaleHtmlLang locale={locale} />
      <Hero content={content.hero} locale={locale} />
      <StatsSection content={content.stats} />
      <ConnectedPlatformSection content={content.groups} />
      <ProductShowcaseSection content={content.showcase} />
      <PlatformInventorySection content={content.platform} />
      <StopDoubleBookingsSection content={content.doubleBookings} />
      <HowItWorksSection content={content.howItWorks} />
      <ChannelPartnersSection content={content.channelPartners} />
      <FeatureCardsSection content={content.features} />
      <BuiltForSection content={content.builtFor} />
      <ProofSection content={content.proof} />
      <HomeFaqSection content={content.faq} />
      <CtaSectionNew content={content.cta} />
      <Footer />
    </main>
  )
}
