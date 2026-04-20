import {
  companyMission,
  companyVision,
  homePage,
  platformFeatures,
  productTimeline,
} from "@/lib/site-content"
import { PrimaryHeroGallery } from "@/components/marketing/PrimaryHeroGallery"
import { SiteFrame } from "@/components/marketing/SiteFrame"
import {
  FeatureBento,
  Section,
  TimelineSection,
} from "@/components/marketing/sections"

export function HomePageView() {
  return (
    <SiteFrame revealNavAfterHero>
      <PrimaryHeroGallery />

      <Section>
        <blockquote className="max-w-[min(100%,42rem)] border-l-[3px] border-primary py-1 ps-6 font-heading leading-snug font-medium tracking-[-0.02em] text-pretty text-foreground">
          {companyVision}
        </blockquote>
        <p className="mt-5 max-w-[65ch] text-pretty leading-body text-muted-foreground">
          {companyMission}
        </p>
      </Section>

      <Section tone="muted" density="compact">
        <h2 className="leading-snug font-medium tracking-[-0.025em] text-foreground">
          What is PiMed
        </h2>
        <div className="mt-3 max-w-[65ch] space-y-3 leading-body text-muted-foreground">
          {homePage.story.map((block) => (
            <p key={block.title}>
              <span className="font-medium text-foreground">
                {block.title}.
              </span>{" "}
              {block.body}
            </p>
          ))}
        </div>
      </Section>

      <FeatureBento
        badge="PiMed"
        title="PiMed key features"
        description="Integrated care delivery capabilities that enable real-time, collaborative, and compliant care."
        items={platformFeatures}
      />

      <TimelineSection
        badge="PiMed"
        title="How PiMed works"
        description="Patient care 24X7 through continuous monitoring, intelligent alerts, and compliant infrastructure."
        steps={productTimeline}
        density="compact"
      />
    </SiteFrame>
  )
}
