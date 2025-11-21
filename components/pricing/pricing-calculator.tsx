"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import {
  pricingConfig,
  type SubscriptionPeriod,
  calculateDiscount,
  calculatePlotCost,
  calculateSubscriptionCost,
} from "@/lib/pricing-config"
import { Calculator } from "lucide-react"

export default function PricingCalculator() {
  const [plotCount, setPlotCount] = useState<number>(50)
  const [period, setPeriod] = useState<SubscriptionPeriod>(1)
  const [includeDomain, setIncludeDomain] = useState(false)

  // Calculate costs
  const platformFeeMonthly = pricingConfig.platformFee.monthly
  const platformFeeDiscounted = calculateDiscount(platformFeeMonthly, period)
  const domainFeeMonthly = includeDomain ? pricingConfig.domainAddon.monthly : 0
  const domainFeeDiscounted = includeDomain
    ? calculateDiscount(domainFeeMonthly, period)
    : 0

  const totalSubscriptionCost = calculateSubscriptionCost(period, includeDomain)
  const plotCost = calculatePlotCost(plotCount)
  const totalCost = totalSubscriptionCost + plotCost

  const discountPercent = pricingConfig.discounts[period]

  return (
    <Card className="border-2 shadow-xl bg-gradient-to-br from-card to-card/95">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-xl font-semibold">
          <div className="p-2 rounded-lg bg-primary/10">
            <Calculator className="h-5 w-5 text-primary" />
          </div>
          Calculate Your Cost
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Plot Count Input */}
        <div className="space-y-2">
          <Label htmlFor="plots">Number of Plots</Label>
          <Input
            id="plots"
            type="number"
            min="1"
            value={plotCount}
            onChange={(e) => setPlotCount(Math.max(1, Number.parseInt(e.target.value, 10) || 1))}
            className="text-lg"
          />
        </div>

        {/* Subscription Period Selector */}
        <div className="space-y-3">
          <Label className="text-base font-medium">Subscription Period</Label>
          <div className="flex items-center justify-center gap-2 p-1 rounded-lg bg-muted/50 border w-full flex-wrap">
            {([1, 3, 6, 12] as SubscriptionPeriod[]).map((p) => (
              <Button
                key={p}
                type="button"
                variant={period === p ? "default" : "ghost"}
                className={`relative flex-1 min-w-[80px] transition-all ${
                  period === p ? "shadow-sm" : ""
                }`}
                onClick={() => setPeriod(p)}
              >
                {p} {p === 1 ? "Month" : "Months"}
                {pricingConfig.discounts[p] > 0 && (
                  <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-1.5 py-0.5 rounded-full font-semibold shadow-sm">
                    {pricingConfig.discounts[p]}% off
                  </span>
                )}
              </Button>
            ))}
          </div>
        </div>

        {/* Domain Toggle */}
        <div className="flex items-center justify-between rounded-lg border-2 p-4 bg-muted/30 hover:bg-muted/50 transition-colors">
          <div className="space-y-1 flex-1 pr-4">
            <Label htmlFor="domain" className="text-base font-semibold cursor-pointer">
              Deploy on Own Domain
            </Label>
          </div>
          <Switch
            id="domain"
            checked={includeDomain}
            onCheckedChange={setIncludeDomain}
            className="shrink-0"
          />
        </div>

        {/* Calculation Results */}
        <div className="space-y-4 rounded-xl bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 p-6 border-2 border-primary/20">
          <div className="space-y-4">
            {includeDomain ? (
              <div className="flex justify-between items-center py-1">
                <span className="text-sm font-medium text-muted-foreground">Platform + Domain</span>
                <span className="font-semibold flex items-center gap-1.5">
                  <span className="text-sm">₹</span>
                  {discountPercent > 0 ? (
                    <span className="flex items-center gap-2">
                      <span className="line-through text-muted-foreground text-sm font-normal">
                        {((platformFeeMonthly + domainFeeMonthly) * period).toLocaleString("en-IN")}
                      </span>
                      <span>{((platformFeeDiscounted + domainFeeDiscounted) * period).toLocaleString("en-IN")}</span>
                      <span className="text-green-600 dark:text-green-500 text-xs font-semibold bg-green-100 dark:bg-green-900/30 px-1.5 py-0.5 rounded">
                        {discountPercent}% off
                      </span>
                    </span>
                  ) : (
                    <span>{((platformFeeDiscounted + domainFeeDiscounted) * period).toLocaleString("en-IN")}</span>
                  )}
                </span>
              </div>
            ) : (
              <div className="flex justify-between items-center py-1">
                <span className="text-sm font-medium text-muted-foreground">Platform Fee</span>
                <span className="font-semibold flex items-center gap-1.5">
                  <span className="text-sm">₹</span>
                  {discountPercent > 0 ? (
                    <span className="flex items-center gap-2">
                      <span className="line-through text-muted-foreground text-sm font-normal">
                        {(platformFeeMonthly * period).toLocaleString("en-IN")}
                      </span>
                      <span>{(platformFeeDiscounted * period).toLocaleString("en-IN")}</span>
                      <span className="text-green-600 dark:text-green-500 text-xs font-semibold bg-green-100 dark:bg-green-900/30 px-1.5 py-0.5 rounded">
                        {discountPercent}% off
                      </span>
                    </span>
                  ) : (
                    <span>{(platformFeeDiscounted * period).toLocaleString("en-IN")}</span>
                  )}
                </span>
              </div>
            )}

            <div className="flex justify-between items-center py-1">
              <span className="text-sm font-medium text-muted-foreground">Plot Cost</span>
              <span className="font-semibold flex items-center gap-1.5">
                <span className="text-sm">₹</span>
                <span>{plotCost.toLocaleString("en-IN")}</span>
              </span>
            </div>

            <div className="border-t border-primary/20 pt-4 mt-2 flex justify-between items-center">
              <span className="text-base font-bold">Total</span>
              <span className="text-3xl font-bold tracking-tight flex items-center gap-1.5">
                <span className="text-2xl">₹</span>
                <span>{totalCost.toLocaleString("en-IN")}</span>
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

