"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "@/components/marketing/header"
import { Check } from "lucide-react"

export default function Hero() {
  return (
    <div className="relative bg-white text-gray-900 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_2px,transparent_2px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px]"></div>

      {/* Header */}
      <Header theme="light" />

      {/* Hero Content */}
      <section className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 pt-20 pb-32 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Badge (Optional - removed based on image, but keeping a spacer if needed) */}

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 leading-[1.1]">
            Show Layouts Live. <br className="hidden sm:block" />
            <span className="text-[#00C29F]">Sell Faster.</span>
          </h1>

          {/* Subheadline */}
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-500 leading-relaxed font-medium">
            Stop losing leads to outdated spreadsheets. Manage bookings, payments, and site visits in one visual dashboard.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm font-medium text-gray-500">
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-[#00C29F]" /> 14-day free trial</span>
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-[#00C29F]" /> No credit card required</span>
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-[#00C29F]" /> Cancel anytime</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="bg-slate-900 hover:bg-slate-800 text-white text-lg font-medium rounded-lg px-8 py-6 h-auto min-w-[180px]"
              asChild
            >
              <Link href="/contact">
                Start for free
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-white border-slate-200 hover:bg-slate-50 text-slate-900 text-lg font-medium rounded-lg px-8 py-6 h-auto min-w-[180px]"
              asChild
            >
              <Link href="/contact">
                Book a demo
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
