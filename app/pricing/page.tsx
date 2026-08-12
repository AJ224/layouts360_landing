import { Metadata } from "next"
import PricingPageContent from "@/components/pricing/pricing-page-content"
import { PAGE_KEYWORDS } from "@/lib/seo-keywords"
import { absoluteUrl } from "@/lib/site-seo"

export const metadata: Metadata = {
  title: "Pricing for Real Estate Companies | Layouts360",
  description:
    "Layouts360 pricing for real estate companies: Visualize from ₹10,000 + ₹150/plot (one-time). Sales Platform from ₹2,000/month. Transparent packages for layout and plot sales—book a free demo.",
  keywords: [...PAGE_KEYWORDS.pricing],
  alternates: {
    canonical: absoluteUrl("/pricing"),
  },
}

export default function PricingPage() {
  return <PricingPageContent />
}
