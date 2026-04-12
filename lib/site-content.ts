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
  "Reimagine healthcare by revolutionising the critical care experience through technology and innovation."

export const companyMission =
  "Making care more accessible, affordable, and life-saving through connected healthcare ecosystems."

export const foundingTeamBackground =
  "Healthcare visionaries and technology leaders who contributed to national healthcare strategies for Australian and Indian governments. Active contributors to global healthcare interoperability standards including FHIR (Fast Healthcare Interoperability Resources), enabling seamless data exchange across healthcare value chains."

export const contactDetails = {
  australia:
    "PlasmIT Pty Ltd, Level 17, Tower 4, 727 Collins Street, Docklands VIC 3008, Australia",
  footerAustralia:
    "PlasmIT Pty Ltd, Level 17, Tower 4 , 727 Collins street, Docklands, Victoria, 3008 Australia",
  india: "A-335, Second Floor, Defence Colony, New Delhi 110024, India",
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
  ctaPrimary: { label: "About PlasmIT", href: "/about-us" },
  ctaSecondary: { label: "PiMed product", href: "/pimed" },
  callout:
    "Australia-headquartered PlasmIT Pty Ltd, with India-first GTM signals: paid pilot, hospital MOUs, and a lowest-barrier path to scaled adoption.",
  story: [
    {
      title: "ICU scenario",
      body: "Patient deterioration can unfold while a senior specialist is off-site; the golden hour is lost without continuous, mobile-ready context.",
    },
    {
      title: "Remote specialist scenario",
      body: "Without real-time vitals, notes, medications, symptoms, and investigations, remote experts cannot intervene decisively at the point of need.",
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
        "Edge-led streaming, anomaly highlights, clinical pathways, and Gen AI–enabled triage.",
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
      body: "Hospitals gain a decentralised, mobile-first alternative to expensive vendor-locked tele-ICU command centres: lightweight deployment, pilot-first, scale as utilisation grows.",
    },
  ],
} as const

export const platformFeatures = [
  {
    title: "Smart ICU on Mobile™",
    body: "Full ICU dashboard and clinical context on a mobile device, built for continuous oversight beyond the bedside.",
    icon: "activity",
  },
  {
    title: "Continuous monitoring and alerts",
    body: "Real-time medical device streaming with anomaly highlights, high-risk alerts, and early deterioration signals.",
    icon: "heart-pulse",
  },
  {
    title: "Actionable pathways",
    body: "AI-driven clinical pathways, Gen AI–enabled triage, and guided response during critical events.",
    icon: "sparkles",
  },
  {
    title: "Instant collaboration",
    body: "Seamless coordination between care teams and rapid connection with remote doctors for timely intervention.",
    icon: "workflow",
  },
  {
    title: "Predictive intelligence loop",
    body: "Continuous data-learning foundation to strengthen predictive ICU intelligence over time.",
    icon: "waypoints",
  },
  {
    title: "Compliant fault-tolerant core",
    body: "Secured, highly available, interoperable capture and storage aligned with hospital compliance expectations.",
    icon: "shield-check",
  },
] satisfies FeatureCard[]

export const productTimeline = [
  {
    title: "Hospital edge ingestion",
    body: "Medical devices connect through AI-enabled edge devices, with in-transit security into cloud processing.",
  },
  {
    title: "Stream and contextualise",
    body: "Vitals and trends are surfaced continuously with intelligent alerts instead of only during periodic review windows.",
  },
  {
    title: "Care delivery platform",
    body: "Clinicians access the digital channel (including mobile), secure data stores, and AI/ML extensions as one intervention surface.",
  },
  {
    title: "Extend beyond the bedside",
    body: "The model scales across ICU, emergency, ward, tele-ICU, semi-ICU (HDU/CCU), and post-discharge follow-on care.",
  },
] satisfies TimelineStep[]

export const productRoadmapPhases = [
  {
    title: "PiMed: Life (Year 1, Q1–Q3)",
    body: "Digitise ICU workflow, real-time device streaming, secured collaboration, AI/ML actionable insights, Gen AI clinical pathways, and India regulatory compliance.",
  },
  {
    title: "PiMed: Elixir (Year 2–3)",
    body: "Advanced critical care features, integrated care management, diagnostics case assessment, extended AI/ML insights, and automated post-discharge support.",
  },
  {
    title: "PiMed: Nirvana (Year 4–5)",
    body: "Trusted connected care ecosystem progressing toward AI contextual diagnosis, proactive diagnosis, and prognosis and treatment support.",
  },
] satisfies TimelineStep[]

