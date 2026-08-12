import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Map, Store } from "lucide-react"

const visualization = [
  {
    title: "Live map",
    description: "Every plot on the real layout. Green, frozen, booked, sold — same colours the site office uses.",
  },
  {
    title: "Work from the map",
    description: "Pan, zoom, tap a plot. Nobody should be selling from a spreadsheet on site.",
  },
  {
    title: "Your plan, digitized",
    description: "CAD or SVG in, or we cut plots on the keymap.",
  },
  {
    title: "On Google Maps too",
    description: "Same plots on satellite. Scale and rotate until they sit on the land.",
  },
  {
    title: "A link you can send",
    description: "Buyer opens it in the browser and can enquire from the plot. No app.",
  },
  {
    title: "Photos and nearby",
    description: "Gallery, YouTube, schools, hospitals, roads.",
  },
  {
    title: "Your labels",
    description: "Plot no, area, facing, rate, survey. Sq ft or sq m.",
  },
  {
    title: "Club plots",
    description: "Sell two or three neighbouring plots as one deal.",
  },
]

const platform = [
  {
    title: "Freeze, book, register, sold",
    description: "Hold the plot, take the token, collect, close. One record.",
  },
  {
    title: "Several plots, joint buyers",
    description: "One booking can cover more than one plot, and more than one name.",
  },
  {
    title: "CRM on the map",
    description: "Leads, site visits, follow-ups, My Day — tied to the plot they asked about.",
  },
  {
    title: "Ads into CRM",
    description: "Facebook and Instagram leads show up in the pipeline, not in someone’s WhatsApp.",
  },
  {
    title: "Money in",
    description: "Cash, UPI, cheque, loan. You can see what’s due and what’s late.",
  },
  {
    title: "Who gets what",
    description: "Ledger split for land owner, developer, and money partner.",
  },
  {
    title: "Broker portal",
    description: "CPs freeze and enquire on the same map your desk uses.",
  },
  {
    title: "Team and attendance",
    description: "Decide who can freeze, book, or see money. GPS attendance if you need it.",
  },
]

export default function PricingFeatures() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:py-20 md:px-6">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Map only, or map plus the desk
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-lg text-muted-foreground">
          Layouts stops at the layout. Layouts360 keeps going through booking and money.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <Card className="border-2">
          <CardHeader>
            <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-800">
              <Map className="h-5 w-5" aria-hidden />
            </div>
            <CardTitle className="text-xl">Layouts</CardTitle>
            <p className="text-sm text-muted-foreground">
              Live map and inventory. No freeze, no CRM, no payments. Also included inside Layouts360.
            </p>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {visualization.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" aria-hidden />
                  <span>
                    <span className="block font-semibold text-slate-900">{item.title}</span>
                    <span className="mt-0.5 block text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="border-2 border-[#EAB308]/40">
          <CardHeader>
            <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-[#EAB308]/15 text-[#0B1E3B]">
              <Store className="h-5 w-5" aria-hidden />
            </div>
            <CardTitle className="text-xl">Layouts360</CardTitle>
            <p className="text-sm text-muted-foreground">
              Same map. Then freeze, booking, CRM, money, brokers, and roles.
            </p>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {platform.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" aria-hidden />
                  <span>
                    <span className="block font-semibold text-slate-900">{item.title}</span>
                    <span className="mt-0.5 block text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
