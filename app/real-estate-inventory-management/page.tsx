import { SeoMdxLanding } from "@/components/marketing/seo-landing/seo-mdx-landing"
import { createLandingMetadata } from "@/lib/landings"

export const metadata = createLandingMetadata("inventoryManagement")

export default function Page() {
  return <SeoMdxLanding pageKey="inventoryManagement" />
}
