import type { Metadata } from "next"

import { platformFeatures, productTimeline } from "@/lib/site-content"
import { buildPageMetadata } from "@/lib/page-metadata"
import { WebflowFrame } from "@/components/webflow/WebflowFrame"
import {
  WebflowCTA,
  WebflowFeatures,
  WebflowHero,
  WebflowSplit,
  WebflowTimeline,
} from "@/components/webflow/sections"

export const metadata: Metadata = buildPageMetadata({
  title: "Webflow PiMed",
  description:
    "Webflow-inspired PiMed product page presenting the same connected-care platform narrative in an alternate lighter visual system.",
  path: "/webflow/pimed",
})

export default function WebflowPiMedPage() {
  return (
    <WebflowFrame>
      <WebflowHero
        badge="PiMed"
        title="A Webflow-style product page for a mobile-first connected care platform."
        intro="PiMed is still positioned as a connected, intelligent, integrated, secured digital care platform. This route simply frames that story in a brighter template language."
        primary={{ label: "Hospital Value", href: "/webflow/hospital-corner" }}
        secondary={{ label: "Contact Team", href: "/webflow/contact-us" }}
      />

      <WebflowFeatures
        badge="Capabilities"
        title="Core features translated into a lighter marketing pattern."
        description="The underlying content is unchanged from the live-site reconstruction. The presentation is the Webflow-specific variation."
        items={platformFeatures}
      />

      <WebflowTimeline
        badge="System flow"
        title="PiMed still reads best as a connected care loop."
        description="The product story is sequenced from connection to collaboration to care extension."
        steps={productTimeline}
      />

      <WebflowSplit
        badge="Platform thesis"
        title="Designed for clinical visibility and commercial credibility."
        leftTitle="Clinical value"
        leftBody="Live vitals, anomaly detection, collaboration, and pathways support faster decisions around patient state changes."
        rightTitle="Infrastructure value"
        rightBody="Interoperability, secure handling, device integration, and operational continuity are core to the platform story."
      />

      <WebflowCTA
        badge="Next step"
        title="Route product readers toward buyer or investor context."
        description="The product page sets up the system. The hospital and investor pages handle the two main commercial narratives."
        primary={{ label: "Hospital Corner", href: "/webflow/hospital-corner" }}
        secondary={{ label: "Investor Corner", href: "/webflow/investor-corner" }}
      />
    </WebflowFrame>
  )
}
