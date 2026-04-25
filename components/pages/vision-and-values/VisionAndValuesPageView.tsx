import { values, visionMissionCards } from "@/lib/site-content"
import { SiteFrame } from "@/components/marketing/SiteFrame"
import { PageHero, StoryGrid } from "@/components/marketing/sections"

export function VisionAndValuesPageView() {
  return (
    <SiteFrame>
      <PageHero
        badge="Vision & Values"
        title="About PlasmIT: vision, mission, and values"
        intro="PlasmIT is an Australia-based health-tech company founded by healthcare visionaries and technology leaders, with a strategic presence in India and deep interoperability expertise including FHIR."
      />

      <StoryGrid
        badge="Charter"
        title="Our vision and mission"
        description="The foundational statements that guide our product and care-delivery direction."
        items={[...visionMissionCards]}
      />

      <StoryGrid
        badge="Our values"
        title="Values in practice"
        description="Innovation, integrity, compassion, and 6C-inspired principles that guide how we build and deliver PiMed."
        items={values}
      />
    </SiteFrame>
  )
}
