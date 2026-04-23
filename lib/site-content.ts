export const siteMeta = {
  name: "PlasmIT",
  legalName: "PlasmIT Pty Ltd",
  companyTagline: "Health technology for critical care",
  product: "PiMed (QLMed)",
  productTagline: "Smart ICU on Mobile™",
  title: "PlasmIT: health technology for critical care.",
  description:
    "PlasmIT Pty Ltd is an Australia-headquartered company reimagining critical care through connected infrastructure. Flagship product PiMed (QLMed), Smart ICU on Mobile™, delivers point-in-time ICU care on mobile, 24×7, vendor-agnostic, standards-aware, built with hospitals and clinicians.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.plasmitvector.com",
  twitterHandle: "@plasmitvector",
} as const

export const companyHero = {
  headline: "PlasmIT builds connected critical care\u00a0infrastructure.",
  lead: "PlasmIT Pty Ltd is an Australia-headquartered health-tech company focused on critical care. The team blends national healthcare strategy experience with interoperability depth, including FHIR and large-scale digital health programmes.",
  productLine:
    "Flagship platform: PiMed (QLMed), Smart ICU on Mobile™: point-in-time ICU care on mobile, 24×7, with vendor-agnostic edge-to-cloud delivery.",
} as const

export const companyVision =
  "Reimagine Healthcare services by revolutionizing stakeholders experience through technology and innovation."

export const companyMission =
  "Save Human Life by Empowering Care provider and Care receiver with next generation Smart technology-based innovative healthcare eco-system."

export const foundingTeamBackground =
  "Healthcare visionaries and technology leaders who contributed to national healthcare strategies for Australian and Indian governments. Active contributors to global healthcare interoperability standards including FHIR (Fast Healthcare Interoperability Resources), enabling seamless data exchange across healthcare value chains."

export const contactDetails = {
  australia:
    "PlasmIT Pty Ltd, Level 17, Tower 4, 727 Collins Street, Docklands VIC 3008, Australia",
  footerAustralia:
    "PlasmIT Pty Ltd, Level 17, Tower 4 , 727 Collins street, Docklands, Victoria- 3008 Australia",
  india: "A-335, Second Floor, Defence Colony, New Delhi-110024, India",
  email: "info@plasmitvector.com",
  founderEmail: "awadhesh.kumar@plasmitvector.com",
  phone: "+61 431 770 499",
  whatsapp: "https://wa.me/61431770499",
  website: "https://www.plasmitvector.com",
} as const

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "PiMed", href: "/pimed" },
  { label: "Hospitals", href: "/hospital-corner" },
  { label: "Investors", href: "/investor-corner" },
  { label: "Leadership", href: "/leadership" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact-us" },
] as const

