/**
 * Dynamic QR destinations.
 * Print QR codes to https://layouts360.com/qr (or /qr/<slug>).
 * Change the URL here and redeploy — no need to reprint the code.
 */
export const QR_REDIRECTS = {
  /** Default for https://layouts360.com/qr */
  default: "https://demo3.layouts360.com/s/MTf0e8",
} as const satisfies Record<string, string>

export type QrSlug = keyof typeof QR_REDIRECTS

export function getQrRedirectUrl(slug: string = "default"): string | null {
  const fromEnv =
    slug === "default" ? process.env.QR_REDIRECT_URL?.trim() : undefined
  if (fromEnv) return fromEnv

  if (slug in QR_REDIRECTS) {
    return QR_REDIRECTS[slug as QrSlug]
  }
  return null
}
