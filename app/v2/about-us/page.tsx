import type { Metadata } from "next"

import { aboutHighlights } from "@/lib/site-content"
import { buildPageMetadata } from "@/lib/page-metadata"
import { WebflowFrame } from "@/components/webflow/WebflowFrame"
import {
  WebflowCTA,
  WebflowHero,
  WebflowSplit,
  WebflowStory,
} from "@/components/webflow/sections"

export const metadata: Metadata = buildPageMetadata({
  title: "Webflow About Us",
  description:
    "Webflow-inspired company overview for PlasmIT, covering the origin story, healthcare focus, and operating footprint behind PiMed.",
  path: "/webflow/about-us",
})

export default function WebflowAboutUsPage() {
  return (
    <WebflowFrame>
      <WebflowHero
        badge="About Us"
        title="A brighter editorial company page built from the same PlasmIT source material."
        intro="This route keeps the same origin story, Australia-plus-India operating footprint, and healthcare systems framing from the main rebuild."
        primary={{ label: "Vision & Values", href: "/webflow/vision-and-values" }}
        secondary={{ label: "Leadership", href: "/webflow/leadership" }}
      />

      <WebflowStory
        badge="Company story"
        title="The company narrative is still rooted in a critical-care access gap."
        description="This is the same content model as the main rebuild, translated into the Webflow route."
        items={aboutHighlights}
      />

      <WebflowSplit
        badge="Footprint"
        title="Australia-based positioning with India-linked execution remains central to the story."
        leftTitle="Operating shape"
        leftBody="Public material presents PlasmIT as an Australia-based health-tech company with an India subsidiary and cross-market operating relevance."
        rightTitle="Why it matters"
        rightBody="That footprint supports both the commercial and clinical story: standards-aware positioning, market scale, and a more grounded growth narrative."
      />

      <WebflowCTA
        badge="Trust path"
        title="Carry the story into values, leadership, or direct contact."
        description="The alternate route mirrors the same trust-page architecture as the main site rebuild."
        primary={{ label: "Leadership", href: "/webflow/leadership" }}
        secondary={{ label: "Contact", href: "/webflow/contact-us" }}
      />
    </WebflowFrame>
  )
}
