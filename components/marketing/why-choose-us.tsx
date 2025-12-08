import type React from "react"
import { Card } from "@/components/ui/card"

const benefits = [
  {
    title: "Enterprise-Grade Security",
    description: "Bank-level security with SSL encryption, role-based access, and audit trails to protect your business data.",
    icon: ShieldIcon
  },
  {
    title: "Scalable Infrastructure",
    description: "Cloud-based solution that grows with your business, handling multiple projects and thousands of customers.",
    icon: CloudIcon
  },
  {
    title: "24/7 Technical Support",
    description: "Dedicated support team with real-time assistance, training, and ongoing maintenance for your success.",
    icon: SupportIcon
  },
  {
    title: "Custom Integration",
    description: "Seamless integration with your existing business systems, APIs, and third-party applications.",
    icon: IntegrationIcon
  },
  {
    title: "Proven ROI",
    description: "Significant increase in sales efficiency and reduction in manual processes for our clients.",
    icon: ChartIcon
  },
  {
    title: "Industry Expertise",
    description: "Built by real estate professionals for real estate professionals, with deep industry knowledge.",
    icon: BuildingIcon
  }
]

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="mx-auto max-w-6xl px-4 py-12 md:py-20 md:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">Why Choose Layouts360</h2>
        <p className="mt-3 text-pretty text-muted-foreground">
          Enterprise-grade solutions designed specifically for real estate developers who demand reliability, security, and scalability.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit) => (
          <Card key={benefit.title} className="p-6 hover:shadow-lg transition-shadow">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-3">
                  <benefit.icon aria-hidden="true" className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{benefit.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{benefit.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

function ShieldIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeWidth="2" d="M12 3l8 4v5c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V7l8-4z" />
    </svg>
  )
}

function CloudIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeWidth="2" d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  )
}

function SupportIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeWidth="2" d="M9 12l2 2 4-4" />
      <path strokeWidth="2" d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3" />
      <path strokeWidth="2" d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3" />
      <path strokeWidth="2" d="M12 3c0 1-1 3-3 3s-3-2-3-3 1-3 3-3 3 2 3 3" />
      <path strokeWidth="2" d="M12 21c0-1 1-3 3-3s3 2 3 3-1 3-3 3-3-2-3-3" />
    </svg>
  )
}

function IntegrationIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeWidth="2" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  )
}

function ChartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeWidth="2" d="M3 3v18h18" />
      <path strokeWidth="2" d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
    </svg>
  )
}

function BuildingIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeWidth="2" d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path strokeWidth="2" d="M6 12H4a2 2 0 0 0-2 2v8h4" />
      <path strokeWidth="2" d="M18 9h2a2 2 0 0 1 2 2v11h-4" />
      <path strokeWidth="2" d="M10 6h4" />
      <path strokeWidth="2" d="M10 10h4" />
      <path strokeWidth="2" d="M10 14h4" />
      <path strokeWidth="2" d="M10 18h4" />
    </svg>
  )
}
