import type { Metadata } from "next"
import Link from "next/link"
import { Check, X } from "lucide-react"
import {
  SeoClusterNav,
  SeoCta,
  SeoFaq,
  SeoHero,
  SeoPageShell,
  SeoSection,
} from "@/components/marketing/seo-landing"
import { PAGE_KEYWORDS } from "@/lib/seo-keywords"
import { absoluteUrl } from "@/lib/site-seo"

const PATH = "/real-estate-crm-software"

export const metadata: Metadata = {
  title: "Real Estate CRM Software for Builders & Developers | Layouts360",
  description:
    "Real estate CRM software built for plot developers and builders in India. Tie leads to plots, track follow-ups, bookings, and sales—without generic CRM chaos.",
  keywords: [...PAGE_KEYWORDS.crm],
  alternates: { canonical: absoluteUrl(PATH) },
  openGraph: {
    title: "Real Estate CRM Software | Layouts360",
    description:
      "Purpose-built CRM for layout developers: plot-linked leads, pipeline visibility, and inventory in one system.",
    type: "website",
    url: absoluteUrl(PATH),
  },
}

const FAQ = [
  {
    question: "What is real estate CRM software?",
    answer:
      "Real estate CRM software helps developers and sales teams capture leads, schedule follow-ups, track site visits, and move buyers from inquiry to booking. Layouts360 extends CRM with plot-level inventory so every lead is tied to specific units on your layout map.",
  },
  {
    question: "How is a real estate CRM different from HubSpot or Zoho?",
    answer:
      "Generic CRMs manage contacts and deals. A real estate CRM understands plots, phases, availability status, booking amounts, and site visits. Layouts360 combines CRM with digital layouts and inventory so agents never sell a plot that is already booked.",
  },
  {
    question: "Is Layouts360 a CRM for real estate agents?",
    answer:
      "Yes. Sales agents, channel partners, and office staff can capture leads on mobile, assign follow-ups, and update pipeline stages. Managers see which agent is working which lead and which plots are hot.",
  },
  {
    question: "Can I use Layouts360 as CRM for builders and developers?",
    answer:
      "Layouts360 is designed for layout developers, villa projects, and builders selling open plots or units—not for rental or tenant management. If you sell inventory to end buyers, it fits your workflow.",
  },
  {
    question: "Does the CRM connect to plot management?",
    answer:
      "Yes. CRM, lead management, and plot inventory share one database. When a lead books Plot 42, availability updates instantly across your team and customer-facing layout.",
  },
] as const

export default function RealEstateCrmSoftwarePage() {
  return (
    <SeoPageShell>
      <SeoHero
        title="Real Estate CRM Software for Builders & Developers"
        subtitle={
          <>
            <strong>Real estate CRM software</strong> that links every lead to real plot inventory—not
            another generic contact list. Built for layout developers and builders in India who sell
            plots, not leases.
          </>
        }
      />

      <SeoSection title="What is real estate CRM software?">
        <p className="mb-4 text-lg leading-relaxed text-gray-700">
          Real estate CRM software organizes your sales pipeline from first inquiry to booking and
          handover. Buyers searching for <em>crm for real estate</em> or <em>real estate crm software</em>{" "}
          usually need:
        </p>
        <ul className="mb-4 list-inside list-disc space-y-2 text-lg text-gray-700">
          <li>Lead capture from 99acres, MagicBricks, walk-ins, and referrals</li>
          <li>Follow-up reminders so hot leads do not go cold</li>
          <li>Site visit scheduling and outcome tracking</li>
          <li>Plot-specific interest (which unit is the buyer considering?)</li>
          <li>Booking and payment status tied to the customer record</li>
        </ul>
        <p className="text-lg leading-relaxed text-gray-700">
          Layouts360 is a <strong>CRM for builders and developers</strong> selling layouts, plots, and
          commercial units—with interactive maps and live availability built in.
        </p>
        <SeoClusterNav currentPath={PATH} />
      </SeoSection>

      <SeoSection title="Why generic CRMs fail for plot developers" muted>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-red-100 bg-white p-6 shadow-sm">
            <div className="mb-3 flex items-start gap-3">
              <X className="mt-1 h-6 w-6 shrink-0 text-red-500" />
              <h3 className="text-xl font-semibold text-gray-900">No plot context</h3>
            </div>
            <p className="text-gray-700">
              HubSpot does not know Plot 42 in Phase 2 exists. You cannot see which plots drive the
              most inquiries.
            </p>
          </div>
          <div className="rounded-lg border border-green-100 bg-white p-6 shadow-sm">
            <div className="mb-3 flex items-start gap-3">
              <Check className="mt-1 h-6 w-6 shrink-0 text-green-600" />
              <h3 className="text-xl font-semibold text-gray-900">Layouts360</h3>
            </div>
            <p className="text-gray-700">
              Every lead links to layout inventory. Agents show the exact plot on a satellite map during
              site visits.
            </p>
          </div>
        </div>
        <p className="mt-6 text-lg text-gray-700">
          Need deeper lead workflows? See our{" "}
          <Link href="/real-estate-lead-management-software" className="font-semibold text-blue-600 underline">
            real estate lead management software
          </Link>{" "}
          page. Comparing options? Read{" "}
          <Link href="/best-real-estate-crm-software" className="font-semibold text-blue-600 underline">
            best real estate CRM software in India
          </Link>
          .
        </p>
      </SeoSection>

      <SeoSection title="CRM software for real estate agents on your team">
        <p className="mb-4 text-lg text-gray-700">
          Field agents need mobile access, not desk-only dashboards. Layouts360 lets agents log calls,
          schedule follow-ups, and mark site visits complete from their phone—while managers see
          pipeline health by agent and by plot.
        </p>
        <ul className="list-inside list-disc space-y-2 text-lg text-gray-700">
          <li>Unlimited users on plans (no per-seat surprise bills)</li>
          <li>Lead source tracking (portal, referral, walk-in)</li>
          <li>Pipeline stages: Inquiry → Visit → Negotiation → Booked → Sold</li>
          <li>Integration with payment tracking and digital plot cards</li>
        </ul>
      </SeoSection>

      <SeoFaq items={[...FAQ]} />
      <SeoCta
        title="Ready for a real estate CRM that understands plots?"
        description="See how Layouts360 connects CRM, leads, and inventory in one demo—built for developers, not generic SaaS."
      />
    </SeoPageShell>
  )
}
