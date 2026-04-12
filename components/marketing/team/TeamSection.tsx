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
      <div className="mt-10 space-y-12">
        {sections.map((section) => (
          <div key={section.title}>
            <h3 className="mb-6 text-xl leading-tight font-medium tracking-[-0.03em] text-foreground">
              {section.title}
            </h3>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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
