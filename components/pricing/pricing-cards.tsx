"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { pricingConfig, type SubscriptionPeriod, calculateDiscount } from "@/lib/pricing-config"
import { Check } from "lucide-react"
import Link from "next/link"

export default function PricingCards() {
  const [period, setPeriod] = useState<SubscriptionPeriod>(1)

  const discountPercent = pricingConfig.discounts[period]
  const platformFeeMonthly = pricingConfig.platformFee.monthly
  const platformFeeDiscounted = calculateDiscount(platformFeeMonthly, period)
  const domainFeeMonthly = pricingConfig.domainAddon.monthly
  const domainFeeDiscounted = calculateDiscount(domainFeeMonthly, period)

  const plans = pricingConfig.plans

  return (
    <div className="space-y-6">
      {/* Period Selector */}
      <div className="flex flex-col items-center space-y-3">
        <div className="inline-flex items-center justify-center gap-2 p-1 rounded-lg bg-muted/50 border">
          {([1, 3, 6, 12] as SubscriptionPeriod[]).map((p) => (
            <Button
              key={p}
              type="button"
              variant={period === p ? "default" : "ghost"}
              size="lg"
              className={`relative min-w-[100px] transition-all ${
                period === p
                  ? "shadow-sm"
                  : "hover:bg-background"
              }`}
              onClick={() => setPeriod(p)}
            >
              {p} {p === 1 ? "Month" : "Months"}
              {pricingConfig.discounts[p] > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full font-semibold shadow-sm">
                  {pricingConfig.discounts[p]}% off
                </span>
              )}
            </Button>
          ))}
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
        {plans.map((plan, index) => {
          const isPopular = plan.id === "business"
          const isEnterprise = plan.id === "enterprise"

          let displayPrice = ""
          if (isEnterprise) {
            displayPrice = "Custom"
          } else if (plan.id === "basic") {
            displayPrice = (
              <>
                {discountPercent > 0 ? (
                  <>
                    <span className="line-through text-muted-foreground text-xl font-medium">
                      ₹{(platformFeeMonthly * period).toLocaleString("en-IN")}
                    </span>
                    <span className="text-4xl font-bold tracking-tight">
                      ₹{(platformFeeDiscounted * period).toLocaleString("en-IN")}
                    </span>
                  </>
                ) : (
                  <span className="text-4xl font-bold tracking-tight">
                    ₹{(platformFeeDiscounted * period).toLocaleString("en-IN")}
                  </span>
                )}
                <span className="text-base text-muted-foreground font-normal">
                  /{period === 1 ? "month" : `${period} months`}
                </span>
              </>
            )
          } else if (plan.id === "business") {
            const totalMonthly = platformFeeDiscounted + domainFeeDiscounted
            displayPrice = (
              <>
                {discountPercent > 0 ? (
                  <>
                    <span className="line-through text-muted-foreground text-xl font-medium">
                      ₹{((platformFeeMonthly + domainFeeMonthly) * period).toLocaleString("en-IN")}
                    </span>
                    <span className="text-4xl font-bold tracking-tight">
                      ₹{(totalMonthly * period).toLocaleString("en-IN")}
                    </span>
                  </>
                ) : (
                  <span className="text-4xl font-bold tracking-tight">
                    ₹{(totalMonthly * period).toLocaleString("en-IN")}
                  </span>
                )}
                <span className="text-base text-muted-foreground font-normal">
                  /{period === 1 ? "month" : `${period} months`}
                </span>
              </>
            )
          }

          return (
            <Card
              key={plan.id}
              className={`relative flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-xl hover:z-10 ${
                isPopular
                  ? "border-2 border-primary shadow-lg bg-gradient-to-b from-card to-card/95"
                  : "border hover:border-primary/30"
              } ${isEnterprise ? "border-2" : ""}`}
            >

              <CardHeader className="space-y-4 pb-6 pt-6">
                <div className="space-y-2">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {plan.description}
                  </CardDescription>
                </div>
                <div className="flex flex-wrap items-baseline gap-1.5 pt-2">
                  {typeof displayPrice === "string" ? (
                    <span className="text-4xl font-bold tracking-tight">{displayPrice}</span>
                  ) : (
                    displayPrice
                  )}
                </div>
              </CardHeader>

              <CardContent className="flex-1 space-y-6 pt-0">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="mt-0.5 flex-shrink-0 rounded-full bg-primary/10 p-0.5">
                        <Check className="h-4 w-4 text-primary" strokeWidth={2.5} />
                      </div>
                      <span className="text-sm leading-relaxed text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2">
                  <Button
                    className={`w-full transition-all ${
                      isPopular
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl"
                        : "hover:border-primary hover:text-primary"
                    }`}
                    size="lg"
                    variant={isPopular ? "default" : "outline"}
                    asChild
                  >
                    <Link href="/#demo">
                      {isEnterprise ? "Contact Sales" : "Get Started"}
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

