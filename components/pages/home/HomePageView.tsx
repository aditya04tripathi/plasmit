import {
  aboutHighlights,
  homePage,
  platformFeatures,
  productTimeline,
} from "@/lib/site-content"
import { PrimaryHeroGallery } from "@/components/marketing/PrimaryHeroGallery"
import { SiteFrame } from "@/components/marketing/SiteFrame"
import {
  CTASection,
  FeatureGrid,
  SplitShowcase,
  StoryGrid,
  TimelineSection,
} from "@/components/marketing/sections"

export function HomePageView() {
  return (
    <SiteFrame revealNavAfterHero>
      <PrimaryHeroGallery />

      <StoryGrid
        badge="PlasmIT"
        title="Who we are."
        description="Entity, focus, vision, mission, and founding credibility."
        items={aboutHighlights}
      />

      <StoryGrid
        badge="Problem"
        title="Why mobile ICU context matters."
        description="Off-rounds deterioration and remote specialists without live data."
        items={homePage.story}
      />

      <FeatureGrid
        badge="Flagship product"
        title="PiMed (QLMed): Smart ICU on Mobile™."
        description="Devices, pathways, and teams on one secured surface."
        items={platformFeatures}
      />

      <TimelineSection
        badge="PiMed"
        title="Edge to mobile."
        description="Ingestion, streaming, delivery, extension across care settings."
        steps={productTimeline}
      />

      <SplitShowcase
        badge="Stakeholders"
        title="Hospitals and investors."
        description="Operations versus capital: same company, different questions."
        leftTitle="For hospitals"
        leftLink="/hospital-corner"
        leftBody="Outcomes, efficiency, and brand through 24×7 connected monitoring and collaboration via PiMed deployment."
        rightTitle="For investors"
        rightLink="/investor-corner"
        rightBody="PlasmIT Pty Ltd seed narrative: traction, competitive positioning, financial model, and fund ask."
      />

      <CTASection
        badge="Next step"
        title="Talk with PlasmIT."
        description="Company, product, hospital deployment, or investment: route the conversation that fits you."
        primary={{ label: "About the company", href: "/about-us" }}
        secondary={{ label: "Contact", href: "/contact-us" }}
      />
    </SiteFrame>
  )
}
