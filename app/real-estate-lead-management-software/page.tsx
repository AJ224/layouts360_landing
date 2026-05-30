import type { Metadata } from "next"
import Link from "next/link"
import { Target, Users, Bell } from "lucide-react"
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

const PATH = "/real-estate-lead-management-software"

export const metadata: Metadata = {
  title: "Real Estate Lead Management Software | Layouts360",
  description:
    "Real estate lead management software for Indian developers—capture portal leads, assign follow-ups, track site visits, and convert faster with plot-linked CRM.",
  keywords: [...PAGE_KEYWORDS.lead],
  alternates: { canonical: absoluteUrl(PATH) },
  openGraph: {
    title: "Real Estate Lead Management Software | Layouts360",
    description:
      "Capture, assign, and convert leads with follow-up discipline tied to plot inventory and sales pipeline.",
    type: "website",
    url: absoluteUrl(PATH),
  },
}

const FAQ = [
  {
    question: "What is real estate lead management software?",
    answer:
      "It is software that captures buyer inquiries, routes them to the right agent, schedules follow-ups, and tracks progress until booking. Layouts360 adds plot-level context so you know which layout and unit each lead wants.",
  },
  {
    question: "How do real estate companies manage leads without losing them?",
    answer:
      "Successful teams use a single system for lead capture, assignment rules, follow-up reminders, and visit outcomes—not spreadsheets and WhatsApp groups. Layouts360 centralizes leads and ties them to live inventory.",
  },
  {
    question: "Can I import leads from property portals?",
    answer:
      "You can enter leads manually or import CSV exports from 99acres, MagicBricks, and other channels. Each lead stores source, budget, and preferred plot for reporting.",
  },
  {
    question: "How does lead management connect to CRM?",
    answer:
      "Lead management is the front of your CRM: capture and qualify. Layouts360 continues the same record through site visits, booking, and payments. See our real estate CRM software page for the full lifecycle.",
  },
  {
    question: "Do agents get follow-up reminders?",
    answer:
      "Yes. Agents receive reminders for scheduled calls and site visits so leads do not stall. Managers can see overdue follow-ups by agent.",
  },
] as const

export default function RealEstateLeadManagementSoftwarePage() {
  return (
    <SeoPageShell>
      <SeoHero
        title="Real Estate Lead Management Software"
        subtitle={
          <>
            Capture every inquiry, assign follow-ups, and convert faster with{" "}
            <strong>real estate lead management software</strong> tied to your plot inventory—not
            scattered WhatsApp threads.
          </>
        }
      />

      <SeoSection title="How real estate companies manage leads with Layouts360">
        <p className="mb-8 text-lg leading-relaxed text-gray-700">
          Most developers lose revenue in the gap between first call and site visit. Lead management
          software closes that gap with structure: who owns the lead, what to do next, and which plot
          to show.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <Target className="mb-4 h-10 w-10 text-blue-600" />
            <h3 className="mb-2 text-xl font-semibold text-gray-900">Capture</h3>
            <p className="text-gray-700">
              Log portal leads, walk-ins, broker referrals, and campaign responses in one place with
              source tracking.
            </p>
          </div>
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <Users className="mb-4 h-10 w-10 text-purple-600" />
            <h3 className="mb-2 text-xl font-semibold text-gray-900">Assign</h3>
            <p className="text-gray-700">
              Route leads to agents or teams. Link interest to specific plots and phases on your layout.
            </p>
          </div>
          <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <Bell className="mb-4 h-10 w-10 text-teal-600" />
            <h3 className="mb-2 text-xl font-semibold text-gray-900">Follow up</h3>
            <p className="text-gray-700">
              Reminders for calls and site visits. Pipeline stages show who is close to booking.
            </p>
          </div>
        </div>
        <SeoClusterNav currentPath={PATH} />
      </SeoSection>

      <SeoSection title="Lead management vs spreadsheets and WhatsApp" muted>
        <p className="mb-4 text-lg text-gray-700">
          Excel and chat groups hide leads in forwarded messages. You cannot report conversion by source
          or agent. <strong>Real estate lead management software</strong> gives you audit trails and
          accountability.
        </p>
        <ul className="list-inside list-disc space-y-2 text-lg text-gray-700">
          <li>No duplicate follow-ups on the same buyer</li>
          <li>Manager visibility into stalled leads</li>
          <li>Plot availability checked before promising a unit</li>
          <li>Handoff from marketing to sales without data loss</li>
        </ul>
        <p className="mt-6 text-lg text-gray-700">
          Full buyer lifecycle? Explore{" "}
          <Link href="/real-estate-crm-software" className="font-semibold text-blue-600 underline">
            real estate CRM software
          </Link>{" "}
          and{" "}
          <Link href="/real-estate-client-management-software" className="font-semibold text-blue-600 underline">
            client management
          </Link>
          .
        </p>
      </SeoSection>

      <SeoSection title="Built for layout developers in India">
        <p className="text-lg text-gray-700">
          Layouts360 lead management is part of the same platform as digital layouts, inventory, and
          payment tracking—so when a lead books, inventory and finance stay in sync. Pricing starts at
          ₹2,000/month for sales teams ready to stop losing inquiries.
        </p>
      </SeoSection>

      <SeoFaq items={[...FAQ]} />
      <SeoCta
        title="Stop losing leads between inquiry and site visit"
        description="See lead capture, assignment, and follow-up workflows in a live Layouts360 demo."
      />
    </SeoPageShell>
  )
}
