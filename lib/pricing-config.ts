/**
 * Pricing Configuration
 *
 * Visualize → Sell → Manage package structure.
 * Public site shows starting prices; beautification & migration quoted on request.
 */

export type PackageId = "visual" | "sales-platform" | "enterprise"

export type PricingPackage = {
  id: PackageId
  stage: "Visualize" | "Sell" | "Manage"
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
      stage: "Visualize",
      label: "See the layout live",
      detail: "Buyers and brokers open the same map on site visits.",
    },
    {
      stage: "Sell",
      label: "Close without chaos",
      detail: "Freeze, book, collect money—one source of truth.",
    },
    {
      stage: "Manage",
      label: "Run the portfolio",
      detail: "Roles, partners, and reports across projects.",
    },
  ] as const,

  trustLine: "Transparent starting prices · Free demo on your layout",

  packages: [
    {
      id: "visual",
      stage: "Visualize",
      name: "Layouts",
      tagline: "Your layout, live on every phone",
      audience: "Best when you need a professional map first",
      pricePrimary: "₹10,000",
      priceSecondary: "+ ₹150 per plot",
      priceNote: "One-time for the project · not a monthly fee",
      description:
        "We map your existing plan into Layout360 so your team can show live availability on site visits—no WhatsApp photo of a printed chart.",
      features: [
        "Interactive layout map with satellite view",
        "Live GPS location and directions",
        "Search plot and filter by status",
        "Real-time inventory updates",
        "Gallery for images and videos",
        "Dynamic dimensions and unit options",
        "Custom plot labels and info panel",
        "Shareable one-link presentation",
        "No app download required",
        "We map and deploy your project for you",
      ],
      ctaLabel: "Book a free demo",
      recommended: false,
      theme: "light",
    },
    {
      id: "sales-platform",
      stage: "Sell",
      name: "Layouts360",
      tagline: "The map that sells with you",
      audience: "Recommended for teams actively booking plots",
      pricePrimary: "₹2,000/month",
      priceSecondary: "+ ₹150 per plot (one-time mapping)",
      priceNote: "Stop double bookings. Track every enquiry to payment.",
      description:
        "Everything in Layouts, plus the sales desk: enquiries, customer records, plot freeze, booking, payment tracking, and documents—on the same live map.",
      features: [
        "Everything in Layouts",
        "Capture enquiries from the live layout",
        "Freeze a plot so two agents can’t sell it",
        "Bookings, payments, and documents in one place",
        "Full sales workflow your team actually uses",
      ],
      ctaLabel: "Book a free demo",
      recommended: true,
      theme: "dark",
    },
    {
      id: "enterprise",
      stage: "Manage",
      name: "Layouts360+",
      tagline: "Built for multi-project developers",
      audience: "For portfolios, CPs, and custom operations",
      pricePrimary: "Custom",
      priceSecondary: "Scoped to your projects & team",
      priceNote: "We’ll propose a clear quote after a short discovery call",
      description:
        "Run multiple layouts with roles, channel partners, expense and ledger, advanced reports, integrations, and workflows that match how you already sell.",
      features: [
        "Full Sales Platform included",
        "Multi-project control with roles",
        "Channel partner management",
        "Expense, ledger, and deeper reports",
        "Integrations and custom workflows",
      ],
      ctaLabel: "Talk to us",
      recommended: false,
      theme: "accent",
    },
  ] satisfies PricingPackage[],

  addons: [
    {
      id: "beautification",
      name: "Layout Beautification",
      description:
        "Want a premium presentation? We can redesign branding, landscaping art, and visual polish",
    },
    {
      id: "migration",
      name: "Custom Setup / Migration",
      description:
        "Moving from Excel, another CRM, or scattered documents? We’ll help bring data and workflows across so your team doesn’t start from zero.",
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
