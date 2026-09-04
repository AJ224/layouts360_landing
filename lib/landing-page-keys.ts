import type { SeoLandingPageKey } from "@/lib/seo-landing-pages"

/** Canonical path per SEO landing pageKey */
export const LANDING_PAGE_PATHS: Record<SeoLandingPageKey, string> = {
  plot: "/real-estate-plot-management-software",
  inventory: "/real-estate-inventory-management-software",
  inventoryManagement: "/real-estate-inventory-management",
  asset: "/real-estate-asset-management-software",
  accounting: "/real-estate-accounting-software",
  commercial: "/commercial-real-estate-software",
  client: "/real-estate-client-management-software",
  crm: "/real-estate-crm-software",
  crmGuide: "/real-estate-crm",
  lead: "/real-estate-lead-management-software",
  bestCrm: "/best-real-estate-crm-software",
  affordableCrm: "/affordable-real-estate-crm",
  affordableCrmRealtors: "/affordable-crm-for-realtors",
  channelPartner: "/real-estate-channel-partner-management-software",
  booking: "/real-estate-booking-management-software",
  erp: "/real-estate-erp-software",
  salesAutomation: "/real-estate-sales-automation-software",
  launchDay: "/launch-day-plot-sales-software",
  onlineBooking: "/online-plot-booking-software",
  apartment: "/apartment-inventory-management-software",
  backOffice: "/real-estate-back-office-software",
  propertyInventory: "/property-inventory-management-platform",
  townshipManagement: "/township-management-software",
  layoutManagement: "/layout-management-software",
  digitalLayoutMaps: "/digital-layout-maps",
  siteVisitManagement: "/site-visit-management",
  management360: "/360-management-software",
}

export const ALL_LANDING_PAGE_KEYS = Object.keys(LANDING_PAGE_PATHS) as SeoLandingPageKey[]

export function landingSlugFromPath(path: string): string {
  return path.replace(/^\//, "")
}

export function landingSlugFromPageKey(key: SeoLandingPageKey): string {
  return landingSlugFromPath(LANDING_PAGE_PATHS[key])
}
