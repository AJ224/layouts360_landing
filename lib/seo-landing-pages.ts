import {
  createLandingMetadata,
  getLandingByPageKey,
  getLandingByPath,
  getAllLandings,
} from "@/lib/landings"

export type CoreLandingPageKey =
  | "plot"
  | "inventory"
  | "asset"
  | "accounting"
  | "commercial"
  | "client"
  | "crm"
  | "lead"
  | "bestCrm"

export type GeoLandingPageKey =
  | "channelPartner"
  | "booking"
  | "erp"
  | "salesAutomation"
  | "launchDay"
  | "onlineBooking"
  | "apartment"
  | "backOffice"
  | "propertyInventory"

export type SeoLandingPageKey = CoreLandingPageKey | GeoLandingPageKey

/** @deprecated Use createLandingMetadata from @/lib/landings */
export const createSeoLandingMetadata = createLandingMetadata

/** @deprecated Landing copy lives in content/landings/*.mdx */
export function getSeoLandingPage(key: SeoLandingPageKey) {
  const landing = getLandingByPageKey(key)
  if (!landing) {
    throw new Error(`Missing landing MDX for pageKey: ${key}`)
  }
  return landing
}

/** @deprecated Use getLandingByPath from @/lib/landings */
export function getSeoLandingPageByPath(pathname: string) {
  return getLandingByPath(pathname)
}

/** @deprecated Use getAllLandings from @/lib/landings */
export function getAllSeoLandingPages() {
  return getAllLandings()
}
