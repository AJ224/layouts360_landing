import { Metadata } from "next"
import PricingPageContent from "@/components/pricing/pricing-page-content"
import { PAGE_KEYWORDS } from "@/lib/seo-keywords"
import { absoluteUrl } from "@/lib/site-seo"

export const metadata: Metadata = {
  title: "Pricing | Layouts360",
  description:
    "Layouts is ₹10,000 + ₹150/plot, one-time — live map and inventory. Layouts360 is ₹2,000/month for freeze, booking, CRM, and payments on that map. Demo on your project.",
  keywords: [...PAGE_KEYWORDS.pricing],
  alternates: {
    canonical: absoluteUrl("/pricing"),
  },
}

export default function PricingPage() {
  return <PricingPageContent />
}
