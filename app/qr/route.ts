import { NextResponse } from "next/server"
import { getQrRedirectUrl } from "@/lib/qr-redirects"

/** Temporary redirect so destination stays swappable for printed QR codes. */
export function GET() {
  const destination = getQrRedirectUrl("default")
  if (!destination) {
    return NextResponse.json({ error: "QR destination not configured" }, { status: 404 })
  }
  return NextResponse.redirect(destination, 302)
}
