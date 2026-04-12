import {
  platformFeatures,
  productRoadmapPhases,
  productTimeline,
} from "@/lib/site-content"
import { SiteFrame } from "@/components/marketing/SiteFrame"
import {
  CTASection,
  FeatureGrid,
  PageHero,
  SplitShowcase,
  TimelineSection,
} from "@/components/marketing/sections"

export function PiMedPageView() {
  return (
    <SiteFrame>
      <PageHero
        badge="PlasmIT flagship product"
        title="PiMed (QLMed): Smart ICU on Mobile™."
        intro="PiMed is PlasmIT’s intelligent integrated care delivery ecosystem for hospitals: point-in-time ICU care via mobile devices, with continuous monitoring, connected collaboration, and a compliant fault-tolerant core."
        primary={{ label: "See Hospital Value", href: "/hospital-corner" }}
        secondary={{ label: "Contact Product Team", href: "/contact-us" }}
      />

      <FeatureGrid
        badge="Capability set"
        title="Key features from the investor materials."
        description="From full mobile ICU dashboards to Gen AI–enabled triage and predictive intelligence loops."
        items={platformFeatures}
      />

      <TimelineSection
        badge="Architecture flow"
        title="Edge ingestion through to clinician delivery."
        description="Medical devices to AI-enabled edge, secured transit and cloud processing, then mobile care delivery with AI/ML extensions."
        steps={productTimeline}
      />

      <TimelineSection
        badge="Product phases"
        title="Life, Elixir, and Nirvana."
        description="Roadmap phases as named in the investor pack: deepening critical care scope and intelligence over five years."
        steps={productRoadmapPhases}
      />

      <SplitShowcase
        badge="Product thesis"
        title="Speed to intervention with enterprise-grade resilience."
        leftTitle="Clinical layer"
        leftBody="Continuous streaming, intelligent alerts, AI-driven pathways, and instant collaboration including remote intensivist support."
        rightTitle="Infrastructure layer"
        rightBody="Secured, highly available, interoperable capture, transfer, storage, and display aligned with hospital compliance expectations."
      />

      <CTASection
        badge="Commercial next step"
        title="Ready to transform your care delivery?"
        description="Explore the hospital business case or connect with our product team to discuss deployment."
        primary={{ label: "Go to Hospital Corner", href: "/hospital-corner" }}
        secondary={{ label: "Investor Corner", href: "/investor-corner" }}
      />
    </SiteFrame>
  )
}
