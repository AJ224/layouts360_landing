import type React from "react"
const steps = [
  {
    title: "Upload your layout",
    desc: "Import your site plan and see it live in the system.",
    Icon: UploadIcon,
  },
  {
    title: "Share with customers",
    desc: "Let buyers explore plots online with transparency.",
    Icon: ShareIcon,
  },
  {
    title: "Freeze/Book",
    desc: "Track reservations and confirmations in real time.",
    Icon: CheckCircleIcon,
  },
  {
    title: "Manage payments & enquiries",
    desc: "Everything stays organized in one dashboard.",
    Icon: DashboardIcon,
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-6xl px-4 py-12 md:py-20 md:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">How it works</h2>
        <p className="mt-3 text-pretty text-muted-foreground">Get online quickly with a simple, guided setup.</p>
      </div>

      <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <li key={s.title} className="rounded-lg border bg-card p-5">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <span className="text-sm font-semibold">{i + 1}</span>
              </div>
              <div className="pt-1">
                <div className="flex items-center gap-2">
                  <s.Icon aria-hidden="true" className="h-5 w-5 text-primary" />
                  <h3 className="text-base font-semibold">{s.title}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

function UploadIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path strokeWidth="2" d="M12 16V4m0 0l-4 4m4-4l4 4" />
      <rect x="4" y="16" width="16" height="4" rx="1" strokeWidth="2" />
    </svg>
  )
}
function ShareIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <circle cx="18" cy="5" r="3" strokeWidth="2" />
      <circle cx="6" cy="12" r="3" strokeWidth="2" />
      <circle cx="18" cy="19" r="3" strokeWidth="2" />
      <path strokeWidth="2" d="M8.7 11l6.6-4M8.7 13l6.6 4" />
    </svg>
  )
}
function CheckCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <circle cx="12" cy="12" r="9" strokeWidth="2" />
      <path strokeWidth="2" d="M9 12l2 2 4-4" />
    </svg>
  )
}
function DashboardIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <rect x="3" y="3" width="7" height="7" strokeWidth="2" />
      <rect x="14" y="3" width="7" height="7" strokeWidth="2" />
      <rect x="3" y="14" width="7" height="7" strokeWidth="2" />
      <rect x="14" y="14" width="7" height="7" strokeWidth="2" />
    </svg>
  )
}
