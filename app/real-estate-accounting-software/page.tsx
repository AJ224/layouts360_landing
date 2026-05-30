import { SeoProductLanding } from "@/components/marketing/seo-landing/seo-product-landing"
import { createSeoLandingMetadata } from "@/lib/seo-landing-pages"

export const metadata = createSeoLandingMetadata("accounting")

export default function RealEstateAccountingSoftwarePage() {
  return <SeoProductLanding pageKey="accounting" />
}
