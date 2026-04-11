import type { Metadata } from "next"

import { leadershipProfiles } from "@/lib/site-content"
import { buildPageMetadata } from "@/lib/page-metadata"
import { SiteFrame } from "@/components/site/SiteFrame"
import {
  CTASection,
  LeadershipGrid,
  PageHero,
  SplitShowcase,
} from "@/components/site/sections"

export const metadata: Metadata = buildPageMetadata({
  title: "Leadership",
  description:
    "Meet the PlasmIT leadership team spanning clinical care, interoperability, data, research, product, and healthcare technology delivery.",
  path: "/leadership",
})

export default function LeadershipPage() {
  return (
    <SiteFrame>
      <PageHero
        badge="Leadership"
        title="Experts in clinical care and digital transformation."
        intro="Our leadership team combines decades of global critical care experience with deep expertise in interoperability and data architecture."
        primary={{ label: "Contact the Team", href: "/contact-us" }}
        secondary={{ label: "Read About PlasmIT", href: "/about-us" }}
      />

      <LeadershipGrid
        badge="Executive and advisory team"
        title="Clinical depth and standards credibility."
        description="A multidisciplinary team dedicated to bridging the gap in critical care delivery through the PiMed platform."
        profiles={leadershipProfiles}
      />

      <SplitShowcase
        badge="Our Posture"
        title="The team is the foundation of our trust."
        leftTitle="For hospitals"
        leftBody="Our team's depth in ICU and interoperability reassures buyers that PiMed is rooted in real-world clinical experience."
        rightTitle="For investors"
        rightBody="Our composition signals strong founder-market fit and the ability to navigate complex, regulated healthcare environments."
      />

      <CTASection
        badge="Next step"
        title="Let's discuss the future of care."
        description="Connect with our leadership team to explore strategic partnerships or product deployment."
        primary={{ label: "Go to Contact", href: "/contact-us" }}
        secondary={{ label: "Investor Corner", href: "/investor-corner" }}
      />
    </SiteFrame>
  )
}
