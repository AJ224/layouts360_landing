type Oaiq = (...args: unknown[]) => void

declare global {
  interface Window {
    oaiq?: Oaiq
  }
}

export function measureLeadCreated() {
  if (typeof window === "undefined" || typeof window.oaiq !== "function") return
  window.oaiq("measure", "lead_created", { type: "customer_action" })
}
