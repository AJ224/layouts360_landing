import { SeoMdxLanding } from "@/components/marketing/seo-landing/seo-mdx-landing"
import { createLandingMetadata } from "@/lib/landings"

export const metadata = createLandingMetadata("management360")

export default function Page() {
  return <SeoMdxLanding pageKey="management360" />
}
