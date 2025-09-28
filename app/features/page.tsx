import type { Metadata } from "next"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Features - Comprehensive Real Estate Management Solutions",
  description: "Discover our complete suite of real estate management features: interactive layouts, CRM system, financial tracking, project management, document handling, and analytics. Built for real estate developers.",
  keywords: [
    "real estate management features",
    "property management software features",
    "real estate CRM features",
    "plot management system",
    "real estate analytics features",
    "property sales management tools",
    "real estate project management",
    "property document management"
  ],
  openGraph: {
    title: "Features - Comprehensive Real Estate Management Solutions",
    description: "Discover our complete suite of real estate management features: interactive layouts, CRM system, financial tracking, project management, document handling, and analytics.",
    type: 'website',
    images: [
      {
        url: '/herosection.png',
        width: 1200,
        height: 630,
        alt: 'IdeatoLive Features Dashboard',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Features - Comprehensive Real Estate Management Solutions',
    description: 'Discover our complete suite of real estate management features for developers.',
  },
}

const featureCategories = [
  {
    title: "Layout & Visualization",
    description: "Advanced digital mapping and interactive plot visualization",
    features: [
      {
        title: "Interactive Site Plans",
        description: "Upload and digitize your site plans with high-resolution mapping. Customers can zoom, pan, and explore every detail of your layout.",
        icon: "🗺️",
        benefits: ["Plot visualization", "Mobile-responsive design", "Real-time updates"]
      },
      {
        title: "Plot Status Management",
        description: "Real-time status tracking for each plot - Available, Reserved, Booked, or Sold. Automatic color coding and status updates.",
        icon: "📍",
        benefits: ["Color-coded status system", "Automatic updates", "Conflict prevention"]
      },
      {
        title: "Multi-Layout Support",
        description: "Manage multiple projects and layouts from a single dashboard. Switch between different developments seamlessly.",
        icon: "🏗️",
        benefits: ["Unlimited layouts", "Centralized management", "Project isolation"]
      }
    ]
  },
  {
    title: "Sales & Booking Management",
    description: "Streamlined sales process with automated booking and reservation systems",
    features: [
      {
        title: "Plot Reservation System",
        description: "Temporary plot freezing to prevent double bookings. Configurable reservation periods with automatic expiry.",
        icon: "⏰",
        benefits: ["Configurable time limits", "Automatic expiry", "Conflict prevention"]
      },
      {
        title: "Booking Confirmation",
        description: "Secure booking process with digital contracts, payment integration, and automated confirmations.",
        icon: "📋",
        benefits: ["Digital contracts", "Payment integration", "Automated confirmations"]
      },
      {
        title: "Customer Management",
        description: "Comprehensive CRM with customer profiles, communication history, and lead tracking.",
        icon: "👥",
        benefits: ["Customer profiles", "Communication tracking", "Lead management"]
      }
    ]
  },
  {
    title: "Payment & Financial Management",
    description: "Complete financial tracking and payment processing solutions",
    features: [
      {
        title: "Payment Tracking",
        description: "Track all payments, installments, and dues with detailed financial reports and analytics.",
        icon: "💰",
        benefits: ["Installment tracking", "Financial reports", "Due date alerts"]
      },
      {
        title: "Financial Analytics",
        description: "Comprehensive financial dashboards with revenue tracking, collection reports, and forecasting.",
        icon: "📊",
        benefits: ["Revenue tracking", "Collection reports", "Financial forecasting"]
      }
    ]
  },
  {
    title: "Customer Experience",
    description: "Enhanced customer portals and self-service capabilities",
    features: [
      {
        title: "Customer Portal",
        description: "Dedicated customer portal for plot documents, payment history, and project updates.",
        icon: "🏠",
        benefits: ["Document access", "Payment history", "Project updates"]
      },
      {
        title: "Mobile Responsive Design",
        description: "Fully responsive web interface that works perfectly on all devices and screen sizes.",
        icon: "📱",
        benefits: ["Mobile optimized", "Tablet friendly", "Cross-device compatibility"]
      },
      {
        title: "Document Management",
        description: "Secure document storage and sharing with role-based access controls.",
        icon: "📄",
        benefits: ["Secure storage", "Role-based access", "Version control"]
      }
    ]
  },
  {
    title: "Marketing & Lead Generation",
    description: "Built-in marketing tools and lead generation capabilities",
    features: [
      {
        title: "Project Landing Pages",
        description: "Professional marketing pages for each project with SEO optimization and lead capture forms.",
        icon: "🌐",
        benefits: ["SEO optimized", "Lead capture", "Professional design"]
      },
      {
        title: "Lead Management",
        description: "Comprehensive lead tracking with automated follow-ups and conversion analytics.",
        icon: "🎯",
        benefits: ["Automated follow-ups", "Conversion tracking", "Lead scoring"]
      },
    ]
  },
  {
    title: "Analytics & Reporting",
    description: "Comprehensive business intelligence and reporting tools",
    features: [
      {
        title: "Sales Analytics",
        description: "Detailed sales reports with conversion rates, revenue tracking, and performance metrics.",
        icon: "📈",
        benefits: ["Conversion tracking", "Revenue analytics", "Performance metrics"]
      },
      {
        title: "Custom Reports",
        description: "Generate custom reports with drag-and-drop interface and automated scheduling.",
        icon: "📋",
        benefits: ["Drag-and-drop interface", "Automated scheduling", "Custom metrics"]
      }
    ]
  }
]

const technicalFeatures = [
  {
    title: "Enterprise Security",
    description: "Bank-grade security with SSL encryption, role-based access, and audit trails",
    icon: "🔒"
  },
  {
    title: "API Integration",
    description: "RESTful APIs for seamless integration with existing business systems",
    icon: "🔗"
  },
  {
    title: "Cloud Infrastructure",
    description: "Scalable cloud infrastructure with high uptime guarantee",
    icon: "☁️"
  },
  {
    title: "Mobile Responsive",
    description: "Fully responsive design that works perfectly on all devices",
    icon: "📱"
  }
]

export default function FeaturesPage() {
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
              <Link href="/features" className="hover:text-foreground text-foreground">Features</Link>
              <Link href="/pricing" className="hover:text-foreground">Pricing</Link>
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
            Comprehensive Real Estate Management Features
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            Everything you need to digitize, manage, and scale your real estate business. 
            From interactive layouts to payment tracking, we've got you covered.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" asChild>
              <Link href="/#demo">Schedule Demo</Link>
            </Button>
            <Button className="text-black" size="lg" variant="outline" asChild>
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Feature Categories */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-20 md:px-6">
        <div className="space-y-16">
          {featureCategories.map((category, categoryIndex) => (
            <div key={category.title} className="space-y-8">
              {/* Category Header */}
              <div className="text-center max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                  {category.title}
                </div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">{category.title}</h2>
                <p className="text-lg text-muted-foreground">{category.description}</p>
              </div>
              
              {/* Features Grid */}
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {category.features.map((feature, featureIndex) => (
                  <Card key={feature.title} className="group p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-l-transparent hover:border-l-primary bg-gradient-to-br from-background to-primary/5">
                    <div className="space-y-6">
                      {/* Feature Header */}
                      <div className="flex items-start gap-4">
                        <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                          {feature.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                            {feature.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                      
                      {/* Benefits */}
                      <div className="space-y-3">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center gap-3 p-3 bg-white/50 rounded-lg group-hover:bg-primary/10 transition-colors">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                            <span className="text-sm font-medium">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Features */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-20 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold tracking-tight">Enterprise-Grade Technology</h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Built with enterprise security and scalability in mind
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {technicalFeatures.map((feature, index) => (
            <Card key={feature.title} className="p-6 text-center">
              <div className="space-y-4">
                <span className="text-3xl">{feature.icon}</span>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-20 md:px-6">
        <div className="rounded-2xl bg-gradient-to-r from-primary to-primary/90 text-primary-foreground p-8 md:p-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight mb-4">
            Ready to Transform Your Real Estate Business?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of developers who have already digitized their sales process. 
            Get a personalized demo and see how IdeatoLive can streamline your operations.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/#demo">Schedule Demo</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-black hover:bg-primary-foreground hover:text-primary" asChild>
              <Link href="/pricing">View Pricing</Link>
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
