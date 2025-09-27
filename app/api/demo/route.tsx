import { Resend } from "resend"

export async function POST(req: Request) {
  try {
    const { email, mobile, company, description } = await req.json()

    if (!email || !mobile || !company) {
      return Response.json({ error: "Missing required fields" }, { status: 400 })
    }

    const resendApiKey = process.env.RESEND_API_KEY
    if (!resendApiKey) {
      return Response.json(
        { error: "RESEND_API_KEY not configured. Please add it in Project Settings." },
        { status: 500 },
      )
    }

    const to = process.env.DEMO_REQUESTS_TO
    if (!to) {
      return Response.json(
        { error: "DEMO_REQUESTS_TO not configured. Set a recipient email in Project Settings." },
        { status: 500 },
      )
    }

    const resend = new Resend(resendApiKey)
    const subject = "New Demo Request - IdeatoLive"
    const html = `
      <h2>New Demo Request</h2>
      <p><strong>Company:</strong> ${escapeHtml(company)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Mobile:</strong> ${escapeHtml(mobile)}</p>
      <p><strong>Description:</strong><br/>${escapeHtml(description || "")}</p>
    `

    await resend.emails.send({
      from: "IdeatoLive <no-reply@ideatolive.app>",
      to,
      subject,
      html,
    })

    return Response.json({ ok: true })
  } catch (e: any) {
    return Response.json({ error: e?.message || "Internal error" }, { status: 500 })
  }
}

function escapeHtml(input: string) {
  return String(input)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}
