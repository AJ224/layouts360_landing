import PricingCards from "@/components/pricing/pricing-cards"
import PricingFeatures from "@/components/pricing/pricing-features"
import Header from "@/components/marketing/header"
import Footer from "@/components/marketing/footer"
import { Button } from "@/components/ui/button"
import { pricingConfig } from "@/lib/pricing-config"
import { COMPANY } from "@/lib/company"
import Link from "next/link"

const faqs = [
  {
    question: "Do you redraw my plan?",
    answer:
      "Mapping puts your existing CAD or PDF on a live map. Beautification — if you want it to look like a brochure — is quoted separately.",
  },
  {
    question: "What does Layouts cost?",
    answer:
      "₹10,000 plus ₹150 a plot, once. No monthly fee. Live map and inventory. Not freeze, booking, or CRM.",
  },
  {
    question: "When do I need Layouts360?",
    answer:
      "When bookings start. ₹2,000 a month after mapping. Freeze, CRM, collections, broker portal, ledger — on the same map.",
  },
  {
    question: "What’s Layouts360+?",
    answer:
      "More than one project, or something we build around how you already work. Quoted after we see the layouts.",
  },
]

export default function PricingPageContent() {
  return (
    <div className="min-h-screen bg-white selection:bg-amber-100">
      <Header theme="light" />

      <section className="relative z-10 pt-24 pb-6 sm:pt-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-slate-400">
            {pricingConfig.trustLine}
          </p>
          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-[#0B1E3B] sm:text-5xl sm:leading-[1.12]">
            The map. Or the desk.
          </h1>
        </div>
      </section>

      <section id="packages" className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-4 py-12 sm:px-6 sm:py-16">
        <PricingCards />
      </section>

      <section className="relative z-10 border-t border-slate-100">
        <PricingFeatures />
      </section>

      <section className="relative z-10 border-t border-slate-100">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 md:py-24">
          <p className="text-center text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
            Questions
          </p>
          <div className="mt-10 divide-y divide-slate-100">
            {faqs.map((faq) => (
              <div key={faq.question} className="py-6 first:pt-0 last:pb-0">
                <h3 className="text-base font-medium text-slate-900">{faq.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-[#0B1E3B] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">See it on your layout</h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/60">
            Demo is on your plan, not a sample project. We’ll say which package fits.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-11 w-full rounded-full bg-[#EAB308] px-8 text-sm font-medium text-[#0B1E3B] hover:bg-[#f0c43a] sm:w-auto"
              asChild
            >
              <Link href="/contact#demo-form">Book a demo</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-11 w-full rounded-full border-white/20 bg-transparent px-8 text-sm font-medium text-white hover:bg-white/5 sm:w-auto"
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
