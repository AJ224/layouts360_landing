import Image from "next/image"
import { LANDING_IMAGES } from "@/lib/media"
import { cn } from "@/lib/utils"

type InteractivePhoneMockupProps = {
  className?: string
}

const SCREEN_BG = "#f2f3f5"

/** Static iPhone-style device mockup with the Layouts360 mobile dashboard. */
export function InteractivePhoneMockup({ className }: InteractivePhoneMockupProps) {
  return (
    <div className={cn("mx-auto w-full max-w-[220px] sm:max-w-[260px] lg:max-w-[280px]", className)}>
      <div className="relative rounded-[2.35rem] bg-[#1c1c1e] p-[10px] shadow-[0_24px_48px_-12px_rgb(0_0_0/0.45)] ring-1 ring-black/40">
        <span className="absolute -left-[2px] top-[100px] h-8 w-[3px] rounded-l-sm bg-[#2a2a2c]" aria-hidden />
        <span className="absolute -left-[2px] top-[148px] h-14 w-[3px] rounded-l-sm bg-[#2a2a2c]" aria-hidden />
        <span className="absolute -left-[2px] top-[210px] h-14 w-[3px] rounded-l-sm bg-[#2a2a2c]" aria-hidden />
        <span className="absolute -right-[2px] top-[160px] h-20 w-[3px] rounded-r-sm bg-[#2a2a2c]" aria-hidden />

        <div
          className="relative aspect-[9/19.5] overflow-hidden rounded-[1.85rem]"
          style={{ backgroundColor: SCREEN_BG }}
        >
          {/* Light status bar — matches main screen UI (covers capture’s black bar) */}
          <div
            className="absolute inset-x-0 top-0 z-20 flex h-11 items-end justify-between px-5 pb-1.5 text-[10px] font-semibold text-ink/80"
            style={{ backgroundColor: SCREEN_BG }}
            aria-hidden
          >
            <span>9:41</span>
            <span className="absolute left-1/2 top-2 h-[22px] w-[92px] -translate-x-1/2 rounded-full bg-[#1c1c1e]" />
            <span className="flex items-center gap-1 text-[9px] text-ink/55">
              <span>●●●</span>
              <span>5G</span>
              <span className="rounded-[2px] border border-ink/40 px-0.5 text-[8px]">100</span>
            </span>
          </div>

          <Image
            src={LANDING_IMAGES.productMobile.src}
            alt={LANDING_IMAGES.productMobile.alt}
            fill
            className="object-cover object-[center_8%]"
            sizes="(max-width: 1024px) 240px, 280px"
            priority={false}
          />
        </div>
      </div>
    </div>
  )
}
