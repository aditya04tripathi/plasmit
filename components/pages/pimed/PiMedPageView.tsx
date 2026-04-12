import { platformFeatures, productTimeline } from "@/lib/site-content"
import { SiteFrame } from "@/components/marketing/SiteFrame"
import {
  CTASection,
  FeatureGrid,
  PageHero,
  SplitShowcase,
  TimelineSection,
} from "@/components/marketing/sections"

export function PiMedPageView() {
  return (
    <SiteFrame>
      <PageHero
        badge="PiMed Product"
        title="A mobile-first critical care surface for continuous connected monitoring and action."
        intro="PiMed is a next-generation connected, intelligent, integrated, immersive, secured, and compliant digital care platform for hospitals."
        primary={{ label: "See Hospital Value", href: "/hospital-corner" }}
        secondary={{ label: "Contact Product Team", href: "/contact-us" }}
      />

      <FeatureGrid
        badge="Capability set"
        title="An intelligent clinical operating layer."
        description="PiMed connects devices, workflows, and clinicians into one persistent care experience to support point-in-time intervention."
        items={platformFeatures}
      />

      <TimelineSection
        badge="Operational flow"
        title="Connecting devices, context, and decisions into one continuous care loop."
        description="From AI/ML edge streaming to real-time intervention, PiMed ensures all stakeholders remain continuously informed across any device."
        steps={productTimeline}
      />

      <SplitShowcase
        badge="Product thesis"
        title="Designed for speed to intervention and continuity of visibility."
        leftTitle="Clinical layer"
        leftBody="Real-time vitals, abnormality detection, collaboration, and guided pathways keep decision-making close to live patient context."
        rightTitle="Infrastructure layer"
        rightBody="A compliant and fault-tolerant platform ensuring secure data transfer and high availability from the ICU to home care."
      />

      <CTASection
        badge="Commercial next step"
        title="Ready to transform your care delivery?"
        description="Explore the hospital business case or connect with our product team to discuss deployment."
        primary={{ label: "Go to Hospital Corner", href: "/hospital-corner" }}
        secondary={{ label: "Investor Corner", href: "/investor-corner" }}
      />
    </SiteFrame>
  )
}
