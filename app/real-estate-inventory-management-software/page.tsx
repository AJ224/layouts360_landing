import { SeoProductLanding } from "@/components/marketing/seo-landing/seo-product-landing"
import { createSeoLandingMetadata } from "@/lib/seo-landing-pages"

export const metadata = createSeoLandingMetadata("inventory")

export default function RealEstateInventoryManagementSoftwarePage() {
  return <SeoProductLanding pageKey="inventory" />
}
