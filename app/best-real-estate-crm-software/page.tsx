import { SeoProductLanding } from "@/components/marketing/seo-landing/seo-product-landing"
import { createSeoLandingMetadata } from "@/lib/seo-landing-pages"

export const metadata = createSeoLandingMetadata("bestCrm")

export default function BestRealEstateCrmSoftwarePage() {
  return <SeoProductLanding pageKey="bestCrm" />
}
