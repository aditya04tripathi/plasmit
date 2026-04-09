import type { Metadata } from "next"

import { contactFaqs, values } from "@/lib/site-content"
import { buildPageMetadata } from "@/lib/page-metadata"
import { WebflowFrame } from "@/components/webflow/WebflowFrame"
import {
  WebflowCTA,
  WebflowFAQ,
  WebflowHero,
  WebflowStory,
} from "@/components/webflow/sections"

export const metadata: Metadata = buildPageMetadata({
  title: "Webflow Vision and Values",
  description:
    "Webflow-inspired values page for PlasmIT, summarizing mission, care philosophy, and the interpreted six-principle framework.",
  path: "/webflow/vision-and-values",
})

export default function WebflowVisionAndValuesPage() {
  return (
    <WebflowFrame>
      <WebflowHero
        badge="Vision & Values"
        title="An alternate value page with a clearer editorial structure."
        intro="The public mission, technology-driven care philosophy, and implied 6C framework are retained here and recast into a more polished Webflow-style section flow."
        primary={{ label: "Leadership", href: "/webflow/leadership" }}
        secondary={{ label: "Contact", href: "/webflow/contact-us" }}
      />

      <WebflowStory
        badge="Principles"
        title="Six working principles derived from the live public narrative."
        description="The current site references the 6C framework without fully unpacking it in text. These cards preserve the same interpretation used in the main rebuild."
        items={values}
      />

      <WebflowFAQ
        badge="Context"
        title="Notes on interpretation and source clarity."
        description="These supporting notes come from the same crawl-based reconstruction work used across the rest of the site."
        items={contactFaqs}
      />

      <WebflowCTA
        badge="Next step"
        title="A values page should lead cleanly into trust or contact."
        description="This alternate route keeps the same functional role as the main version while changing the visual expression."
        primary={{ label: "Meet Leadership", href: "/webflow/leadership" }}
        secondary={{ label: "Contact Us", href: "/webflow/contact-us" }}
      />
    </WebflowFrame>
  )
}
