import { Metadata } from "next"
import PricingPageContent from "@/components/pricing/pricing-page-content"

export const metadata: Metadata = {
  title: "Pricing | Real Estate ERP & Digital Layout Software",
  description: "Transparent pricing for your Real Estate Business. Start with our Sales Starter plan or scale with the Growth Suite. Profitable from your first booking.",
}

export default function PricingPage() {
  return <PricingPageContent />
}
