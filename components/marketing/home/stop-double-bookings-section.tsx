import type { HomeContent } from "@/lib/i18n/home-content"

type StopDoubleBookingsSectionProps = {
  content: HomeContent["doubleBookings"]
}

export function StopDoubleBookingsSection({ content }: StopDoubleBookingsSectionProps) {
  return (
    <section
      id="double-bookings"
      className="border-t border-line bg-white py-10 sm:py-12"
      aria-labelledby="double-bookings-heading"
    >
      <div className="container-site">
        <div className="mx-auto w-full max-w-5xl text-center">
          <h2
            id="double-bookings-heading"
            className="w-full text-balance text-center text-[clamp(1.15rem,2.6vw,2.75rem)] font-bold leading-tight tracking-tight text-ink lg:whitespace-nowrap"
          >
            {`${content.headlineBefore} `}
            <span className="text-available-ink">{content.headlineAccent}</span>
          </h2>
          <p className="mt-3 w-full text-center text-sm font-semibold text-ink sm:mt-3.5 sm:text-base">
            {content.microProof}
          </p>
        </div>
      </div>
    </section>
  )
}
