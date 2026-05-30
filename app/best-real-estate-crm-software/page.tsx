import type { Metadata } from "next"
import Link from "next/link"
import { Check } from "lucide-react"
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

const PATH = "/best-real-estate-crm-software"

export const metadata: Metadata = {
  title: "Best Real Estate CRM Software in India (2026) | Layouts360",
  description:
    "Looking for the best real estate CRM software in India? Compare what matters for plot developers—plot-linked leads, inventory, maps, and pricing vs generic CRMs.",
  keywords: [...PAGE_KEYWORDS.bestCrm],
  alternates: { canonical: absoluteUrl(PATH) },
  openGraph: {
    title: "Best Real Estate CRM Software in India | Layouts360",
    description:
      "Buyer’s guide: how to choose the best real estate CRM for builders and layout developers in India.",
    type: "website",
    url: absoluteUrl(PATH),
  },
}

const CRITERIA = [
  "Links leads to specific plots and phases—not just contact names",
  "Shows live availability to prevent double bookings",
  "Works on mobile for site visits and field sales",
  "Understands Indian payment flows (booking, installments, GST)",
  "Affordable for growing developer teams (not enterprise-only pricing)",
  "Includes or integrates digital layout / map selling",
] as const

const FAQ = [
  {
    question: "What is the best real estate CRM software in India?",
    answer:
      "The best fit depends on your business model. For layout and plot developers, choose a CRM that connects leads to inventory and digital maps—not a generic global CRM. Layouts360 is built specifically for selling plots and units in India.",
  },
  {
    question: "Is Salesforce or HubSpot the best real estate CRM?",
    answer:
      "They work for large brokerages and marketing teams but lack plot inventory and layout maps out of the box. Developers often pay for heavy customization. Mid-size layout developers typically need a specialized real estate CRM.",
  },
  {
    question: "What should builders look for in a CRM?",
    answer:
      "Plot-linked leads, site visit tracking, agent accountability, booking and payment status, and integration with how you actually sell (maps, phases, commercial units). See our criteria list on this page.",
  },
  {
    question: "How much does real estate CRM software cost in India?",
    answer:
      "Layouts360 starts at ₹2,000/month for sales teams, with unlimited users on plans—unlike per-seat global CRMs that scale cost quickly as you hire agents.",
  },
  {
    question: "Can I try Layouts360 before buying?",
    answer:
      "Yes. Book a free demo via the contact page. We walk through lead management, CRM pipeline, and plot inventory on your project type.",
  },
] as const

export default function BestRealEstateCrmSoftwarePage() {
  return (
    <SeoPageShell>
      <SeoHero
        title="Best Real Estate CRM Software in India (2026)"
        subtitle={
          <>
            Searching <strong>best real estate crm</strong> or <strong>best real estate crm software</strong>?
            This guide explains what plot developers and builders should evaluate—and where Layouts360
            fits.
          </>
        }
      />

      <SeoSection title="How to choose the best real estate CRM software">
        <p className="mb-6 text-lg text-gray-700">
          Buyer-intent searches like <em>best real estate crm software</em> mean you are close to a
          decision. Skip generic lists that rank global tools for US brokerages. For Indian layout
          developers, evaluate against your actual sales motion:
        </p>
        <ul className="space-y-3">
          {CRITERIA.map((item) => (
            <li key={item} className="flex items-start gap-3 text-lg text-gray-700">
              <Check className="mt-1 h-5 w-5 shrink-0 text-green-600" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <SeoClusterNav currentPath={PATH} />
      </SeoSection>

      <SeoSection title="Why Layouts360 ranks well for builders and developers" muted>
        <p className="mb-4 text-lg text-gray-700">
          Layouts360 is not a bolt-on CRM module on generic software. It is a unified system for selling
          plots: digital layouts, inventory,{" "}
          <Link href="/real-estate-lead-management-software" className="font-semibold text-blue-600 underline">
            lead management
          </Link>
          ,{" "}
          <Link href="/real-estate-crm-software" className="font-semibold text-blue-600 underline">
            CRM
          </Link>
          , and payments.
        </p>
        <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
          <table className="w-full min-w-[480px] text-left text-sm">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="p-4 font-semibold text-gray-900">Capability</th>
                <th className="p-4 font-semibold text-gray-900">Generic CRM</th>
                <th className="p-4 font-semibold text-gray-900">Layouts360</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b">
                <td className="p-4 font-medium">Plot-level leads</td>
                <td className="p-4">Custom fields only</td>
                <td className="p-4">Native</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Layout / map selling</td>
                <td className="p-4">Not included</td>
                <td className="p-4">Built-in</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-medium">Double-booking prevention</td>
                <td className="p-4">Manual</td>
                <td className="p-4">Live inventory</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">India pricing (INR)</td>
                <td className="p-4">USD / per seat</td>
                <td className="p-4">From ₹2,000/mo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </SeoSection>

      <SeoSection title="CRM for builders vs CRM for brokerages">
        <p className="text-lg text-gray-700">
          Brokerages need listing syndication and rental workflows. <strong>CRM for builders and
          developers</strong> needs phase-wise plot sales, channel partner leads, and booking amounts.
          Layouts360 targets the second group—layout developers, villa projects, and commercial plot
          sales in India.
        </p>
      </SeoSection>

      <SeoFaq items={[...FAQ]} />
      <SeoCta
        title="See if Layouts360 is the best fit for your project"
        description="Book a demo and compare lead management, CRM, and plot selling in one walkthrough."
      />
    </SeoPageShell>
  )
}
