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
        title="Leadership team and advisors shaping critical-care innovation."
        intro="Meet the cross-functional leadership team and advisor bench supporting product strategy, clinical excellence, interoperability, data, and delivery for PiMed."
        primary={{ label: "Contact the Team", href: "/contact-us" }}
        secondary={{ label: "Read About PlasmIT", href: "/about-us" }}
      />

      <TeamSection
        badge="Team"
        title="Leadership and advisors driving Smart ICU on Mobile™."
        description="The leadership section includes core operators; the advisors section highlights additional strategic support profiles."
        sections={leadershipProfileSections}
      />

      <SplitShowcase
        badge="Our posture"
        title="Why this composition matters."
        leftTitle="For hospitals"
        leftBody="Intensivist-led product ownership plus implementation leadership signals deployment realism and bedside credibility."
        rightTitle="For investors"
        rightBody="CEO/CTO pairing, interoperability leadership tied to FHIR, and compliance/growth leadership map directly to regulated health-tech scale."
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
