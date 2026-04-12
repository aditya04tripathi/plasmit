import type { LeadershipProfileSection } from "@/lib/site-content"
import { Section } from "@/components/marketing/sections/Section"
import { SectionHeading } from "@/components/marketing/sections/SectionHeading"
import { ProfileCard } from "@/components/marketing/team/ProfileCard"

export function TeamSection({
  badge,
  title,
  description,
  sections,
}: {
  badge?: string
  title: string
  description?: string
  sections: LeadershipProfileSection[]
}) {
  return (
    <Section>
      <SectionHeading badge={badge} title={title} description={description} />
      <div className="mt-5 space-y-6">
        {sections.map((section) => (
          <div key={section.title}>
            <h3 className="mb-3 font-semibold tracking-[0.28em] text-muted-foreground uppercase">
              {section.title}
            </h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {section.profiles.map((profile) => (
                <ProfileCard key={profile.name} profile={profile} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
