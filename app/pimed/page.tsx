import type { Metadata } from "next"

import { platformFeatures, productTimeline } from "@/lib/site-content"
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
  title: "PiMed Product Overview",
  description:
    "Explore PiMed as a connected, mobile-first digital care platform built for continuous monitoring, collaboration, and intervention across care settings.",
  path: "/pimed",
})

export default function PiMedPage() {
  return (
    <SiteFrame>
      <PageHero
        badge="PiMed product overview"
        title="A mobile-first critical care surface for continuous connected monitoring and action."
        intro="PiMed is presented on the live site as a next-generation connected, intelligent, integrated, immersive, secured, and compliant digital care platform for hospitals."
        primary={{ label: "See Hospital Value", href: "/hospital-corner" }}
        secondary={{ label: "Contact Product Team", href: "/contact-us" }}
        asideTitle="What this page does better"
        asideBody="The legacy product page repeated homepage blocks. This rebuild turns PiMed into a sharper product narrative with clearer system sequencing and cleaner capability framing."
      />

      <FeatureGrid
        badge="Capability set"
        title="The product is strongest when described as a clinical operating layer, not a loose bundle of features."
        description="Each capability below comes from the current live-site messaging and has been rewritten into a tighter product narrative."
        items={platformFeatures}
      />

      <TimelineSection
        badge="Operational flow"
        title="PiMed connects devices, context, and decisions into one continuous care loop."
        description="This is the product story a modern buyer needs to understand in one pass."
        steps={productTimeline}
      />

      <SplitShowcase
        badge="Product thesis"
        title="Designed for speed to intervention and continuity of visibility."
        leftTitle="Clinical layer"
        leftBody="Real-time vitals, abnormality detection, collaboration, and guided pathways keep decision-making close to live patient context."
        rightTitle="Infrastructure layer"
        rightBody="The platform is framed around fault tolerance, security, interoperability, device integration, and availability across settings from ICU to home care."
      />

      <CTASection
        badge="Commercial next step"
        title="PiMed should read as a platform, not as a brochure."
        description="Use the hospital page for buyer economics, the investor page for growth narrative, or contact the team directly for a product conversation."
        primary={{ label: "Go to Hospital Corner", href: "/hospital-corner" }}
        secondary={{ label: "Investor Corner", href: "/investor-corner" }}
      />
    </SiteFrame>
  )
}