export const hospitalMetrics = [
  {
    value: "~5×",
    label:
      "Illustrative savings multiple from investor materials, not a forecast for your hospital.",
    note: "Real results depend on how PiMed is deployed and on local practice and economics.",
  },
  {
    value: "~1 yr",
    label:
      "Illustrative time-to-value story from investor materials, not a promised timeline.",
    note: "Your path will depend on scope, integration, and adoption.",
  },
  {
    value: "24×7",
    label:
      "Point-in-time ICU care delivery via mobile, per product definition.",
  },
] satisfies MetricCard[]

export const hospitalFeatures = [
  {
    title: "Safer, faster response",
    body: "Keep the right people seeing the right signal sooner so the team can act in time, not after the fact.",
    icon: "stethoscope",
  },
  {
    title: "Less friction for staff",
    body: "Fewer handoffs through scattered systems; rounds and escalations stay in one coherent mobile workflow.",
    icon: "building",
  },
  {
    title: "Clearer experience for families and referrers",
    body: "A more consistent critical-care story: coordinated teams, visible diligence, less confusion at the bedside.",
    icon: "badge-check",
  },
  {
    title: "Bed and pathway utilisation",
    body: "Where clinically appropriate, better use of capacity and cleaner paths to step-down or follow-up care.",
    icon: "briefcase",
  },
] satisfies FeatureCard[]

export const investorMetrics = [
  {
    value: "Multibillion USD",
    label: "India opportunity (investor materials).",
  },
  {
    value: ">60%",
    label: "Product base readiness at funding.",
  },
  {
    value: "Year 3",
    label: "Break-even / exit in model (Impact phase).",
    note: "Forward-looking.",
  },
] satisfies MetricCard[]

export const investorHighlights = [
  {
    title: "India-first GTM",
    body: "Paid pilot, hospital MOUs, public-sector pathway, and a faster path to scale than higher-barrier regions.",
    icon: "globe",
  },
  {
    title: "Product and IP",
    body: "TRL 4, validated ICU device integrations, provisional IP, and a live Product Advisory Council.",
    icon: "cpu",
  },
  {
    title: "Decentralised mobile ICU",
    body: "Vendor-agnostic Smart ICU on Mobile™ versus costly vendor-locked tele-ICU command centres.",
    icon: "activity",
  },
  {
    title: "Utilisation-based SaaS",
    body: "Roughly $6–$15 per bed/day (tiered) plus ~$325 one-time edge hardware per bed (investor model).",
    icon: "badge-check",
  },
] satisfies FeatureCard[]

export const investorEssentials = [
  {
    title: "Market",
    body: "India ~9.3K hospitals, ~111K ICU beds; Tier 1–2 addressable ~2.8K hospitals / ~31K ICU beds, ~8% CAGR. Multibillion USD opportunity; US expansion after India proof.",
  },
  {
    title: "Traction and product",
    body: "Paid pilot (leading group), multiple MOUs, public-sector traction. TRL 4, real-time device capture, co-designed AI workflows, provisional IP. Reference visibility: Narayana Health, Ruban Hospitals, Reddy Labs.",
  },
] satisfies StoryCard[]

export const investorProblemSolution = {
  problemTitle: "Fragmented ICU visibility",
  problemBody:
    "When live data drops off between rounds, remote teams lose time and coordination cost rises. That is the utilisation and delay risk PiMed targets.",
  solutionTitle: "PiMed (QLMed) on mobile",
  solutionBody:
    "Streaming from the edge, early signals, and mobile point-in-time ICU care with team collaboration, 24×7.",
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
    "Lightweight deployment; pilot-first; start small and scale",
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
  ["Product development completion (post-funding)", "Q1–Q4 Year 1"],
  ["Regulatory compliance and IP/copyright", "Q1–Q3 Year 1"],
  ["Marketing campaign (webinar/podcast)", "Q2–Q4 Year 1"],
  ["Pilot launch: select customers (alpha/beta)", "~4 months post-funding"],
  ["Pilot outcome delivered", "~8 months post-funding"],
  [
    "Board presentation · order and PO · revenue realisation",
    "~10–11 months post-funding",
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
    "Secure revenue from 1–2 hospitals",
    "Clinical and financial ROI quantified and documented",
    "Regulatory compliance and certifications achieved",
    "Patents secured",
    "Testimonials in hand and a strong hospital pipeline ready to scale",
  ],
} as const

