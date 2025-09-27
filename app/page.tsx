import Hero from "@/components/marketing/hero"
import Features from "@/components/marketing/features"
import Steps from "@/components/marketing/steps"
import WhyChooseUs from "@/components/marketing/why-choose-us"
import CTA from "@/components/marketing/cta"

export default function Page() {
  return (
    <main>
      <Hero />
      <Features />
      <Steps />
      <WhyChooseUs />
      <CTA />
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
            <p className="text-pretty text-center md:text-left">
              © {new Date().getFullYear()} IdeatoLive. All rights reserved.
            </p>
            <nav className="flex flex-wrap items-center justify-center gap-6" aria-label="Footer">
              <a href="#features" className="hover:text-foreground">
                Features
              </a>
              <a href="#steps" className="hover:text-foreground">
                Steps
              </a>
              <a href="#why-choose-us" className="hover:text-foreground">
                Why us
              </a>
              <a href="tel:+917276495199" className="hover:text-foreground">
                +91 72764 95199
              </a>
              <a href="tel:+919595337334" className="hover:text-foreground">
                +91 95953 37334
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </main>
  )
}
