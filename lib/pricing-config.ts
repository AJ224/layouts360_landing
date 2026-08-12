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

  trustLine: "For real estate companies · Transparent prices · Free demo on your layout",

  packages: [
    {
      id: "visual",
      stage: "Map",
      name: "Layouts",
      tagline: "The live map. Nothing else.",
      audience: "If you mainly need a map the site office can open on a phone",
      pricePrimary: "₹10,000",
      priceSecondary: "+ ₹150 per plot",
      priceNote: "One-time. No monthly fee.",
      description:
        "Your plan on a live map: colours for available, frozen, booked, sold. Staff tap a plot instead of opening Excel. No CRM, no payments, no booking flow.",
      features: [
        "Color-coded map: available, frozen, booked, sold",
        "Pan, zoom, tap a plot on site",
        "Upload CAD or SVG, or cut plots on the keymap",
        "Same plots on Google Maps (scale and rotate)",
        "Public link — buyers can enquire from the map",
        "Photos, YouTube, nearby schools, hospitals, roads",
        "You choose the labels: plot no, area, facing, rate, survey",
        "Club neighbouring plots into one sale",
      ],
      ctaLabel: "Book a demo",
      recommended: false,
      theme: "light",
    },
    {
      id: "sales-platform",
      stage: "Desk",
      name: "Layouts360",
      tagline: "The map, plus the desk that sells on it.",
      audience: "If agents are taking tokens and bookings",
      pricePrimary: "₹2,000/month",
      priceSecondary: "+ ₹150 per plot (mapping, one-time)",
      priceNote: "This is what most projects run.",
      description:
        "Same map as Layouts. On top of it: freeze, booking, CRM, money, brokers, and who on the team can do what.",
      features: [
        "Everything in Layouts",
        "Freeze a plot, book it, register, mark sold",
        "One booking for several plots or joint buyers",
        "Leads, site visits, follow-ups, and My Day on the map",
        "Facebook and Instagram leads come into CRM",
        "Cash, UPI, cheque, loan — receipts and what’s overdue",
        "Ledger split: land owner, developer, money partner",
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
      tagline: "Several projects. We set it up around you.",
      audience: "If you run more than one layout, or need something custom",
      pricePrimary: "Custom",
      priceSecondary: "Quoted for your projects",
      priceNote: "We’ll price it after we see the work.",
      description:
        "Layouts360 across multiple layouts, with extra workflow or integrations if you need them.",
      features: [
        "Everything in Layouts360",
        "More than one project in the same account",
        "Custom workflow or integrations if you need them",
        "We stay on the setup with you",
      ],
      ctaLabel: "Talk to us",
      recommended: false,
      theme: "accent",
    },
  ] satisfies PricingPackage[],

  addons: [
    {
      id: "beautification",
      name: "Make the map look finished",
      description:
        "If the CAD looks rough on a phone, we can redraw branding and landscaping so the map looks like something you’d show a buyer.",
    },
    {
      id: "migration",
      name: "Move your data in",
      description:
        "Coming from Excel or another CRM? We’ll bring plots and customers across so the team isn’t typing it all again.",
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
