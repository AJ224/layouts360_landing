const visualization = [
  {
    title: "Live map",
    description: "Every plot on the real layout. Available, frozen, booked, sold.",
  },
  {
    title: "Work from the map",
    description: "Pan, zoom, tap. No spreadsheet on site.",
  },
  {
    title: "Your plan, digitized",
    description: "CAD or SVG in, or plots cut on the keymap.",
  },
  {
    title: "On satellite",
    description: "Same plots on Google Maps. Scale and rotate to the land.",
  },
  {
    title: "A link you can send",
    description: "Opens in the browser. Buyers enquire from the plot.",
  },
  {
    title: "Photos and nearby",
    description: "Gallery, video, schools, hospitals, roads.",
  },
  {
    title: "Your labels",
    description: "Plot no, area, facing, rate, survey. Sq ft or sq m.",
  },
  {
    title: "Group plots",
    description: "Neighbouring plots as one deal.",
  },
]

const platform = [
  {
    title: "Freeze to sold",
    description: "Hold, token, collect, close. One record.",
  },
  {
    title: "Multi-plot, joint buyers",
    description: "One booking. Several plots. More than one name.",
  },
  {
    title: "CRM on the map",
    description: "Leads, visits, follow-ups, My Day — on the plot they asked about.",
  },
  {
    title: "Ads into CRM",
    description: "Facebook and Instagram leads arrive in the pipeline.",
  },
  {
    title: "Collections",
    description: "Cash, UPI, cheque, loan. Due and overdue in view.",
  },
  {
    title: "Ledger",
    description: "Split for land owner, developer, and money partner.",
  },
  {
    title: "Broker portal",
    description: "Partners freeze and enquire on the same map.",
  },
  {
    title: "Team",
    description: "Who can freeze, book, or see money. GPS attendance if needed.",
  },
]

export default function PricingFeatures() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 md:py-24">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">Compare</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-[2rem]">
          Map only, or map plus the desk
        </h2>
      </div>

      <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-slate-900">Layouts</h3>
          <p className="mt-1 text-sm text-slate-500">Live map and inventory. Included in Layouts360.</p>
          <ul className="mt-8 space-y-5">
            {visualization.map((item) => (
              <li key={item.title}>
                <p className="text-sm font-medium text-slate-900">{item.title}</p>
                <p className="mt-0.5 text-sm leading-relaxed text-slate-500">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold tracking-tight text-slate-900">Layouts360</h3>
          <p className="mt-1 text-sm text-slate-500">Same map. Then booking, CRM, money, and brokers.</p>
          <ul className="mt-8 space-y-5">
            {platform.map((item) => (
              <li key={item.title}>
                <p className="text-sm font-medium text-slate-900">{item.title}</p>
                <p className="mt-0.5 text-sm leading-relaxed text-slate-500">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
