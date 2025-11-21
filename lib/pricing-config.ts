/**
 * Pricing Configuration
 * 
 * This file contains all pricing-related values that can be easily updated
 * as per business requirements.
 */

export const pricingConfig = {
  // Platform Fee (Base monthly subscription)
  platformFee: {
    monthly: 4000, // ₹4,000 per month
  },

  // Own Domain Deployment Add-on (Optional)
  // Note: Domain is provided by customer. This fee covers server, hosting, and deployment management.
  domainAddon: {
    monthly: 2000, // ₹2,000 per month (includes server, hosting costs)
  },

  // Subscription Duration Discounts
  discounts: {
    1: 0,      // 1 Month = 0% discount (100% price)
    3: 5,      // 3 Months = 5% off
    6: 10,     // 6 Months = 10% off
    12: 20,    // 12 Months = 20% off (Max Discount)
  },

  // Plot Pricing
  plotPricing: {
    baseLayoutCost: 10000,      // ₹10,000 per layout (up to 150 plots)
    includedPlots: 150,          // Number of plots included in base cost
    additionalPlotCost: 100,     // ₹100 per plot after 150 plots
  },

  // Pricing Plans
  plans: [
    {
      id: "basic",
      name: "Basic",
      description: "Platform access",
      features: [
        "Customer & Booking Management",
        "Plot Inventory Management & Bulk Entry",
        "Interactive Digital Layout",
        "Plot Freezing & Auto Release",
        "Payment & Installment Management",
        "Sales Desk & PoS",
        "Customer Login Portal",
        "Project Dashboard & Analytics",
      ],
    },
    {
      id: "business",
      name: "Business",
      description: "Platform + Own Domain Deployment",
      features: [
        "Everything in Basic",
        "Deploy on Your Domain",
        "Server & Hosting Included",
        "SSL Certificate",
        "Domain Setup & Configuration",
      ],
    },
    {
      id: "enterprise",
      name: "Enterprise",
      description: "Custom pricing",
      features: [
        "Everything in Business",
        "Dedicated Support",
        "Custom Features",
        "Priority Updates",
        "SLA Guarantee",
        "Custom Integration",
      ],
    },
  ],
} as const;

export type SubscriptionPeriod = 1 | 3 | 6 | 12;

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
  const { baseLayoutCost, includedPlots, additionalPlotCost } = pricingConfig.plotPricing;
  
  if (plotCount <= includedPlots) {
    return baseLayoutCost;
  }
  
  const additionalPlots = plotCount - includedPlots;
  return baseLayoutCost + (additionalPlots * additionalPlotCost);
}

/**
 * Calculate total subscription cost for a given period
 */
export function calculateSubscriptionCost(
  period: SubscriptionPeriod,
  includeDomain: boolean
): number {
  const platformFee = calculateDiscount(pricingConfig.platformFee.monthly, period);
  const domainFee = includeDomain 
    ? calculateDiscount(pricingConfig.domainAddon.monthly, period)
    : 0;
  
  return platformFee * period + domainFee * period;
}

/**
 * Calculate payable today (first payment)
 */
export function calculatePayableToday(
  period: SubscriptionPeriod,
  includeDomain: boolean
): number {
  const platformFee = calculateDiscount(pricingConfig.platformFee.monthly, period);
  const domainFee = includeDomain 
    ? calculateDiscount(pricingConfig.domainAddon.monthly, period)
    : 0;
  
  return platformFee + domainFee;
}

