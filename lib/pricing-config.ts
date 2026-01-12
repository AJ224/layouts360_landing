/**
 * Pricing Configuration
 *
 * This file contains all pricing-related values that can be easily updated
 * as per business requirements.
 */

export const pricingConfig = {
  // Subscription Plans
  plans: [
    {
      id: "sales-starter",
      name: "Sales Starter",
      subtitle: undefined,
      monthlyPrice: 2000,
      annualPrice: 21600,
      annualOriginalPrice: 24000,
      saveLabel: "Save 10%",
      description: "Best for: Faster sales with clear visuals",
      features: [
        "Plot / unit management",
        "Never double-book a plot again",
        "Impress clients with Live Maps",
        "Easy viewing for your sales team & clients",
        "Smooth experience on mobile & desktop",
        "Unlimited users (Page access management)",
      ],
      recommended: false,
      theme: "light",
    },
    {
      id: "growth-suite",
      name: "Growth Suite",
      subtitle: "(Complete Platform)",
      monthlyPrice: 4000,
      annualPrice: 43200,
      annualOriginalPrice: 48000,
      saveLabel: "Save 10%",
      description: "Best for: Full control + faster growth",
      features: [
        "Everything in Sales Starter, plus:",
        "Lead & customer management",
        "Booking & payment tracking",
        "Booking Document Management",
        "Sales performance reports",
        "Priority support",
      ],
      recommended: true,
      theme: "dark",
    },
  ],

  // Layout & Plot Pricing
  plotPricing: {
    baseSetupCost: 10000,
    baseIncludedPlots: 150, // 100 base + 50 bonus
    basePlotBreakdown: "100 base + 50 bonus plots free",
    additionalPlotCost: 100,
  },

  // Legacy/Calculator Support Values (Mapped to new values where appropriate)
  platformFee: {
    monthly: 2000, // Mapping to Sales Starter for base calc
  },
  domainAddon: {
    monthly: 2000, // Diff between Sales Starter and Growth Suite essentially
  },
  discounts: {
    1: 0,
    6: 5,
    12: 10, // Approx match for calculator logic
  },
} as const;

export type SubscriptionPeriod = 1 | 6 | 12;

/**
 * Calculate discounted price based on subscription period
 */
export function calculateDiscount(price: number, period: SubscriptionPeriod): number {
  const discountPercent = pricingConfig.discounts[period];
  return price * (1 - discountPercent / 100);
}

/**
 * Calculate plot cost based on number of plots
 */
export function calculatePlotCost(plotCount: number): number {
  const { baseSetupCost, baseIncludedPlots, additionalPlotCost } = pricingConfig.plotPricing;

  if (plotCount <= baseIncludedPlots) {
    return baseSetupCost;
  }

  const additionalPlots = plotCount - baseIncludedPlots;
  return baseSetupCost + additionalPlots * additionalPlotCost;
}

/**
 * Calculate total subscription cost for a given period
 */
export function calculateSubscriptionCost(
  period: SubscriptionPeriod,
  includeDomain: boolean
): number {
  // Logic adapted for calculator: Base = Sales Starter, With Domain/Pro = Growth Suite
  const basePrice = pricingConfig.platformFee.monthly;
  const upgradePrice = pricingConfig.domainAddon.monthly;

  const platformFee = calculateDiscount(basePrice, period);
  const additionalFee = includeDomain ? calculateDiscount(upgradePrice, period) : 0;

  return platformFee * period + additionalFee * period;
}

