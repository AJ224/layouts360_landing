import Image from "next/image"

const steps = [
  {
    title: "Add layout",
    desc: "Digitize your site plan with plots and statuses.",
    img: "/add-layout-site-plan.jpg",
  },
  {
    title: "Show to customer",
    desc: "Share an interactive layout for transparent browsing.",
    img: "/customer-view-interactive-plot-map.jpg",
  },
  {
    title: "Freeze plot",
    desc: "Temporarily reserve a plot to prevent conflicts.",
    img: "/freeze-plot-reservation.jpg",
  },
  {
    title: "Book plot",
    desc: "Confirm booking and auto-update availability.",
    img: "/book-plot-confirmation.jpg",
  },
  {
    title: "Track booking/payment",
    desc: "Monitor installments, receipts, and dues.",
    img: "/payment-tracking-dashboard.png",
  },
  {
    title: "Sold the plot",
    desc: "Mark as sold and lock further actions.",
    img: "/sold-plot-status.jpg",
  },
]

export default function Steps() {
  return (
    <section id="steps" className="mx-auto max-w-6xl px-4 py-12 md:py-20 md:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">Simple end-to-end steps</h2>
        <p className="mt-3 text-pretty text-muted-foreground">
          From adding layouts to marking plots sold — keep everything visible and in sync.
        </p>
      </div>

      <ol className="mt-10 grid gap-6 md:grid-cols-3 lg:grid-cols-6">
        {steps.map((s, i) => (
          <li key={s.title} className="rounded-lg border bg-card p-4">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <span className="text-xs font-semibold">{i + 1}</span>
              </div>
              <h3 className="text-sm font-semibold">{s.title}</h3>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
            <div className="mt-3">
              <Image
                src={s.img || "/placeholder.svg"}
                alt={s.title}
                width={280}
                height={180}
                className="h-auto w-full rounded-md border bg-card"
              />
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
