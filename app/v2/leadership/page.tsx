import type { Metadata } from "next"

import { leadershipProfiles } from "@/lib/site-content"
import { buildPageMetadata } from "@/lib/page-metadata"
import {
  WebflowCTA,
  WebflowHero,
  WebflowLeadership,
  WebflowSplit,
} from "@/components/webflow/sections"
import { WebflowFrame } from "@/components/webflow/WebflowFrame"

export const metadata: Metadata = buildPageMetadata({
  title: "Webflow Leadership",
  description:
    "Webflow-inspired leadership page showcasing the PlasmIT executive and advisory team across clinical, data, product, and interoperability roles.",
  path: "/webflow/leadership",
})

export default function WebflowLeadershipPage() {
  return (
    <WebflowFrame>
      <WebflowHero
        badge="Leadership"
        title="The same credential-rich team, rebuilt in the Webflow route."
        intro="This page preserves the reconstructed leadership roster from the live PlasmIT site while presenting it in a brighter editorial layout."
        primary={{ label: "Contact the Team", href: "/webflow/contact-us" }}
        secondary={{ label: "About Us", href: "/webflow/about-us" }}
      />

      <WebflowLeadership
        badge="Team"
        title="Clinical, data, interoperability, research, and delivery leadership in one grid."
        description="The underlying profile summaries are unchanged from the main rebuild."
        profiles={leadershipProfiles}
      />

      <WebflowSplit
        badge="Why it matters"
        title="Leadership is part of the product trust signal."
        leftTitle="Hospital trust"
        leftBody="Hospital buyers need evidence that the company understands real clinical environments, interoperability constraints, and care-team realities."
        rightTitle="Investor trust"
        rightBody="Investors need to see a leadership bench capable of navigating commercialization in a complex health-tech category."
      />

      <WebflowCTA
        badge="Next step"
        title="Leadership pages should lead directly to enquiry."
        description="This route mirrors the same purpose as the main rebuild with a different visual template."
        primary={{ label: "Contact PlasmIT", href: "/webflow/contact-us" }}
        secondary={{
          label: "Investor Corner",
          href: "/webflow/investor-corner",
        }}
      />
    </WebflowFrame>
  )
}
