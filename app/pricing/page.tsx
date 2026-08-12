import { Metadata } from "next"
import PricingPageContent from "@/components/pricing/pricing-page-content"
import { PAGE_KEYWORDS } from "@/lib/seo-keywords"
import { absoluteUrl } from "@/lib/site-seo"

export const metadata: Metadata = {
  title: "Pricing | Visualize → Sell → Manage | Layouts360",
  description:
    "Layouts360 Visualize from ₹10,000 + ₹150/plot (one-time). Sales Platform from ₹2,000/month. Transparent packages for layout developers—book a free demo with your project map.",
  keywords: [...PAGE_KEYWORDS.pricing],
  alternates: {
    canonical: absoluteUrl("/pricing"),
  },
}

export default function PricingPage() {
  return <PricingPageContent />
}
