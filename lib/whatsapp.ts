/** Crawler-friendly WhatsApp deep link (avoids wa.me rate limits in SEO audits). */
export const WHATSAPP_PHONE = "919021018080"

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hi! I'm interested in Layouts360 for my real estate project. Please share more details."

export const WHATSAPP_LAYOUT_MESSAGE =
  "Hi! I have an existing project layout (PDF/CAD) and would like to see how it could work in Layouts360."

export function buildWhatsAppChatUrl(message: string = WHATSAPP_DEFAULT_MESSAGE) {
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(message)}`
}

export const WHATSAPP_CHAT_URL = buildWhatsAppChatUrl()

export const WHATSAPP_LAYOUT_CHAT_URL = buildWhatsAppChatUrl(WHATSAPP_LAYOUT_MESSAGE)
