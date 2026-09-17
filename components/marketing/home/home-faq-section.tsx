import { FAQSchema } from "@/components/seo/schema"
import { SeoFaq } from "@/components/marketing/seo-landing/seo-faq"

const HOME_FAQS = [
  {
    question: "What is Layouts360?",
    answer:
      "Layouts360 is a live inventory and sales platform for real estate companies. It combines interactive layouts, plot and apartment inventory, booking workflow, CRM, and team tools so you visualize, manage, share, and sell from one place.",
  },
  {
    question: "Does Layouts360 support flats and apartments?",
    answer:
      "Yes. Manage apartment projects by building, floor, and unit, with flat number, configuration, area, price, availability, customer, and booking status, alongside plotted inventory.",
  },
  {
    question: "Is Layouts360 just an interactive layout viewer?",
    answer:
      "No. Interactive maps are one part. Layouts360 also runs live inventory, holds and bookings, CRM linked to units, dashboards, customer sharing, and team management.",
  },
  {
    question: "How is Layouts360 different from Excel?",
    answer:
      "Excel has no live sync and no visual inventory. Layouts360 gives every agent and manager one live inventory with status updates, including plots, floors, and flats.",
  },
  {
    question: "How is Layouts360 different from WhatsApp?",
    answer:
      "WhatsApp is good for conversation, not availability. A PDF forwarded in a group is outdated immediately. Layouts360 replaces that with a live project view that always reflects current status.",
  },
  {
    question: "Does Layouts360 prevent double bookings?",
    answer:
      "Yes. Holds and bookings update unit status for every viewer until confirmed, released, or the hold expires.",
  },
  {
    question: "Can you digitize our existing PDF, CAD, or Excel project?",
    answer:
      "Yes. We help transform existing project data into a live interactive inventory system, from layout and mapping through to live project inventory.",
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
