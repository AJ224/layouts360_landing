import PricingCards from "@/components/pricing/pricing-cards"
import Header from "@/components/marketing/header"
import Footer from "@/components/marketing/footer"
import { Button } from "@/components/ui/button"
import { pricingConfig } from "@/lib/pricing-config"
import { COMPANY } from "@/lib/company"
import Link from "next/link"

const faqs = [
  {
    question: "What does Layouts cost?",
    answer: "₹10,000 one-time for up to 150 plots, then ₹150 per extra plot. No monthly fee.",
  },
  {
    question: "When do I need Layouts360?",
    answer: "When you start freezing plots and taking bookings. ₹150/plot to map, then ₹2,000/month.",
  },
  {
    question: "Do you redraw my plan?",
    answer: "We put your CAD or PDF on a live map. Brochure-style redraw is optional and quoted separately.",
  },
]

export default function PricingPageContent() {
  return (
    <div className="min-h-screen bg-white selection:bg-amber-100">
      <Header theme="light" />

      <section className="relative z-10 pt-24 pb-4 sm:pt-28">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
            {pricingConfig.trustLine}
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[#0B1E3B] sm:text-4xl">
            Pricing for layout developers
          </h1>
          <p className="mx-auto mt-3 text-sm text-slate-500">
            Map-only or full sales software. Pay once to map, monthly only if you need booking and CRM.
          </p>
        </div>
      </section>

      <section id="packages" className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-4 py-8 sm:px-6 sm:py-10">
        <PricingCards />
      </section>

      <section className="relative z-10 border-t border-slate-100">
        <div className="mx-auto max-w-xl px-4 py-14 sm:px-6">
          <div className="divide-y divide-slate-100">
            {faqs.map((faq) => (
              <div key={faq.question} className="py-5 first:pt-0 last:pb-0">
                <h3 className="text-sm font-medium text-slate-900">{faq.question}</h3>
                <p className="mt-1.5 text-sm text-slate-500">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-[#0B1E3B] py-14 text-white">
        <div className="mx-auto max-w-md px-4 text-center sm:px-6">
          <h2 className="text-2xl font-semibold tracking-tight">See it on your layout</h2>
          <p className="mt-2 text-sm text-white/60">We’ll show your plan and tell you which package fits.</p>
          <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              className="h-10 rounded-full bg-[#EAB308] px-6 text-sm font-medium text-[#0B1E3B] hover:bg-[#f0c43a]"
              asChild
            >
              <Link href="/contact#demo-form">Book a demo</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-10 rounded-full border-white/20 bg-transparent px-6 text-sm text-white hover:bg-white/5"
              asChild
            >
              <a href={`tel:${COMPANY.phoneTel}`}>Call {COMPANY.phone}</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
