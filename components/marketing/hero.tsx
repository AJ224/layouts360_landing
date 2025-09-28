"use client"

import type React from "react"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <header className="border-b bg-card">
      <div className="mx-auto max-w-6xl px-4 py-6 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="IdeatoLive logo"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="text-lg font-semibold">IdeatoLive</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex" aria-label="Main">
            <Link href="/features" className="hover:text-foreground">
              Features
            </Link>
            <Link href="/pricing" className="hover:text-foreground">
              Pricing
            </Link>
            <Link href="/contact" className="hover:text-foreground">
              Contact
            </Link>
          </nav>
          <div className="hidden md:block">
            <Button asChild>
              <Link href="#demo">Schedule a Demo</Link>
            </Button>
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-4 pb-12 pt-6 md:pb-20 md:pt-14 md:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-primary/5 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span>Professional Real Estate Solutions</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-balance text-4xl font-bold tracking-tight md:text-6xl bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                Transform Your Real Estate Business with 
                <span className="block text-primary">Digital Innovation</span>
              </h1>
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground max-w-xl">
                From interactive layouts to complete business management - we provide enterprise-grade solutions 
                that help real estate developers scale efficiently and streamline their operations.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col items-start gap-4 sm:flex-row">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                <Link href="#demo">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Schedule Free Demo
                  </span>
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300" asChild>
                <Link href="/features">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Explore Solutions
                  </span>
                </Link>
              </Button>
            </div>

          </div>

          {/* Hero Image with Enhanced Design */}
          <div className="relative">
            {/* Background Elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-3xl"></div>
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur-2xl"></div>
            
            {/* Main Image Container */}
            <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
              <Image
                src="/herosection.png"
                alt="Professional Real Estate Management Dashboard"
                width={760}
                height={540}
                className="w-full rounded-2xl"
                priority
              />
              
              {/* Floating Elements */}
              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg animate-bounce">
                ✓ Live Demo
              </div>
              <div className="absolute bottom-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg">
                <span className="text-sm font-semibold">Real-time Updates</span>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-lg border border-gray-100 p-4 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold">Analytics</div>
                  <div className="text-xs text-muted-foreground">Real-time insights</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg border border-gray-100 p-4 animate-float-delayed">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold">Payments</div>
                  <div className="text-xs text-muted-foreground">Secure processing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  )
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M20 6 9 17l-5-5" />
    </svg>
  )
}
