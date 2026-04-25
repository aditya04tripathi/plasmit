import {
  hospitalFeatures,
  hospitalMetrics,
  productTimeline,
} from "@/lib/site-content"
import { SiteFrame } from "@/components/marketing/SiteFrame"
import {
  FeatureBento,
  PageHero,
  SplitShowcase,
  TimelineSection,
} from "@/components/marketing/sections"

export function HospitalCornerPageView() {
  return (
    <SiteFrame>
      <PageHero
        badge="Hospital Corner"
        title="PiMed SmartICU on Mobile for measurable hospital outcomes"
        intro="PiMed redefines care delivery from physical rounds to continuous connected rounds, enabling timely intervention, stronger resource utilisation, and sustainable growth."
        primary={{ label: "Schedule a meeting", href: "/contact-us" }}
        secondary={{ label: "Explore PiMed", href: "/pimed" }}
        metrics={hospitalMetrics}
      />

      <FeatureBento
        badge="Value to hospital"
        title="Operational, clinical, and financial value drivers"
        description="One-touch care experience, integrated pathways, resource optimisation, and revenue multipliers for hospitals."
        items={hospitalFeatures}
      />

      <SplitShowcase
        badge="Value to medical staff"
        title="Point-in-time care with reduced cognitive burden"
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
