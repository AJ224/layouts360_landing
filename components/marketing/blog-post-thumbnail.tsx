"use client"

import Image from "next/image"
import { useState } from "react"
import {
  getBlogVisualTheme,
  getPrimaryTag,
} from "@/lib/blog-display"
import { cn } from "@/lib/utils"

interface BlogPostThumbnailProps {
  slug: string
  title: string
  tags?: string[]
  coverImage?: string
  featured?: boolean
}

export function BlogPostThumbnail({
  slug,
  title,
  tags,
  coverImage,
  featured = false,
}: BlogPostThumbnailProps) {
  const [imageFailed, setImageFailed] = useState(false)
  const showImage = Boolean(coverImage) && !imageFailed
  const theme = getBlogVisualTheme(slug, tags)
  const Icon = theme.icon
  const primaryTag = getPrimaryTag(tags)

  if (showImage && coverImage) {
    return (
      <div
        className={cn(
          "relative overflow-hidden bg-slate-900",
          featured ? "min-h-[220px] lg:min-h-full" : "aspect-[16/10]",
        )}
      >
        <Image
          src={coverImage}
          alt=""
          fill
          className="object-cover"
          sizes={
            featured
              ? "(max-width: 1024px) 100vw, 50vw"
              : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          }
          priority={featured}
          onError={() => setImageFailed(true)}
        />
        {featured && (
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-slate-900/40" />
        )}
      </div>
    )
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        featured ? "min-h-[220px] lg:min-h-full" : "aspect-[16/10]",
      )}
    >
      <div className={cn("absolute inset-0 bg-gradient-to-br", theme.gradient)} />
      <div
        className="absolute inset-0 opacity-30"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-black/20 blur-3xl" />

      <div className="relative flex h-full flex-col justify-between p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
            {primaryTag ?? theme.label}
          </span>
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur-sm">
            <Icon className="h-5 w-5" aria-hidden />
          </div>
        </div>
        <p className="line-clamp-2 text-sm font-medium leading-snug text-white/90 sm:text-base">
          {title}
        </p>
      </div>
    </div>
  )
}
