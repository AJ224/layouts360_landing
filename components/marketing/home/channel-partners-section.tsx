import { Handshake } from "lucide-react"
import { Section, SectionHeader } from "@/components/marketing/landing/ui"
import type { HomeContent } from "@/lib/i18n/home-content"

type ChannelPartnersSectionProps = {
  content: HomeContent["channelPartners"]
}

export function ChannelPartnersSection({ content }: ChannelPartnersSectionProps) {
  return (
    <Section id="channel-partners" className="bg-white py-20">
      <SectionHeader title={content.headline} description={content.body} />
      <div className="mx-auto flex max-w-xl justify-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-100">
          <Handshake className="h-6 w-6 text-teal-700" aria-hidden />
        </div>
      </div>
    </Section>
  )
}
