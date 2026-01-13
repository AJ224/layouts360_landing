"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "@/components/marketing/header"
import { Check, ArrowRight, PlayCircle, CheckCircle2 } from "lucide-react"

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
          {/* Badge */}
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-slate-600 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-slate-500"></span>
              Live Plot Visualization Platform
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
            Show Layouts Live. <span className="text-[#34D399]">Sell Faster.</span>
          </h1>

          {/* Subheadline */}
          <p className="max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed">
            Replace chart papers and Excel sheets with a real-time digital layout system. Show plot status live, handle multiple customers, and close deals faster.
          </p>

          {/* Status Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-slate-700">
            <span className="flex items-center gap-2"><span className="w-3 h-3 bg-[#34D399] rounded-sm"></span> Available</span>
            <span className="flex items-center gap-2"><span className="w-3 h-3 bg-[#FBBF24] rounded-sm"></span> Booked</span>
            <span className="flex items-center gap-2"><span className="w-3 h-3 bg-[#EF4444] rounded-sm"></span> Sold</span>
            <span className="flex items-center gap-2"><span className="w-3 h-3 bg-[#64748B] rounded-sm"></span> Freeze</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 pb-8">
            <Button
              size="lg"
              className="bg-slate-800 hover:bg-slate-700 text-white text-base font-medium rounded-lg px-8 h-12 min-w-[160px]"
              asChild
            >
              <Link href="/contact">
                Request Demo <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-slate-100 hover:bg-slate-200 border-transparent text-slate-900 text-base font-medium rounded-lg px-8 h-12 min-w-[160px]"
              asChild
            >
              <Link href="/how-it-works">
                <PlayCircle className="w-4 h-4 mr-2" /> See How It Works
              </Link>
            </Button>
          </div>

          {/* Bottom Trust/Features Badges */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-500">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-slate-400" /> No setup required</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-slate-400" /> Real-time sync</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-slate-400" /> Mobile ready</span>
          </div>
        </div>
      </section>
    </div>
  )
}
