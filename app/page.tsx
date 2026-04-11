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
        badge="Our Vision"
        title="From physical round to continuous connected round."
        description="PiMed enables a fundamental shift in critical care, moving from time-bound bedside rounds to a persistent, connected care experience."
        items={homePage.story}
      />

      <FeatureGrid
        badge="Platform capability"
        title="A connected clinical layer built around visibility, response, and trust."
        description="Intelligent, Integrated, and Immersive. PiMed provides a secured and compliant digital care platform for the modern hospital."
        items={platformFeatures}
      />

      <TimelineSection
        badge="How it works"
        title="Continuous Monitoring and Real-time Intervention."
        description="Our operational flow ensures that medical data streaming from the edge provides stakeholders with continuous context and early warnings."
        steps={productTimeline}
      />

      <SplitShowcase
        badge="Commercial framing"
        title="One platform, two distinct value propositions."
        description="PiMed solves the critical care visibility gap, creating value for both hospital operations and strategic investors."
        leftTitle="For hospitals"
        leftBody="Improve intervention speed, care continuity, and workforce utilisation while opening new revenue channels through post-discharge care."
        rightTitle="For investors"
        rightBody="A commercialisation-stage platform solving a global care gap with standards-aware infrastructure and significant market reach in India and beyond."
      />

      <StoryGrid
        badge="Our Mission"
        title="Clinical credibility matched with systems thinking."
        description="Founded by healthcare and technology experts, PlasmIT is dedicated to making world-class critical care more accessible and continuous."
        items={aboutHighlights}
      />

      <CTASection
        badge="Next step"
        title="Start a conversation with the PlasmIT team."
        description="Whether you are seeking a hospital business case or an investment opportunity, we are ready to discuss the future of connected care."
        primary={{ label: "Explore Hospital Corner", href: "/hospital-corner" }}
        secondary={{ label: "Contact PlasmIT", href: "/contact-us" }}
      />
    </SiteFrame>
  )
}
