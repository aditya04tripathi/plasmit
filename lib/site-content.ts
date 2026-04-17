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
          "20+ years in digital products and transformation. Led digital strategy across geographies and is recognised for helping business leaders achieve outcomes through digital transformation and emerging technology.",
        linkedin: "https://www.linkedin.com/in/awadhesh-kumar-info/",
      },
      {
        name: "Dr. Kamaljit Parmar",
        role: "Chief Product Officer",
        summary:
          "20+ years of critical care experience across Australia, UK, and India. ICU Intensivist in Australia for the last 12 years.",
        credentials:
          "MBBS, DNB Anesthesiology, EDIC, FCICM Australia, Associate Fellowship in Medical Administration (Australia)",
        linkedin: "https://www.linkedin.com/in/dr-kamaljit-parmar-b6464299/",
      },
      {
        name: "Dr. Subrata Panda",
        role: "Chief Medical Officer",
        summary:
          "40+ years of experience at AIIMS, New Delhi. Former Professor and Head of Department, AIIMS, New Delhi. Recipient of the Shanti Swarup Bhatnagar Award.",
        linkedin: "https://www.linkedin.com/in/subrat-panda-6902671a",
      },
      {
        name: "Dr. Supten Sarbadhikari",
        role: "Chief Interoperability Officer",
        summary:
          "30+ years of expertise in healthcare digitisation. Founding member of HL7/FHIR and advisor to WHO for Digital Health in India.",
        credentials:
          "Project Director, India National Health Portal initiative",
        linkedin:
          "https://www.linkedin.com/in/prof-supten-sarbadhikari-phd-fiahsi-ba99233/",
      },
      {
        name: "Dr. Kamal Sharma",
        role: "Scientific and Research Lead",
        summary:
          "17+ years as an interventional cardiologist with 22 academic gold medals, 188 publications, and 7000+ citations.",
        linkedin:
          "https://www.linkedin.com/in/dr-kamal-sharma-md-dnb-dm-mnams-facc-fesc-fscai-803ab219/",
      },
      {
        name: "Dr. Steven Schilders (PhD)",
        role: "Chief Data Officer",
        summary:
          "Architect specialising in data-first solutions focused on data security, digital twins, and AI, with experience leading billion-dollar data programmes.",
        linkedin: "https://www.linkedin.com/in/dr-steven-schilders-816970/",
      },
      {
        name: "Kartik Thakkar",
        role: "Product Development Lead",
        summary:
          "Senior business and technology leader specialised in delivery enablement, assurance functions, capability uplift programmes, and large portfolio execution.",
        linkedin: "https://www.linkedin.com/in/kartik-thakkar-a603b05/",
      },
      {
        name: "Dr. Chandrakant Pandav",
        role: "Product SME",
        summary:
          "Padma Shri awardee with 40+ years of experience. Advisor to NITI Aayog nutrition programmes and former Professor at AIIMS, New Delhi.",
        linkedin:
          "https://www.linkedin.com/in/dr-chandrakant-s-pandav-7b00476a/",
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
