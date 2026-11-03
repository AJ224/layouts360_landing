import { SITE_STATS } from "@/lib/company"
import type { Locale } from "@/lib/i18n/locale"

export type HomeContent = {
  hero: {
    headlineBefore: string
    headlineAccent: string
    subhead: string
    primaryCta: string
    secondaryCta: string
    proofAria: string
    proof: { href: string; prefix: string; name: string }[]
  }
  problem: {
    headline: string
    painCards: string[]
    questions: string[]
    closerBefore: string
    closerAccent: string
    closerAfter: string
  }
  disconnectedTools: {
    heading: string
    body: string
    fragmentedLabel: string
    connectedLabel: string
    rows: { before: string; after: string }[]
  }
  showcase: {
    heading: string
    body: string
    stages: { id: string; title: string; body: string; imageAlt: string }[]
    caption: string
  }
  showUnit: {
    headlineBefore: string
    headlineAccent: string
    support: string
    link: string
  }
  platform: {
    headline: string
    pillars: { title: string; points: string[] }[]
  }
  doubleBookings: {
    headlineBefore: string
    headlineAccent: string
    body: string
    microProof: string
  }
  howItWorks: {
    headline: string
    steps: { title: string; desc: string }[]
    productCaption: string
  }
  channelPartners: {
    headline: string
    body: string
  }
  whyToolsFail: {
    headlineBefore: string
    headlineAccent: string
    insteadPrefix: string
    tools: { name: string; problems: string; instead: string }[]
  }
  features: {
    headline: string
    items: { label: string; description: string }[]
    primaryCta: string
    secondaryCta: string
  }
  inventoryTypes: {
    headline: string
    types: string[]
  }
  builtFor: {
    heading: string
    body: string
    items: { title: string; body: string; href: string; imageAlt: string }[]
  }
  groups: {
    heading: string
    body: string
    items: {
      id: "visualize" | "operate" | "control"
      title: string
      lead: string
      points: string[]
      href: string
      linkLabel: string
      imageAlt: string
    }[]
  }
  digitization: {
    headline: string
    body: string
  }
  stats: {
    ariaLabel: string
    items: { key: "projects" | "units" | "users"; value: string; label: string }[]
  }
  proof: {
    headline: string
    stories: { industry: string; detail: string }[]
    link: string
  }
  faq: {
    heading: string
    body: string
    items: { question: string; answer: string }[]
    link: string
  }
  cta: {
    headlineBefore: string
    headlineAccent: string
    headlineAfter: string
    body: string
    primaryCta: string
    secondaryCta: string
    trustPoints: string[]
  }
}

