export const siteMeta = {
  name: "PlasmIT Healthcare IT Vector",
  product: "PiMed",
  title: "Continuous connected critical care, built for clinical trust.",
  description:
    "PlasmIT rethinks critical care delivery with PiMed, a mobile-first connected care platform for hospitals, care teams, and investors evaluating next-generation digital health infrastructure.",
} as const

export const contactDetails = {
  australia:
    "PlasmIT Pty Ltd, Level 17, Tower 4, 727 Collins Street, Docklands VIC 3008, Australia",
  footerAustralia: "28-36 Foveaux St, Surry Hills NSW 2010, Australia",
  india: "A-335, Second Floor, Defence Colony, New Delhi 110024, India",
  email: "info@plasmitvector.com",
  phone: "+61 431 770 499",
  whatsapp: "https://wa.me/61431770499",
} as const

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "PiMed", href: "/pimed" },
  { label: "Hospital", href: "/hospital-corner" },
  { label: "Investors", href: "/investor-corner" },
  { label: "About", href: "/about-us" },
  { label: "Leadership", href: "/leadership" },
  { label: "Contact", href: "/contact-us" },
] as const

export const footerGroups = [
  {
    title: "Platform",
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
] as const

export const proofPoints = [
  "Shift from periodic physical rounds to continuous connected rounds.",
  "Platform built around mobile visibility, device integration, and interdisciplinary collaboration.",
  "Commercial narrative spans hospital ROI, clinician workflow, and investor readiness.",
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
}

export const homePage = {
  eyebrow: "Clinical infrastructure for continuous connected care",
  title: "A premium narrative for hospitals, investors, and care teams evaluating PiMed.",
  intro:
    "PlasmIT positions PiMed as the shift from physical rounds to continuous connected rounds: a mobile-first care surface that keeps patient context, alerts, and collaboration available from anywhere.",
  ctaPrimary: { label: "Explore PiMed", href: "/pimed" },
  ctaSecondary: { label: "Investor Corner", href: "/investor-corner" },
  callout:
    "Australia-founded, India-linked, and shaped around the problem of critical care visibility when intervention windows are small and coordination costs are high.",
  story: [
    {
      title: "Before",
      body: "Clinical decisions depend on time-bound bedside rounds, fragmented device visibility, and delayed escalation.",
    },
    {
      title: "After",
      body: "PiMed reframes the ward as a connected operating surface with live vitals, guided pathways, and team-level coordination.",
    },
  ] satisfies StoryCard[],
  metrics: [
    {
      value: "24×7",
      label: "Connected visibility across ICU, emergency, ward, and home care settings.",
    },
    {
      value: "AI/ML",
      label: "Edge-led data streaming, anomaly detection, and alerting as described on the live site.",
    },
    {
      value: "FHIR",
      label: "Interoperability posture positioned around standards-aware, compliant health infrastructure.",
    },
  ] satisfies MetricCard[],
  sections: [
    {
      title: "What PiMed changes",
      body: "PiMed is described as a next-generation connected digital care platform that links devices, workflows, and clinicians into one persistent care experience.",
    },
    {
      title: "Why it matters",
      body: "The strongest message across the live site is speed to intervention: informed clinicians can act sooner, collaborate better, and reduce operational waste.",
    },
  ],
} as const

export const platformFeatures = [
  {
    title: "Integrated health dashboard",
    body: "Unified patient visibility with case prioritisation for faster triage and action.",
    icon: "activity",
  },
  {
    title: "Device data on mobile",
    body: "Continuous device-linked vitals and patient data visible wherever care teams are working.",
    icon: "heart-pulse",
  },
  {
    title: "Abnormality alerts",
    body: "AI/ML-enabled insights surface abnormalities earlier to support point-in-time intervention.",
    icon: "sparkles",
  },
  {
    title: "Real-time collaboration",
    body: "Cross-specialty coordination happens around a shared clinical picture instead of fragmented handoffs.",
    icon: "workflow",
  },
  {
    title: "Guided clinical pathways",
    body: "Pathways are embedded into the platform to make response steps more consistent and scalable.",
    icon: "waypoints",
  },
  {
    title: "Secure and compliant core",
    body: "The platform is positioned as secure, highly available, interoperable, and compliance-conscious.",
    icon: "shield-check",
  },
] satisfies FeatureCard[]

export const productTimeline = [
  {
    title: "Connect the care environment",
    body: "PiMed integrates multiple medical devices through proprietary AI/ML-enabled edge devices.",
  },
  {
    title: "Stream and contextualise data",
    body: "Vitals, trends, and abnormalities are surfaced continuously instead of only during periodic review windows.",
  },
  {
    title: "Coordinate response",
    body: "Clinicians, specialists, and operations stakeholders collaborate around shared real-time patient context.",
  },
  {
    title: "Extend care beyond the bedside",
    body: "The model expands across ICU, emergency, ward, tele-ICU, and home-based follow-on care.",
  },
] satisfies TimelineStep[]

export const hospitalMetrics = [
  {
    value: "50%",
    label: "Reduction in ICU mortality",
    note: "Claim shown on current live site.",
  },
  {
    value: "25%",
    label: "Reduction in ICU OPEX",
    note: "Claim shown on current live site.",
  },
  {
    value: "24×7",
    label: "Connected specialist-led intervention potential",
    note: "Core promise repeated across site.",
  },
] satisfies MetricCard[]

export const hospitalFeatures = [
  {
    title: "Resource optimisation",
    body: "Digitised rounds and integrated pathways help hospitals scale care with existing staff and infrastructure.",
    icon: "building",
  },
  {
    title: "Staff experience",
    body: "Care teams get flexible, lower-friction workflows with fewer visibility gaps and less repetitive coordination.",
    icon: "stethoscope",
  },
  {
    title: "Revenue expansion",
    body: "The hospital narrative includes post-discharge care, loyalty, and hospital-to-hospital care as new revenue opportunities.",
    icon: "briefcase",
  },
  {
    title: "Patient continuity",
    body: "Data and oversight follow the patient across care settings instead of resetting at every transition.",
    icon: "globe",
  },
] satisfies FeatureCard[]

export const investorMetrics = [
  {
    value: "USD 6B",
    label: "India opportunity cited on the current investor page.",
  },
  {
    value: "75%",
    label: "MVP readiness stated on the live site.",
  },
  {
    value: "3 years",
    label: "Breakeven horizon claimed in the current investor narrative.",
  },
] satisfies MetricCard[]

export const investorHighlights = [
  {
    title: "Commercialisation phase",
    body: "The live investor narrative positions PlasmIT as a product nearing market readiness and seeking growth-oriented partners.",
    icon: "badge-check",
  },
  {
    title: "Clear buyer pain",
    body: "Hospital economics, care-team capacity, and intervention speed are all treated as parts of the same platform thesis.",
    icon: "arrow-right",
  },
  {
    title: "Geo leverage",
    body: "The business footprint links Australia-based positioning with India market traction and healthcare scale.",
    icon: "globe",
  },
  {
    title: "Standards-aware infrastructure",
    body: "Founding credibility is framed around government strategy work and FHIR interoperability participation.",
    icon: "cpu",
  },
] satisfies FeatureCard[]

export const aboutHighlights = [
  {
    title: "Founded to close a care gap",
    body: "PlasmIT frames its origin around personal and professional insight into the limitations of critical care delivery.",
  },
  {
    title: "Built by health and technology operators",
    body: "The current site repeatedly pairs clinical credibility with digital transformation, interoperability, and infrastructure expertise.",
  },
  {
    title: "Focused on world-class care access",
    body: "The core mission is to make high-quality care more accessible, more continuous, and less dependent on location.",
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

export const leadershipProfiles = [
  {
    name: "Awadhesh Kumar",
    role: "Chief Technology Officer",
    summary:
      "20+ years in digital products and transformation, with a track record of translating emerging technology into business outcomes.",
  },
  {
    name: "Dr. Kamaljit Parmar",
    role: "Chief Product Officer",
    summary:
      "Critical care specialist with more than two decades of experience across Australia, the UK, and India.",
  },
  {
    name: "Dr. Subrata Panda",
    role: "Chief Medical Officer",
    summary:
      "Senior clinical leader with 40+ years at AIIMS New Delhi and deep academic recognition.",
  },
  {
    name: "Dr. Supten Sarbadhikari",
    role: "Chief Interoperability Officer",
    summary:
      "Healthcare digitisation leader connected to HL7/FHIR, WHO advisory work, and national digital health programmes.",
  },
  {
    name: "Dr. Kamal Sharma",
    role: "Scientific & Research Lead",
    summary:
      "Interventional cardiologist with extensive academic output, awards, and translational research experience.",
  },
  {
    name: "Dr. Steven Schilders",
    role: "Chief Data Officer",
    summary:
      "Data-first healthcare systems leader with experience in security, digital twins, and large-scale platform delivery.",
  },
  {
    name: "Kartik Thakkar",
    role: "Product Development Lead",
    summary:
      "Senior business and technology operator focused on delivery assurance, portfolio execution, and capability uplift.",
  },
  {
    name: "Dr. Chandrakant Pandav",
    role: "Product SME",
    summary:
      "Public health leader and advisor with decades of policy, clinical, and institutional expertise.",
  },
] satisfies LeadershipProfile[]

export const offices = [
  {
    label: "Australia",
    address: contactDetails.australia,
    note: "Primary office shown in the current page-level contact blocks.",
  },
  {
    label: "India",
    address: contactDetails.india,
    note: "Subsidiary and market footprint referenced throughout the company narrative.",
  },
] as const

export const contactFaqs = [
  {
    question: "What enquiries are supported?",
    answer:
      "The current site routes investor, hospital, and general enquiries. This rebuild keeps the same intake structure.",
  },
  {
    question: "Which office should be treated as canonical?",
    answer:
      "The live site shows two Australian addresses in different sections. This redesign surfaces Docklands as the primary office and preserves the alternate footer address for reference.",
  },
  {
    question: "What is the main conversion path?",
    answer:
      "For this redesign the primary conversion is enquiry-driven: hospital conversations, investor outreach, and product discovery requests.",
  },
] as const
