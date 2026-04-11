import type { Metadata } from "next"

import { contactFaqs, values } from "@/lib/site-content"
import { buildPageMetadata } from "@/lib/page-metadata"
import { SiteFrame } from "@/components/site/SiteFrame"
import {
  CTASection,
  FAQSection,
  PageHero,
  StoryGrid,
} from "@/components/site/sections"

export const metadata: Metadata = buildPageMetadata({
  title: "Vision and Values",
  description:
    "Read PlasmIT’s mission, care philosophy, and the six operating principles derived from the company’s public 6C framework narrative.",
  path: "/vision-and-values",
})

export default function VisionAndValuesPage() {
  return (
    <SiteFrame>
      <PageHero
        badge="Vision & Values"
        title="A calmer articulation of the mission, principles, and care philosophy behind PiMed."
        intro="The public vision statement focuses on reimagining healthcare services through technology and innovation, while the broader site language points to a 6C maturity framework built around connected, contextual, and compliant care."
        primary={{ label: "Contact the Team", href: "/contact-us" }}
        secondary={{ label: "Back to About Us", href: "/about-us" }}
        asideTitle="Why this page matters"
        asideBody="Trust pages should feel measured and specific. This version removes filler and translates the public messaging into six plain-language principles."
      />

      <StoryGrid
        badge="Six principles"
        title="A working interpretation of the public-facing 6C framework."
        description="The current site references the framework but does not fully enumerate it in text. These principles are derived from the repeated language across the live pages."
        items={values}
      />

      <FAQSection
        badge="Clarity"
        title="Important context behind the current public narrative."
        description="These notes explain where the source material is explicit and where the redesign consolidates or interprets repeated content."
        items={contactFaqs}
      />

      <CTASection
        badge="Trust path"
        title="A strong value page should lead directly into leadership or contact."
        description="This route is now a clean philosophical layer in the site architecture rather than a generic text dump."
        primary={{ label: "Meet Leadership", href: "/leadership" }}
        secondary={{ label: "Send an Enquiry", href: "/contact-us" }}
      />
    </SiteFrame>
  )
}
