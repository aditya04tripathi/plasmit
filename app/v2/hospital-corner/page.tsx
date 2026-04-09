import type { Metadata } from "next"

import { hospitalFeatures, hospitalMetrics, productTimeline } from "@/lib/site-content"
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
  title: "Webflow Hospital Corner",
  description:
    "Webflow-inspired hospital buyer page for PiMed, covering ICU claims, operational benefits, and the hospital commercial case.",
  path: "/webflow/hospital-corner",
})

export default function WebflowHospitalCornerPage() {
  return (
    <WebflowFrame>
      <WebflowHero
        badge="Hospital Corner"
        title="A polished hospital business-case page rebuilt in a Webflow-inspired system."
        intro="The strongest commercial content from the live PlasmIT site remains on the hospital page. This route recasts it in a cleaner buyer-facing format."
        metrics={hospitalMetrics}
        primary={{ label: "Speak with PlasmIT", href: "/webflow/contact-us" }}
        secondary={{ label: "PiMed Product Page", href: "/webflow/pimed" }}
      />

      <WebflowFeatures
        badge="Value drivers"
        title="Hospital value goes beyond remote visibility alone."
        description="Operations, staff experience, continuity, and new revenue are treated as one connected decision frame."
        items={hospitalFeatures}
      />

      <WebflowSplit
        badge="Buyer framing"
        title="A better hospital page sequences operational and strategic upside separately."
        leftTitle="Operational upside"
        leftBody="The site frames PiMed as a way to reduce wasted coordination, improve utilisation, and widen specialist reach across the care environment."
        rightTitle="Strategic upside"
        rightBody="The same narrative points to post-discharge care, patient loyalty, and hospital-to-hospital services as longer-term commercial expansion paths."
      />

      <WebflowTimeline
        badge="Adoption story"
        title="Hospitals need a credible path from device integration to care transformation."
        description="This sequence keeps the technical and operational story readable for non-technical healthcare decision-makers."
        steps={productTimeline}
      />

      <WebflowCTA
        badge="Conversion path"
        title="This route is the hospital-facing conversion page in the Webflow tree."
        description="It mirrors the strongest commercial page from the main rebuild with a distinct visual system."
        primary={{ label: "Hospital Enquiry", href: "/webflow/contact-us" }}
        secondary={{ label: "Investor Corner", href: "/webflow/investor-corner" }}
      />
    </WebflowFrame>
  )
}
