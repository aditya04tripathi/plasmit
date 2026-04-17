import { leadershipProfileSections } from "@/lib/site-content"
import { SiteFrame } from "@/components/marketing/SiteFrame"
import { PageHero } from "@/components/marketing/sections"
import { TeamSection } from "@/components/marketing/team/TeamSection"

export function LeadershipPageView() {
  return (
    <SiteFrame>
      <PageHero
        badge="Leadership"
        title="Leadership team shaping next-generation care delivery."
        intro="Our passionate team aspires to transform care delivery by enabling last-mile world class care through PiMed."
      />

      <TeamSection
        badge="Team"
        title="Leadership driving Smart ICU on Mobile."
        description="Technology, clinical, interoperability, data, and delivery leaders from healthcare and digital transformation backgrounds."
        sections={leadershipProfileSections}
      />
    </SiteFrame>
  )
}
