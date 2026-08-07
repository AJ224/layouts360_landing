import type { LucideIcon } from "lucide-react"
import {
  BadgeCheck,
  CalendarCheck2,
  FileSignature,
  MapPin,
  MessageSquareText,
  Wallet2,
} from "lucide-react"
import { Section, SectionHeader } from "@/components/marketing/landing/ui"

interface WorkflowStep {
  icon: LucideIcon
  title: string
  description: string
}

const WORKFLOW: WorkflowStep[] = [
  {
    icon: MessageSquareText,
    title: "Enquiry captured",
    description: "Portal, walk-in, or partner leads land in CRM with plot interest recorded from the first contact.",
  },
  {
    icon: MapPin,
    title: "Site visit scheduled",
    description: "Visit is logged against real plots shown, with feedback and next steps tracked—not left to memory.",
  },
  {
    icon: CalendarCheck2,
    title: "Plot blocked or tokened",
    description: "A timed hold reserves the plot on the live layout so no one else can book it during the decision window.",
  },
  {
    icon: BadgeCheck,
    title: "Booking confirmed",
    description: "Hold converts to a confirmed booking; plot status updates to Booked for every viewer instantly.",
  },
  {
    icon: Wallet2,
    title: "Payments & installments tracked",
    description: "Token, milestone, and installment payments are recorded against the booking with tax support where applicable.",
  },
  {
    icon: FileSignature,
    title: "Documentation & handover",
    description: "Allotment letters, agreements, and receipts stay attached to the plot record through registration.",
  },
]

export function CustomerWorkflowSection() {
  return (
    <Section className="bg-slate-50 py-20">
      <SectionHeader
        eyebrow="Customer workflow"
        eyebrowClassName="bg-emerald-100 text-emerald-700"
        title="From first enquiry to handover, on one plot record"
        description="Every step below updates the same plot and customer record—so sales, finance, and management always see the same status."
      />
      <div className="mx-auto max-w-6xl">
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WORKFLOW.map((step, index) => (
            <li key={step.title} className="relative rounded-2xl border border-slate-200 bg-white p-6">
              <span className="absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
                {index + 1}
              </span>
              <step.icon className="h-6 w-6 text-emerald-700" aria-hidden />
              <h3 className="mt-3 text-base font-bold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
