import { Card } from "@/components/ui/card"
import DemoForm from "@/components/marketing/demo-form"
import Header from "@/components/marketing/header"
import Footer from "@/components/marketing/footer"
import CtaSection from "@/components/marketing/cta-section"
import { CheckCircle2, MessageCircle, Phone } from "lucide-react"

export default function ContactPage() {
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
              <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
              Contact Us
            </div>
            <h1 className="mb-4 px-4 text-3xl font-bold tracking-tight text-gray-900 sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Let&apos;s Start a <br className="md:hidden" />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Talk to Us
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl px-4 text-base leading-relaxed text-gray-600 sm:mb-10 sm:text-lg md:text-xl">
              Ready to transform your real estate business? Contact our team for a personalized consultation and
              discover how Layouts360 can accelerate your growth.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16 md:pb-20">
        <div className="mx-auto grid max-w-4xl gap-6 sm:gap-8 md:grid-cols-2">
          <Card className="group h-full border-gray-100 bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:border-blue-100 hover:shadow-xl sm:p-8">
            <div className="flex flex-col items-center space-y-3 text-center sm:space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16 sm:rounded-2xl">
                <Phone className="h-6 w-6 text-blue-600 sm:h-8 sm:w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">Call Us</h3>
              <p className="text-sm text-gray-600 sm:text-base">Speak directly with our sales team for immediate assistance.</p>
              <div className="space-y-2 pt-2">
                <a href="tel:+917276495199" className="block text-base font-semibold text-gray-900 transition-colors hover:text-blue-600 sm:text-lg">
                  +91 72764 95199
                </a>
                <a href="tel:+919595337334" className="block text-base font-semibold text-gray-900 transition-colors hover:text-blue-600 sm:text-lg">
                  +91 95953 37334
                </a>
              </div>
            </div>
          </Card>

          <Card className="group h-full border-gray-100 bg-white/80 p-6 backdrop-blur-sm transition-all duration-300 hover:border-green-100 hover:shadow-xl sm:p-8">
            <div className="flex flex-col items-center space-y-3 text-center sm:space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16 sm:rounded-2xl">
                <MessageCircle className="h-6 w-6 text-green-600 sm:h-8 sm:w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">WhatsApp</h3>
              <p className="text-sm text-gray-600 sm:text-base">Chat with us for quick responses and instant support.</p>
              <div className="space-y-2 pt-2">
                <a
                  href="https://wa.me/917276495199"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-base font-semibold text-gray-900 transition-colors hover:text-green-600 sm:text-lg"
                >
                  Chat on WhatsApp
                </a>
                <p className="text-xs text-gray-500 sm:text-sm">Available 9 AM - 6 PM IST</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="demo-form" className="relative z-10 border-t border-gray-100 bg-gray-50/50 py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-start gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-24">
            <div>
              <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 sm:mb-6 sm:text-3xl md:text-4xl">
                See a Free Demo
              </h2>
              <p className="mb-8 text-base leading-relaxed text-gray-600 sm:mb-10 sm:text-lg">
                See how Layouts360 works in real life. We will show you how to solve your daily problems.
              </p>

              <div className="space-y-6 sm:space-y-8">
                {[
                  {
                    title: "Free Consultation",
                    description: "We see how you work now and show you a better way.",
                  },
                  {
                    title: "Custom Demo",
                    description: "See our platform in action with your specific use cases and requirements.",
                  },
                  {
                    title: "Setup Plan",
                    description: "Get a detailed roadmap for implementing our solutions in your business.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3 sm:gap-4">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-600 sm:h-6 sm:w-6" />
                    <div>
                      <h3 className="mb-1 text-sm font-bold text-gray-900 sm:text-base">{item.title}</h3>
                      <p className="text-sm text-gray-600 sm:text-base">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-xl sm:rounded-3xl sm:p-8">
              <div className="pointer-events-none absolute -mt-16 -mr-16 top-0 right-0 h-32 w-32 rounded-full bg-blue-500/5 blur-3xl" />
              <DemoForm />
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </div>
  )
}
