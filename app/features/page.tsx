"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Header from "@/components/marketing/header"
import Footer from "@/components/marketing/footer"
import CtaSection from "@/components/marketing/cta-section"
import { motion } from "framer-motion"
import { ArrowRight, Check, Layout, Database, Smartphone, Shield, BarChart3, Users, FileText, Globe } from "lucide-react"

// Note: Metadata export removed from client component. 
// In a real Next.js app, you'd move metadata to a separate layout.tsx or keep this page server-side 
// and make the content a client component. For this refactor, we'll keep it simple.

const featureCategories = [
  {
    title: "Maps and Layouts",
    description: "Bring your properties to life with our advanced digital mapping and interactive visualization tools.",
    icon: Layout,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    features: [
      {
        title: "Interactive Site Plans",
        description: "Upload and digitize your site plans. Allow customers to zoom, pan, and explore every detail of your layout from any device.",
        benefits: ["High-resolution mapping", "Mobile-responsive", "Real-time availability"]
      },
      {
        title: "Plot Status Management",
        description: "Visual status tracking for every plot. Instantly see what's Available, Reserved, Booked, or Sold with automatic color coding.",
        benefits: ["Color-coded system", "Instant updates", "Conflict prevention"]
      },
      {
        title: "Manage Multiple Projects",
        description: "Manage multiple phases or entirely different projects from a single, centralized dashboard.",
        benefits: ["Unlimited layouts", "Centralized control", "Project isolation"]
      }
    ]
  },
  {
    title: "Sales & Booking",
    description: "Streamline your entire sales process from lead capture to booking confirmation.",
    icon: Users,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    features: [
      {
        title: "Booking & Holding Plots",
        description: "Prevent double-bookings with temporary plot freezing. Set configurable reservation periods that auto-expire.",
        benefits: ["Auto-expiry timers", "Waitlist management", "Fair booking policy"]
      },
      {
        title: "Paperless Booking",
        description: "A completely paperless booking experience. Generate digital contracts, collect payments, and send automated confirmations.",
        benefits: ["Digital contracts", "Payment gateway", "Instant receipts"]
      },
      {
        title: "CRM Integration",
        description: "Built-in CRM to manage customer profiles, track communication history, and nurture leads through the funnel.",
        benefits: ["Customer 360° view", "Lead scoring", "Interaction logs"]
      }
    ]
  },
  {
    title: "Happy Customers",
    description: "Delight your customers with modern, self-service tools and transparent information.",
    icon: Smartphone,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    features: [
      {
        title: "Client Portal",
        description: "Give buyers their own dedicated space to view documents, track payment history, and see project updates.",
        benefits: ["Document repository", "Payment tracking", "Project timeline"]
      },
      {
        title: "Mobile-First Design",
        description: "Ensure a flawless experience whether your customers are browsing on a desktop, tablet, or smartphone.",
        benefits: ["Responsive UI", "Touch-optimized", "Fast loading"]
      },
      {
        title: "Secure Document Vault",
        description: "Bank-grade security for storing sensitive property documents and agreements.",
        benefits: ["Encrypted storage", "Role-based access", "Audit trails"]
      }
    ]
  },
  {
    title: "Reports and Growth",
    description: "Make data-driven decisions with comprehensive reporting and marketing tools.",
    icon: BarChart3,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    features: [
      {
        title: "Sales Intelligence",
        description: "Deep dive into your sales performance. Track conversion rates, revenue velocity, and team performance.",
        benefits: ["Real-time dashboard", "Revenue forecasting", "Team metrics"]
      },
      {
        title: "Marketing Landing Pages",
        description: "Auto-generate SEO-optimized landing pages for each of your projects to capture high-intent leads.",
        benefits: ["SEO ready", "Lead capture forms", "Pixel integration"]
      },
      {
        title: "Custom Reporting",
        description: "Create tailored reports that matter to your stakeholders. Schedule them to be delivered automatically.",
        benefits: ["Drag-and-drop builder", "Scheduled emails", "Export to PDF/Excel"]
      }
    ]
  }
]

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header theme="light" />

      {/* Hero Section */}
      <section className="relative pt-16 sm:pt-20 pb-20 sm:pb-28 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-xs sm:text-sm font-medium text-gray-600 mb-4 sm:mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              Packed with Features
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6 px-4">
              Everything you need to <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                sell faster
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-4">
              The only software you need to run your plot business. From the first call to the final sale, we do it all.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
              <Button size="lg" className="rounded-full px-6 sm:px-8 h-11 sm:h-12 text-sm sm:text-base bg-gray-900 hover:bg-gray-800 text-white w-full sm:w-auto" asChild>
                <Link href="/#demo">Schedule Demo</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-6 sm:px-8 h-11 sm:h-12 text-sm sm:text-base border-gray-200 hover:bg-gray-50 w-full sm:w-auto" asChild>
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sticky Categories Section */}
      <div className="relative bg-white">
        {featureCategories.map((category, index) => (
          <section key={category.title} className="py-12 sm:py-16 md:py-20 border-t border-gray-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-24">

                {/* Sticky Left Column */}
                <div className="lg:col-span-4">
                  <div className="lg:sticky lg:top-32">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl ${category.bg} ${category.color} flex items-center justify-center mb-4 sm:mb-6`}>
                      <category.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">{category.title}</h2>
                    <p className="text-base sm:text-lg text-gray-500 leading-relaxed mb-6 sm:mb-8">
                      {category.description}
                    </p>
                    <Button variant="ghost" className={`p-0 hover:bg-transparent ${category.color} hover:${category.color} group`} asChild>
                      <Link href="/contact" className="flex items-center gap-2 text-sm sm:text-base">
                        Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Scrollable Right Column */}
                <div className="lg:col-span-8">
                  <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                    {category.features.map((feature, fIndex) => (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: fIndex * 0.1 }}
                      >
                        <Card className="h-full p-6 sm:p-8 border-gray-100 bg-gray-50/50 hover:bg-white hover:border-gray-200 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 group">
                          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors">
                            {feature.title}
                          </h3>
                          <p className="text-sm sm:text-base text-gray-500 mb-4 sm:mb-6 leading-relaxed">
                            {feature.description}
                          </p>
                          <ul className="space-y-2 sm:space-y-3">
                            {feature.benefits.map((benefit) => (
                              <li key={benefit} className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                                <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA Section */}
      <CtaSection />

      <Footer />
    </div>
  )
}