export const investorDisclaimer =
  "From internal investor materials; forward-looking; not an offer or solicitation. Past or projected performance is not a guide to future results."

export const investorPageIntro =
  "Raising to ship MMF, prove pilot ROI, and scale PiMed as India-first utilisation-based SaaS."

export const investorSnapshotProse =
  "India: large hospital and ICU bed base with a focused Tier 1–2 wedge; multibillion-USD framing in investor materials, with US expansion after India proof. Traction today includes a paid pilot, multiple MOUs, public-sector signals, TRL 4 product depth, real-time device capture, co-designed AI workflows, and provisional IP; named reference relationships appear in diligence."

export const investorAtGlance = [
  {
    label: "Round",
    value:
      "Indicative $1.0M seed · convertible notes · $25M pre-money framing.",
  },
  {
    label: "Readiness",
    value:
      ">60% product base at funding; paid pilot, MOUs, and public-sector traction.",
  },
  {
    label: "Model",
    value:
      "Utilisation-based hospital SaaS; full tables and roadmap expand in diligence below.",
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
    title: "Care",
    body: "Put patient outcomes and caregiver quality of life at the center of the operating model.",
  },
  {
    title: "Connected",
    body: "Unify devices, teams, and decisions into one persistent flow of clinical context.",
  },
  {
    title: "Contextual",
    body: "Prioritise relevant, timely information over raw data overload.",
  },
  {
    title: "Collaboration",
    body: "Enable interdisciplinary action without forcing teams into disconnected workflows.",
  },
  {
    title: "Compliance",
    body: "Treat security, auditability, and interoperability as baseline infrastructure, not add-ons.",
  },
  {
    title: "Continuity",
    body: "Extend care visibility across ICU, wards, home, and tele-ICU rather than resetting at each handoff.",
  },
] satisfies StoryCard[]

export const visionMissionCards = [
  { title: "Vision", body: companyVision },
  { title: "Mission", body: companyMission },
] satisfies StoryCard[]

export const leadershipProfileSections = [
  {
    title: "Core team",
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
  {
    title: "Advisors",
    profiles: [
      {
        name: "Dr. Meera Iyer",
        role: "Clinical Governance Advisor",
        summary:
          "Dummy profile. Supports clinical governance frameworks, patient safety reviews, and care quality pathways across ICU programmes.",
        linkedin:
          "https://www.linkedin.com/search/results/all/?keywords=Dr.%20Meera%20Iyer",
      },
      {
        name: "Arjun Mehta",
        role: "Digital Health Advisor",
        summary:
          "Dummy profile. Advises on digital platform adoption, health-system modernisation, and scaled transformation operating models.",
        linkedin:
          "https://www.linkedin.com/search/results/all/?keywords=Arjun%20Mehta",
      },
      {
        name: "Dr. Nisha Rao",
        role: "AI Safety Advisor",
        summary:
          "Dummy profile. Focuses on safe AI deployment practices, model governance, and clinical risk controls for production systems.",
        linkedin:
          "https://www.linkedin.com/search/results/all/?keywords=Dr.%20Nisha%20Rao",
      },
      {
        name: "Vikram Sen",
        role: "Market Strategy Advisor",
        summary:
          "Dummy profile. Supports go-to-market planning, partnership strategy, and commercial scaling across target hospital networks.",
        linkedin:
          "https://www.linkedin.com/search/results/all/?keywords=Vikram%20Sen",
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
    question: "Which product names should I use?",
    answer:
      "PiMed is the commercial product name; QLMed appears in investor materials as an aligned identifier. Smart ICU on Mobile™ is the trademarked positioning line.",
  },
  {
    question: "Where are About, vision, and leadership?",
    answer:
      "The top navigation highlights product, hospitals, investors, and contact. Company pages (About us, Vision and values, Leadership) are grouped in the footer under Company.",
  },
  {
    question: "How should I contact leadership?",
    answer: `General enquiries: ${contactDetails.email}. Founder contact on file in investor materials: ${contactDetails.founderEmail}.`,
  },
  {
    question: "Are financial figures on the investor page binding?",
    answer:
      "No. They summarise forward-looking plans for context only, not as investment advice or an offer to sell securities.",
  },
] as const