export const footerGroups = [
  {
    title: "Product",
    links: [
      { label: "PiMed", href: "/pimed" },
      { label: "Hospital Corner", href: "/hospital-corner" },
      { label: "Investor Corner", href: "/investor-corner" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Vision & Values", href: "/vision-and-values" },
      { label: "Leadership", href: "/leadership" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Contact Us", href: "/contact-us" },
      { label: "Email", href: `mailto:${contactDetails.email}` },
      { label: "WhatsApp", href: contactDetails.whatsapp },
    ],
  },
  {
    title: "Socials",
    links: [
      {
        label: "Facebook",
        href: "https://www.facebook.com/plasmititvector",
      },
      {
        label: "X (formerly Twitter)",
        href: "https://x.com/plasmitvector",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/plasmit-healthcare-it-vector/",
      },
      {
        label: "Youtube",
        href: "https://www.youtube.com/@plasmithealthcarevector626",
      },
    ],
  },
] as const

export const proofPoints = [
  "Commercial path: paid pilots, hospital MOUs, and public-sector traction referenced in investor materials.",
  "Hospital economics: utilisation-based tiers; hardware and model detail sit in diligence tables on the investor corner.",
  "About, vision, values, and leadership stay one click away in the footer under Company.",
] as const

export type StoryCard = {
  title: string
  body: string
}

export type MetricCard = {
  value: string
  label: string
  note?: string
}

export type FeatureCard = {
  title: string
  body: string
  icon:
    | "activity"
    | "heart-pulse"
    | "sparkles"
    | "workflow"
    | "waypoints"
    | "shield-check"
    | "building"
    | "stethoscope"
    | "briefcase"
    | "globe"
    | "badge-check"
    | "arrow-right"
    | "cpu"
}

export type TimelineStep = {
  title: string
  body: string
}

export type LeadershipProfile = {
  name: string
  role: string
  summary: string
  credentials?: string
  linkedin?: string
  image?: string
}

export type LeadershipProfileSection = {
  title: string
  profiles: LeadershipProfile[]
}

export type SimpleTableColumn = string

export type SimpleTableRow = string[]

export const homePage = {
  eyebrow: "PlasmIT: company overview",
  title: "A health-tech company for critical care, anchored by PiMed.",
  intro:
    "PlasmIT Pty Ltd invests in connected critical care infrastructure. PiMed (QLMed) is how we deliver that vision today: intelligent integrated care on mobile, 24×7.",
  ctaPrimary: { label: "Vision & Values", href: "/vision-and-values" },
  ctaSecondary: { label: "PiMed", href: "/pimed" },
  callout:
    "Australia-headquartered PlasmIT Pty Ltd, with India-first GTM signals: paid pilot, hospital MOUs, and a lowest-barrier path to scaled adoption.",
  story: [
    {
      title: "What is PiMed",
      body: "SmartICU on Mobile PiMed is a connected, intelligent, integrated, immersive, secured and compliant digital care platform for hospitals. It transforms care from physical rounds to continuous connected rounds for better intervention.",
    },
    {
      title: "Why it matters",
      body: "Real-time Smart ICU care on mobile helps hospitals improve efficiency, optimise resource utilisation, reduce litigation, improve brand value, and open new revenue streams while improving care-worker quality of life.",
    },
  ] satisfies StoryCard[],
  metrics: [
    {
      value: "24×7",
      label:
        "Continuous monitoring, intelligent alerts, and connected care on mobile.",
    },
    {
      value: "AI/ML",
      label:
        "Edge-led streaming, anomaly highlights, clinical pathways, and Gen AI-enabled triage.",
    },
    {
      value: "FHIR",
      label:
        "Interoperability posture aligned with global healthcare data exchange standards.",
    },
  ] satisfies MetricCard[],
  sections: [
    {
      title: "Three core pillars",
      body: "24×7 continuous monitoring, 24×7 connected care for point-in-time intervention, and a compliant fault-tolerant platform for capture, transfer, storage, and display.",
    },
    {
      title: "Why it matters",
      body: "Smart ICU care on mobile in real time can improve efficiency, optimise resources, and strengthen patient outcomes.",
    },
  ],
} as const

export const platformFeatures = [
  {
    title: "Intelligent Integrated Health Dashboard",
    body: "Patient real-time 24×7 information presented in an intelligent manner from multiple data sources.",
    icon: "activity",
  },
  {
    title: "Medical device data 24x7 on mobile device",
    body: "Continuous device connectivity keeps clinical data available anywhere and anytime.",
    icon: "heart-pulse",
  },
  {
    title: "Real time Health Vitals",
    body: "Live patient vitals support point-in-time care intervention without waiting for periodic rounds.",
    icon: "sparkles",
  },
  {
    title: "Abnormality Alerts and Insights",
    body: "Automated anomaly highlights and alerting help care teams respond quickly.",
    icon: "workflow",
  },
  {
    title: "Co-ordination & Collaboration",
    body: "Platform-enabled collaboration across care teams supports faster and safer decisions.",
    icon: "waypoints",
  },
  {
    title: "Integrated Care Administration",
    body: "Integrated workflows support care administration across departments and stakeholders.",
    icon: "shield-check",
  },
  {
    title: "Diagnostics Assessments & Reports",
    body: "Diagnostics, assessments, and reports are accessible in one connected care surface.",
    icon: "building",
  },
  {
    title: "Compliant and Regulatory Adherence",
    body: "Secured, interoperable, and compliant data capture, transfer, storage, and display.",
    icon: "badge-check",
  },
] satisfies FeatureCard[]

export const productTimeline = [
  {
    title: "24x7 Continuous Monitoring",
    body: "Automated medical data streaming with anomaly highlights, insights and intelligent alerts.",
  },
  {
    title: "Connected Care with Intelligent Alerts in real time",
    body: "Point-in-time care intervention through platform-enabled decision and seamless collaboration.",
  },
  {
    title: "Continously informed stakeholders",
    body: "Availability of information to all stakeholders anywhere, on any device, round the clock.",
  },
  {
    title: "Compliant and Fault-Tolerant Platform",
    body: "Secured highly available, interoperable and compliant data capture, transfer, store and display.",
  },
] satisfies TimelineStep[]

export const productRoadmapPhases = [
  {
    title: "PiMed: Life (Year 1, Q1-Q3)",
    body: "Digitise ICU workflow, real-time device streaming, secured collaboration, AI/ML actionable insights, Gen AI clinical pathways, and India regulatory compliance.",
  },
  {
    title: "PiMed: Elixir (Year 2-3)",
    body: "Advanced critical care features, integrated care management, diagnostics case assessment, extended AI/ML insights, and automated post-discharge support.",
  },
  {
    title: "PiMed: Nirvana (Year 4-5)",
    body: "Trusted connected care ecosystem progressing toward AI contextual diagnosis, proactive diagnosis, and prognosis and treatment support.",
  },
] satisfies TimelineStep[]

export const hospitalMetrics = [
  {
    value: "50%",
    label: "Reduce ICU mortality (source-site claim).",
    note: "Claim from provided source content.",
  },
  {
    value: "25%",
    label: "Save on ICU OPEX (source-site claim).",
    note: "Claim from provided source content.",
  },
  {
    value: "24×7",
    label: "Continuous care intervention enabled by connected workflows.",
  },
] satisfies MetricCard[]

export const hospitalFeatures = [
  {
    title: "24X7 Care Intervention",
    body: "Remote care enabled by full time and visiting specialists and interventionalists.",
    icon: "stethoscope",
  },
  {
    title: "One Touch Care Experience",
    body: "Stakeholder centric intuitive and integrated experience and insights.",
    icon: "building",
  },
  {
    title: "Integrated Clinical Pathways",
    body: "Effective management of waste and care worker workload through automation and enhanced collaboration.",
    icon: "badge-check",
  },
  {
    title: "Resource Optimization",
    body: "Scale with available healthcare resources enabled by care digitization and integrated pathways.",
    icon: "briefcase",
  },
  {
    title: "Value for Money",
    body: "A newer way of ICU automation with device-independent integration and more features at a fraction of cost.",
    icon: "activity",
  },
  {
    title: "Revenue Multiplier",
    body: "New revenue streams through loyalty and post-discharge care, including hospital-serving-hospital models.",
    icon: "globe",
  },
] satisfies FeatureCard[]

export const investorMetrics = [
  {
    value: "USD $6B",
    label: "India market addressed in the source content.",
  },
  {
    value: "~9,000",
    label: "Hospitals in scope (source content).",
  },
  {
    value: "3 yrs",
    label: "Targeted viable break-even horizon.",
    note: "Forward-looking statement from source content.",
  },
] satisfies MetricCard[]

export const investorHighlights = [
  {
    title: "Where are we",
    body: "Product MVP is 75% ready and aimed for commercialization.",
    icon: "globe",
  },
  {
    title: "Validation",
    body: "Viability accepted by leading hospitals in India, with multiple signed MOUs.",
    icon: "cpu",
  },
  {
    title: "Traction",
    body: "Traction from various hospitals across the globe.",
    icon: "activity",
  },
  {
    title: "What we can achieve together",
    body: "Viable break-even in 3 years, 200M$ in 5 years from India market, and expansion to other geographies.",
    icon: "badge-check",
  },
] satisfies FeatureCard[]

export const investorEssentials = [
  {
    title: "Market",
    body: "India ~9.3K hospitals, ~111K ICU beds; Tier 1-2 addressable ~2.8K hospitals / ~31K ICU beds, ~8% CAGR. Multibillion USD opportunity; US expansion after India proof.",
  },
  {
    title: "Traction and product",
    body: "Paid pilot (leading group), multiple MOUs, public-sector traction. TRL 4, real-time device capture, co-designed AI workflows, provisional IP. Reference visibility: Narayana Health, Ruban Hospitals, Reddy Labs.",
  },
] satisfies StoryCard[]

export const investorProblemSolution = {
  problemTitle: "What your investments can do",
  problemBody:
    "Save millions of lives and address a USD $6 billion market within India, including ICU and general bed segments.",
  solutionTitle: "What we can achieve together",
  solutionBody:
    "Build a high-margin, scalable health-tech business with global expansion potential.",
} as const

export const investorCompetitiveRows: SimpleTableRow[] = [
  [
    "Offering",
    "Centralised command centre, no mobility",
    "Centralised command centre, no mobility",
    "Integrated ICU monitoring on a mobile device",
  ],
  [
    "Vendor lock-in",
    "Specific hardware vendors only",
    "Audio-visual augmentation focus",
    "Device agnostic with existing ICU equipment",
  ],
  [
    "Adoption pathway",
    "Hesitant adoption; narrow problem set",
    "Scepticism toward external intensivist models",
    "Connected digital ICU model with device-agnostic integration",
  ],
  [
    "Affordability",
    "High CAPEX and OPEX",
    "High CAPEX and OPEX with delivery challenges",
    "Utilisation-based pricing; low upfront; scale with usage",
  ],
]

export const investorCompetitiveColumns: SimpleTableColumn[] = [
  "Dimension",
  "Tele-ICU (e.g. Philips, GE, Siemens)",
  "Tele-intensivist (e.g. Cloudphysician, CLEW)",
  "QLMed / PiMed",
]

export const investorFinancialColumns: SimpleTableColumn[] = [
  "Year",
  "Theme",
  "ICU beds",
  "Non-ICU beds",
  "Revenue",
  "Profitability",
]

export const investorFinancialRows: SimpleTableRow[] = [
  [
    "Year 1",
    "Adopt",
    "50",
    "0",
    "$27K",
    "Pre-revenue / 50 ICU bed acquisition",
  ],
  [
    "Year 2",
    "Buzz",
    "400",
    "100",
    "$1.6M",
    "Scale ICU and adoption to non-ICU",
  ],
  [
    "Year 3",
    "Impact",
    "2,500",
    "2,000",
    "$13.2M",
    ">30% · Break-even · Exit opportunity",
  ],
  ["Year 4", "Scale", "5,000", "10,000", "$51.2M", ">50%"],
  ["Year 5", "Threat", "10,000", "25,000", "$130.7M", ">60%"],
]

export const investorFundAllocationColumns: SimpleTableColumn[] = [
  "Category",
  "Allocation",
  "Purpose",
]

export const investorFundAllocationRows: SimpleTableRow[] = [
  [
    "Pilot value realisation",
    "40%",
    "Execute and demonstrate ROI from hospital pilots",
  ],
  [
    "Product build (MMF)",
    "35%",
    "Complete minimum marketable features for commercial deployment",
  ],
  [
    "Marketing and operations",
    "15%",
    "Webinars, podcasts, sales, and team operations",
  ],
  ["Compliance and IP", "10%", "Regulatory certifications and patent filings"],
]

export const investorGtmColumns: SimpleTableColumn[] = ["Milestone", "Timing"]

export const investorGtmRows: SimpleTableRow[] = [
  ["Current product base feature readiness", ">60% complete at funding"],
  ["Product development completion (post-funding)", "Q1-Q4 Year 1"],
  ["Regulatory compliance and IP/copyright", "Q1-Q3 Year 1"],
  ["Marketing campaign (webinar/podcast)", "Q2-Q4 Year 1"],
  ["Pilot launch: select customers (alpha/beta)", "~4 months post-funding"],
  ["Pilot outcome delivered", "~8 months post-funding"],
  [
    "Board presentation · order and PO · revenue realisation",
    "~10-11 months post-funding",
  ],
  ["Commercial launch", "~12 months post-funding"],
]

export const investorFundAsk = {
  round: "Seed",
  amountUsd: "$1.0M USD",
  valuationUsd: "$25M USD",
  instrument: "Convertible notes",
  y1Milestones: [
    "Product ready for commercial deployment",
    "Secure revenue from 1-2 hospitals",
    "Clinical and financial ROI quantified and documented",
    "Regulatory compliance and certifications achieved",
    "Patents secured",
    "Testimonials in hand and a strong hospital pipeline ready to scale",
  ],
} as const

export const investorDisclaimer =
  "From internal investor materials; forward-looking; not an offer or solicitation. Past or projected performance is not a guide to future results."

export const investorPageIntro =
  "PlasmIT invites visionary and growth investors to join us in scaling PiMed and connected critical care."

export const investorSnapshotProse =
  "Potentially serve ~6 million ICU patients and ~400 million general bed patients in India. Product MVP is 75% ready, viability is validated by leading hospitals, and multiple MOUs are already in place."

export const investorAtGlance = [
  {
    label: "Market",
    value:
      "~9,000 hospitals, ~110,000 ICU beds, and ~2.5 million general beds in India.",
  },
  {
    label: "Readiness",
    value: "Product MVP 75% ready with hospital validation and signed MOUs.",
  },
  {
    label: "Growth",
    value:
      "Viable break-even within 3 years and 200M$ target in 5 years from India market.",
  },
] as const

export const aboutHighlights = [
  {
    title: "Entity and focus",
    body: "PlasmIT Pty Ltd is an Australia-headquartered health-tech company in critical care, building PiMed (QLMed), Smart ICU on Mobile™.",
  },
  {
    title: "Founding credibility",
    body: foundingTeamBackground,
  },
  {
    title: "Mission alignment",
    body: `${companyMission} ${companyVision}`,
  },
] satisfies StoryCard[]

export const values = [
  {
    title: "Our values",
    body: "PlasmIT values are based on a 6C maturity framework that drives our principles for saving millions of lives through PiMed.",
  },
  {
    title: "Contextual care",
    body: "We aim to revolutionize stakeholder experience through digital technology and innovations to deliver contextual care.",
  },
  {
    title: "Innovation",
    body: "Technology and innovation are used to redesign care delivery in practical, high-impact workflows.",
  },
  {
    title: "Empowerment",
    body: "Empower care providers and care receivers with next-generation smart healthcare tools.",
  },
  {
    title: "Interoperability",
    body: "Founders contributed to FHIR standards to democratize the healthcare ecosystem through open interoperability.",
  },
  {
    title: "Human impact",
    body: "Our purpose is to save human life while improving care-worker quality of life and patient outcomes.",
  },
] satisfies StoryCard[]

export const visionMissionCards = [
  { title: "Vision", body: companyVision },
  { title: "Mission", body: companyMission },
] satisfies StoryCard[]

export const leadershipProfileSections = [
  {
    title: "Leadership",
    profiles: [
      {
        name: "Awadhesh Kumar",
        role: "Chief Technology Officer",
        summary:
          "Awadhesh Kumar brings 20+ years of experience in digital products and transformation, has led digital strategy across global markets, and is recognized for helping business leaders achieve outcomes through digital transformation and emerging technologies.",
        linkedin: "https://www.linkedin.com/in/awadhesh-kumar-info/",
        image: "/media/leadership/awadesh-kumar.JPG",
      },
      {
        name: "Dr. Kamaljit Parmar",
        role: "Chief Product Officer",
        summary:
          "Dr. Kamaljit Parmar has 20+ years of critical care experience across Australia, the UK, and India, has served as an ICU intensivist in Australia for the last 12 years, and holds MBBS, DNB Anesthesiology, EDIC, FCICM (Australia), and an Associate Fellowship in Medical Administration (Australia).",
        linkedin: "https://www.linkedin.com/in/dr-kamaljit-parmar-b6464299/",
        image: "/media/leadership/kamaljeet-parmar.jpg",
      },
      {
        name: "Dr. Supten Sarbadhikari",
        role: "Chief Interoperability Officer",
        summary:
          "Dr. Supten Sarbadhikari brings 30+ years of expertise in healthcare digitization, is a founding member associated with HL7/FHIR initiatives, has advised WHO on digital health in India, and served as Project Director for the India National Health Portal initiative.",
        linkedin:
          "https://www.linkedin.com/in/prof-supten-sarbadhikari-phd-fiahsi-ba99233/",
        image: "/media/leadership/supten-sarbadhikari.jpg",
      },
      {
        name: "Dr. Kamal Sharma",
        role: "Scientific & Research Lead",
        summary:
          "Dr. Kamal Sharma is an interventional cardiologist with 17+ years of experience, has received 22 academic gold medals across clinical trials and research, and has authored 188 publications with 7000+ citations.",
        linkedin: "https://www.linkedin.com/in/dr-kamal-sharma-803ab219/",
        image: "/media/leadership/kamal-sharma.jpg",
      },
      {
        name: "Dr. Steven Schilders (PhD)",
        role: "Chief Data Officer",
        summary:
          "Dr. Steven Schilders is a data-first architect focused on data security, digital twins, and AI, with deep expertise in building platforms that serve high-volume and high-velocity data and experience leading approximately $1 billion data programs for top healthcare companies.",
        linkedin: "https://www.linkedin.com/in/dr-steven-schilders-816970/",
        image: "/media/leadership/steven-schilders.png",
      },
      {
        name: "Kartik Thakkar",
        role: "Product Development Lead",
        summary:
          "Kartik Thakkar is a senior business and technology leader with specialization in delivery enablement, assurance functions, and capability uplift programs, and has managed portfolios of up to $500M with strong execution and operational expertise.",
        linkedin: "https://www.linkedin.com/in/kartik-thakkar-a603b05/",
        image: "/media/leadership/kartik-thakkar.webp",
      },
      {
        name: "Dr. Chandrakant Pandav",
        role: "Product SME",
        summary:
          "Dr. Chandrakant Pandav is a Padma Shri awardee with 40+ years of experience, advisor to NITI Aayog on the Indian Government Nutrition Program, and former Professor at AIIMS, New Delhi.",
        linkedin:
          "https://www.linkedin.com/in/dr-chandrakant-s-pandav-7b00476a/",
        image: "/media/leadership/chandrakant-pandav.jpg",
      },
      {
        name: "Ramesh Subramaniam",
        role: "Chief Technology Officer",
        summary:
          "Ramesh Subramaniam is an outcome-focused technology leader with 20+ years of experience in enterprise architecture, program delivery, and digital transformation across industries including energy, banking, manufacturing, government, and telecom. He is known for aligning executive, business, and IT stakeholders to deliver mission-critical platforms, omni-channel solutions, and practical, high-impact technology strategies.",
        linkedin: "https://www.linkedin.com/in/ramesh-subramaniam-b4782a1/",
        image: "/media/leadership/ramesh-subramaniam.jpeg",
      },
      {
        name: "Sushil Kumar",
        role: "Engineering Lead",
        summary:
          "Sushil Kumar brings deep technical expertise in embedded systems, multimedia software architecture, SoC design, and performance optimization across IoT and edge devices. He is also a proven leader in building modular, scalable engineering organizations that can evolve rapidly through growth, reset, and transformation cycles.",
        linkedin: "https://www.linkedin.com/in/sushil-kumar-66458a5/",
        image: "/media/leadership/sushil-kumar.jpeg",
      },
      {
        name: "Dr. Chetan Mehndiratta",
        role: "Compliance & Growth Lead",
        summary: "N/A (to be added)",
        linkedin: "https://www.linkedin.com/in/adityatripathi0404",
        image: "/media/leadership/dr-chetan.JPG",
      },
      {
        name: "Sanjit Anand",
        role: "Implementation Lead",
        summary:
          "Sanjit Anand is an accomplished IT and product leader with deep expertise in enterprise transformation across ERP, cloud, data, and digital platforms. He currently leads end-to-end product delivery for Smart ICU at PlasmIT, combining strategic portfolio leadership with strong execution across complex global programs.",
        linkedin: "https://www.linkedin.com/in/sanjit/",
        image: "https://placehold.co/500x500.png",
      },
      {
        name: "Aishwarya Dwivedi",
        role: "AI Product Manager",
        summary:
          "Aishwarya Dwivedi leads AI product strategy at the intersection of NLP, GenAI, and governance, translating product, technology, clinical, and UX priorities into scalable, responsible outcomes. She has built award-winning AI features from zero to market impact, established model integrity and human-escalation frameworks for regulated healthcare environments, and helps organizations move from AI experimentation to accountable execution.",
        linkedin: "https://www.linkedin.com/in/aish-dwivedi/",
        image: "/media/leadership/aishwarya-dwivedi.jpeg",
      },
    ],
  },
  {
    title: "Advisors",
    profiles: [
      {
        name: "Dr. Subrata Panda",
        role: "Chief Medical Officer",
        summary:
          "Dr. Subrata Panda has 40+ years of experience at AIIMS, New Delhi, served as former Professor and Head of Department there, and is a recipient of the Shanti Swarup Bhatnagar Award, one of India’s top scientific honours.",
        linkedin: "https://www.linkedin.com/in/subrat-panda-6902671a",
        image: "/media/leadership/adv_subrata-panda.jpg",
      },
    ],
  },
] satisfies LeadershipProfileSection[]

export const leadershipProfiles = leadershipProfileSections.flatMap(
  (section) => section.profiles
) satisfies LeadershipProfile[]

export const offices = [
  {
    label: "Australia",
    address: contactDetails.australia,
    note: "Primary headquarters for PlasmIT Pty Ltd.",
  },
  {
    label: "India",
    address: contactDetails.india,
    note: "India office.",
  },
] as const

export const officeMapLocations = [
  {
    label: "PlasmIT, Docklands",
    position: { lat: -37.820499, lng: 144.949966 } as const,
    address: contactDetails.australia,
  },
] as const

export const contactFaqs = [
  {
    question: "Where are your offices?",
    answer:
      "PlasmIT is headquartered in Docklands, Australia with an office in Defence Colony, New Delhi, India.",
  },
  {
    question: "What type of enquiries do you accept?",
    answer:
      "Hospital, investor, and general enquiries can be submitted through the contact form.",
  },
  {
    question: "How do I contact you directly?",
    answer: `Email ${contactDetails.email} or call ${contactDetails.phone}.`,
  },
  {
    question: "Do you support global collaboration?",
    answer:
      "Yes. The platform and operating model are designed to support connected care teams across locations.",
  },
] as const
