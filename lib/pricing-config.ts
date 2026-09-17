/**
 * Pricing Configuration
 *
 * Map → Desk → Custom package structure.
 * Public site shows starting prices; beautification & migration quoted on request.
 */

export type PackageId = "visual" | "sales-platform" | "enterprise"

export type PriceRow = {
  label: string
  value: string
  detail?: string
}

export type PricingFeature = {
  title: string
  description: string
}

export type PricingPackage = {
  id: PackageId
  name: string
  tagline: string
  priceRows: PriceRow[]
  priceExample: string
  features: PricingFeature[]
  ctaLabel: string
  recommended: boolean
  /** @deprecated Use priceRows — kept for demo form label */
  pricePrimary: string
}

export const pricingConfig = {
  trustLine: "Demo on your layout",

  examplePlotCount: 120,

  packages: [
    {
      id: "visual",
      name: "Map only",
      tagline: "One live map for your whole inventory.",
      priceRows: [
        { label: "Mapping", value: "One-time" },
        { label: "Software", value: "₹0 / month" },
      ],
      pricePrimary: "₹150/plot · ₹300/flat",
      priceExample: "",
      features: [
        {
          title: "Interactive map for plots and flats",
          description: "Pan, zoom, and tap a unit on your real layout.",
        },
        {
          title: "Live available / hold / booked / sold",
          description: "Everyone sees the same status. No Excel chase.",
        },
        {
          title: "Shareable customer link",
          description: "Buyers enquire from the unit in the browser.",
        },
        {
          title: "Digitized from CAD, PDF, or SVG",
          description: "Area, facing, rate, survey, and your labels.",
        },
        {
          title: "Photos, video, nearby places",
          description: "Useful on a site visit, not only in the office.",
        },
      ],
      ctaLabel: "Book a demo",
      recommended: false,
    },
    {
      id: "sales-platform",
      name: "Layouts360",
      tagline: "Sell from that map: freeze, book, follow up, collect.",
      priceRows: [
        { label: "Mapping", value: "Same rates" },
        { label: "Software", value: "₹2,000 / month" },
      ],
      pricePrimary: "₹2,000/mo",
      priceExample: "",
      features: [
        {
          title: "Everything in Map only",
          description: "Same live inventory. No second system.",
        },
        {
          title: "Freeze and book without double booking",
          description: "Status updates for every agent in real time.",
        },
        {
          title: "CRM on each plot or flat",
          description: "Customer, visits, follow-ups, and notes on the unit.",
        },
        {
          title: "Payments and installment dues",
          description: "Cash, UPI, cheque, loan tracked against the deal.",
        },
        {
          title: "Team and broker access",
          description: "One inventory. Roles for staff and partners.",
        },
        {
          title: "Facebook and Instagram leads",
          description: "Enquiries land in the same sales flow.",
        },
      ],
      ctaLabel: "Book a demo",
      recommended: true,
    },
    {
      id: "enterprise",
      name: "Layouts360+",
      tagline: "Several projects, or a custom setup for your process.",
      priceRows: [{ label: "Pricing", value: "Quoted" }],
      pricePrimary: "Custom",
      priceExample: "Tell us your projects. We quote after a call.",
      features: [
        {
          title: "Everything in Layouts360",
          description: "Full map, booking, CRM, and collections across your portfolio.",
        },
        {
          title: "Multiple projects, one account",
          description: "Run several layouts or towers without switching tools or reconciling files.",
        },
        {
          title: "Custom workflow",
          description: "Approvals, integrations, or process tweaks shaped with our team.",
        },
      ],
      ctaLabel: "Talk to us",
      recommended: false,
    },
  ] satisfies PricingPackage[],

  addons: [
    {
      id: "beautification",
      name: "Beautification",
      description:
        "Redraw branding and landscaping so the map is fit to show a buyer.",
    },
    {
      id: "migration",
      name: "Migration",
      description:
        "Bring plots and customers across from Excel or another CRM.",
    },
  ],

  // Legacy helpers (pricing calculator / older callers)
  plans: [
    {
      id: "sales-starter",
      name: "Sales Platform",
      subtitle: undefined,
      monthlyPrice: 2000,
      annualPrice: 21600,
      annualOriginalPrice: 24000,
      saveLabel: "Save 10%",
      description: "Good for: Selling fast with clear maps",
      features: [
        "Manage all your plots",
        "Stop Double Bookings",
        "Show Live Maps to Clients",
        "Easy to use on phone & laptop",
        "Unlimited Staff Logins",
      ],
      recommended: true,
      theme: "dark",
    },
    {
      id: "growth-suite",
      name: "Enterprise",
      subtitle: "(Complete System)",
      monthlyPrice: 4000,
      annualPrice: 43200,
      annualOriginalPrice: 48000,
      saveLabel: "Save 10%",
      description: "Good for: Managing the whole business",
      features: [
        "Everything in Sales Platform, plus:",
        "Multi-project & roles",
        "CP management",
        "Expense / ledger",
        "Advanced reports",
        "Priority Support",
      ],
      recommended: false,
      theme: "light",
    },
  ],

  plotPricing: {
    perPlotCost: 150,
    perFlatCost: 300,
  },

  platformFee: {
    monthly: 2000,
  },
  domainAddon: {
    monthly: 2000,
  },
  discounts: {
    1: 0,
    6: 5,
    12: 10,
  },

  /** Usage-based pricing page */
  inventoryPresets: [50, 100, 500, 1000, 5000] as const,
  enterpriseInventoryThreshold: 5000,
  scenarios: [
    { id: "small", label: "Small project", units: 100, blurb: "A single layout or tower wing" },
    { id: "growing", label: "Growing project", units: 500, blurb: "Multi-phase or mid-size apartment stock", recommended: true },
    { id: "large", label: "Large portfolio", units: 5000, blurb: "Multiple projects or a large inventory book" },
  ] as const,
  includedCapabilities: [
    { group: "Inventory", items: ["Live interactive maps", "Plots and apartment units", "Availability status in real time", "Shareable customer links"] },
    { group: "Sales", items: ["Freeze and booking", "CRM on each unit", "Site visits and follow-ups", "Channel partner access"] },
    { group: "Money", items: ["Payment tracking", "Installment dues", "Owner and partner ledger", "Reports and dashboards"] },
    { group: "Team", items: ["Roles and permissions", "Multi-user access", "Lead capture from ads", "Support and product updates"] },
  ] as const,
} as const

