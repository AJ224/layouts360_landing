const visualization = [
  {
    title: "Interactive project map",
    description:
      "Plots and flats on your real layout. Pan, zoom, and tap a unit for details your team actually uses on site.",
  },
  {
    title: "Live availability",
    description:
      "Available, hold, booked, sold. One color-coded view so nobody asks for the latest Excel.",
  },
  {
    title: "Your plan, digitized",
    description: "CAD, PDF, or SVG mapped in, with area, facing, rate, survey, and your other labels.",
  },
  {
    title: "On satellite when you need it",
    description: "Same inventory overlaid on Google Maps so location conversations stay grounded.",
  },
  {
    title: "A link you can send",
    description: "Opens in the browser. Buyers enquire from the plot or flat they are looking at.",
  },
  {
    title: "Photos and nearby places",
    description: "Gallery, video, schools, hospitals, roads. Useful in a walkthrough, not only in the office.",
  },
  {
    title: "Group neighbouring units",
    description: "Sell adjacent plots or flats as one deal without juggling separate rows.",
  },
]

const platform = [
  {
    title: "Freeze to sold on the map",
    description:
      "Hold while the customer decides, then book and close. Status updates for every agent in real time.",
  },
  {
    title: "Multi-unit and joint buyers",
    description: "One booking across several units, or more than one name on the same deal.",
  },
  {
    title: "CRM on the unit",
    description:
      "Leads, site visits, follow-ups, and My Day sit on the plot or flat the customer asked about.",
  },
  {
    title: "Ads into the pipeline",
    description: "Facebook and Instagram leads land in the same flow instead of dying in WhatsApp.",
  },
  {
    title: "Collections and dues",
    description: "Cash, UPI, cheque, loan. Booking amount, installments, due and overdue in one place.",
  },
  {
    title: "Owner and partner ledger",
    description: "Split visibility for land owner, developer, and money partner when the deal needs it.",
  },
  {
    title: "Broker portal",
    description: "Channel partners freeze and enquire on the same live inventory your staff uses.",
  },
  {
    title: "Team roles",
    description: "Control who can freeze, book, or see money. GPS attendance if your site needs it.",
  },
]

export default function PricingFeatures() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">What you get</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-[2rem]">
          Features that change how your team sells
        </h2>
        <p className="mt-3 text-base leading-relaxed text-slate-500">
          Map only replaces scattered files. Layouts360 runs the sale on that same inventory.
        </p>
      </div>

      <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-slate-900">Map only</h3>
          <p className="mt-1 text-sm text-slate-500">Live inventory for plots and apartments. Included in Layouts360.</p>
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
          <p className="mt-1 text-sm text-slate-500">Same map, then booking, CRM, money, and brokers.</p>
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
