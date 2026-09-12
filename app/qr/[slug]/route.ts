import { NextResponse } from "next/server"
import { getQrRedirectUrl } from "@/lib/qr-redirects"

/** Temporary redirect so destination stays swappable for printed QR codes. */
export function GET(
  _request: Request,
  { params }: { params: { slug: string } },
) {
  const destination = getQrRedirectUrl(params.slug)
  if (!destination) {
    return NextResponse.json({ error: "Unknown QR code" }, { status: 404 })
  }
  return NextResponse.redirect(destination, 302)
}
