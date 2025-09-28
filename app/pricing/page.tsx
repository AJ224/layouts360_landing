import type { Metadata } from "next"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import DemoForm from "@/components/marketing/demo-form"

export const metadata: Metadata = {
  title: "Pricing - Real Estate Management Solutions | Starting ₹20,000",
  description: "Transparent pricing for real estate management solutions. Website development starting at ₹20,000. Custom management software with flexible pricing. Get a free quote today.",
  keywords: [
    "real estate management pricing",
    "property management software cost",
    "real estate website development price",
    "property management system pricing",
    "real estate CRM pricing",
    "plot management software cost",
    "real estate analytics pricing",
    "property management platform cost"
  ],
  openGraph: {
    title: "Pricing - Real Estate Management Solutions | Starting ₹20,000",
    description: "Transparent pricing for real estate management solutions. Website development starting at ₹20,000. Custom management software with flexible pricing.",
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
    title: 'Pricing - Real Estate Management Solutions | Starting ₹20,000',
    description: 'Transparent pricing for real estate management solutions. Website development starting at ₹20,000.',
  },
}

const packages = [
  {
    name: "Website Development",
    price: "₹20,000+",
    description: "Professional landing pages for real estate companies",
    features: [
      "Company profile & vision showcase",
      "Projects portfolio display",
      "Contact forms & lead capture",
      "Mobile-responsive design",
      "SEO optimization",
      "Professional branding",
      "Hosting & maintenance included",
      "Static content management"
    ],
    cta: "Talk to Sales",
    popular: true
  },
  {
    name: "Management Software",
    price: "Custom Pricing",
    description: "Complete business management solution",
    features: [
      "Complete plot management system",
      "Real-time inventory tracking",
      "Payment & installment management",
      "Customer relationship management",
      "Financial reporting & analytics",
      "Document management system",
      "24/7 technical support"
    ],
    cta: "Talk to Sales",
    popular: false
  }
]


const faqs = [
  {
    question: "What's included in the website development pricing?",
    answer: "Our pricing includes design, development, testing, deployment, and initial setup. We also provide hosting, domain setup, and basic SEO optimization. Additional features can be added as per your requirements."
  },
  {
    question: "How long does it take to develop a website?",
    answer: "Basic websites take 2-3 weeks, Professional websites take 4-6 weeks, and Enterprise solutions take 8-12 weeks. Timeline depends on complexity and custom requirements."
  },
  {
    question: "What's the difference between website and management software?",
    answer: "Website is for customer-facing features like plot visualization and booking. Management software is for internal operations like inventory management, payments, CRM, and analytics."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we provide 1-3 years of support depending on your package. This includes bug fixes, updates, and technical assistance. Extended support plans are available."
  },
  {
    question: "Can I upgrade my package later?",
    answer: "Absolutely! You can upgrade from Basic to Professional or add additional features anytime. We'll migrate your data and ensure seamless transition."
  },
  {
    question: "Do you offer custom development?",
    answer: "Yes, we specialize in custom real estate management solutions. Contact us to discuss your specific requirements and get a tailored quote."
  }
]

export default function PricingPage() {
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
              <Link href="/pricing" className="hover:text-foreground text-foreground">Pricing</Link>
              <Link href="/contact" className="hover:text-foreground">Contact</Link>
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
            Transparent Pricing for Real Estate Solutions
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            Choose the perfect solution for your real estate business. From basic websites to comprehensive management systems.
          </p>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-20 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold tracking-tight">Our Solutions</h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Choose the perfect solution for your real estate business
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {packages.map((pkg, index) => (
            <Card key={pkg.name} className={`p-8 relative ${pkg.popular ? 'ring-2 ring-primary shadow-lg' : ''}`}>
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold">{pkg.name}</h3>
                  <p className="text-muted-foreground mt-2">{pkg.description}</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{pkg.price}</span>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full" size="lg" variant={pkg.popular ? "default" : "outline"} asChild>
                  <Link href="/contact">{pkg.cta}</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>


      {/* FAQ Section */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-20 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold tracking-tight">Frequently Asked Questions</h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Everything you need to know about our pricing and services
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
              <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-20 md:px-6">
        <div className="rounded-2xl bg-gradient-to-r from-primary to-primary/90 text-primary-foreground p-8 md:p-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and custom quote for your real estate project.
          </p>
          <div className="flex justify-center">
            <Button size="lg" variant="secondary" asChild>
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
