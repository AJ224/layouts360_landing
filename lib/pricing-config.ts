/**
 * Pricing Configuration
 *
 * Map → Desk → Custom package structure.
 * Public site shows starting prices; beautification & migration quoted on request.
 */

export type PackageId = "visual" | "sales-platform" | "enterprise"

export type PricingPackage = {
  id: PackageId
  stage: "Map" | "Desk" | "Custom"
  name: string
  tagline: string
  pricePrimary: string
  priceSecondary: string
  priceNote: string
  description: string
  features: string[]
  ctaLabel: string
  recommended: boolean
  theme: "light" | "dark" | "accent"
  audience: string
}

export const pricingConfig = {
  journey: [
    {
      stage: "Map",
      label: "Just the map",
      detail: "Live layout. Colors. A link you can send.",
    },
    {
      stage: "Desk",
      label: "Map and the desk",
      detail: "Freeze, book, collect, brokers, CRM.",
    },
    {
      stage: "Custom",
      label: "More than one project",
      detail: "Same software, quoted for how you run.",
    },
  ] as const,

  trustLine: "Starting prices · Demo on your layout",

  packages: [
    {
      id: "visual",
      stage: "Map",
      name: "Layouts",
      tagline: "Live layout. Inventory. A link.",
      audience: "If you mainly need a map the site office can open on a phone",
      pricePrimary: "₹10,000",
      priceSecondary: "+ ₹150 / plot",
      priceNote: "One-time. No monthly fee.",
      description:
        "Your plan on a live map. Staff tap a plot instead of opening Excel. No CRM, payments, or booking.",
      features: [
        "Color-coded: available, frozen, booked, sold",
        "Pan, zoom, tap a plot",
        "CAD, SVG, or cut on the keymap",
        "Satellite overlay on Google Maps",
        "Public link for buyer enquiries",
        "Photos, video, nearby places",
        "Labels you set: area, facing, rate, survey",
        "Group neighbouring plots as one sale",
      ],
      ctaLabel: "Book a demo",
      recommended: false,
      theme: "light",
    },
    {
      id: "sales-platform",
      stage: "Desk",
      name: "Layouts360",
      tagline: "Sell on the same map.",
      audience: "If agents are taking tokens and bookings",
      pricePrimary: "₹2,000",
      priceSecondary: "/ month + ₹150 / plot mapping",
      priceNote: "The usual choice once bookings start.",
      description:
        "The Layouts map, plus freeze, booking, CRM, collections, brokers, and roles.",
      features: [
        "Everything in Layouts",
        "Freeze, book, register, sold",
        "Multi-plot and joint buyers",
        "CRM, site visits, follow-ups, My Day",
        "Facebook and Instagram leads",
        "Cash, UPI, cheque, loan — dues tracked",
        "Ledger: owner, developer, money partner",
        "Broker portal on the same map",
        "Roles and GPS attendance",
      ],
      ctaLabel: "Book a demo",
      recommended: true,
      theme: "dark",
    },
    {
      id: "enterprise",
      stage: "Custom",
      name: "Layouts360+",
      tagline: "Several layouts. Built around you.",
      audience: "If you run more than one layout, or need something custom",
      pricePrimary: "Custom",
      priceSecondary: "Quoted for your projects",
      priceNote: "Priced after we see the work.",
      description:
        "Layouts360 across multiple projects, with workflow or integrations if you need them.",
      features: [
        "Everything in Layouts360",
        "Multiple projects, one account",
        "Custom workflow or integrations",
        "Setup with our team",
      ],
      ctaLabel: "Talk to us",
      recommended: false,
      theme: "light",
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
    baseSetupCost: 10000,
    baseIncludedPlots: 150,
    basePlotBreakdown: "100 base + 50 bonus plots free",
    additionalPlotCost: 150,
    perPlotCost: 150,
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
} as const

export type SubscriptionPeriod = 1 | 6 | 12

export function calculateDiscount(price: number, period: SubscriptionPeriod): number {
  const discountPercent = pricingConfig.discounts[period]
  return price * (1 - discountPercent / 100)
}

export function calculatePlotCost(plotCount: number): number {
  const { baseSetupCost, baseIncludedPlots, additionalPlotCost } = pricingConfig.plotPricing

  if (plotCount <= baseIncludedPlots) {
    return baseSetupCost
  }

  const additionalPlots = plotCount - baseIncludedPlots
  return baseSetupCost + additionalPlots * additionalPlotCost
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
