"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { pricingConfig } from "@/lib/pricing-config"
import { Check, Layers } from "lucide-react"
import Link from "next/link"

export default function PricingCards() {
  const { plans } = pricingConfig

  return (
    <div className="space-y-16">
      {/* Subscription Plans Section */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 border-b-2 border-slate-200 inline-block pb-1">
            Choose Your Plan
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Pricing is shared on enquiry. Tell us your plot count and we’ll recommend the right plan.
          </p>
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
                    <div className="rounded-xl border border-slate-200/60 bg-white/60 px-4 py-3">
                      <div className={`text-xs font-bold uppercase tracking-widest ${isDark ? "text-gray-400" : "text-slate-500"}`}>
                        Pricing
                      </div>
                      <div className={`mt-1 text-lg font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
                        Contact us for pricing
                      </div>
                      <div className={`mt-1 text-sm ${isDark ? "text-gray-400" : "text-slate-600"}`}>
                        Get a quick quote based on your plot count.
                      </div>
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
                      Enquire Now
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
            Setup & Onboarding
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            We’ll confirm setup details and share pricing after understanding your layouts and plot count.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <Card className="border shadow-md bg-white overflow-hidden">
            <div className="p-8 flex flex-col items-start gap-4 hover:bg-slate-50 transition-colors">
              <div className="p-3 bg-blue-50 rounded-lg">
                <Layers className="w-8 h-8 text-[#0B1E3B]" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Map Creation & Setup</h3>
                <p className="text-2xl font-bold text-[#0B1E3B] mt-1">Contact for quote</p>
                <p className="text-sm text-slate-500 mt-2">We digitize your layout and set up your project.</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
