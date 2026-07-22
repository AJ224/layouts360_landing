import { FAQSchema } from "@/components/seo/schema"
import { SeoFaq } from "@/components/marketing/seo-landing/seo-faq"

const HOME_FAQS = [
  {
    question: "What is Layouts360?",
    answer:
      "Layouts360 is real estate plot management and inventory management software for developers, builders, and township projects in India. It combines interactive digital layout maps, plot inventory, booking, a real estate CRM, payment tracking, and channel partner management in one platform—covering the full sales lifecycle, not just layout viewing.",
  },
  {
    question: "Is Layouts360 just an interactive layout viewer?",
    answer:
      "No. The interactive digital layout map is one part of the platform. Layouts360 also runs plot inventory, bookings and reservations, a plot-linked CRM, lead management, payment and installment tracking, document management, site visit tracking, sales team management, and channel partner and commission management.",
  },
  {
    question: "How is Layouts360 different from Excel?",
    answer:
      "Excel has no live sync, no map, and no plot-level status logic—two people can edit two versions of the same file and both believe they're right. Layouts360 gives every agent, partner, and manager one live plot inventory with automatic status updates and an audit trail.",
  },
  {
    question: "How is Layouts360 different from WhatsApp?",
    answer:
      "WhatsApp is good for conversation, not for availability. A PDF layout forwarded in a group is outdated the moment it's sent. Layouts360 replaces PDF forwarding with a live, shareable project link that always reflects current plot status.",
  },
  {
    question: "How is Layouts360 different from a generic CRM like HubSpot, Zoho, or Salesforce?",
    answer:
      "Generic CRMs manage contacts and deal stages but have no concept of a plot, a layout, a booking hold, or a commission slab. Layouts360 is purpose-built around the plot—every lead, visit, and booking ties to a specific unit on a live layout.",
  },
  {
    question: "Does Layouts360 work for township and multi-phase projects?",
    answer:
      "Yes. Multi-project and multi-phase support lets you run several active phases—or several independent projects—from one account, with phase-level control and a project-wide roll-up view for leadership.",
  },
  {
    question: "Who typically uses Layouts360?",
    answer:
      "Real estate developers, township developers, plotting and land development businesses, builders running mixed plot and villa inventory, and the sales and channel partner teams who sell on their behalf.",
  },
  {
    question: "Can channel partners and brokers access live inventory?",
    answer:
      "Yes. Partners get project-scoped portal access to the same live layout your internal team uses, with structured booking requests and commission tracking tied to confirmed bookings—not PDFs forwarded in chat.",
  },
  {
    question: "Does Layouts360 prevent double bookings?",
    answer:
      "Yes. Timed holds and in-progress bookings update plot status on the live layout for every viewer until the booking is confirmed, released, or the hold expires automatically.",
  },
  {
    question: "How long does it take to go live?",
    answer:
      "Most teams go live in three to five days per project after sharing layout plans and plot data—digitizing the map, importing plots, and configuring roles and pricing.",
  },
  {
    question: "What does Layouts360 cost?",
    answer:
      "Plans start from ₹2,000/month with unlimited users on tiers, which fits teams with 50–200 plots. Larger multi-phase or multi-project portfolios move to higher tiers—contact us for a quote based on your project scope.",
  },
  {
    question: "Is Layouts360 suitable for a small developer with one layout?",
    answer:
      "Yes. Entry plans are built for smaller teams that still want a professional, live digital layout, plot inventory, and booking discipline without enterprise overhead.",
  },
]

export function HomeFaqSection() {
  return (
    <>
      <FAQSchema faqs={HOME_FAQS} />
      <SeoFaq items={HOME_FAQS} />
    </>
  )
}
