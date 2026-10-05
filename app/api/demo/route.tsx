import { Resend } from "resend"
import { sendDemoWhatsAppNotification } from "@/lib/whatsapp-notify"

type DemoLead = {
  name: string
  email: string
  mobile: string
  company: string
  projectType: string
  inventorySize: string
  inventoryMethod: string
  interests: string
  description: string
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const lead = parseLead(body)

    if (!lead) {
      return Response.json({ error: "Missing required fields" }, { status: 400 })
    }

    const resendApiKey = process.env.RESEND_API_KEY
    const to = process.env.DEMO_REQUESTS_TO
    if (!resendApiKey || !to) {
      console.error(!resendApiKey ? "RESEND_API_KEY not configured" : "DEMO_REQUESTS_TO not configured")
      return Response.json(
        { error: "Email service not configured. Please contact support." },
        { status: 500 },
      )
    }

    const resend = new Resend(resendApiKey)
    const [emailResult, whatsappResult] = await Promise.allSettled([
      resend.emails.send({
        from: "Layouts360 <onboarding@resend.dev>",
        to: [to],
        subject: "New Demo Request - Layouts360",
        html: buildDemoEmailHtml(lead),
      }),
      sendDemoWhatsAppNotification(lead),
    ])

    if (emailResult.status === "rejected") {
      console.error("Error sending email:", emailResult.reason)
      const message =
        emailResult.reason instanceof Error
          ? emailResult.reason.message
          : "Failed to send email. Please try again or contact us directly."
      return Response.json({ error: message }, { status: 500 })
    }

    if (emailResult.value.error) {
      console.error("Resend API error:", emailResult.value.error)
      return Response.json(
        { error: emailResult.value.error.message || "Failed to send email" },
        { status: 500 },
      )
    }

    console.log("Email sent successfully:", emailResult.value)

    if (whatsappResult.status === "rejected") {
      console.error("WhatsApp notify failed (email still sent):", whatsappResult.reason)
    } else {
      console.log("WhatsApp notify:", whatsappResult.value)
    }

    return Response.json({
      ok: true,
      message: "Demo request submitted successfully",
    })
  } catch (e: unknown) {
    console.error("Error sending email:", e)
    const message =
      e instanceof Error ? e.message : "Failed to send email. Please try again or contact us directly."
    return Response.json({ error: message }, { status: 500 })
  }
}

function asTrimmedString(value: unknown): string {
  return typeof value === "string" ? value.trim() : ""
}

function parseLead(body: unknown): DemoLead | null {
  if (!body || typeof body !== "object") return null
  const data = body as Record<string, unknown>

  const email = asTrimmedString(data.email)
  const mobile = asTrimmedString(data.mobile)
  const company = asTrimmedString(data.company)
  if (!email || !mobile || !company) return null

  const inventorySize =
    asTrimmedString(data.inventorySize) || asTrimmedString(data.unitCount)

  return {
    name: asTrimmedString(data.name),
    email,
    mobile,
    company,
    projectType: asTrimmedString(data.projectType),
    inventorySize,
    inventoryMethod: asTrimmedString(data.inventoryMethod),
    interests: asTrimmedString(data.interests),
    description: asTrimmedString(data.description),
  }
}

function buildDemoEmailHtml(lead: DemoLead) {
  return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
          New Demo Request - Layouts360
        </h2>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Contact Information</h3>
          ${lead.name ? `<p><strong>Name:</strong> ${escapeHtml(lead.name)}</p>` : ""}
          <p><strong>Company:</strong> ${escapeHtml(lead.company)}</p>
          <p><strong>Email:</strong> <a href="mailto:${escapeHtml(lead.email)}">${escapeHtml(lead.email)}</a></p>
          <p><strong>Mobile:</strong> <a href="tel:${escapeHtml(lead.mobile)}">${escapeHtml(lead.mobile)}</a></p>
          ${lead.projectType ? `<p><strong>What they sell:</strong> ${escapeHtml(lead.projectType)}</p>` : ""}
          ${lead.inventorySize ? `<p><strong>Approximate inventory:</strong> ${escapeHtml(lead.inventorySize)}</p>` : ""}
          ${lead.inventoryMethod ? `<p><strong>Current inventory method:</strong> ${escapeHtml(lead.inventoryMethod)}</p>` : ""}
          ${lead.interests ? `<p><strong>Wants to see:</strong> ${escapeHtml(lead.interests)}</p>` : ""}
        </div>
        
        ${lead.description ? `
        <div style="background: #fff; padding: 20px; border-left: 4px solid #007bff; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Project Description</h3>
          <p style="white-space: pre-wrap;">${escapeHtml(lead.description)}</p>
        </div>
        ` : ""}
        
        <div style="background: #e3f2fd; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0; color: #1976d2;">
            <strong>Next Steps:</strong> Please contact this lead within 24 hours to schedule a demo.
          </p>
        </div>
        
        <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
        <p style="color: #666; font-size: 12px; text-align: center;">
          This email was sent from the Layouts360 demo form.
        </p>
      </div>
    `
}

function escapeHtml(input: string) {
  return String(input)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}
