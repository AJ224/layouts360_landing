import { Lock } from "lucide-react"
import { Section, SectionHeader } from "@/components/marketing/landing/ui"
import type { HomeContent } from "@/lib/i18n/home-content"

type StopDoubleBookingsSectionProps = {
  content: HomeContent["doubleBookings"]
}

export function StopDoubleBookingsSection({ content }: StopDoubleBookingsSectionProps) {
  return (
    <Section id="double-bookings" className="bg-slate-50 py-20">
      <SectionHeader
        title={
          <>
            {content.headlineBefore}{" "}
            <span className="text-emerald-700">{content.headlineAccent}</span>
          </>
        }
        description={content.body}
      />
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
          <Lock className="h-6 w-6 text-emerald-700" aria-hidden />
        </div>
        <p className="text-base font-semibold text-slate-800 sm:text-lg">{content.microProof}</p>
      </div>
    </Section>
  )
}
