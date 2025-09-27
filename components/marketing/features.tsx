import type React from "react"
import { Card } from "@/components/ui/card"

const features = [
  {
    title: "Layout Visualization",
    desc: "Interactive maps to view layouts and plots.",
    Icon: MapIcon,
  },
  {
    title: "Plot Booking & Freezing",
    desc: "Reserve and confirm plots in real time.",
    Icon: BookmarkIcon,
  },
  {
    title: "Payment Management",
    desc: "Track transactions and receipts with ease.",
    Icon: CreditCardIcon,
  },
  {
    title: "Customer Enquiries",
    desc: "Capture and manage all leads centrally.",
    Icon: InboxIcon,
  },
  {
    title: "Project Landing Pages",
    desc: "Ready-to-use marketing pages for each layout.",
    Icon: GlobeIcon,
  },
  {
    title: "Plot Documents Portal",
    desc: "End customers can access their plot documents anytime.",
    Icon: FileIcon,
  },
]

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-12 md:py-20 md:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          Everything you need to sell smarter
        </h2>
        <p className="mt-3 text-pretty text-muted-foreground">
          From layout maps to real-time bookings and payments, streamline your entire sales workflow.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <Card key={f.title} className="p-5">
            <div className="flex items-start gap-4">
              <div className="rounded-md bg-accent p-3 text-foreground">
                <f.Icon aria-hidden="true" className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-base font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

function MapIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeWidth="2" d="M9 18l-6 3V6l6-3 6 3 6-3v15l-6 3-6-3z" />
      <path strokeWidth="2" d="M9 3v15m6-12v15" />
    </svg>
  )
}
function BookmarkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeWidth="2" d="M6 3h12v18l-6-4-6 4V3z" />
    </svg>
  )
}
function CreditCardIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="2" />
      <path strokeWidth="2" d="M3 10h18" />
    </svg>
  )
}
function InboxIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeWidth="2" d="M4 4h16v12h-5l-3 4-3-4H4z" />
    </svg>
  )
}
function GlobeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <circle cx="12" cy="12" r="9" strokeWidth="2" />
      <path strokeWidth="2" d="M3 12h18M12 3c3 3 3 15 0 18m0-18c-3 3-3 15 0 18" />
    </svg>
  )
}

function FileIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeWidth="2" d="M6 2h8l4 4v16H6z" />
      <path strokeWidth="2" d="M14 2v6h6" />
    </svg>
  )
}