const EN: HomeContent = {
  hero: {
    headlineBefore: "Every Plot. Every Flat.",
    headlineAccent: "One Live System.",
    subhead: "The moment inventory moves, everyone sees it — no PDF, no Excel, no WhatsApp.",
    primaryCta: "Book a Demo",
    secondaryCta: "See How It Works",
    proofAria: "How teams use Layouts360",
    proof: [
      { href: "/digital-layout-maps", prefix: "FOLLOW UP", name: "ENQUIRY" },
      {
        href: "/real-estate-inventory-management-software",
        prefix: "PRESENT",
        name: "PROJECT",
      },
      {
        href: "/real-estate-booking-management-software",
        prefix: "BOOK",
        name: "& SELL",
      },
    ],
  },
  problem: {
    headline: "Your inventory shouldn't live in five places at once.",
    painCards: [
      "Static PDF layouts go stale the moment they're forwarded",
      "Excel has no live sync — two agents, two versions",
      "WhatsApp status is easy to miss, impossible to audit",
      "One missed update, one unit sold twice",
      "Finding a unit means digging through files",
      "Shared stock, no locking — double holds",
    ],
    questions: [
      "Is Plot 247 available?",
      "Which flats are open on floor 8?",
      "Did someone already hold this?",
      "Send me the latest Excel.",
    ],
    closerBefore: "Your team stops asking. Everyone sees the",
    closerAccent: "same live inventory",
    closerAfter: ".",
  },
  disconnectedTools: {
    heading: "Most development businesses run on disconnected tools.",
    body: "A PDF layout on WhatsApp, a master Excel with six versions, holds agreed verbally, collections in a separate ledger and follow-ups in someone's phone. Each one is fine on its own. Together they produce double allotments and Monday reconciliation.",
    fragmentedLabel: "Fragmented operations",
    connectedLabel: "One connected platform",
    rows: [
      { before: "PDF layout forwarded on WhatsApp", after: "One live layout, current for everyone" },
      { before: 'Excel with two versions of "available"', after: "One status per plot, locked by a freeze" },
      { before: "Verbal holds nobody can prove", after: "Timed freezes with an expiry and a history" },
      { before: "Brokers guessing from the last blast", after: "Partner logins on live inventory" },
      { before: "Collections tracked in a separate book", after: "Payments and dues on the booking itself" },
      {
        before: "Follow-ups in a personal phone",
        after: "Enquiries and site visits on the plot, visible to the team",
      },
    ],
  },
  showcase: {
    heading: "The product, as your team uses it",
    body: "Five screens from the Layouts360 demo account. The same plot moves from layout to collections without leaving the system.",
    stages: [
      {
        id: "layout",
        title: "Start on the layout",
        body: "Every plot carries its status in colour. Filters narrow by status, plot size and facing. Hundreds of plots, one screen, current for everyone.",
        imageAlt: "Layouts360 3D layout view with status and plot size filters and the map toolbar",
      },
      {
        id: "plot",
        title: "Open the plot",
        body: "Tap a plot to see its area and status. From here the team freezes it for a buyer or books it straight away.",
        imageAlt: "Layouts360 plot 316 selected on the 3D layout with Freeze and Book actions",
      },
      {
        id: "freeze",
        title: "Confirm the sold plot",
        body: "Sold plots list the customer, who closed the deal and whether a booking record is attached. Gaps show up before they slip.",
        imageAlt: "Layouts360 sold plots list with customer, sold by and booked status",
      },
      {
        id: "book",
        title: "Book and track the deal",
        body: "Bookings carry the customer, the total price and the pending amount, grouped by stage: active, payment, registration, sold.",
        imageAlt: "Layouts360 bookings table with customer, total price, pending amount and status",
      },
      {
        id: "collect",
        title: "Collect against the booking",
        body: "Receivable, received and pending at a glance. Every entry is a payment or a due on a plot, with mode, category and who handled it.",
        imageAlt: "Layouts360 payments view with total receivable, received and pending, and a ledger of entries",
      },
    ],
    caption: "Screens captured from the Layouts360 demo account. Sample names and numbers.",
  },
  showUnit: {
    headlineBefore: "Show the Unit,",
    headlineAccent: "Not a Spreadsheet Row",
    support:
      "Interactive layouts for plots. Clear building-floor-unit views for apartments. Buyers see what's actually available.",
    link: "Explore platform features",
  },
  platform: {
    headline: "One platform. Your entire inventory.",
    pillars: [
      {
        title: "Interactive Plot Layouts",
        points: [
          "Click a plot for details, availability, status",
          "Move units between available, hold, booked, sold",
        ],
      },
      {
        title: "Flat & Apartment Inventory",
        points: [
          "Flat number, floor, configuration, area, price",
          "Live view of what's actually available",
        ],
      },
      {
        title: "Live Dashboard",
        points: [
          "Total, Available, Hold, Booked, Sold",
          "Filter by project, block, building, floor, type, price",
        ],
      },
    ],
  },
  doubleBookings: {
    headlineBefore: "One unit. One status.",
    headlineAccent: "Zero double allotment.",
    body: "A hold locks a unit the moment your agent clicks it. Every viewer — desk, broker, manager — sees the same state until it's confirmed, released, or expires.",
    microProof: "No reconciliation meetings. No launch-weekend disputes.",
  },
  howItWorks: {
    headline: "Find. Show. Hold. Book. Track.",
    steps: [
      { title: "Find", desc: "the exact plot or flat" },
      { title: "Show", desc: "location or unit, visually" },
      { title: "Hold", desc: "reserve while the customer decides" },
      { title: "Book", desc: "record the booking" },
      { title: "Track", desc: "follow it to close" },
    ],
    productCaption:
      "Sales sees the same numbers on the phone — enquiries, bookings, sold, money in. Not a PDF from this morning.",
  },
  channelPartners: {
    headline: "Give Channel Partners & Brokers a login, not a PDF blast.",
    body: "Partners see live availability and submit booking requests tied to real units — not a group chat. Fewer disputes over who sourced which lead.",
  },
  whyToolsFail: {
    headlineBefore: "Built for deals.",
    headlineAccent: "Not for plots.",
    insteadPrefix: "Layouts360:",
    tools: [
      {
        name: "Excel",
        problems:
          "No live sync. No visual layout. One wrong cell sells a sold unit. No audit trail.",
        instead: "One inventory, every agent, same moment.",
      },
      {
        name: "WhatsApp",
        problems:
          "Outdated the second it's forwarded. No record of what was promised. Zero reporting.",
        instead: "A live link that always shows current status.",
      },
      {
        name: "Generic CRM",
        problems: "Built around contacts, not units. No hold logic. Stock still lives in Excel.",
        instead: "CRM built around the unit itself.",
      },
    ],
  },
  features: {
    headline: "Everything Your Team Needs",
    items: [
      { label: "Inventory Management", description: "Every plot and unit, one system" },
      {
        label: "Interactive Visualization",
        description: "Present inventory, not spreadsheets",
      },
      {
        label: "CRM & Sales Workflow",
        description: "Customers, salespeople, units — linked",
      },
      {
        label: "Bulk Management",
        description: "Reprice or restatus hundreds of units in one action",
      },
      {
        label: "Reports & Dashboard",
        description: "Sold %, live, without opening a file",
      },
      {
        label: "Customer Sharing",
        description: "Send a link showing only what that buyer should see",
      },
      { label: "Team Management", description: "Control who touches what" },
      {
        label: "Excel Import",
        description: "Bring your sheet in — map columns, done",
      },
    ],
    primaryCta: "Book a Demo",
    secondaryCta: "Full feature details",
  },
  inventoryTypes: {
    headline: "Built for Your Inventory Type",
    types: [
      "Plotted Development",
      "Residential Layouts",
      "Apartments",
      "Multi-Building Projects",
      "Villas",
      "Large Multi-Phase Projects",
    ],
  },
  builtFor: {
    heading: "Built for real estate development",
    body: "The same platform, configured for how each kind of project sells.",
    items: [
      {
        title: "Plotted developments",
        body: "Plot numbers, survey numbers, sizes and facing on a live layout. Freeze, book and collect from the plot.",
        href: "/real-estate-plot-management-software",
        imageAlt: "Low-poly isometric view of a plotted development with color-coded lots and trees",
      },
      {
        title: "Township projects",
        body: "Phased releases, large partner networks and launch days without verbal holds or PDF blasts.",
        href: "/township-management-software",
        imageAlt: "Low-poly township map with villas on plots, central park, clubhouse amenities, and status legend",
      },
      {
        title: "Residential developments",
        body: "Plots and apartment towers in one inventory: building, floor, unit, configuration and price.",
        href: "/apartment-inventory-management-software",
        imageAlt: "Modern mid-rise residential apartment building with balconies and landscaped grounds",
      },
      {
        title: "Multi-project developers",
        body: "Several layouts in one account, with a ledger per layout and dashboards across the portfolio.",
        href: "/solutions",
        imageAlt: "Low-poly isometric portfolio showing plotted, residential, and villa projects together",
      },
    ],
  },
  groups: {
    heading: "One connected platform",
    body: "Three groups of capability, one inventory underneath them.",
    items: [
      {
        id: "visualize",
        title: "Visualize",
        lead: "The project as a live layout, not a file.",
        points: [
          "Interactive project layouts digitised from your PDF, CAD, Excel or Illustrator files",
          "Plot-level information: area, facing, side dimensions, survey number, rate",
          "Project presentation with photos, key map and nearby places",
          "Buyer-facing project links that show only what you choose to show",
        ],
        href: "/digital-layout-maps",
        linkLabel: "Visualization",
        imageAlt: "Layouts360 plot detail: plot 146, 900 sq ft, east facing, with freeze and book actions",
      },
      {
        id: "operate",
        title: "Operate",
        lead: "Every sales action lands on the unit.",
        points: [
          "Inventory and availability across projects and phases",
          "Enquiries, site visits and follow-ups attached to the plot",
          "Freeze, book and record payments without double allotment",
          "Channel partner logins, booking requests and commission tracking",
        ],
        href: "/real-estate-crm-software",
        linkLabel: "Sales operations",
        imageAlt: "Layouts360 CRM: My day view with first calls, site visits and follow-ups",
      },
      {
        id: "control",
        title: "Control",
        lead: "Leadership sees the business on live data.",
        points: [
          "Collections, dues and a ledger per layout",
          "Dashboard with enquiries, bookings, sold and today's receivables, with exports",
          "Team roles, permissions, GPS attendance and an activity trail",
          "Several projects in one account, one source of truth",
        ],
        href: "/real-estate-accounting-software",
        linkLabel: "Bookings and collections",
        imageAlt: "Layouts360 dashboard: today's received and top performers",
      },
    ],
  },
  digitization: {
    headline: "Already have it in PDF, CAD, Excel, or Illustrator?",
    body: "We digitize by property type, inventory size, and complexity — so your team sells from a live map, not static files.",
  },
  stats: {
    ariaLabel: "Layouts360 at a glance",
    items: SITE_STATS.map((s) => ({ key: s.key, value: s.value, label: s.labelEn })),
  },
  proof: {
    headline: "Real workflows",
    stories: [
      {
        industry: "Plotted layout, 120 plots",
        detail:
          "Version-6 spreadsheet, two double-booking incidents a quarter. One live map ended the reconciliation meetings.",
      },
      {
        industry: "Multi-phase township",
        detail:
          "200+ brokers, verbal holds on paper at launch. Timed blocking, one map. No reconciliation after the weekend.",
      },
      {
        industry: "Broker network, 40+ partners",
        detail:
          "Hourly WhatsApp PDF blasts, constant disputes. Partner logins on live inventory cut the arguments.",
      },
    ],
    link: "Read customer stories",
  },
  faq: {
    heading: "Questions developers ask first",
    body: "Short answers here. The full FAQ covers setup, access, data and support in more detail.",
    items: [
      {
        question: "What is Layouts360?",
        answer:
          "A real estate operating system for developers. It combines interactive layouts, plot and apartment inventory, enquiries and site visits, freezing and booking, payments and collections, channel partners and team tools on one platform.",
      },
      {
        question: "Who is it designed for?",
        answer:
          "Plot and layout developers, township developers, builders selling plots alongside apartment towers, and companies running several projects. Sales teams and channel partner networks use it daily.",
      },
      {
        question: "How does project setup and migration work?",
        answer:
          "You share your layout files and your current sheet. The team digitises the layout, configures statuses, roles and partners, and imports existing plots, customers and bookings. The timeline is scoped after reviewing your files.",
      },
      {
        question: "How do sales teams and brokers work in it?",
        answer:
          "Staff get roles with the permissions you set, for example viewing and freezing plots without deleting. Channel partners get their own logins, see live availability and submit booking requests tied to specific plots.",
      },
      {
        question: "How is pricing and onboarding structured?",
        answer:
          "Pricing depends on inventory size, property type and the number of users. Digitisation is scoped per layout. Book a demo and the team maps a plan to your projects.",
      },
      {
        question: "Who can see our data?",
        answer:
          "Access is controlled by roles and permissions you manage. Buyer links show only what you choose to publish, and partner logins show availability without exposing your master sheet.",
      },
      {
        question: "What support do we get?",
        answer:
          "Onboarding by the Layouts360 team and WhatsApp support afterwards. The product is built for non-technical staff and works on basic 4G at the site.",
      },
    ],
    link: "Read the full FAQ",
  },
  cta: {
    headlineBefore: "PRE-SALE.",
    headlineAccent: "VISUALISATION.",
    headlineAfter: "POST-SALE.",
    body: "One Complete System for Real Estate Developers.",
    primaryCta: "Book a Demo",
    secondaryCta: "See Your Project on Layouts360",
    trustPoints: ["Plots, flats & apartments", "Live inventory", "Book a walkthrough"],
  },
}

