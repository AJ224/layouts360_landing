import { Card } from "@/components/ui/card"
import PricingCards from "@/components/pricing/pricing-cards"
import Header from "@/components/marketing/header"
import Footer from "@/components/marketing/footer"
import CtaSection from "@/components/marketing/cta-section"

const faqs = [
  {
    question: "How does subscription pricing work?",
    answer: "We share pricing on enquiry after understanding your plot count and requirements.",
  },
  {
    question: "What's the plot pricing?",
    answer: "Setup and plot-based pricing depends on your layout complexity and total plots. Contact us for a quick quote.",
  },
  {
    question: "Do I need my own domain?",
    answer: "No. You can use our link. If you want your own domain, we'll guide you and include it in the quote.",
  },
  {
    question: "Can I change my plan later?",
    answer: "Yes. Upgrade or modify anytime with prorated billing. Contact support for assistance.",
  },
]

export default function PricingPageContent() {
  return (
    <div className="relative min-h-screen bg-white selection:bg-blue-100">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-0 left-1/2 h-[400px] w-[1000px] -translate-x-1/2 rounded-full bg-blue-500/5 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-[600px] w-[800px] rounded-full bg-purple-500/5 blur-[120px]" />
      </div>

      <Header theme="light" />

      <section className="relative z-10 overflow-hidden pt-16 sm:pt-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 sm:mb-6 sm:text-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              Best Value for Money
            </div>
            <h1 className="mb-4 px-4 text-3xl font-bold tracking-tight text-gray-900 sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Make Profit from <br className="md:hidden" />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Day One
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl px-4 text-base leading-relaxed text-gray-600 sm:mb-10 sm:text-lg md:text-xl">
              Software that pays for itself. Manage your entire layout for less than the cost of a few site visits.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16">
        <PricingCards />
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 md:py-24">
        <div className="mb-12 px-4 text-center sm:mb-16">
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 sm:mb-4 sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-gray-600 sm:text-lg">Quick answers to common questions about our pricing and plans.</p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          {faqs.map((faq) => (
            <Card
              key={faq.question}
              className="h-full border-gray-100 bg-white p-6 transition-all duration-300 hover:border-blue-100 hover:shadow-lg sm:p-8"
            >
              <h3 className="mb-2 text-base font-bold text-gray-900 sm:mb-3 sm:text-lg">{faq.question}</h3>
              <p className="text-sm leading-relaxed text-gray-600 sm:text-base">{faq.answer}</p>
            </Card>
          ))}
        </div>
      </section>

      <CtaSection />
      <Footer />
    </div>
  )
}
