import type { Metadata } from "next"
import { NOINDEX_FOLLOW_ROBOTS } from "@/lib/indexing-policy"

/** Hub page `/features` is indexed; detail pages are for navigation only. */
export const metadata: Metadata = {
  robots: NOINDEX_FOLLOW_ROBOTS,
}

export default function FeatureSlugLayout({ children }: { children: React.ReactNode }) {
  return children
}
