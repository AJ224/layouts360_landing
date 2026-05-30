import { SeoProductLanding } from "@/components/marketing/seo-landing/seo-product-landing"
import { createSeoLandingMetadata } from "@/lib/seo-landing-pages"

export const metadata = createSeoLandingMetadata("crm")

export default function RealEstateCrmSoftwarePage() {
  return <SeoProductLanding pageKey="crm" />
}
