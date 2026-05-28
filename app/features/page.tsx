import { Card } from "@/components/ui/card"
import Link from "next/link"
import Header from "@/components/marketing/header"
import Footer from "@/components/marketing/footer"
import CtaSection from "@/components/marketing/cta-section"
import { MarketingButtonLink } from "@/components/ui/marketing-button-link"
import { ArrowRight, BarChart3, Check, Layout, Smartphone, Users } from "lucide-react"

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
        description:
          "Upload and digitize your site plans. Allow customers to zoom, pan, and explore every detail of your layout from any device.",
        benefits: ["High-resolution mapping", "Mobile-responsive", "Real-time availability"],
      },
      {
        title: "Plot Status Management",
        description:
          "Visual status tracking for every plot. Instantly see what's Available, Reserved, Booked, or Sold with automatic color coding.",
        benefits: ["Color-coded system", "Instant updates", "Conflict prevention"],
      },
      {
        title: "Manage Multiple Projects",
        description: "Manage multiple phases or entirely different projects from a single, centralized dashboard.",
        benefits: ["Unlimited layouts", "Centralized control", "Project isolation"],
      },
    ],
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
        description:
          "Prevent double-bookings with temporary plot freezing. Set configurable reservation periods that auto-expire.",
        benefits: ["Auto-expiry timers", "Waitlist management", "Fair booking policy"],
      },
      {
        title: "Paperless Booking",
        description:
          "A completely paperless booking experience. Generate digital contracts, collect payments, and send automated confirmations.",
        benefits: ["Digital contracts", "Payment gateway", "Instant receipts"],
      },
      {
        title: "CRM Integration",
        description:
          "Built-in CRM to manage customer profiles, track communication history, and nurture leads through the funnel.",
        benefits: ["Customer 360° view", "Lead scoring", "Interaction logs"],
      },
    ],
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
        description:
          "Give buyers their own dedicated space to view documents, track payment history, and see project updates.",
        benefits: ["Document repository", "Payment tracking", "Project timeline"],
      },
      {
        title: "Mobile-First Design",
        description:
          "Ensure a flawless experience whether your customers are browsing on a desktop, tablet, or smartphone.",
        benefits: ["Responsive UI", "Touch-optimized", "Fast loading"],
      },
      {
        title: "Secure Document Vault",
        description: "Bank-grade security for storing sensitive property documents and agreements.",
        benefits: ["Encrypted storage", "Role-based access", "Audit trails"],
      },
    ],
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
        description:
          "Deep dive into your sales performance. Track conversion rates, revenue velocity, and team performance.",
        benefits: ["Real-time dashboard", "Revenue forecasting", "Team metrics"],
      },
      {
        title: "Marketing Landing Pages",
        description:
          "Auto-generate SEO-optimized landing pages for each of your projects to capture high-intent leads.",
        benefits: ["SEO ready", "Lead capture forms", "Pixel integration"],
      },
      {
        title: "Custom Reporting",
        description:
          "Create tailored reports that matter to your stakeholders. Schedule them to be delivered automatically.",
        benefits: ["Drag-and-drop builder", "Scheduled emails", "Export to PDF/Excel"],
      },
    ],
  },
]

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header theme="light" />

      <section className="relative overflow-hidden pt-16 pb-20 sm:pt-20 sm:pb-28 md:pb-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 sm:mb-6 sm:text-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
              Packed with Features
            </div>
            <h1 className="mb-4 px-4 text-3xl font-bold tracking-tight text-gray-900 sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Everything you need to <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                sell faster
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl px-4 text-base leading-relaxed text-gray-600 sm:mb-10 sm:text-lg md:text-xl">
              The only software you need to run your plot business. From the first call to the final sale, we do it all.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 px-4 sm:flex-row sm:gap-4">
              <MarketingButtonLink href="/contact#demo-form" className="w-full sm:w-auto">
                Schedule Demo
              </MarketingButtonLink>
              <MarketingButtonLink href="/pricing" variant="outline" className="w-full sm:w-auto">
                View Pricing
              </MarketingButtonLink>
            </div>
          </div>
        </div>
      </section>

      <div className="relative bg-white">
        {featureCategories.map((category) => (
          <section key={category.title} className="border-t border-gray-100 py-12 sm:py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <div className="grid gap-8 sm:gap-12 lg:grid-cols-12 lg:gap-24">
                <div className="lg:col-span-4">
                  <div className="lg:sticky lg:top-32">
                    <div
                      className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl sm:mb-6 sm:h-12 sm:w-12 sm:rounded-2xl ${category.bg} ${category.color}`}
                    >
                      <category.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <h2 className="mb-3 text-2xl font-bold text-gray-900 sm:mb-4 sm:text-3xl">{category.title}</h2>
                    <p className="mb-6 text-base leading-relaxed text-gray-500 sm:mb-8 sm:text-lg">{category.description}</p>
                    <Link
                      href="/contact"
                      className={`group inline-flex items-center gap-2 text-sm font-medium sm:text-base ${category.color}`}
                    >
                      Learn more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-8">
                  <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                    {category.features.map((feature) => (
                      <Card
                        key={feature.title}
                        className="group h-full border-gray-100 bg-gray-50/50 p-6 transition-all duration-300 hover:border-gray-200 hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 sm:p-8"
                      >
                        <h3 className="mb-2 text-lg font-bold text-gray-900 transition-colors group-hover:text-blue-600 sm:mb-3 sm:text-xl">
                          {feature.title}
                        </h3>
                        <p className="mb-4 text-sm leading-relaxed text-gray-500 sm:mb-6 sm:text-base">{feature.description}</p>
                        <ul className="space-y-2 sm:space-y-3">
                          {feature.benefits.map((benefit) => (
                            <li key={benefit} className="flex items-center gap-2 text-xs text-gray-600 sm:text-sm">
                              <Check className="h-3 w-3 shrink-0 text-green-500 sm:h-4 sm:w-4" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <CtaSection />
      <Footer />
    </div>
  )
}
