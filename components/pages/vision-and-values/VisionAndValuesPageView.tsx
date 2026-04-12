import { contactFaqs, values, visionMissionCards } from "@/lib/site-content"
import { SiteFrame } from "@/components/marketing/SiteFrame"
import {
  CTASection,
  FAQSection,
  PageHero,
  StoryGrid,
} from "@/components/marketing/sections"

export function VisionAndValuesPageView() {
  return (
    <SiteFrame>
      <PageHero
        badge="Vision & Values"
        title="The statements carried in investor materials, plus how we operate day to day."
        intro="Official vision and mission are quoted from the structured investor pack; the six values express how PlasmIT executes against that charter."
        primary={{ label: "Contact the Team", href: "/contact-us" }}
        secondary={{ label: "Back to About Us", href: "/about-us" }}
      />

      <StoryGrid
        badge="Charter"
        title="Vision and mission."
        description="Verbatim framing from the PlasmIT investor pack extraction."
        items={[...visionMissionCards]}
      />

      <StoryGrid
        badge="Six principles"
        title="Operating values for product and delivery."
        description="Practical principles that align teams around connected, contextual, compliant care."
        items={values}
      />

      <FAQSection
        badge="Clarity"
        title="Naming, contacts, and investor content."
        description="Quick answers tied to the current public site and data room narrative."
        items={contactFaqs}
      />

      <CTASection
        badge="Trust path"
        title="A strong value page should lead directly into leadership or contact."
        description="This route is now a clean philosophical layer in the site architecture rather than a generic text dump."
        primary={{ label: "Meet Leadership", href: "/leadership" }}
        secondary={{ label: "Send an Enquiry", href: "/contact-us" }}
      />
    </SiteFrame>
  )
}
