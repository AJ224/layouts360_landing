"use client"

import { useEffect, useState } from "react"
import { COMPANY } from "@/lib/company"

type CompanyEmailLinkProps = {
  className?: string
}

/** Rendered on the client so Cloudflare Email Obfuscation does not rewrite mailto links. */
export function CompanyEmailLink({ className }: CompanyEmailLinkProps) {
  const [email, setEmail] = useState<string | null>(null)

  useEffect(() => {
    setEmail(COMPANY.email)
  }, [])

  if (!email) {
    return <span className={className}>Contact us</span>
  }

  return (
    <a href={`mailto:${email}`} className={className}>
      {email}
    </a>
  )
}
