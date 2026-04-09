import type { Metadata } from "next"

import { investorHighlights, investorMetrics } from "@/lib/site-content"
import { buildPageMetadata } from "@/lib/page-metadata"
import { WebflowFrame } from "@/components/webflow/WebflowFrame"
import {
  WebflowCTA,
  WebflowFeatures,
  WebflowHero,
  WebflowSplit,
  WebflowStory,
} from "@/components/webflow/sections"

export const metadata: Metadata = buildPageMetadata({
  title: "Webflow Investor Corner",
  description:
    "Webflow-inspired investor page for PlasmIT and PiMed, covering commercialization, traction, market opportunity, and growth narrative.",
  path: "/webflow/investor-corner",
})

export default function WebflowInvestorCornerPage() {
  return (
    <WebflowFrame>
      <WebflowHero
        badge="Investor Corner"
        title="An alternate investor narrative built in a Webflow-style marketing template."
        intro="This route mirrors the same commercialization story from the primary rebuild but with a lighter, more polished investor-facing presentation."
        metrics={investorMetrics}
        primary={{ label: "Investor Enquiry", href: "/webflow/contact-us" }}
        secondary={{ label: "Leadership", href: "/webflow/leadership" }}
      />

      <WebflowFeatures
        badge="Investment thesis"
        title="The current public signals are organized into a clearer growth story."
        description="Market opportunity, founder fit, commercialization timing, and hospital pain are the core pillars retained from the live site."
        items={investorHighlights}
      />

      <WebflowSplit
        badge="Commercial logic"
        title="The platform case only works if clinical and economic value reinforce each other."
        leftTitle="Clinical market pain"
        leftBody="The live narrative points to critical care environments with fragmented visibility, delayed intervention, and constrained specialist bandwidth."
        rightTitle="Commercial leverage"
        rightBody="The same system is sold as a way to improve hospital economics, open new services, and position PlasmIT within a large health-tech opportunity."
      />

      <WebflowStory
        badge="Current public position"
        title="What the live investor narrative currently says."
        description="These statements are carried over directly at a high level so the alternate route stays grounded in the crawl."
        items={[
          {
            title: "Commercialization stage",
            body: "PlasmIT says it is actively seeking visionary and growth investors as the product approaches commercialization.",
          },
          {
            title: "Market access indicators",
            body: "The site cites viability acceptance by leading hospitals in India, signed MOUs, and traction from hospitals globally.",
          },
        ]}
      />

      <WebflowCTA
        badge="Next step"
        title="Use the contact route to convert investor interest into a real conversation."
        description="This page is designed to qualify and frame interest, not to replace direct outreach."
        primary={{ label: "Contact PlasmIT", href: "/webflow/contact-us" }}
        secondary={{ label: "About Us", href: "/webflow/about-us" }}
      />
    </WebflowFrame>
  )
}
