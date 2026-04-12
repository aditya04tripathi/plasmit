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
        title="Eight-person core team from the investor pack."
        intro="Founder-led execution spanning CEO, CTO, clinical product ownership, AI, engineering, interoperability, compliance, and implementation, aligned to PiMed (QLMed) commercialisation."
        primary={{ label: "Contact the Team", href: "/contact-us" }}
        secondary={{ label: "Read About PlasmIT", href: "/about-us" }}
      />

      <TeamSection
        badge="Core team"
        title="Operators building Smart ICU on Mobile™."
        description="Roles and names match the structured investor extraction; short summaries describe mandate only."
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
