import { SeoProductLanding } from "@/components/marketing/seo-landing/seo-product-landing"
import { createSeoLandingMetadata } from "@/lib/seo-landing-pages"

export const metadata = createSeoLandingMetadata("lead")

export default function RealEstateLeadManagementSoftwarePage() {
  return <SeoProductLanding pageKey="lead" />
}
