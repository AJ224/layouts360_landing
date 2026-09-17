const steps = [
  {
    title: "Project Setup",
    desc: "Digitize your site plans with advanced mapping tools and configure project parameters.",
  },
  {
    title: "Customer Engagement",
    desc: "Deploy interactive layouts with real-time availability and transparent browsing experience.",
  },
  {
    title: "Lead Management",
    desc: "Capture and manage leads with automated follow-ups and CRM integration.",
  },
  {
    title: "Booking Process",
    desc: "Streamlined booking with automated confirmations and payment integration.",
  },
  {
    title: "Financial Tracking",
    desc: "Complete payment management with installment tracking and financial reporting.",
  },
  {
    title: "Project Completion",
    desc: "Document management and customer portal access for seamless project delivery.",
  },
]

export default function Steps() {
  return (
    <section id="steps" className="mx-auto max-w-6xl px-4 py-12 md:py-20 md:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">Complete Business Workflow</h2>
        <p className="mt-3 text-pretty text-muted-foreground">
          From project setup to completion, manage your entire real estate business with professional tools.
        </p>
      </div>

      <div className="mt-16">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-primary/20 hidden md:block"></div>
          
          <div className="space-y-8 md:space-y-12">
            {steps.map((step, i) => (
              <div key={step.title} className={`flex items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Content */}
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="inline-block rounded-lg border bg-card p-6 max-w-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                        {i + 1}
                      </div>
                      <h3 className="text-lg font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-bold shadow-lg">
                    {i + 1}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
