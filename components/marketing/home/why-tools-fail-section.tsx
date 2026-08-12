import { FileSpreadsheet, MessageCircle, Users2 } from "lucide-react"
import { Section, SectionHeader } from "@/components/marketing/landing/ui"

const TOOLS = [
  {
    icon: FileSpreadsheet,
    name: "Excel",
    question: "Why does Excel fail for plot management?",
    problems: [
      "No live sync—two agents open two versions of the same sheet",
      "No map, no plot geometry, no facing or dimension logic",
      "One wrong cell edit can mark a sold plot as available",
      "No audit trail for who changed a status and when",
    ],
    instead: "One live plot inventory every agent, partner, and manager sees at the same time.",
  },
  {
    icon: MessageCircle,
    name: "WhatsApp",
    question: "Why does WhatsApp fail for plot sales?",
    problems: [
      "PDF layouts are outdated the moment they're forwarded",
      "No record of what was promised to which buyer",
      "Brokers pitch sold plots because the group missed an update",
      "Zero reporting—leadership can't see sold % from a chat thread",
    ],
    instead: "A live, shareable layout link that always shows current availability—no forwarding required.",
  },
  {
    icon: Users2,
    name: "Generic CRM",
    question: "Why do generic CRMs (HubSpot, Zoho, Salesforce) fall short?",
    problems: [
      "Built for deals and contacts—not plots, phases, or layouts",
      "No plot-level inventory or booking-hold logic",
      "Teams bolt on custom fields but inventory still lives in Excel",
      "No channel partner portal tied to real availability",
    ],
    instead: "CRM, inventory, bookings, and partner portals built around the plot—not a generic deal object.",
  },
] as const

export function WhyToolsFailSection() {
  return (
    <Section id="why-not-excel" className="bg-slate-50 py-20">
      <SectionHeader
        eyebrow="How is Layouts360 different"
        eyebrowClassName="bg-amber-100 text-amber-700"
        title="Excel, WhatsApp, and generic CRM were never built for plot sales"
        description="Each tool solves a different problem well. None of them was designed for real estate companies that track plots, prevent double bookings, or scale a broker network. Plot management software was."
      />

      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
        {TOOLS.map((tool) => (
          <article
            key={tool.name}
            className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
              <tool.icon className="h-6 w-6 text-slate-700" aria-hidden />
            </div>
            <h3 className="text-lg font-bold text-slate-900">{tool.question}</h3>
            <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-slate-600">
              {tool.problems.map((problem) => (
                <li key={problem} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" aria-hidden />
                  {problem}
                </li>
              ))}
            </ul>
            <div className="mt-5 rounded-xl bg-emerald-50 p-4 text-sm font-medium text-emerald-900">
              <span className="font-semibold text-emerald-700">Layouts360 instead: </span>
              {tool.instead}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
