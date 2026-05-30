import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { SITE_HOST, SITE_URL } from "@/lib/site-url"

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0]?.toLowerCase()

  if (host === `www.${SITE_HOST}`) {
    const destination = new URL(request.nextUrl.pathname + request.nextUrl.search, SITE_URL)
    return NextResponse.redirect(destination, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
}
