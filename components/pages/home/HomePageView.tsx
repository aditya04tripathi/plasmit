import Link from "next/link"

import {
  companyMission,
  companyVision,
  homePage,
  platformFeatures,
  productTimeline,
} from "@/lib/site-content"
import { PrimaryHeroGallery } from "@/components/marketing/PrimaryHeroGallery"
import { SiteFrame } from "@/components/marketing/SiteFrame"
import { Button } from "@/components/ui/button"
import {
  CTASection,
  FeatureGrid,
  Section,
  SplitShowcase,
  TimelineSection,
} from "@/components/marketing/sections"

export function HomePageView() {
  return (
    <SiteFrame revealNavAfterHero>
      <PrimaryHeroGallery />

      <Section density="airy">
        <blockquote className="max-w-[min(100%,42rem)] border-l-[3px] border-primary py-1 ps-6 font-(family-name:--font-display) text-[clamp(1.25rem,4vw,1.65rem)] leading-snug font-medium tracking-[-0.02em] text-pretty text-foreground">
          {companyVision}
        </blockquote>
        <p className="mt-6 max-w-prose text-base leading-7 text-pretty text-muted-foreground">
          {companyMission}
        </p>
        <div className="mt-8">
          <Button
            asChild
            variant="outline"
            className="min-h-11 border-border bg-muted/30 text-foreground hover:bg-muted/50 active:bg-muted/40"
          >
            <Link href="/about-us">About PlasmIT</Link>
          </Button>
        </div>
      </Section>

      <Section tone="muted" density="compact">
        <h1 className="text-xl leading-tight font-medium tracking-[-0.05em] text-foreground">
          Why mobile context matters
        </h1>
        <div className="mt-4 max-w-[65ch] space-y-4 text-base leading-7 text-muted-foreground">
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
        density="compact"
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
        description="Product walkthrough, hospital deployment, or investment: pick the path that fits you."
        primary={{ label: "Explore PiMed", href: "/pimed" }}
        secondary={{ label: "Contact", href: "/contact-us" }}
      />
    </SiteFrame>
  )
}
