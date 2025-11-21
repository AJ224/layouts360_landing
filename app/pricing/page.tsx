import type { Metadata } from "next"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import PricingCards from "@/components/pricing/pricing-cards"
import PricingCalculator from "@/components/pricing/pricing-calculator"

export const metadata: Metadata = {
  title: "Pricing - Real Estate Management Solutions | Starting ₹4,000/month",
  description: "Transparent pricing for real estate management solutions. Platform fee starting at ₹4,000/month with flexible subscription options. Calculate your exact pricing with our interactive calculator.",
  keywords: [
    "real estate management pricing",
    "property management software cost",
    "real estate platform pricing",
    "property management system pricing",
    "real estate CRM pricing",
    "plot management software cost",
    "real estate analytics pricing",
    "property management platform cost",
    "plot booking software pricing"
  ],
  openGraph: {
    title: "Pricing - Real Estate Management Solutions | Starting ₹4,000/month",
    description: "Transparent pricing for real estate management solutions. Platform fee starting at ₹4,000/month with flexible subscription options.",
    type: 'website',
    images: [
      {
        url: '/herosection.png',
        width: 1200,
        height: 630,
        alt: 'IdeatoLive Pricing Plans',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing - Real Estate Management Solutions | Starting ₹4,000/month',
    description: 'Transparent pricing for real estate management solutions. Platform fee starting at ₹4,000/month.',
  },
}

const faqs = [
  {
    question: "How does subscription pricing work?",
    answer: "Platform fee starts at ₹4,000/month. Choose 1, 3, 6, or 12-month plans. Longer plans save up to 20%. All features included."
  },
  {
    question: "What's the plot pricing?",
    answer: "₹10,000 for up to 150 plots, then ₹100 per additional plot. One-time setup cost."
  },
  {
    question: "Do I need my own domain?",
    answer: "No. Basic plan uses our domain. Business plan: you provide domain, we include server & hosting (₹6,000/month)."
  },
  {
    question: "Can I change my plan later?",
    answer: "Yes. Upgrade or modify anytime with prorated billing. Contact support for assistance."
  }
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-50 backdrop-blur-sm bg-card/95">
        <div className="mx-auto max-w-6xl px-4 py-4 md:px-6">
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
            <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
              <Link href="/" className="hover:text-foreground">Home</Link>
              <Link href="/features" className="hover:text-foreground">Features</Link>
              <Link href="/pricing" className="hover:text-foreground text-foreground">Pricing</Link>
              <Link href="/contact" className="hover:text-foreground">Contact</Link>
            </nav>
            <Button asChild>
              <Link href="/#demo">Get Demo</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Pricing Cards */}
      <section className="mx-auto max-w-7xl px-4 py-8 md:px-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
            Simple, Transparent Pricing
          </h1>
          <p className="text-sm md:text-base text-muted-foreground">
            Choose your plan. All features included. Save more with longer subscriptions.
          </p>
        </div>
        <PricingCards />
      </section>

      {/* Pricing Calculator */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="max-w-2xl mx-auto">
          <PricingCalculator />
        </div>
      </section>


      {/* FAQ Section */}
      <section className="mx-auto max-w-4xl px-4 py-16 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">Quick answers to common questions</p>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <Card key={index} className="p-6 hover:shadow-md transition-shadow border hover:border-primary/20">
              <h3 className="text-base font-semibold mb-2.5 text-foreground">{faq.question}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-5xl px-4 py-16 md:px-6">
        <div className="rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white p-10 md:p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
              Contact us for a free consultation and see how we can help your real estate business grow.
            </p>
            <Button size="lg" variant="secondary" className="shadow-lg hover:shadow-xl transition-all" asChild>
              <Link href="/#demo">Schedule Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
            <p className="text-pretty text-center md:text-left">
              © {new Date().getFullYear()} IdeatoLive. All rights reserved.
            </p>
            <nav className="flex flex-wrap items-center justify-center gap-6">
              <Link href="/" className="hover:text-foreground">Home</Link>
              <Link href="/features" className="hover:text-foreground">Features</Link>
              <Link href="/pricing" className="hover:text-foreground">Pricing</Link>
              <Link href="tel:+917276495199" className="hover:text-foreground">+91 72764 95199</Link>
              <Link href="tel:+919595337334" className="hover:text-foreground">+91 95953 37334</Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
