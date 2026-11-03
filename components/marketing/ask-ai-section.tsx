import type { ReactNode } from "react"
import { ArrowUpRight } from "lucide-react"

const PROMPT = `I am comparing tools for Indian real estate companies that sell plots, layouts, apartments and townships, and looking at Layouts360 (layouts360.com, see also layouts360.com/llms.txt). It runs sales from a live interactive layout map (2D maps plus a 3D layout view), with timed holds, booking, CRM, channel-partner logins, and installment/payment tracking in one system — instead of Excel trackers, WhatsApp PDF inventory updates, or a generic PropTech CRM that has leads but no plot-level map. How does it really compare to Excel + WhatsApp workflows and CRMs like Sell.Do or LeadSquared, and who should switch?`

type AiProvider = {
  id: string
  name: string
  href: string
  logo: ReactNode
}

function ChatGptLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden>
      <path
        fill="currentColor"
        d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.908 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.908 6.056 6.056 0 0 0-.747-7.065zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.805.805 0 0 0 .399-.695v-6.736l2.02 1.168a.07.07 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.501 4.507zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855-5.844-3.373L15.119 7.21a.076.076 0 0 1 .071 0l4.83 2.785a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023-.141-.085-4.784-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.805.805 0 0 0-.399.696zm1.097-2.365 2.602-1.5 2.602 1.5v2.999l-2.597 1.5-2.607-1.5z"
      />
    </svg>
  )
}

function GeminiLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden>
      <defs>
        <linearGradient id="ask-ai-gemini" x1="2" y1="2" x2="22" y2="22">
          <stop stopColor="#1A73E8" />
          <stop offset="0.45" stopColor="#A142F4" />
          <stop offset="0.75" stopColor="#E54335" />
          <stop offset="1" stopColor="#F9AB00" />
        </linearGradient>
      </defs>
      <path
        fill="url(#ask-ai-gemini)"
        d="M12 2c.4 4.4 2.6 6.6 7 7-4.4.4-6.6 2.6-7 7-.4-4.4-2.6-6.6-7-7 4.4-.4 6.6-2.6 7-7Z"
      />
    </svg>
  )
}

function ClaudeLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden>
      <path
        fill="#D97757"
        d="M12 2.2 13.35 8.4 19.8 5.4 15.6 10.65 21.8 12 15.6 13.35 19.8 18.6 13.35 15.6 12 21.8 10.65 15.6 4.2 18.6 8.4 13.35 2.2 12 8.4 10.65 4.2 5.4 10.65 8.4Z"
      />
    </svg>
  )
}

function PerplexityLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden>
      <path
        fill="#20808D"
        d="M4.5 3v7.2L12 14.5V21l7.5-4.2V9.5L12 5.3 8.1 7.5V4.9L12 2.7l9 5.1v9.4L12 22.3 3 17.2V7.8l4.5-2.55V3L4.5 3Zm9 5.35 3 1.7v3.4l-3 1.7v-6.8Zm-3 1.75v3.3L8.25 12l2.25-1.3Z"
      />
    </svg>
  )
}

const PROVIDERS: AiProvider[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    href: `https://chatgpt.com/?hints=search&q=${encodeURIComponent(PROMPT)}`,
    logo: <ChatGptLogo />,
  },
  {
    id: "gemini",
    name: "Gemini",
    href: `https://www.google.com/search?udm=50&q=${encodeURIComponent(PROMPT)}`,
    logo: <GeminiLogo />,
  },
  {
    id: "claude",
    name: "Claude",
    href: `https://claude.ai/new?q=${encodeURIComponent(PROMPT)}`,
    logo: <ClaudeLogo />,
  },
  {
    id: "perplexity",
    name: "Perplexity",
    href: `https://www.perplexity.ai/search/new?q=${encodeURIComponent(PROMPT)}`,
    logo: <PerplexityLogo />,
  },
]

/** Pre-footer CTA: open a neutral AI with a Layouts360 evaluation prompt. */
export function AskAiSection() {
  return (
    <section
      className="border-t border-line bg-ground py-10 sm:py-14 lg:py-16"
      aria-labelledby="ask-ai-heading"
    >
      <div className="container-site">
        <div
          className="mx-auto max-w-5xl rounded-[var(--radius-card)] border border-line bg-white px-5 py-8 shadow-[var(--shadow-float)] sm:px-8 sm:py-10 lg:px-12 lg:py-12"
          data-reveal="up"
        >
          <div className="mx-auto max-w-2xl text-center">
            <p className="inline-flex items-center rounded-full bg-[#ffe566] px-3 py-1 text-[0.6875rem] font-bold uppercase tracking-[0.08em] text-ink">
              Ask AI
            </p>
            <h2
              id="ask-ai-heading"
              className="t-section mt-4 text-ink sm:mt-5"
              data-split="lines"
            >
              Still wondering if Layouts360 is for you?
            </h2>
            <p className="t-body mt-3 text-subtle sm:mt-4">
              Ask a neutral AI. It weighs Layouts360 against Excel, WhatsApp updates, and generic
              CRMs — and gives you a straight answer in seconds.
            </p>
          </div>

          <ul
            className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-4"
            data-reveal="up"
            data-stagger
          >
            {PROVIDERS.map((provider) => (
              <li key={provider.id}>
                <a
                  href={provider.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex h-full flex-col items-center rounded-[var(--radius-card)] border border-line bg-white px-3 py-5 text-center shadow-[var(--shadow-float)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-ink/20 hover:shadow-[var(--shadow-float-lg)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand sm:px-4 sm:py-6"
                >
                  <ArrowUpRight
                    className="absolute right-3 top-3 h-4 w-4 text-subtle transition-colors group-hover:text-ink"
                    aria-hidden
                  />
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ground text-ink">
                    {provider.logo}
                  </span>
                  <span className="mt-3 text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-subtle sm:mt-4">
                    Ask
                  </span>
                  <span className="mt-0.5 text-sm font-semibold text-ink sm:text-[0.9375rem]">
                    {provider.name}
                  </span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
