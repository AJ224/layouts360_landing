import { SeoProductLanding } from "@/components/marketing/seo-landing/seo-product-landing"
import { createSeoLandingMetadata } from "@/lib/seo-landing-pages"

export const metadata = createSeoLandingMetadata("plot")

export default function RealEstatePlotManagementSoftwarePage() {
  return <SeoProductLanding pageKey="plot" />
}
