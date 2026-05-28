import { Metadata } from "next"
import PricingPageContent from "@/components/pricing/pricing-page-content"
import { PAGE_KEYWORDS } from "@/lib/seo-keywords"

export const metadata: Metadata = {
  title: "Pricing | Real Estate Software for Developers | Layouts360",
  description:
    "Transparent real estate software pricing in India—from ₹2,000/month. Plot management, CRM, and inventory plans for layout developers.",
  keywords: [...PAGE_KEYWORDS.pricing],
  alternates: {
    canonical: "https://layouts360.com/pricing",
  },
}

export default function PricingPage() {
  return <PricingPageContent />
}
