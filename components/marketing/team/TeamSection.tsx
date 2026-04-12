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
      <div className="mt-6 space-y-8">
        {sections.map((section) => (
          <div key={section.title}>
            <h3 className="mb-4 text-xl leading-tight font-medium tracking-[-0.03em] text-foreground">
              {section.title}
            </h3>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
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
