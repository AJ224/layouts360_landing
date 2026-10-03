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
  digitization: {
    headline: string
    body: string
  }
  proof: {
    headline: string
    stories: { industry: string; detail: string }[]
    link: string
  }
  faq: {
    heading: string
    subhead: string
    items: { question: string; answer: string }[]
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
      { href: "/digital-layout-maps", prefix: "Visualize", name: "layouts" },
      {
        href: "/real-estate-inventory-management-software",
        prefix: "Manage",
        name: "inventory",
      },
      {
        href: "/real-estate-booking-management-software",
        prefix: "Book &",
        name: "sell",
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
    headline: "Give brokers a login, not a PDF blast.",
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
  digitization: {
    headline: "Already have it in PDF, CAD, Excel, or Illustrator?",
    body: "We digitize by property type, inventory size, and complexity — so your team sells from a live map, not static files.",
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
    heading: "Frequently asked questions",
    subhead: "Tap any question to expand. Answers stay on this page for search and reference.",
    items: [
      {
        question: "What is Layouts360?",
        answer:
          "Layouts360 is a live inventory and sales platform for real estate companies. It combines interactive layouts, plot and apartment inventory, booking workflow, CRM, and team tools so you visualize, manage, share, and sell from one place.",
      },
      {
        question: "Does it support flats and apartments?",
        answer:
          "Yes. Manage apartment projects by building, floor, and unit, with flat number, configuration, area, price, availability, customer, and booking status, alongside plotted inventory.",
      },
      {
        question: "Does it prevent double bookings?",
        answer:
          "Yes. A hold locks a unit the moment your agent clicks it. Every viewer sees the same state until it's confirmed, released, or expires.",
      },
      {
        question: "How is it priced?",
        answer:
          "It depends on inventory size, property type, and how many users you need. Contact us or book a demo and we'll map a plan to your projects.",
      },
      {
        question: "How long does digitization take?",
        answer:
          "It depends on property type, inventory size, and complexity. Most projects move from static files to a live map on a scoped timeline we confirm after reviewing your layouts.",
      },
      {
        question: "Do brokers need their own accounts?",
        answer:
          "Yes. Channel partners get logins so they see live availability and submit booking requests tied to real units — not a PDF blast or group chat.",
      },
      {
        question: "Can it connect to our existing CRM?",
        answer:
          "Layouts360 is built around the unit, with CRM and sales workflow included. For existing CRM connections, talk to us during a demo about what you need to keep in sync.",
      },
    ],
  },
  cta: {
    headlineBefore: "Your inventory is more than a",
    headlineAccent: "spreadsheet",
    headlineAfter: ".",
    body: "Plots, flats, apartments, villas — one live system.",
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
      { href: "/digital-layout-maps", prefix: "विज़ुअलाइज़ करें", name: "लेआउट" },
      {
        href: "/real-estate-inventory-management-software",
        prefix: "मैनेज करें",
        name: "इन्वेंटरी",
      },
      {
        href: "/real-estate-booking-management-software",
        prefix: "बुक व",
        name: "सेल",
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
  digitization: {
    headline: "PDF, CAD, Excel में लेआउट पड़ा है?",
    body: "साइज़ और कॉम्प्लेक्सिटी के हिसाब से हम खुद डिजिटाइज़ कर देंगे — टीम फाइल नहीं, लाइव मैप से बेचेगी।",
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
    heading: "अक्सर पूछे जाने वाले सवाल",
    subhead: "कोई भी सवाल खोलें। जवाब इसी पेज पर सर्च और रेफरेंस के लिए रहते हैं।",
    items: [
      {
        question: "Layouts360 है क्या?",
        answer:
          "Layouts360 रियल एस्टेट कंपनियों के लिए लाइव इन्वेंटरी और सेल्स प्लेटफ़ॉर्म है। इंटरैक्टिव लेआउट, प्लॉट व अपार्टमेंट इन्वेंटरी, बुकिंग वर्कफ़्लो, CRM और टीम टूल्स एक जगह — विज़ुअलाइज़, मैनेज, शेयर और सेल एक ही सिस्टम से।",
      },
      {
        question: "फ्लैट और अपार्टमेंट के लिए भी काम करता है?",
        answer:
          "हाँ। अपार्टमेंट प्रोजेक्ट्स को बिल्डिंग, फ्लोर और यूनिट के हिसाब से मैनेज करें — फ्लैट नंबर, कॉन्फ़िगरेशन, एरिया, प्राइस, अवेलेबिलिटी और बुकिंग स्टेटस के साथ।",
      },
      {
        question: "डबल बुकिंग रुकती है क्या?",
        answer:
          "हाँ। एजेंट के क्लिक करते ही यूनिट लॉक हो जाती है। कन्फर्म, रिलीज़ या होल्ड टाइम-आउट तक हर किसी को एक ही सच्चाई दिखती है।",
      },
      {
        question: "कीमत कितनी है?",
        answer:
          "कीमत इन्वेंटरी साइज़, प्रॉपर्टी टाइप और यूज़र्स की संख्या पर निर्भर करती है। संपर्क करें या डेमो बुक करें — आपके प्रोजेक्ट्स के हिसाब से प्लान बताएंगे।",
      },
      {
        question: "डिजिटाइज़ेशन में कितना वक़्त लगेगा?",
        answer:
          "साइज़ और कॉम्प्लेक्सिटी पर निर्भर करता है। आपके लेआउट देखने के बाद हम एक साफ़ टाइमलाइन बताते हैं — ज़्यादातर प्रोजेक्ट्स स्टैटिक फाइल से लाइव मैप तक उसी स्कोप में जाते हैं।",
      },
      {
        question: "हर ब्रोकर का अलग लॉगिन होगा?",
        answer:
          "हाँ। हर पार्टनर को अपना लॉगिन मिलता है — लाइव स्टॉक देखें, असली यूनिट पर बुकिंग रिक्वेस्ट भेजें। PDF ब्लास्ट या ग्रुप चैट की ज़रूरत नहीं।",
      },
      {
        question: "हमारे मौजूदा CRM से जुड़ सकता है?",
        answer:
          "Layouts360 की नींव यूनिट पर है, CRM और सेल्स वर्कफ़्लो शामिल। मौजूदा CRM से जोड़ने के लिए डेमो में बताएं कि क्या सिंक रखना है।",
      },
    ],
  },
  cta: {
    headlineBefore: "आपकी इन्वेंटरी,",
    headlineAccent: "स्प्रेडशीट",
    headlineAfter: " से बहुत बड़ी चीज़ है",
    body: "प्लॉट हो, फ्लैट हो, विला हो — एक ही लाइव सिस्टम में, हमेशा ताज़ा।",
    primaryCta: "डेमो बुक करें",
    secondaryCta: "अपना प्रोजेक्ट यहाँ देखें",
    trustPoints: ["प्लॉट, फ्लैट व अपार्टमेंट", "लाइव इन्वेंटरी", "वॉकथ्रू बुक करें"],
  },
}

const HOME: Record<Locale, HomeContent> = { en: EN, hi: HI }

export function getHomeContent(locale: Locale): HomeContent {
  return HOME[locale]
}
