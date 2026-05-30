import { SeoProductLanding } from "@/components/marketing/seo-landing/seo-product-landing"
import { createSeoLandingMetadata } from "@/lib/seo-landing-pages"

export const metadata = createSeoLandingMetadata("asset")

export default function RealEstateAssetManagementSoftwarePage() {
  return <SeoProductLanding pageKey="asset" />
}
