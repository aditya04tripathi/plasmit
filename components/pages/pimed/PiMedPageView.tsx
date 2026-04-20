import { platformFeatures, productTimeline } from "@/lib/site-content"
import { SiteFrame } from "@/components/marketing/SiteFrame"
import {
  FeatureBento,
  PageHero,
  TimelineSection,
} from "@/components/marketing/sections"

export function PiMedPageView() {
  return (
    <SiteFrame>
      <PageHero
        badge="PiMed"
        title="SmartICU on Mobile"
        intro="PiMed is a next-generation connected, intelligent, integrated, immersive, secured and compliant digital care platform for hospitals."
      />

      <FeatureBento
        badge="PiMed"
        title="PiMed key features"
        description="Integrated capabilities designed for continuous, collaborative, and compliant care delivery."
        items={platformFeatures}
      />

      <TimelineSection
        badge="Patient care 24X7"
        title="How PiMed works"
        description="From continuous monitoring to compliant data operations, PiMed keeps care teams informed in real time."
        steps={productTimeline}
      />
    </SiteFrame>
  )
}
