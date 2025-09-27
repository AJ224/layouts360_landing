import DemoForm from "@/components/marketing/demo-form"

export default function CTA() {
  return (
    <section id="demo" className="border-y bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-20 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Schedule a Demo with IdeatoLive
          </h2>
          <p className="mt-3 text-pretty opacity-90">
            See how IdeatoLive modernizes layout sales, bookings, payments, and document access for your customers.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-xl">
          <DemoForm />
        </div>

        <p className="mt-8 text-center text-sm opacity-90">
          Or call us at{" "}
          <a className="underline" href="tel:+917276495199">
            +91 72764 95199
          </a>{" "}
          or{" "}
          <a className="underline" href="tel:+919595337334">
            +91 95953 37334
          </a>
        </p>
      </div>
    </section>
  )
}
