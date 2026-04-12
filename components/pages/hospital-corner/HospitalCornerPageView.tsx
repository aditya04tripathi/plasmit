import { hospitalFeatures, hospitalMetrics, productTimeline } from "@/lib/site-content"
import { SiteFrame } from "@/components/marketing/SiteFrame"
import {
  CTASection,
  FeatureGrid,
  PageHero,
  SplitShowcase,
  TimelineSection,
} from "@/components/marketing/sections"

export function HospitalCornerPageView() {
  return (
    <SiteFrame>
      <PageHero
        badge="Hospital Corner"
        title="Save lives, improve efficiency, and lift brand reputation."
        intro="PiMed (QLMed) targets the same hospital benefit pillars as the investor pack: clinical outcomes, financial performance, utilisation, workforce conditions, and differentiated patient experience, with utilisation-based SaaS economics."
        primary={{ label: "Speak with PlasmIT", href: "/contact-us" }}
        secondary={{ label: "Explore PiMed", href: "/pimed" }}
        metrics={hospitalMetrics}
      />

      <FeatureGrid
        badge="Value drivers"
        title="Hospital outcomes the platform is built to support."
        description="ROI drivers in investor materials include fewer medical errors, better utilisation, shorter length of stay where appropriate, streamlined workflows, reduced waste, and proactive prevention, with ROI framed around roughly one year and a ~5× savings multiple for base features."
        items={hospitalFeatures}
      />

      <SplitShowcase
        badge="Decision logic"
        title="Operational gain meets strategic upside."
        leftTitle="Operational gain"
        leftBody="Digitised rounds, continuous vitals, and collaboration reduce cognitive load and manual coordination so specialists cover more patients safely."
        rightTitle="Strategic upside"
        rightBody="Stronger utilisation and brand, plus pathways for post-discharge continuity and extended care revenue when clinically appropriate."
      />

      <TimelineSection
        badge="Deployment story"
        title="From your existing devices to a mobile ICU command surface."
        description="Vendor-agnostic integration, edge devices, and a pilot-first deployment model designed to start small and scale with usage."
        steps={productTimeline}
      />

      <CTASection
        badge="Hospital enquiry"
        title="Pilot-first deployment, scaled with utilisation."
        description="Discuss bed-day pricing tiers, edge hardware line items, and a joint success plan for value realisation."
        primary={{ label: "Contact Hospital Team", href: "/contact-us" }}
        secondary={{ label: "View Investor Narrative", href: "/investor-corner" }}
      />
    </SiteFrame>
  )
}
