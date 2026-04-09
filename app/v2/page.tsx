import type { Metadata } from "next"

import {
  aboutHighlights,
  homePage,
  platformFeatures,
  productTimeline,
} from "@/lib/site-content"
import { buildPageMetadata } from "@/lib/page-metadata"
import { WebflowHeroScroll } from "@/components/webflow/WebflowHeroScroll"
import { WebflowFrame } from "@/components/webflow/WebflowFrame"
import {
  WebflowCTA,
  WebflowFeatures,
  WebflowSplit,
  WebflowStory,
  WebflowTimeline,
} from "@/components/webflow/sections"

export const metadata: Metadata = buildPageMetadata({
  title: "Webflow Homepage",
  description:
    "Alternate Webflow-inspired homepage for PlasmIT, using the same PiMed content model with a lighter storytelling presentation.",
  path: "/webflow",
})

export default function WebflowPage() {
  return (
    <WebflowFrame>
      <WebflowHeroScroll />

      <WebflowStory
        badge="Narrative shift"
        title="The site still centers on the move from physical rounds to continuous connected rounds."
        description="This version keeps the same core thesis but presents it through a lighter editorial marketing structure inspired by Webflow templates."
        items={homePage.story}
      />

      <WebflowFeatures
        badge="Platform capability"
        title="The same PiMed capability model, presented in a more Webflow-style product grid."
        description="These cards preserve the live-site product narrative while shifting to a lighter, more polished visual system."
        items={platformFeatures}
      />

      <WebflowTimeline
        badge="How it works"
        title="A cleaner product flow from device connection to intervention."
        description="This keeps the hospital and product logic readable in a single scroll."
        steps={productTimeline}
      />

      <WebflowSplit
        badge="Commercial framing"
        title="The homepage still routes into two decision lanes."
        description="Hospitals and investors evaluate the same system differently, so the homepage needs to set both paths up clearly."
        leftTitle="Hospital path"
        leftBody="For hospital buyers, PiMed is framed around workflow efficiency, better intervention timing, and long-term operating leverage."
        rightTitle="Investor path"
        rightBody="For investors, the same platform is presented as commercializing infrastructure for a visible, under-digitized care environment."
      />

      <WebflowStory
        badge="Company context"
        title="A stronger homepage also makes room for why the company exists."
        description="These foundational company notes come from the live site and supporting crawl."
        items={aboutHighlights}
      />

      <WebflowCTA
        badge="Next step"
        title="Use the Webflow route as a fully rebuilt alternate marketing site."
        description="Every major page from the current PlasmIT site has been mirrored under `/webflow`."
        primary={{ label: "Hospital Corner", href: "/webflow/hospital-corner" }}
        secondary={{ label: "Contact PlasmIT", href: "/webflow/contact-us" }}
      />
    </WebflowFrame>
  )
}
