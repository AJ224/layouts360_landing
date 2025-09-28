import type { Metadata } from "next"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import DemoForm from "@/components/marketing/demo-form"

export const metadata: Metadata = {
  title: "Contact Us - Get Your Free Real Estate Management Demo",
  description: "Contact IdeatoLive for custom real estate management solutions. Call +91 72764 95199 or schedule a free demo. Professional support for real estate developers.",
  keywords: [
    "contact real estate management",
    "real estate software demo",
    "property management consultation",
    "real estate CRM demo",
    "plot management software demo",
    "real estate analytics consultation",
    "property management support",
    "real estate software contact"
  ],
  openGraph: {
    title: "Contact Us - Get Your Free Real Estate Management Demo",
    description: "Contact IdeatoLive for custom real estate management solutions. Call +91 72764 95199 or schedule a free demo.",
    type: 'website',
    images: [
      {
        url: '/herosection.png',
        width: 1200,
        height: 630,
        alt: 'Contact IdeatoLive for Real Estate Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - Get Your Free Real Estate Management Demo',
    description: 'Contact IdeatoLive for custom real estate management solutions. Call +91 72764 95199 or schedule a free demo.',
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
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
            <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
              <Link href="/" className="hover:text-foreground">Home</Link>
              <Link href="/features" className="hover:text-foreground">Features</Link>
              <Link href="/pricing" className="hover:text-foreground">Pricing</Link>
              <Link href="/contact" className="hover:text-foreground text-foreground">Contact</Link>
            </nav>
            <Button asChild>
              <Link href="/#demo">Get Demo</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-20 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            Ready to transform your real estate business? Contact our team for a personalized consultation 
            and discover how IdeatoLive can accelerate your growth.
          </p>
        </div>
      </section>

      {/* Contact Numbers */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-20 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          <Card className="p-8 text-center">
            <div className="space-y-4">
              <div className="text-4xl">📞</div>
              <h3 className="text-xl font-semibold">Call Us</h3>
              <p className="text-muted-foreground">Ready to transform your real estate business?</p>
              <div className="space-y-2">
                <a href="tel:+917276495199" className="block text-primary hover:text-primary/80 font-medium text-lg">
                  +91 72764 95199
                </a>
                <a href="tel:+919595337334" className="block text-primary hover:text-primary/80 font-medium text-lg">
                  +91 95953 37334
                </a>
              </div>
            </div>
          </Card>
          
          <Card className="p-8 text-center">
            <div className="space-y-4">
              <div className="text-4xl">💬</div>
              <h3 className="text-xl font-semibold">WhatsApp</h3>
              <p className="text-muted-foreground">Quick responses and instant support</p>
              <div className="space-y-2">
                <a href="https://wa.me/917276495199" className="block text-primary hover:text-primary/80 font-medium text-lg">
                  +91 72764 95199
                </a>
                <a href="https://wa.me/919595337334" className="block text-primary hover:text-primary/80 font-medium text-lg">
                  +91 95953 37334
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Demo Form Section */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-20 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight mb-6">
              Schedule a Personalized Demo
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get a customized demonstration of our real estate management solutions. 
              Our experts will show you exactly how IdeatoLive can solve your specific business challenges.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-semibold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Free Consultation</h3>
                  <p className="text-sm text-muted-foreground">We'll analyze your current processes and identify optimization opportunities.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-semibold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Custom Demo</h3>
                  <p className="text-sm text-muted-foreground">See our platform in action with your specific use cases and requirements.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-semibold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Implementation Plan</h3>
                  <p className="text-sm text-muted-foreground">Get a detailed roadmap for implementing our solutions in your business.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-2xl">
            <DemoForm />
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-20 md:px-6">
        <div className="rounded-2xl bg-gradient-to-r from-primary to-primary/90 text-primary-foreground p-8 md:p-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Don't wait to transform your real estate business. Contact us today and take the first step 
            towards digital transformation.
          </p>
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
