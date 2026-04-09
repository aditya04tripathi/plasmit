import type { Metadata } from "next"

import { aboutHighlights } from "@/lib/site-content"
import { buildPageMetadata } from "@/lib/page-metadata"
import { SiteFrame } from "@/components/site/SiteFrame"
import {
  CTASection,
  PageHero,
  SplitShowcase,
  StoryGrid,
} from "@/components/site/sections"

export const metadata: Metadata = buildPageMetadata({
  title: "About PlasmIT",
  description:
    "Learn about PlasmIT’s origin, healthcare systems focus, Australia-plus-India footprint, and the company narrative behind PiMed.",
  path: "/about-us",
})

export default function AboutUsPage() {
  return (
    <SiteFrame>
      <PageHero
        badge="About PlasmIT"
        title="A healthcare IT company positioning connected care as clinical infrastructure."
        intro="PlasmIT describes itself as an Australia-based health-tech company created by healthcare visionaries and digital technology leaders to close a significant gap in the critical care ecosystem."
        primary={{ label: "Read Vision & Values", href: "/vision-and-values" }}
        secondary={{ label: "Meet Leadership", href: "/leadership" }}
        asideTitle="Company narrative"
        asideBody="This page compresses the live site's repeated origin story into a cleaner overview of why the company exists, what it builds, and how it wants to be evaluated."
      />

      <StoryGrid
        badge="Origin"
        title="PlasmIT frames its story around care access, interoperability, and system-level redesign."
        description="The live site is strongest when it explains the motivation behind PiMed rather than repeating feature marketing."
        items={aboutHighlights}
      />

      <SplitShowcase
        badge="Operating footprint"
        title="Australia-based positioning with India-linked execution and market relevance."
        leftTitle="Company setup"
        leftBody="Public-facing material presents PlasmIT as an Australia-based company with a subsidiary in India and a cross-market health technology orientation."
        rightTitle="What that signals"
        rightBody="The combined footprint supports the hospital and investor stories: clinical credibility, standards-aware product positioning, and access to a large, urgent care-delivery market."
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
