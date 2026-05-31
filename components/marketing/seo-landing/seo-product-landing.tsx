import { SeoMdxLanding } from "./seo-mdx-landing"
import type { SeoLandingPageKey } from "@/lib/seo-landing-pages"

interface SeoProductLandingProps {
  pageKey: SeoLandingPageKey
}

/** @deprecated Use SeoMdxLanding — copy lives in content/landings/*.mdx */
export function SeoProductLanding({ pageKey }: SeoProductLandingProps) {
  return <SeoMdxLanding pageKey={pageKey} />
}
