import Hero from "@/components/marketing/hero"
import Footer from "@/components/marketing/footer"
import {
  SoundFamiliarSection,
  OneSystemSection,
  RealLocationSection,
  HowItWorksSection,
  ManagementGridSection,
  MultipleLayoutsSection,
  ResponsiveShowcaseSection,
  CtaSectionNew
} from "@/components/marketing/landing-sections"

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Real Estate ERP & Digital Layout Software | Layouts360",
  description: "The complete Real Estate Operating System. Combine Digital Layouts, CRM, and Inventory Management in one must-have tool for builders and developers.",
}

export default function Page() {
  return (
    <main className="bg-white min-h-screen">
      <Hero />
      <SoundFamiliarSection />
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
