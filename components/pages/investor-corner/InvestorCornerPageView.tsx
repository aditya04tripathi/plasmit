import { investorHighlights, investorMetrics } from "@/lib/site-content"
import { SiteFrame } from "@/components/marketing/SiteFrame"
import {
  CTASection,
  FeatureGrid,
  PageHero,
  SplitShowcase,
  StoryGrid,
} from "@/components/marketing/sections"

const investorStoryItems = [
  {
    title: "Commercialisation stage",
    body: "The product is nearing full market readiness, actively seeking visionary growth partners to accelerate scaling.",
  },
  {
    title: "Market access signals",
    body: "Validated through hospital viability acceptance and strategic MOUs across the Indian healthcare ecosystem.",
  },
] as const

export function InvestorCornerPageView() {
  return (
    <SiteFrame>
      <PageHero
        badge="Investor Corner"
        title="Scaling the future of digital critical care."
        intro="PlasmIT is scaling a commercialisation-stage platform that solves a global care gap with standards-aware infrastructure."
        primary={{ label: "Send Investor Enquiry", href: "/contact-us" }}
        secondary={{ label: "Read About PlasmIT", href: "/about-us" }}
        metrics={investorMetrics}
      />

      <FeatureGrid
        badge="The Opportunity"
        title="Market reach and commercial readiness."
        description="With significant traction in India and a product nearing full commercialisation, PlasmIT is positioned for global growth."
        items={investorHighlights}
      />

      <SplitShowcase
        badge="The Thesis"
        title="Clinical pain meets platform scalability."
        leftTitle="The Problem"
        leftBody="Critical care delivery suffers from fragmented visibility and delayed decisions, creating a massive opportunity for connected infrastructure."
        rightTitle="The Solution"
        rightBody="A system that improves intervention speed and hospital efficiency, targeting a USD $6B market opportunity in India alone."
      />

      <StoryGrid
        badge="Current Position"
        title="Market access and traction."
        description="Our progress is validated by signed MOUs with prominent hospitals and global interest in our interoperability posture."
        items={[...investorStoryItems]}
      />

      <CTASection
        badge="Investor next step"
        title="Partner with us in saving millions of lives."
        description="We are seeking growth-oriented investors to join us in radically transforming the critical care ecosystem."
        primary={{ label: "Send Investor Enquiry", href: "/contact-us" }}
        secondary={{ label: "Review Leadership", href: "/leadership" }}
      />
    </SiteFrame>
  )
}
