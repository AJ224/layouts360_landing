"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { pricingConfig } from "@/lib/pricing-config"
import { Check, Layers, Gift, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function PricingCards() {
  const { plans, plotPricing } = pricingConfig

  return (
    <div className="space-y-16">
      {/* Subscription Plans Section */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 border-b-2 border-slate-200 inline-block pb-1">
            Choose Your Plan
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
          {plans.map((plan) => {
            const isDark = plan.theme === "dark"

            return (
              <Card
                key={plan.id}
                className={`relative flex flex-col border shadow-lg overflow-hidden transition-all hover:shadow-xl ${isDark
                  ? "bg-[#0B1E3B] text-white border-blue-900"
                  : "bg-blue-50/30 text-slate-900 border-slate-100"
                  }`}
              >
                {/* Recommended Badge */}
                {plan.recommended && (
                  <div className="absolute top-6 right-6">
                    <span className="bg-[#EAB308] text-[#0B1E3B] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Best Value
                    </span>
                  </div>
                )}

                <CardHeader className="space-y-4 pb-6 pt-8 px-8">
                  <div className="space-y-1">
                    <CardTitle className={`text-2xl md:text-3xl font-serif font-bold ${isDark ? "text-white" : "text-blue-900"}`}>
                      {plan.name}
                    </CardTitle>
                    {plan.subtitle && (
                      <span className={`block text-lg ${isDark ? "text-gray-300" : "text-slate-600"}`}>
                        {plan.subtitle}
                      </span>
                    )}
                  </div>

                  <div className="pt-2">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className={`text-sm font-bold uppercase tracking-widest ${isDark ? "text-gray-400" : "text-slate-400"}`}>Monthly:</span>
                      <span className={`text-2xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>₹{plan.monthlyPrice.toLocaleString()}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className={`text-sm font-bold uppercase tracking-widest ${isDark ? "text-gray-400" : "text-slate-400"}`}>Annual:</span>
                      <span className={`text-sm line-through ${isDark ? "text-gray-500" : "text-slate-400"}`}>
                        ₹{plan.annualOriginalPrice.toLocaleString()}
                      </span>
                      <span className={`text-2xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
                        ₹{plan.annualPrice.toLocaleString()}
                      </span>
                      <span className="bg-emerald-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                        {plan.saveLabel}
                      </span>
                    </div>
                  </div>

                  <div className={`text-sm italic pt-2 ${isDark ? "text-gray-400" : "text-slate-500"}`}>
                    {plan.description}
                  </div>

                  <div className={`h-px w-full ${isDark ? "bg-blue-800" : "bg-slate-200"}`} />
                </CardHeader>

                <CardContent className="flex-1 space-y-8 px-8 pb-8">
                  <div className="space-y-4">
                    <p className={`text-xs font-bold uppercase tracking-widest ${isDark ? "text-gray-400" : "text-slate-500"}`}>
                      What you get:
                    </p>
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className={`h-5 w-5 flex-shrink-0 ${isDark ? "text-[#EAB308]" : "text-emerald-500"}`} />
                          <span className={`text-sm ${isDark ? "text-gray-300" : "text-slate-700"}`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    className={`w-full py-6 text-lg font-bold rounded-lg transition-all ${isDark
                      ? "bg-white text-[#0B1E3B] hover:bg-gray-100"
                      : "bg-[#0B1E3B] text-white hover:bg-[#0B1E3B]/90"
                      }`}
                    asChild
                  >
                    <Link href="/contact#demo-form">
                      Get Started
                    </Link>
                  </Button>

                  {/* Risk Reversal Micro-copy */}
                  <p className={`text-xs text-center ${isDark ? "text-gray-400" : "text-slate-400"}`}>
                    {isDark ? "We help you set up fast" : "No credit card required to start"}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Layout & Plot Setup Pricing Section */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 border-b-2 border-slate-200 inline-block text-center pb-1">
            One Time Setup Cost
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="border shadow-md bg-white overflow-hidden">
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
              {/* Item 1: Base Setup Cost */}
              <div className="p-8 flex flex-col items-start gap-4 hover:bg-slate-50 transition-colors">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <Layers className="w-8 h-8 text-[#0B1E3B]" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Map Creation & Setup</h3>
                  <p className="text-3xl font-bold text-[#0B1E3B] mt-1">₹{plotPricing.baseSetupCost.toLocaleString()}</p>
                  <p className="text-sm text-slate-500 mt-2">Pay once. We make your digital map.</p>
                </div>
              </div>

              {/* Item 2: Plots Included */}
              <div className="p-8 flex flex-col items-start gap-4 hover:bg-slate-50 transition-colors">
                <div className="p-3 bg-emerald-50 rounded-lg">
                  <Gift className="w-8 h-8 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Plots in Package</h3>
                  <p className="text-3xl font-bold text-emerald-600 mt-1">{plotPricing.baseIncludedPlots} Plots</p>
                  <p className="text-sm text-slate-500 mt-2">150 plots included</p>
                </div>
              </div>

              {/* Item 3: Additional Plots */}
              <div className="p-8 flex flex-col items-start gap-4 hover:bg-slate-50 transition-colors">
                <div className="p-3 bg-orange-50 rounded-lg">
                  <TrendingUp className="w-8 h-8 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Extra Plots</h3>
                  <p className="text-3xl font-bold text-orange-500 mt-1">₹{plotPricing.additionalPlotCost}<span className="text-lg font-medium text-slate-400">/plot</span></p>
                  <p className="text-sm text-slate-500 mt-2">If you have more than {plotPricing.baseIncludedPlots} plots</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
