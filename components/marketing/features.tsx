"use client"

import type React from "react"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useEffect, useRef } from "react"

const features = [
  {
    title: "Interactive Layout Management",
    desc: "Advanced digital mapping with real-time plot status updates and conflict prevention.",
    Icon: MapIcon,
    benefits: ["Layout visualization", "Real-time updates", "Mobile responsive"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Enterprise CRM System",
    desc: "Comprehensive customer relationship management with lead tracking and automated follow-ups.",
    Icon: UsersIcon,
    benefits: ["Lead management", "Automated workflows", "Customer database"],
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Financial Management",
    desc: "Complete payment tracking, installment management, and financial reporting dashboard.",
    Icon: CreditCardIcon,
    benefits: ["Payment tracking", "Financial reports", "Due date alerts"],
    color: "from-purple-500 to-violet-500"
  },
  {
    title: "Project Management",
    desc: "Comprehensive project tracking and management tools for real estate developments.",
    Icon: GlobeIcon,
    benefits: ["Project tracking", "Timeline management", "Resource planning"],
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Document Management",
    desc: "Secure document storage with role-based access and automated document generation.",
    Icon: FileIcon,
    benefits: ["Secure storage", "Role-based access", "Auto-generation"],
    color: "from-indigo-500 to-blue-500"
  },
  {
    title: "Analytics & Reporting",
    desc: "Comprehensive business intelligence with custom reports and performance metrics.",
    Icon: ChartIcon,
    benefits: ["Custom reports", "Performance metrics", "Real-time analytics"],
    color: "from-pink-500 to-rose-500"
  },
]

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollTimeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }

      scrollTimeoutRef.current = setTimeout(() => {
        const scrollTop = container.scrollTop
        const scrollHeight = container.scrollHeight
        const clientHeight = container.clientHeight
        
        const scrollProgress = scrollTop / (scrollHeight - clientHeight)
        const newActiveFeature = Math.round(scrollProgress * (features.length - 1))
        
        if (newActiveFeature !== activeFeature && newActiveFeature >= 0 && newActiveFeature < features.length) {
          setActiveFeature(newActiveFeature)
        }
      }, 50)
    }

    container.addEventListener('scroll', handleScroll)
    return () => {
      container.removeEventListener('scroll', handleScroll)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [activeFeature])

  const handleTabClick = (index: number) => {
    setActiveFeature(index)
    const container = containerRef.current
    if (container) {
      const scrollTop = (index / (features.length - 1)) * (container.scrollHeight - container.clientHeight)
      container.scrollTo({ top: scrollTop, behavior: 'smooth' })
    }
  }

  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-12 md:py-20 md:px-6">
      <div className="mx-auto max-w-3xl text-center mb-12">
        <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          Enterprise-Grade Real Estate Solutions
        </h2>
        <p className="mt-3 text-pretty text-muted-foreground">
          Comprehensive tools designed for real estate developers to manage, scale, and optimize their business operations.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-2 p-2 bg-muted/30 rounded-2xl max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 text-sm ${
                activeFeature === index
                  ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                  : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
              }`}
            >
              {feature.title}
            </button>
          ))}
        </div>
      </div>

      {/* Features Container with Scroll */}
      <div className="relative">
        <div 
          ref={containerRef}
          className="h-[600px] overflow-y-auto scrollbar-hide snap-y snap-mandatory"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="snap-start h-[580px] flex items-center">
                <Card className={`w-full p-8 transition-all duration-500 transform ${
                  activeFeature === index 
                    ? 'scale-100 opacity-100 shadow-2xl' 
                    : 'scale-95 opacity-60 shadow-lg'
                } bg-gradient-to-br from-background to-primary/5 border-l-4 border-l-primary`}>
                  <div className="space-y-8">
                    {/* Feature Header */}
                    <div className="flex items-start gap-6">
                      <div className={`rounded-2xl bg-gradient-to-br ${feature.color} p-6 shadow-lg`}>
                        <feature.Icon aria-hidden="true" className="h-12 w-12 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">{feature.desc}</p>
                      </div>
                    </div>
                    
                    {/* Benefits Grid */}
                    <div className="grid gap-4 md:grid-cols-3">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center gap-3 p-4 bg-white/50 rounded-xl border border-primary/10">
                          <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* Progress Indicator */}
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-primary/20 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${feature.color} rounded-full transition-all duration-500`}
                          style={{ width: `${((index + 1) / features.length) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-muted-foreground">
                        {index + 1} of {features.length}
                      </span>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-2">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeFeature === index 
                  ? 'bg-primary scale-125' 
                  : 'bg-primary/30 hover:bg-primary/60'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <Button size="lg" asChild>
          <Link href="/features">View All Features</Link>
        </Button>
      </div>
    </section>
  )
}

function MapIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeWidth="2" d="M9 18l-6 3V6l6-3 6 3 6-3v15l-6 3-6-3z" />
      <path strokeWidth="2" d="M9 3v15m6-12v15" />
    </svg>
  )
}

function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeWidth="2" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" strokeWidth="2" />
      <path strokeWidth="2" d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function CreditCardIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="2" />
      <path strokeWidth="2" d="M3 10h18" />
    </svg>
  )
}

function GlobeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <circle cx="12" cy="12" r="9" strokeWidth="2" />
      <path strokeWidth="2" d="M3 12h18M12 3c3 3 3 15 0 18m0-18c-3 3-3 15 0 18" />
    </svg>
  )
}

function FileIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeWidth="2" d="M6 2h8l4 4v16H6z" />
      <path strokeWidth="2" d="M14 2v6h6" />
    </svg>
  )
}

function ChartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeWidth="2" d="M3 3v18h18" />
      <path strokeWidth="2" d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
    </svg>
  )
}
