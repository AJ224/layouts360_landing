import { Metadata } from "next"
import PricingPageContent from "@/components/pricing/pricing-page-content"
import { PAGE_KEYWORDS } from "@/lib/seo-keywords"
import { buildPageMetadata } from "@/lib/page-metadata"

export const metadata: Metadata = buildPageMetadata({
  title: "Pricing",
  description:
    "Layouts: ₹10,000 + ₹150/plot, one-time — live map and inventory. Layouts360: ₹2,000/month for freeze, booking, CRM, and collections on that map.",
  path: "/pricing",
  keywords: [...PAGE_KEYWORDS.pricing],
})

export default function PricingPage() {
  return <PricingPageContent />
}
