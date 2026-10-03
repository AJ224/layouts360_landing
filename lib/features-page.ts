export const FEATURES_PAGE = {
  eyebrow: "How Layouts360 works",
  headline: "See the plot. Hold it. Book it.",
  headlineAccent: "Everyone sees the same thing.",
  subhead:
    "Layouts360 is a live map of your inventory — plots, flats, shops. When a unit moves, your office, brokers, and buyers see it. No PDF. No Excel. No WhatsApp guesswork.",
  primaryCta: "Book a free demo",
  secondaryCta: "Browse solutions",
  jump: [
    { href: "#map", label: "Live map" },
    { href: "#hold", label: "Hold & book" },
    { href: "#crm", label: "CRM" },
    { href: "#partners", label: "Brokers" },
    { href: "#share", label: "Buyer links" },
    { href: "#reports", label: "Reports" },
  ],
  steps: {
    headline: "Three steps. Then you sell from the map.",
    items: [
      {
        n: "1",
        title: "We digitize your layout",
        body: "PDF, CAD, Excel, or Illustrator — we turn it into a clickable map with every unit on it.",
      },
      {
        n: "2",
        title: "Your team sells on live stock",
        body: "Agents tap a plot, hold it, book it. Status changes for everyone at once.",
      },
      {
        n: "3",
        title: "Brokers and buyers get the same truth",
        body: "Partner logins and customer links show what’s actually open — not last week’s PDF.",
      },
    ],
  },
  sections: [
    {
      id: "map",
      problem: "The PDF you sent this morning is already wrong.",
      title: "A live map of every plot and flat",
      body: "Click a unit. See size, facing, price, and status. Zoom the layout on a phone at the site, or on a screen in the office.",
      points: [
        "Color-coded: available, held, booked, sold",
        "Plot and flat details without opening a file",
        "Many projects and phases in one dashboard",
      ],
    },
    {
      id: "hold",
      problem: "Two agents. Two Excels. Same plot sold twice.",
      title: "Hold locks the unit for everyone",
      body: "When someone holds a plot, it locks on the map. Timed holds expire. Booking attaches the buyer. Nobody promises the same unit twice.",
      points: [
        "Tap to freeze — others see it immediately",
        "Holds can expire so stock doesn’t sit forever",
        "Booking and status live on the same unit",
      ],
    },
    {
      id: "crm",
      problem: "Your CRM doesn’t know Plot 247.",
      title: "Leads sit on the actual unit",
      body: "The customer, the visit, and the follow-up attach to a plot or flat — not a generic deal in a pipeline that sales never trusts.",
      points: [
        "Buyer linked to the unit they want",
        "Site visits and follow-ups in one place",
        "Sales sees inventory and the customer together",
      ],
    },
    {
      id: "partners",
      problem: "You blast a PDF. Brokers argue over what’s open.",
      title: "Channel partners log in to live stock",
      body: "Give brokers their own login. They see availability. They request a booking on a real plot — not a screenshot in a group chat.",
      points: [
        "Partner access without handing over Excel",
        "Booking requests tied to a unit",
        "Fewer “who held this?” disputes after launch day",
      ],
    },
    {
      id: "share",
      problem: "Buyers get the whole layout and get lost.",
      title: "Send a link. Show only what they should see.",
      body: "Share a customer-facing view of the project. They explore the map on their phone. You stay in control of what’s visible.",
      points: [
        "Works on mobile — the way buyers actually look",
        "Share a project, not a 40MB PDF",
        "Status they see matches what you see",
      ],
    },
    {
      id: "reports",
      problem: "Sold % lives in a sheet someone forgot to update.",
      title: "Numbers come off the live map",
      body: "Available, held, booked, sold — from the same inventory your team is selling. No extra file to reconcile on Monday.",
      points: [
        "See sold and available without opening Excel",
        "Team and project view in one place",
        "Import your sheet once; then sell from the map",
      ],
    },
  ],
  compare: {
    headline: "What changes on day one",
    beforeLabel: "How most teams sell today",
    afterLabel: "With Layouts360",
    rows: [
      { before: "PDF layout forwarded on WhatsApp", after: "One live map, always current" },
      { before: "PDF layout forwarded on WhatsApp", after: "One live layout, always current" },
      { before: "Excel with two versions of “available”", after: "One status. A hold locks it." },
      { before: "Verbal holds nobody can prove", after: "Timed freeze everyone can see" },
      { before: "Brokers guessing from last blast", after: "Partner login on live inventory" },
    ],
  },
  midCta: {
    headline: "Bring your layout. We’ll show it live.",
    body: "A short demo on your project — not a generic slide deck.",
    cta: "Book a free demo",
  },
} as const
