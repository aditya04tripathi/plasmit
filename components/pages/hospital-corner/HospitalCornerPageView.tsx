import {
  hospitalFeatures,
  hospitalMetrics,
  productTimeline,
} from "@/lib/site-content"
import { SiteFrame } from "@/components/marketing/SiteFrame"
import {
  FeatureGrid,
  PageHero,
  SplitShowcase,
  TimelineSection,
} from "@/components/marketing/sections"

export function HospitalCornerPageView() {
  return (
    <SiteFrame>
      <PageHero
        badge="Hospital Corner"
        title="PiMed Next-Gen Connected ICU for better intervention."
        intro="SmartICU on Mobile transforms care delivery from physical rounds to continuous connected rounds for timely intervention and better outcomes."
        primary={{ label: "Speak with PlasmIT", href: "/contact-us" }}
        secondary={{ label: "Explore PiMed", href: "/pimed" }}
        metrics={hospitalMetrics}
      />

      <FeatureGrid
        badge="Value to hospital"
        title="Operational and financial value drivers"
        description="Care quality, efficiency, and growth-oriented value outcomes for hospitals."
        items={hospitalFeatures}
      />

      <SplitShowcase
        badge="Value to medical staff"
        title="Point-in-time care with lower cognitive burden"
        leftTitle="Clinical execution"
        leftBody="Seamless data availability beyond current care setups supports quick action to abnormalities and continuous care."
        rightTitle="Care-worker quality of life"
        rightBody="Flexible working conditions enable care from anywhere with stronger interdepartmental collaboration."
      />

      <TimelineSection
        badge="Value to care recipient and family"
        title="Care continuity outcomes"
        description="Seamless transition, personalization, accessibility, peace of mind, and a health wallet experience."
        steps={productTimeline}
      />
    </SiteFrame>
  )
}
