"use client"

import type React from "react"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <header className="border-b bg-card">
      <div className="mx-auto max-w-6xl px-4 py-6 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src={"/placeholder.svg?height=28&width=28&query=IdeatoLive%20logo%20mark"}
              alt="IdeatoLive logo"
              width={28}
              height={28}
              className="rounded"
            />
            <span className="text-lg font-semibold">IdeatoLive</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex" aria-label="Main">
            <a href="#features" className="hover:text-foreground">
              Features
            </a>
            <a href="#steps" className="hover:text-foreground">
              Steps
            </a>
            <a href="#why-choose-us" className="hover:text-foreground">
              Why us
            </a>
          </nav>
          <div className="hidden md:block">
            <Button asChild>
              <a href="#demo">Schedule a Demo</a>
            </Button>
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-4 pb-12 pt-6 md:pb-20 md:pt-14 md:px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              Digitize Your Real Estate Layouts
            </h1>
            <p className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Easily manage layouts, freeze and book plots, handle payments, and let end customers view their plot
              documents — all in one place.
            </p>
            <div className="flex flex-col items-start gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <a href="#demo">Schedule a Demo</a>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <a href="#features">Explore Features</a>
              </Button>
            </div>
            <ul className="mt-4 grid gap-2 text-sm text-muted-foreground md:grid-cols-2">
              <li className="flex items-center gap-2">
                <CheckIcon aria-hidden="true" className="h-5 w-5 text-primary" />
                Manage multiple layouts
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon aria-hidden="true" className="h-5 w-5 text-primary" />
                Real-time plot status
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon aria-hidden="true" className="h-5 w-5 text-primary" />
                Built-in marketing pages
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon aria-hidden="true" className="h-5 w-5 text-primary" />
                Payments & enquiries
              </li>
            </ul>
          </div>

          <div className="relative">
            <Image
              src={
                "/placeholder.svg?height=540&width=760&query=interactive%20layout%20map%20for%20real%20estate%20plots"
              }
              alt="Interactive layout visualization"
              width={760}
              height={540}
              className="w-full rounded-lg border bg-card"
              priority
            />
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
