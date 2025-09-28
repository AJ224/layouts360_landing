import { Resend } from "resend"

export async function POST(req: Request) {
  try {
    const { email, mobile, company, description } = await req.json()

    // Validate required fields
    if (!email || !mobile || !company) {
      return Response.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Check environment variables
    const resendApiKey = process.env.RESEND_API_KEY
    if (!resendApiKey) {
      console.error("RESEND_API_KEY not configured")
      return Response.json(
        { error: "Email service not configured. Please contact support." },
        { status: 500 },
      )
    }

    const to = process.env.DEMO_REQUESTS_TO
    if (!to) {
      console.error("DEMO_REQUESTS_TO not configured")
      return Response.json(
        { error: "Email service not configured. Please contact support." },
        { status: 500 },
      )
    }

    // Initialize Resend
    const resend = new Resend(resendApiKey)
    
    // Create email content
    const subject = "New Demo Request - IdeatoLive"
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
          New Demo Request - IdeatoLive
        </h2>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Contact Information</h3>
          <p><strong>Company:</strong> ${escapeHtml(company)}</p>
          <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
          <p><strong>Mobile:</strong> <a href="tel:${escapeHtml(mobile)}">${escapeHtml(mobile)}</a></p>
        </div>
        
        ${description ? `
        <div style="background: #fff; padding: 20px; border-left: 4px solid #007bff; margin: 20px 0;">
          <h3 style="color: #333; margin-top: 0;">Project Description</h3>
          <p style="white-space: pre-wrap;">${escapeHtml(description)}</p>
        </div>
        ` : ''}
        
        <div style="background: #e3f2fd; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0; color: #1976d2;">
            <strong>Next Steps:</strong> Please contact this lead within 24 hours to schedule a demo.
          </p>
        </div>
        
        <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
        <p style="color: #666; font-size: 12px; text-align: center;">
          This email was sent from the IdeatoLive demo form.
        </p>
      </div>
    `

    // Send email
    const result = await resend.emails.send({
      from: "IdeatoLive <onboarding@resend.dev>", // Use Resend's default domain for testing
      to: [to],
      subject,
      html,
    })

    console.log("Email sent successfully:", result)

    return Response.json({ 
      ok: true, 
      message: "Demo request submitted successfully" 
    })
  } catch (e: any) {
    console.error("Error sending email:", e)
    return Response.json({ 
      error: e?.message || "Failed to send email. Please try again or contact us directly." 
    }, { status: 500 })
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
