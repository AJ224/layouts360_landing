import { SeoMdxLanding } from "@/components/marketing/seo-landing/seo-mdx-landing"
import { createLandingMetadata } from "@/lib/landings"

export const metadata = createLandingMetadata("affordableCrm")

export default function Page() {
  return <SeoMdxLanding pageKey="affordableCrm" />
}
