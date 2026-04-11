import type { Metadata } from "next"

import { investorHighlights, investorMetrics } from "@/lib/site-content"
import { buildPageMetadata } from "@/lib/page-metadata"
import { SiteFrame } from "@/components/site/SiteFrame"
import {
  CTASection,
  FeatureGrid,
  PageHero,
  SplitShowcase,
  StoryGrid,
} from "@/components/site/sections"

export const metadata: Metadata = buildPageMetadata({
  title: "Investor Corner",
  description:
    "Investor-facing overview of PlasmIT and PiMed, covering commercialization timing, market opportunity, hospital traction, and platform thesis.",
  path: "/investor-corner",
})

export default function InvestorCornerPage() {
  return (
    <SiteFrame>
      <PageHero
        badge="Investor Corner"
        title="A cleaner commercialization narrative for growth-oriented health-tech investors."
        intro="The live investor page is concise but under-structured. This rebuild turns it into a sharper investment story around market size, commercialization timing, hospital pain, and cross-market potential."
        primary={{ label: "Contact for Investor Enquiry", href: "/contact-us" }}
        secondary={{ label: "Read About PlasmIT", href: "/about-us" }}
        metrics={investorMetrics}
        asideTitle="Current live-site thesis, clarified"
        asideBody="The public narrative centers on commercialization, hospital acceptance, signed MOUs in India, and a large opportunity across ICU and broader bed capacity."
      />

      <FeatureGrid
        badge="Why now"
        title="Investor messaging is strongest when the product, market, and founder-fit story are shown together."
        description="These are the core investor signals visible on the current site and supporting research notes."
        items={investorHighlights}
      />

      <SplitShowcase
        badge="Commercial lens"
        title="The core bet is that better connected care infrastructure creates value on both sides of the equation."
        leftTitle="Clinical and operational pain"
        leftBody="Care delivery still suffers from fragmented visibility, delayed decisions, and under-leveraged specialist capacity in critical care settings."
        rightTitle="Business and platform upside"
        rightBody="A system that improves intervention speed while supporting hospital efficiency, loyalty, and new services can be sold as both clinical infrastructure and commercial enablement."
      />

      <StoryGrid
        badge="Current position"
        title="Where the live site says the company stands."
        description="These statements come directly from the live investor narrative and are kept high-level rather than overextended."
        items={[
          {
            title: "Commercialisation stage",
            body: "PlasmIT says the product is nearing commercialization and is actively seeking visionary growth partners and investors.",
          },
          {
            title: "Market access signals",
            body: "The current site cites hospital viability acceptance, signed MOUs in India, and traction from hospitals across the globe.",
          },
        ]}
      />

      <CTASection
        badge="Investor next step"
        title="Use the investor page to qualify interest, then move quickly to contact."
        description="This page now does the narrative setup. The contact page should handle actual investor outreach and follow-up."
        primary={{ label: "Send Investor Enquiry", href: "/contact-us" }}
        secondary={{ label: "Review Leadership", href: "/leadership" }}
      />
    </SiteFrame>
  )
}
