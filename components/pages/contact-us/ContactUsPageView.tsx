import { contactDetails, contactFaqs, officeMapLocations, offices } from "@/lib/site-content"
import { ContactForm } from "@/components/forms/contact/ContactForm"
import { ContactOfficeMapSlot } from "@/components/forms/contact/ContactOfficeMapSlot"
import { SiteFrame } from "@/components/marketing/SiteFrame"
import {
  FAQSection,
  OfficeCards,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/marketing/sections"
import { ContactDirectCard } from "@/components/pages/contact-us/ContactDirectCard"

export function ContactUsPageView() {
  return (
    <SiteFrame>
      <PageHero
        badge="Contact Us"
        title="Start a conversation with PlasmIT."
        intro="Whether you are representing a hospital, an investment group, or a strategic partner, we are ready to connect."
        primary={{ label: "Email PlasmIT", href: `mailto:${contactDetails.email}` }}
        secondary={{ label: "WhatsApp", href: contactDetails.whatsapp }}
      />

      <Section tone="muted">
        <SectionHeading
          badge="Enquiry form"
          title="The fastest way to connect."
          description="Please provide your details and the nature of your enquiry so we can route you to the right expert."
        />
        <div className="mt-6 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <ContactForm />
          <div className="grid gap-6">
            <ContactDirectCard />
            <OfficeCards items={offices} />
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          badge="Location"
          title="Find us in Melbourne."
          description="Map tiles and data from OpenStreetMap contributors. Open the marker for the full address."
        />
        <div className="mt-6 overflow-hidden border border-foreground/8 bg-card shadow-marketing-md">
          <ContactOfficeMapSlot locations={officeMapLocations} />
        </div>
      </Section>

      <FAQSection
        badge="Support"
        title="Common enquiries."
        description="Quick answers to help you get started with PlasmIT."
        items={contactFaqs}
      />
    </SiteFrame>
  )
}
