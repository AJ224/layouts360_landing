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
      "Mapping puts your existing CAD or PDF on a live map. If you want it to look like a brochure, that’s a separate drawing job and we quote it.",
  },
  {
    question: "What does Layouts cost?",
    answer:
      "₹10,000 plus ₹150 a plot, once. No monthly. You get the live map and inventory. You don’t get freeze, booking, or CRM.",
  },
  {
    question: "When do I need Layouts360?",
    answer:
      "When people are actually booking. ₹2,000 a month after mapping. Freeze, CRM, payments, broker portal, ledger — on the same map.",
  },
  {
    question: "What’s Layouts360+?",
    answer:
      "More than one project, or something we have to build around how you already work. We quote after we see the layouts.",
  },
]

export default function PricingPageContent() {
  return (
    <div className="relative min-h-screen bg-white selection:bg-amber-100">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute -top-24 left-1/2 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-[#0B1E3B]/[0.035] blur-[100px]" />
      </div>

      <Header theme="light" />

      <section className="relative z-10 overflow-hidden pt-20 sm:pt-24">
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <div className="mx-auto mb-6 inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-semibold tracking-wide text-slate-700">
            {pricingConfig.trustLine}
          </div>

          <h1 className="mx-auto max-w-3xl text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-[2.6rem] md:leading-[1.15]">
            Pricing for real estate companies selling layouts
          </h1>

        </div>
      </section>

      <section id="packages" className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-4 py-14 sm:px-6 sm:py-20">
        <PricingCards />
      </section>

      <section className="relative z-10 border-t border-slate-200/80 bg-[#F7F8FA]/80">
        <PricingFeatures />
      </section>

      <section className="relative z-10 border-y border-slate-200/80 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Common questions
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-slate-200 bg-[#F7F8FA]/60 p-6 sm:p-7"
              >
                <h3 className="text-base font-semibold text-slate-900 sm:text-lg">{faq.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-[15px]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 overflow-hidden bg-[#0B1E3B] py-16 text-white sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(234,179,8,0.12),_transparent_55%)]" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Bring a plan. We’ll put it on a map.</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Demo is on your project, not a fake layout. We’ll tell you which package fits the plot count.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-12 w-full rounded-full bg-[#EAB308] px-8 text-base font-bold text-[#0B1E3B] hover:bg-[#f0c43a] sm:w-auto"
              asChild
            >
              <Link href="/contact#demo-form">Book a demo</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 w-full rounded-full border-white/25 bg-transparent px-8 text-base font-semibold text-white hover:bg-white/10 sm:w-auto"
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
