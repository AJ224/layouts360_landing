import type { HomeContent } from "@/lib/i18n/home-content"

type ChannelPartnersSectionProps = {
  content: HomeContent["channelPartners"]
}

export function ChannelPartnersSection({ content }: ChannelPartnersSectionProps) {
  return (
    <section
      id="channel-partners"
      className="border-t border-line bg-white py-10 sm:py-12"
      aria-labelledby="channel-partners-heading"
    >
      <div className="container-site">
        <div className="mx-auto w-full max-w-5xl text-center">
          <h2
            id="channel-partners-heading"
            className="w-full text-balance text-center text-[clamp(1.1rem,2.4vw,2.5rem)] font-bold leading-tight tracking-tight text-ink lg:whitespace-nowrap"
          >
            {content.headline}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-subtle sm:mt-3.5 sm:text-base">
            {content.body}
          </p>
        </div>
      </div>
    </section>
  )
}
