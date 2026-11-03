import Image from "next/image"
import { cn } from "@/lib/utils"
import { SHOTS, type ProductShot, type ShotKey } from "@/lib/product-shots"

type Props = {
  shot: ShotKey | ProductShot
  label?: string | null
  alt?: string
  priority?: boolean
  sizes?: string
  className?: string
  dark?: boolean
}

/**
 * Quiet frame for real product captures. Crops are pre-made at intrinsic size.
 */
export function ProductFrame({
  shot,
  label,
  alt,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className,
  dark = false,
}: Props) {
  const s: ProductShot = typeof shot === "string" ? SHOTS[shot] : shot
  const caption = label === null ? null : `Layouts360 · ${label ?? s.label}`
  return (
    <figure
      className={cn(
        "overflow-hidden rounded-[var(--radius-card)] border shadow-[var(--shadow-float-lg)]",
        dark ? "border-white/10 bg-white/5" : "border-line bg-white",
        className,
      )}
    >
      {caption ? (
        <figcaption
          className={cn(
            "flex items-center gap-2 border-b px-3.5 py-2 text-xs font-semibold",
            dark ? "border-white/10 text-ground/70" : "border-line text-subtle",
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-available" aria-hidden />
          {caption}
        </figcaption>
      ) : null}
      <Image
        src={s.src}
        alt={alt ?? s.alt}
        width={s.width}
        height={s.height}
        priority={priority}
        sizes={sizes}
        className="block h-auto w-full"
      />
    </figure>
  )
}