export type InventoryUnitType = "plot" | "flat"
export type BillingPeriod = "monthly" | "annual"

export type SubscriptionPeriod = 1 | 6 | 12

export function calculateDiscount(price: number, period: SubscriptionPeriod): number {
  const discountPercent = pricingConfig.discounts[period]
  return price * (1 - discountPercent / 100)
}

export function unitActivationRate(unitType: InventoryUnitType): number {
  return unitType === "flat"
    ? pricingConfig.plotPricing.perFlatCost
    : pricingConfig.plotPricing.perPlotCost
}

export function calculateInventoryActivation(unitCount: number, unitType: InventoryUnitType): number {
  return unitCount * unitActivationRate(unitType)
}

export function calculatePlatformMonthly(billing: BillingPeriod = "monthly"): number {
  if (billing === "annual") {
    return calculateDiscount(pricingConfig.platformFee.monthly, 12)
  }
  return pricingConfig.platformFee.monthly
}

export function calculatePlatformAnnualTotal(): number {
  return calculatePlatformMonthly("annual") * 12
}

export function formatInr(amount: number): string {
  return `₹${Math.round(amount).toLocaleString("en-IN")}`
}

export function estimateUsagePricing(
  unitCount: number,
  unitType: InventoryUnitType,
  billing: BillingPeriod = "monthly"
) {
  const activation = calculateInventoryActivation(unitCount, unitType)
  const platformMonthly = calculatePlatformMonthly(billing)
  const platformBilled = billing === "annual" ? calculatePlatformAnnualTotal() : platformMonthly
  const isEnterpriseScale = unitCount >= pricingConfig.enterpriseInventoryThreshold

  return {
    unitCount,
    unitType,
    billing,
    ratePerUnit: unitActivationRate(unitType),
    activationOneTime: activation,
    platformMonthly,
    platformBilled,
    isEnterpriseScale,
  }
}

export function calculatePlotCost(plotCount: number): number {
  return plotCount * pricingConfig.plotPricing.perPlotCost
}

export function calculateFlatCost(flatCount: number): number {
  return flatCount * pricingConfig.plotPricing.perFlatCost
}

/** One-time Layouts (map-only) total for a plot count */
export function formatLayoutsOneTime(plotCount: number): string {
  return `₹${calculatePlotCost(plotCount).toLocaleString("en-IN")} once`
}

/** One-time Layouts (map-only) total for a flat count */
export function formatLayoutsFlatsOneTime(flatCount: number): string {
  return `₹${calculateFlatCost(flatCount).toLocaleString("en-IN")} once`
}

/** Layouts360: mapping (per plot) + monthly desk fee */
export function formatLayouts360Example(plotCount: number): string {
  const mapping = plotCount * pricingConfig.plotPricing.perPlotCost
  const monthly = pricingConfig.platformFee.monthly
  return `₹${mapping.toLocaleString("en-IN")} mapping + ₹${monthly.toLocaleString("en-IN")}/mo`
}

/** Layouts360: mapping (per flat) + monthly desk fee */
export function formatLayouts360FlatsExample(flatCount: number): string {
  const mapping = flatCount * pricingConfig.plotPricing.perFlatCost
  const monthly = pricingConfig.platformFee.monthly
  return `₹${mapping.toLocaleString("en-IN")} mapping + ₹${monthly.toLocaleString("en-IN")}/mo`
}

export function getPackagePriceExample(pkg: PricingPackage): string {
  return pkg.priceExample
}

export function calculateSubscriptionCost(
  period: SubscriptionPeriod,
  includeDomain: boolean
): number {
  const basePrice = pricingConfig.platformFee.monthly
  const upgradePrice = pricingConfig.domainAddon.monthly

  const platformFee = calculateDiscount(basePrice, period)
  const additionalFee = includeDomain ? calculateDiscount(upgradePrice, period) : 0

  return platformFee * period + additionalFee * period
}
