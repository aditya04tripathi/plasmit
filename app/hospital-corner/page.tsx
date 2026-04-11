import type { Metadata } from "next"

import { hospitalFeatures, hospitalMetrics, productTimeline } from "@/lib/site-content"
import { buildPageMetadata } from "@/lib/page-metadata"
import { SiteFrame } from "@/components/site/SiteFrame"
import {
  CTASection,
  FeatureGrid,
  PageHero,
  SplitShowcase,
  TimelineSection,
} from "@/components/site/sections"

export const metadata: Metadata = buildPageMetadata({
  title: "Hospital Corner",
  description:
    "Review the hospital-facing case for PiMed, including ICU outcome claims, workflow improvements, resource optimization, and revenue expansion potential.",
  path: "/hospital-corner",
})

export default function HospitalCornerPage() {
  return (
    <SiteFrame>
      <PageHero
        badge="Hospital Corner"
        title="Improving outcomes through continuous connected care."
        intro="PiMed provides a compelling business case for hospitals: lower mortality, reduced OPEX, and a more sustainable clinician workflow."
        primary={{ label: "Speak with PlasmIT", href: "/contact-us" }}
        secondary={{ label: "Explore PiMed", href: "/pimed" }}
        metrics={hospitalMetrics}
      />

      <FeatureGrid
        badge="Value drivers"
        title="Hospital value extends beyond bedside monitoring."
        description="From resource optimization to revenue expansion, PiMed transforms the operational economics of critical care."
        items={hospitalFeatures}
      />

      <SplitShowcase
        badge="Decision logic"
        title="Operational gain meets strategic upside."
        leftTitle="Operational Gain"
        leftBody="Automate ICU oversight and reduce wasted motion, allowing specialist time to be used more effectively through digitised rounds."
        rightTitle="Strategic Upside"
        rightBody="Create new revenue channels via post-discharge care and hospital-to-hospital services while improving brand value."
      />

      <TimelineSection
        badge="Deployment story"
        title="A clear path to connected care."
        description="Understand how PiMed integrates with your existing devices and teams to create a seamless, fault-tolerant care surface."
        steps={productTimeline}
      />

      <CTASection
        badge="Hospital enquiry"
        title="Ready to optimize your ICU operations?"
        description="Connect with our team to discuss how PiMed can reduce mortality and OPEX in your facility."
        primary={{ label: "Contact Hospital Team", href: "/contact-us" }}
        secondary={{ label: "View Investor Narrative", href: "/investor-corner" }}
      />
    </SiteFrame>
  )
}
