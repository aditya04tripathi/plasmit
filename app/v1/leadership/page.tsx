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
        title="A credential-rich team presented with more clarity and less brochure clutter."
        intro="The live leadership page is one of the site's strongest trust assets. This redesign keeps the depth of expertise but presents it in a tighter, more premium grid."
        primary={{ label: "Contact the Team", href: "/contact-us" }}
        secondary={{ label: "Read About PlasmIT", href: "/about-us" }}
        asideTitle="Leadership posture"
        asideBody="Clinical, interoperability, product, data, and research leadership all need to be visible because the company sells trust as much as software."
      />

      <LeadershipGrid
        badge="Executive and advisory team"
        title="Clinical depth, digital systems experience, and standards credibility in one view."
        description="Each profile below is reconstructed from the current live leadership page and crawl notes."
        profiles={leadershipProfiles}
      />

      <SplitShowcase
        badge="Why leadership matters here"
        title="The team page is part of the commercial argument."
        leftTitle="For hospitals"
        leftBody="Leadership depth reassures buyers that PiMed is not just software marketing. It is rooted in real ICU, interoperability, and operational experience."
        rightTitle="For investors"
        rightBody="The same team composition signals founder-market fit, standards awareness, and the ability to navigate healthcare complexity in regulated environments."
      />

      <CTASection
        badge="Next step"
        title="Trust pages should resolve into direct contact."
        description="Once a visitor believes the leadership story, the next interaction should be an enquiry rather than more navigation."
        primary={{ label: "Go to Contact", href: "/contact-us" }}
        secondary={{ label: "Investor Corner", href: "/investor-corner" }}
      />
    </SiteFrame>
  )
}
