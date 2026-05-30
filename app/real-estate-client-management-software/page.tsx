import { SeoProductLanding } from "@/components/marketing/seo-landing/seo-product-landing"
import { createSeoLandingMetadata } from "@/lib/seo-landing-pages"

export const metadata = createSeoLandingMetadata("client")

export default function RealEstateClientManagementSoftwarePage() {
  return <SeoProductLanding pageKey="client" />
}
