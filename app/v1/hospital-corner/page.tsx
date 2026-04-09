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
        title="A stronger hospital business case for continuous connected care."
        intro="The hospital page is the live site's most compelling commercial argument: better intervention timing, stronger utilisation, new revenue opportunities, and a more sustainable clinician workflow."
        primary={{ label: "Speak with PlasmIT", href: "/contact-us" }}
        secondary={{ label: "Explore PiMed", href: "/pimed" }}
        metrics={hospitalMetrics}
        asideTitle="How this page is reframed"
        asideBody="Instead of stacking claim after claim, the page now separates outcome posture, operational benefits, and staff experience into a modern decision flow."
      />

      <FeatureGrid
        badge="Value drivers"
        title="Hospital value extends beyond bedside monitoring."
        description="The current site mixes economics, clinician experience, and patient continuity together. This version gives each one a cleaner lane."
        items={hospitalFeatures}
      />

      <SplitShowcase
        badge="Decision logic"
        title="Why the hospital narrative is more persuasive when sequenced properly."
        leftTitle="Operational gain"
        leftBody="PiMed is framed as a way to automate parts of ICU oversight, reduce wasted motion, improve interdepartmental coordination, and use specialist time more effectively."
        rightTitle="Strategic upside"
        rightBody="The live-site narrative points to post-discharge care, loyalty, and hospital-to-hospital services as new revenue and brand-building pathways."
      />

      <TimelineSection
        badge="Deployment story"
        title="The product promise needs a clear adoption sequence."
        description="Hospital buyers need to understand how the system connects to devices, teams, and care settings before they trust the commercial promise."
        steps={productTimeline}
      />

      <CTASection
        badge="Hospital enquiry"
        title="Use this page as the hospital-facing conversion path."
        description="This route now carries the strongest operations and ROI narrative on the site, which is where the live content was already most convincing."
        primary={{ label: "Contact Hospital Team", href: "/contact-us" }}
        secondary={{ label: "View Investor Narrative", href: "/investor-corner" }}
      />
    </SiteFrame>
  )
}
