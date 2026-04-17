import { contactDetails, offices } from "@/lib/site-content"
import { ContactForm } from "@/components/forms/contact/ContactForm"
import { SiteFrame } from "@/components/marketing/SiteFrame"
import {
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
        title="Contact Us"
        intro="Connect with PlasmIT for hospital, investor, and strategic enquiries."
        primary={{
          label: "Email PlasmIT",
          href: `mailto:${contactDetails.email}`,
        }}
        secondary={{ label: "WhatsApp", href: contactDetails.whatsapp }}
      />

      <Section tone="muted">
        <SectionHeading
          badge="Enquiry form"
          title="Share your enquiry"
          description="Provide your details and enquiry type so we can route you to the right team."
        />
        <div className="mt-5 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <ContactForm />
          <div className="grid gap-5">
            <ContactDirectCard />
            <OfficeCards items={offices} />
          </div>
        </div>
      </Section>
    </SiteFrame>
  )
}
