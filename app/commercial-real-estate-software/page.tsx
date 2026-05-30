import { SeoProductLanding } from "@/components/marketing/seo-landing/seo-product-landing"
import { createSeoLandingMetadata } from "@/lib/seo-landing-pages"

export const metadata = createSeoLandingMetadata("commercial")

export default function CommercialRealEstateSoftwarePage() {
  return <SeoProductLanding pageKey="commercial" />
}
