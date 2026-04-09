import type { Metadata } from "next"

import {
  aboutHighlights,
  homePage,
  platformFeatures,
  productTimeline,
} from "@/lib/site-content"
import { buildPageMetadata } from "@/lib/page-metadata"
import { PrimaryHeroGallery } from "@/components/site/PrimaryHeroGallery"
import { SiteFrame } from "@/components/site/SiteFrame"
import {
  CTASection,
  FeatureGrid,
  SplitShowcase,
  StoryGrid,
  TimelineSection,
} from "@/components/site/sections"

export const metadata: Metadata = buildPageMetadata({
  title: "Connected Critical Care",
  description:
    "PlasmIT homepage introducing PiMed, the shift from physical rounds to continuous connected care, and the core paths for hospitals and investors.",
  path: "/",
})

export default function Page() {
  return (
    <SiteFrame hideTopBar revealNavAfterHero>
      <PrimaryHeroGallery />

      <StoryGrid
        badge="Narrative shift"
        title="From physical round to continuous connected round."
        description="The strongest thread across the live site is not a feature checklist. It is the operating model change that PiMed is meant to enable."
        items={homePage.story}
      />

      <FeatureGrid
        badge="Platform capability"
        title="A connected clinical layer built around visibility, response, and trust."
        description="These are the product capabilities repeated across the live site and consolidated into a cleaner modern structure."
        items={platformFeatures}
      />

      <TimelineSection
        badge="How it works"
        title="A clearer system story for hospitals evaluating deployment readiness."
        description="Instead of repeating product marketing language, this sequence explains the operational flow from device connection to intervention."
        steps={productTimeline}
      />

      <SplitShowcase
        badge="Commercial framing"
        title="One platform, two buying conversations."
        description="The same core system is presented through two distinct decision lenses: hospital transformation and investor readiness."
        leftTitle="For hospitals"
        leftBody="PiMed is framed as a way to improve intervention speed, care continuity, workforce utilisation, and new service-line potential without treating digital transformation as a side project."
        rightTitle="For investors"
        rightBody="PlasmIT positions the product as a commercialisation-stage platform solving a visible global care gap with standards-aware infrastructure and multi-market relevance."
      />

      <StoryGrid
        badge="Company posture"
        title="Clinical credibility matched with systems thinking."
        description="The live site repeatedly combines care delivery expertise, digital transformation experience, and interoperability positioning."
        items={aboutHighlights}
      />

      <CTASection
        badge="Next step"
        title="Choose the path that matches the decision you need to make."
        description="Product discovery, hospital business case, and investor enquiry are now separated clearly instead of being buried in repeated content blocks."
        primary={{ label: "View Hospital Corner", href: "/hospital-corner" }}
        secondary={{ label: "Contact PlasmIT", href: "/contact-us" }}
      />
    </SiteFrame>
  )
}
