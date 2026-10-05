type DemoLead = {
  name?: string
  email: string
  mobile: string
  company: string
  projectType?: string
  inventorySize?: string
  inventoryMethod?: string
  interests?: string
  description?: string
  unitCount?: string
}

function buildTeamMessage(lead: DemoLead) {
  const lines = [
    "🆕 *New Demo Request — Layouts360*",
    "",
    ...(lead.name ? [`*Name:* ${lead.name}`] : []),
    `*Company:* ${lead.company}`,
    `*Email:* ${lead.email}`,
    `*Mobile:* ${lead.mobile}`,
  ]

  if (lead.projectType) {
    lines.push(`*What they sell:* ${lead.projectType}`)
  }

  const inventory = lead.inventorySize || lead.unitCount
  if (inventory) {
    lines.push(`*Approximate inventory:* ${inventory}`)
  }

  if (lead.inventoryMethod) {
    lines.push(`*Current method:* ${lead.inventoryMethod}`)
  }

  if (lead.interests) {
    lines.push(`*Wants to see:* ${lead.interests}`)
  }

  if (lead.description) {
    lines.push("", "*Project details:*", lead.description)
  }

  return lines.join("\n")
}

function buildCustomerMessage(lead: DemoLead) {
  const lines = [
    "Thanks for your interest in *Layouts360*! ✅",
    "",
    "We received your demo request and will contact you within 24 hours.",
    "",
    ...(lead.name ? [`*Name:* ${lead.name}`] : []),
    `*Company:* ${lead.company}`,
    `*Email:* ${lead.email}`,
    `*Mobile:* ${lead.mobile}`,
  ]

  if (lead.projectType) {
    lines.push(`*What you sell:* ${lead.projectType}`)
  }

  const inventory = lead.inventorySize || lead.unitCount
  if (inventory) {
    lines.push(`*Approximate inventory:* ${inventory}`)
  }

  lines.push("", "For anything urgent, call +91 90210 18080.")

  return lines.join("\n")
}

/** Normalize a form mobile into GOWA personal chat JID (`…@s.whatsapp.net`). */
export function toWhatsAppPersonalJid(mobile: string): string | null {
  const digits = mobile.replace(/\D/g, "")
  if (digits.length < 10) return null

  let e164 = digits
  if (digits.length === 10) {
    e164 = `91${digits}`
  } else if (digits.startsWith("0") && digits.length === 11) {
    e164 = `91${digits.slice(1)}`
  } else if (digits.startsWith("91") && digits.length === 12) {
    e164 = digits
  }

  if (e164.length < 11 || e164.length > 15) return null
  return `${e164}@s.whatsapp.net`
}

async function sendWhatsAppMessage(opts: {
  apiUrl: string
  auth: string
  deviceId: string
  phone: string
  message: string
}) {
  const res = await fetch(opts.apiUrl, {
    method: "POST",
    headers: {
      Authorization: `Basic ${opts.auth}`,
      "Content-Type": "application/json",
      "X-Device-Id": opts.deviceId,
    },
    body: JSON.stringify({
      phone: opts.phone,
      message: opts.message,
    }),
  })

  if (!res.ok) {
    const body = await res.text().catch(() => "")
    throw new Error(`WhatsApp API ${res.status} (${opts.phone}): ${body || res.statusText}`)
  }
}

/** Send demo lead to team group + optional customer confirmation. No-ops if not configured. */
export async function sendDemoWhatsAppNotification(lead: DemoLead) {
  const apiUrl = process.env.WHATSAPP_API_URL?.trim()
  const username = process.env.WHATSAPP_API_USER?.trim()
  const password = process.env.WHATSAPP_API_PASSWORD?.trim()
  const deviceId = process.env.WHATSAPP_DEVICE_ID?.trim() || "layouts360"
  const teamPhone = process.env.WHATSAPP_NOTIFY_TO?.trim() || "120363412465889059@g.us"
  const notifyCustomer = process.env.WHATSAPP_NOTIFY_CUSTOMER !== "false"

  if (!apiUrl || !username || !password) {
    console.warn("WhatsApp notify skipped: WHATSAPP_API_URL / USER / PASSWORD not fully configured")
    return { skipped: true as const }
  }

  const auth = Buffer.from(`${username}:${password}`).toString("base64")
  const results: { team: "ok" | "failed"; customer: "ok" | "skipped" | "failed" } = {
    team: "ok",
    customer: "skipped",
  }

  try {
    await sendWhatsAppMessage({
      apiUrl,
      auth,
      deviceId,
      phone: teamPhone,
      message: buildTeamMessage(lead),
    })
  } catch (err) {
    results.team = "failed"
    console.error("WhatsApp team notify failed:", err)
  }

  if (notifyCustomer) {
    const customerJid = toWhatsAppPersonalJid(lead.mobile)
    if (!customerJid) {
      console.warn("WhatsApp customer notify skipped: invalid mobile", lead.mobile)
      results.customer = "skipped"
    } else {
      try {
        await sendWhatsAppMessage({
          apiUrl,
          auth,
          deviceId,
          phone: customerJid,
          message: buildCustomerMessage(lead),
        })
        results.customer = "ok"
      } catch (err) {
        results.customer = "failed"
        console.error("WhatsApp customer notify failed:", err)
      }
    }
  }

  if (results.team === "failed" && results.customer !== "ok") {
    throw new Error("WhatsApp notifications failed for team and customer")
  }

  return { ok: true as const, ...results }
}
