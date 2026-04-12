import { aboutHighlights } from "@/lib/site-content"
import { SiteFrame } from "@/components/marketing/SiteFrame"
import {
  CTASection,
  PageHero,
  SplitShowcase,
  StoryGrid,
} from "@/components/marketing/sections"

export function AboutUsPageView() {
  return (
    <SiteFrame>
      <PageHero
        badge="About PlasmIT"
        title="PlasmIT Pty Ltd: critical care infrastructure from Australia, built for global scale."
        intro="Health-tech / critical care company delivering PiMed (QLMed), Smart ICU on Mobile™: an intelligent integrated care delivery ecosystem for point-in-time ICU care via mobile, 24×7."
        primary={{ label: "Read Vision & Values", href: "/vision-and-values" }}
        secondary={{ label: "Meet Leadership", href: "/leadership" }}
      />

      <StoryGrid
        badge="Origin"
        title="Vision, mission, and founding credibility."
        description="Aligned with the investor pack company overview."
        items={aboutHighlights}
      />

      <SplitShowcase
        badge="Operating footprint"
        title="Australia headquarters with India-first commercial momentum."
        leftTitle="Entity and sector"
        leftBody="PlasmIT Pty Ltd, headquartered in Australia, operates at the intersection of health technology and critical care delivery."
        rightTitle="Go-to-market"
        rightBody="India-first strategy supported by paid pilot, multiple hospital MOUs, economical compliance readiness, and the lowest barrier to entry for scaled adoption before expanding to the United States."
      />

      <CTASection
        badge="Next step"
        title="Use the trust pages to de-risk the commercial story."
        description="Leadership, values, and contact now form a clear trust path instead of being buried inside generic brochure sections."
        primary={{ label: "View Leadership", href: "/leadership" }}
        secondary={{ label: "Contact PlasmIT", href: "/contact-us" }}
      />
    </SiteFrame>
  )
}
