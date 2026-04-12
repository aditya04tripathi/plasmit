import { leadershipProfileSections } from "@/lib/site-content"
import { SiteFrame } from "@/components/marketing/SiteFrame"
import {
  CTASection,
  PageHero,
  SplitShowcase,
} from "@/components/marketing/sections"
import { TeamSection } from "@/components/marketing/team/TeamSection"

export function LeadershipPageView() {
  return (
    <SiteFrame>
      <PageHero
        badge="Leadership"
        title="Experts in clinical care and digital transformation."
        intro="Our leadership team combines decades of global critical care experience with deep expertise in interoperability and data architecture."
        primary={{ label: "Contact the Team", href: "/contact-us" }}
        secondary={{ label: "Read About PlasmIT", href: "/about-us" }}
      />

      <TeamSection
        badge="Executive and advisory team"
        title="Clinical depth and standards credibility."
        description="A multidisciplinary team dedicated to bridging the gap in critical care delivery through the PiMed platform."
        sections={leadershipProfileSections}
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
