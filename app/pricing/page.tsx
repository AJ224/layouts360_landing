import { Metadata } from "next"
import PricingPageContent from "@/components/pricing/pricing-page-content"
import { PAGE_KEYWORDS } from "@/lib/seo-keywords"
import { buildPageMetadata } from "@/lib/page-metadata"

export const metadata: Metadata = buildPageMetadata({
  title: "Pricing",
  description:
    "Pricing that grows with your inventory. Platform from ₹2,000/month. Activate plots at ₹150 or flats at ₹300 one-time. No rigid packages.",
  path: "/pricing",
  keywords: [...PAGE_KEYWORDS.pricing],
})

export default function PricingPage() {
  return <PricingPageContent />
}
