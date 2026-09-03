/** Crawler-friendly WhatsApp deep link (avoids wa.me rate limits in SEO audits). */
export const WHATSAPP_PHONE = "919021018080"

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hi! I'm interested in Layouts360 for my real estate project. Please share more details."

export const WHATSAPP_CHAT_URL = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE)}`