const HI: HomeContent = {
  hero: {
    headlineBefore: "पूरा प्रोजेक्ट,",
    headlineAccent: "एक स्क्रीन पर",
    subhead:
      "प्लॉट बिका या होल्ड हुआ — टीम को उसी वक़्त पता चले। PDF ढूँढने या Excel अपडेट करने का झंझट खत्म।",
    primaryCta: "डेमो बुक करें",
    secondaryCta: "काम कैसे करता है, देखें",
    proofAria: "टीमें Layouts360 कैसे इस्तेमाल करती हैं",
    proof: [
      { href: "/digital-layout-maps", prefix: "फ़ॉलो-अप", name: "इंक्वायरी" },
      {
        href: "/real-estate-inventory-management-software",
        prefix: "प्रेज़ेंट",
        name: "प्रोजेक्ट",
      },
      {
        href: "/real-estate-booking-management-software",
        prefix: "बुक",
        name: "व सेल",
      },
    ],
  },
  problem: {
    headline: "एक प्लॉट की जानकारी, पाँच जगह अलग-अलग क्यों?",
    painCards: [
      "PDF भेजते ही पुराना — अगले दिन फिर वही स्टेटस पूछना पड़ता है",
      "हर एजेंट की अपनी Excel, किसकी सही है कोई नहीं जानता",
      "WhatsApp में स्टेटस स्क्रॉल कर के ढूँढना पड़ता है",
      "एक अपडेट भूले नहीं कि यूनिट डबल बिक गई",
      "ग्राहक के सामने यूनिट ढूँढते-ढूँढते समय निकल जाता है",
      "दो सेल्समैन, एक ही प्लॉट — कन्फ्यूज़न तय है",
    ],
    questions: [
      "प्लॉट 247 खाली है क्या?",
      "8वीं फ्लोर पर क्या बचा है?",
      "ये पहले से होल्ड तो नहीं?",
      "Excel फिर से भेज दो।",
    ],
    closerBefore: "ये सवाल अब बंद। पूरी टीम",
    closerAccent: "एक ही स्क्रीन",
    closerAfter: " देखती है, रियल टाइम में।",
  },
  disconnectedTools: {
    heading: "ज़्यादातर डेवलपमेंट बिज़नेस अलग-अलग टूल्स पर चलते हैं।",
    body: "WhatsApp पर PDF लेआउट, छह वर्ज़न वाली मास्टर Excel, ज़ुबानी होल्ड, अलग खाते में कलेक्शन और किसी के फ़ोन में फ़ॉलो-अप। अलग-अलग सब ठीक हैं। साथ में ये डबल अलॉटमेंट और सोमवार का मिलान पैदा करते हैं।",
    fragmentedLabel: "बिखरे हुए ऑपरेशंस",
    connectedLabel: "एक जुड़ा हुआ प्लेटफ़ॉर्म",
    rows: [
      { before: "WhatsApp पर फ़ॉरवर्ड किया PDF लेआउट", after: "एक लाइव लेआउट, सबके लिए अपडेटेड" },
      { before: 'Excel में "available" के दो वर्ज़न', after: "हर प्लॉट का एक स्टेटस, फ़्रीज़ से लॉक" },
      {
        before: "ज़ुबानी होल्ड जो कोई साबित नहीं कर सकता",
        after: "समयबद्ध फ़्रीज़, एक्सपायरी और हिस्ट्री के साथ",
      },
      { before: "ब्रोकर पिछले ब्लास्ट से अंदाज़ा लगाते हैं", after: "लाइव इन्वेंटरी पर पार्टनर लॉगिन" },
      { before: "कलेक्शन अलग किताब में", after: "भुगतान और बकाया बुकिंग पर ही" },
      {
        before: "फ़ॉलो-अप निजी फ़ोन में",
        after: "एन्क्वायरी और साइट विज़िट प्लॉट पर, टीम को दिखती हैं",
      },
    ],
  },
  showcase: {
    heading: "प्रोडक्ट, जैसा आपकी टीम इस्तेमाल करती है",
    body: "Layouts360 डेमो अकाउंट की पाँच स्क्रीन। वही प्लॉट लेआउट से कलेक्शन तक सिस्टम छोड़े बिना जाता है।",
    stages: [
      {
        id: "layout",
        title: "लेआउट से शुरू करें",
        body: "हर प्लॉट अपना स्टेटस रंग में दिखाता है। फ़िल्टर स्टेटस, प्लॉट साइज़ और दिशा से छाँटते हैं। सैकड़ों प्लॉट, एक स्क्रीन, सबके लिए अपडेटेड।",
        imageAlt: "Layouts360 का 3D लेआउट व्यू, स्टेटस और प्लॉट साइज़ फ़िल्टर तथा मैप टूलबार के साथ",
      },
      {
        id: "plot",
        title: "प्लॉट खोलें",
        body: "प्लॉट पर टैप करके क्षेत्रफल और स्टेटस देखें। यहीं से टीम खरीदार के लिए फ़्रीज़ करती है या सीधे बुक करती है।",
        imageAlt: "Layouts360 में 3D लेआउट पर चुना गया प्लॉट 316, Freeze और Book कार्रवाइयों के साथ",
      },
      {
        id: "freeze",
        title: "सोल्ड प्लॉट कन्फ़र्म करें",
        body: "सोल्ड प्लॉट सूची में ग्राहक, किसने डील बंद की और बुकिंग रिकॉर्ड जुड़ा है या नहीं — सब दिखता है। गैप छिपने से पहले दिख जाते हैं।",
        imageAlt: "Layouts360 सोल्ड प्लॉट सूची, ग्राहक, sold by और booked स्टेटस के साथ",
      },
      {
        id: "book",
        title: "बुक करें और डील ट्रैक करें",
        body: "बुकिंग में ग्राहक, कुल कीमत और बकाया राशि होती है, चरण के अनुसार: active, payment, registration, sold।",
        imageAlt: "Layouts360 बुकिंग तालिका, ग्राहक, कुल कीमत, बकाया और स्टेटस के साथ",
      },
      {
        id: "collect",
        title: "बुकिंग पर कलेक्शन",
        body: "प्राप्य, प्राप्त और बकाया एक नज़र में। हर एंट्री किसी प्लॉट पर भुगतान या बकाया है, मोड, श्रेणी और हैंडल करने वाले के साथ।",
        imageAlt: "Layouts360 भुगतान व्यू, कुल प्राप्य, प्राप्त और बकाया के साथ एंट्री लेजर",
      },
    ],
    caption: "Layouts360 डेमो अकाउंट से ली गई स्क्रीन। सैंपल नाम और नंबर।",
  },
  showUnit: {
    headlineBefore: "सिर्फ लिस्ट नहीं,",
    headlineAccent: "असली नज़ारा",
    support:
      "प्लॉट का इंटरैक्टिव नक्शा। अपार्टमेंट का बिल्डिंग-फ्लोर-यूनिट व्यू। ग्राहक को दिखे कि असल में क्या बचा है — Excel की लाइन नहीं।",
    link: "पूरे फीचर्स देखें",
  },
  platform: {
    headline: "एक सिस्टम। पूरा स्टॉक।",
    pillars: [
      {
        title: "प्लॉट लेआउट",
        points: [
          "क्लिक करें, डीटेल और स्टेटस तुरंत सामने",
          "अवेलेबल से होल्ड, बुक्ड, सोल्ड — एक टैप में शिफ्ट करें",
        ],
      },
      {
        title: "फ्लैट व अपार्टमेंट",
        points: [
          "फ्लोर, कॉन्फ़िगरेशन, एरिया, प्राइस — सब एक जगह",
          "सेल्स टीम को पता रहे क्या असल में बिकाऊ है",
        ],
      },
      {
        title: "लाइव डैशबोर्ड",
        points: [
          "टोटल, अवेलेबल, होल्ड, बुक्ड, सोल्ड — एक नज़र में",
          "प्रोजेक्ट, ब्लॉक, फ्लोर, टाइप से छांटें",
        ],
      },
    ],
  },
  doubleBookings: {
    headlineBefore: "एक यूनिट, एक स्टेटस —",
    headlineAccent: "हर बार",
    body: "एजेंट के क्लिक करते ही यूनिट लॉक। कन्फर्म हो, रिलीज़ हो या होल्ड टाइम-आउट हो — तब तक सबको एक ही सच्चाई दिखती है।",
    microProof: "लॉन्च के दिन भी कोई विवाद नहीं, कोई रात भर की रीकंसीलिएशन मीटिंग नहीं।",
  },
  howItWorks: {
    headline: "ढूँढें · दिखाएं · होल्ड करें · बुक करें · ट्रैक करें",
    steps: [
      { title: "ढूँढें", desc: "ग्राहक जो चाहता है, वो यूनिट" },
      { title: "दिखाएं", desc: "नक्शे पर, लाइव" },
      { title: "होल्ड करें", desc: "सोचने का समय दें, स्टॉक सुरक्षित" },
      { title: "बुक करें", desc: "डिटेल दर्ज, बात पक्की" },
      { title: "ट्रैक करें", desc: "पेमेंट से पज़ेशन तक नज़र" },
    ],
    productCaption:
      "सेल्स को फोन पर वही नंबर दिखते हैं — इंक्वायरी, बुकिंग, सोल्ड, पैसा आया। सुबह वाला PDF नहीं।",
  },
  channelPartners: {
    headline: "ब्रोकर को PDF नहीं, लॉगिन दें",
    body: "पार्टनर खुद लाइव स्टॉक देखे, खुद बुकिंग रिक्वेस्ट भेजे — असली यूनिट पर, ग्रुप चैट पर नहीं। किसका लीड था, इस पर बहस कम होगी।",
  },
  whyToolsFail: {
    headlineBefore: "ये टूल्स प्लॉट के लिए",
    headlineAccent: "बने ही नहीं थे",
    insteadPrefix: "Layouts360 में:",
    tools: [
      {
        name: "Excel",
        problems:
          "एक गलत सेल, सोल्ड यूनिट अवेलेबल दिख सकती है। किसने बदला, कब बदला — कुछ पता नहीं चलता।",
        instead: "जो एक एजेंट देखे, वही सबको दिखे — उसी वक़्त।",
      },
      {
        name: "WhatsApp",
        problems: "भेजते ही पुराना। किससे क्या वादा हुआ, कोई ट्रैक नहीं।",
        instead: "एक लिंक, हमेशा ताज़ा स्टेटस।",
      },
      {
        name: "जनरल CRM",
        problems:
          "लीड और कॉन्टैक्ट के लिए बना, प्लॉट या फ्लैट के लिए नहीं। स्टॉक फिर भी Excel में अटका रहता है।",
        instead: "CRM की नींव ही यूनिट पर टिकी है।",
      },
    ],
  },
  features: {
    headline: "टीम को जो चाहिए, वो सब",
    items: [
      {
        label: "इन्वेंटरी मैनेजमेंट",
        description: "हर यूनिट एक जगह, कोई फाइल नहीं ढूँढनी",
      },
      {
        label: "इंटरैक्टिव नक्शा",
        description: "ग्राहक को दिखाएं, समझाएं नहीं",
      },
      {
        label: "CRM व सेल्स वर्कफ़्लो",
        description: "ग्राहक, सेल्समैन, यूनिट — तीनों जुड़े",
      },
      {
        label: "बल्क अपडेट",
        description: "सैकड़ों यूनिट का रेट एक झटके में बदलें",
      },
      {
        label: "रिपोर्ट्स",
        description: "सोल्ड % पता चले, फाइल खोले बिना",
      },
      {
        label: "कस्टमर शेयरिंग",
        description: "सिर्फ काम की यूनिट का लिंक भेजें",
      },
      {
        label: "टीम एक्सेस",
        description: "कौन क्या देखे-बदले, आप तय करें",
      },
      {
        label: "Excel इम्पोर्ट",
        description: "पुरानी शीट अपलोड करें, बाकी हम संभालें",
      },
    ],
    primaryCta: "डेमो बुक करें",
    secondaryCta: "सारे फीचर्स देखें",
  },
  inventoryTypes: {
    headline: "आपके प्रोजेक्ट के लिए",
    types: [
      "प्लॉटेड लेआउट",
      "रेज़िडेंशियल स्कीम",
      "अपार्टमेंट",
      "मल्टी-टावर प्रोजेक्ट",
      "विला",
      "बड़े मल्टी-फेज़ लॉन्च",
    ],
  },
  builtFor: {
    heading: "रियल एस्टेट डेवलपमेंट के लिए बना",
    body: "वही प्लेटफ़ॉर्म, हर तरह के प्रोजेक्ट के बिकने के तरीके के लिए कॉन्फ़िगर।",
    items: [
      {
        title: "प्लॉटेड डेवलपमेंट",
        body: "लाइव लेआउट पर प्लॉट नंबर, सर्वे नंबर, साइज़ और दिशा। प्लॉट से ही फ़्रीज़, बुक और कलेक्ट करें।",
        href: "/real-estate-plot-management-software",
        imageAlt: "प्लॉटेड डेवलपमेंट का लो-पॉली आइसोमेट्रिक व्यू, रंगीन प्लॉट और पेड़ों के साथ",
      },
      {
        title: "टाउनशिप प्रोजेक्ट",
        body: "फेज़ में रिलीज़, बड़े पार्टनर नेटवर्क और लॉन्च डे, बिना ज़ुबानी होल्ड या PDF ब्लास्ट के।",
        href: "/township-management-software",
        imageAlt: "लो-पॉली टाउनशिप मैप: प्लॉट पर विला, सेंट्रल पार्क, क्लबहाउस अमेनिटी और स्टेटस लेजेंड",
      },
      {
        title: "रेज़िडेंशियल डेवलपमेंट",
        body: "प्लॉट और अपार्टमेंट टावर एक इन्वेंटरी में: बिल्डिंग, फ़्लोर, यूनिट, कॉन्फ़िगरेशन और कीमत।",
        href: "/apartment-inventory-management-software",
        imageAlt: "रेज़िडेंशियल अपार्टमेंट टावर, टावर A पर लाइव यूनिट हाइलाइट के साथ",
      },
      {
        title: "मल्टी-प्रोजेक्ट डेवलपर",
        body: "एक अकाउंट में कई लेआउट, हर लेआउट का लेजर और पोर्टफोलियो डैशबोर्ड।",
        href: "/solutions",
        imageAlt: "मल्टी-प्रोजेक्ट पोर्टफोलियो का लो-पॉली आइसोमेट्रिक व्यू",
      },
    ],
  },
  groups: {
    heading: "एक जुड़ा हुआ प्लेटफ़ॉर्म",
    body: "क्षमताओं के तीन समूह, नीचे एक ही इन्वेंटरी।",
    items: [
      {
        id: "visualize",
        title: "Visualize",
        lead: "प्रोजेक्ट एक लाइव लेआउट है, फ़ाइल नहीं।",
        points: [
          "आपकी PDF, CAD, Excel या Illustrator फ़ाइलों से डिजिटाइज़ किए इंटरैक्टिव लेआउट",
          "प्लॉट-स्तर जानकारी: क्षेत्रफल, दिशा, साइड डाइमेंशन, सर्वे नंबर, दर",
          "फ़ोटो, की-मैप और आसपास की जगहों के साथ प्रोजेक्ट प्रस्तुति",
          "खरीदार के लिए प्रोजेक्ट लिंक, जिसमें सिर्फ़ वही दिखे जो आप चाहें",
        ],
        href: "/digital-layout-maps",
        linkLabel: "विज़ुअलाइज़ेशन",
        imageAlt: "Layouts360 प्लॉट विवरण: प्लॉट 146, 900 वर्ग फ़ुट, पूर्व मुखी, फ़्रीज़ और बुक विकल्पों के साथ",
      },
      {
        id: "operate",
        title: "Operate",
        lead: "हर सेल्स कार्रवाई यूनिट पर दर्ज होती है।",
        points: [
          "प्रोजेक्ट और फेज़ के पार इन्वेंटरी और उपलब्धता",
          "प्लॉट से जुड़ी एन्क्वायरी, साइट विज़िट और फ़ॉलो-अप",
          "डबल अलॉटमेंट के बिना फ़्रीज़, बुक और भुगतान दर्ज",
          "चैनल पार्टनर लॉगिन, बुकिंग अनुरोध और कमीशन ट्रैकिंग",
        ],
        href: "/real-estate-crm-software",
        linkLabel: "सेल्स ऑपरेशंस",
        imageAlt: "Layouts360 CRM: My day व्यू, पहली कॉल, साइट विज़िट और फ़ॉलो-अप के साथ",
      },
      {
        id: "control",
        title: "Control",
        lead: "नेतृत्व बिज़नेस को लाइव डेटा पर देखता है।",
        points: [
          "कलेक्शन, बकाया और हर लेआउट का लेजर",
          "एन्क्वायरी, बुकिंग, बिक्री और आज की प्राप्तियों वाला डैशबोर्ड, एक्सपोर्ट के साथ",
          "टीम रोल, अनुमतियाँ, GPS अटेंडेंस और गतिविधि ट्रेल",
          "एक अकाउंट में कई प्रोजेक्ट, एक ही सत्य स्रोत",
        ],
        href: "/real-estate-accounting-software",
        linkLabel: "बुकिंग और कलेक्शन",
        imageAlt: "Layouts360 डैशबोर्ड: आज की प्राप्तियाँ और टॉप परफ़ॉर्मर",
      },
    ],
  },
  digitization: {
    headline: "PDF, CAD, Excel में लेआउट पड़ा है?",
    body: "साइज़ और कॉम्प्लेक्सिटी के हिसाब से हम खुद डिजिटाइज़ कर देंगे — टीम फाइल नहीं, लाइव मैप से बेचेगी।",
  },
  stats: {
    ariaLabel: "Layouts360 एक नज़र में",
    items: SITE_STATS.map((s) => ({ key: s.key, value: s.value, label: s.labelHi })),
  },
  proof: {
    headline: "असली किस्से",
    stories: [
      {
        industry: "120 प्लॉट का लेआउट",
        detail:
          "हर तिमाही दो डबल-बुकिंग, Excel वर्ज़न-6 पर अटकी टीम। एक लाइव मैप से रीकंसीलिएशन मीटिंग ही खत्म हो गई।",
      },
      {
        industry: "मल्टी-फेज़ टाउनशिप",
        detail:
          "लॉन्च डे पर 200+ ब्रोकर, कागज़ पर वर्बल होल्ड। टाइम्ड ब्लॉकिंग से पूरा वीकेंड बिना विवाद निकला।",
      },
      {
        industry: "40+ पार्टनर नेटवर्क",
        detail:
          "हर घंटे WhatsApp पर PDF, फिर भी लीड की लड़ाई। पार्टनर लॉगिन से बहस घट गई।",
      },
    ],
    link: "पूरी कहानियाँ पढ़ें",
  },
  faq: {
    heading: "डेवलपर सबसे पहले क्या पूछते हैं",
    body: "यहाँ छोटे जवाब। पूरा FAQ सेटअप, एक्सेस, डेटा और सपोर्ट को विस्तार से कवर करता है।",
    items: [
      {
        question: "Layouts360 क्या है?",
        answer:
          "डेवलपरों के लिए एक रियल एस्टेट ऑपरेटिंग सिस्टम। यह इंटरैक्टिव लेआउट, प्लॉट और अपार्टमेंट इन्वेंटरी, एन्क्वायरी और साइट विज़िट, फ़्रीज़िंग और बुकिंग, भुगतान और कलेक्शन, चैनल पार्टनर और टीम टूल्स को एक प्लेटफ़ॉर्म पर जोड़ता है।",
      },
      {
        question: "यह किसके लिए बना है?",
        answer:
          "प्लॉट और लेआउट डेवलपर, टाउनशिप डेवलपर, अपार्टमेंट टावर के साथ प्लॉट बेचने वाले बिल्डर, और कई प्रोजेक्ट चलाने वाली कंपनियाँ। सेल्स टीमें और चैनल पार्टनर नेटवर्क इसे रोज़ इस्तेमाल करते हैं।",
      },
      {
        question: "प्रोजेक्ट सेटअप और माइग्रेशन कैसे होता है?",
        answer:
          "आप अपनी लेआउट फ़ाइलें और वर्तमान शीट साझा करते हैं। टीम लेआउट डिजिटाइज़ करती है, स्टेटस, रोल और पार्टनर कॉन्फ़िगर करती है, और मौजूदा प्लॉट, ग्राहक और बुकिंग इम्पोर्ट करती है। समयसीमा फ़ाइलें देखने के बाद तय होती है।",
      },
      {
        question: "सेल्स टीम और ब्रोकर इसमें कैसे काम करते हैं?",
        answer:
          "स्टाफ़ को आपकी तय अनुमतियों वाले रोल मिलते हैं, जैसे प्लॉट देखना और फ़्रीज़ करना पर डिलीट नहीं। चैनल पार्टनरों को अपने लॉगिन मिलते हैं, वे लाइव उपलब्धता देखते हैं और विशेष प्लॉट पर बुकिंग अनुरोध भेजते हैं।",
      },
      {
        question: "प्राइसिंग और ऑनबोर्डिंग कैसे तय होती है?",
        answer:
          "प्राइसिंग इन्वेंटरी आकार, प्रॉपर्टी प्रकार और यूज़र संख्या पर निर्भर करती है। डिजिटाइज़ेशन हर लेआउट के लिए अलग से तय होता है। डेमो बुक करें और टीम आपके प्रोजेक्ट के लिए प्लान बनाती है।",
      },
      {
        question: "हमारा डेटा कौन देख सकता है?",
        answer:
          "एक्सेस उन रोल और अनुमतियों से नियंत्रित होता है जिन्हें आप प्रबंधित करते हैं। खरीदार लिंक सिर्फ़ वही दिखाते हैं जो आप प्रकाशित करना चुनें, और पार्टनर लॉगिन आपकी मास्टर शीट दिखाए बिना उपलब्धता दिखाते हैं।",
      },
      {
        question: "हमें क्या सपोर्ट मिलता है?",
        answer:
          "Layouts360 टीम से ऑनबोर्डिंग और बाद में WhatsApp सपोर्ट। प्रोडक्ट गैर-तकनीकी स्टाफ़ के लिए बना है और साइट पर बेसिक 4G पर चलता है।",
      },
    ],
    link: "पूरा FAQ पढ़ें",
  },
  cta: {
    headlineBefore: "प्री-सेल.",
    headlineAccent: "विज़ुअलाइज़ेशन.",
    headlineAfter: "पोस्ट-सेल.",
    body: "रियल एस्टेट डेवलपर्स के लिए एक पूरा सिस्टम।",
    primaryCta: "डेमो बुक करें",
    secondaryCta: "अपना प्रोजेक्ट यहाँ देखें",
    trustPoints: ["प्लॉट, फ्लैट व अपार्टमेंट", "लाइव इन्वेंटरी", "वॉकथ्रू बुक करें"],
  },
}

const HOME: Record<Locale, HomeContent> = { en: EN, hi: HI }

export function getHomeContent(locale: Locale): HomeContent {
  return HOME[locale]
}
