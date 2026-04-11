import type { Metadata } from "next"

import { contactDetails, contactFaqs, offices } from "@/lib/site-content"
import { buildPageMetadata } from "@/lib/page-metadata"
import { ContactForm } from "@/components/contact/ContactForm"
import { SiteFrame } from "@/components/site/SiteFrame"
import {
  FAQSection,
  OfficeCards,
  PageHero,
  Section,
  SectionHeading,
} from "@/components/site/sections"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Us",
  description:
    "Contact PlasmIT for hospital, investor, or general enquiries, with office details for Australia and India and a direct enquiry form.",
  path: "/contact-us",
})

export default function ContactUsPage() {
  return (
    <SiteFrame>
      <PageHero
        badge="Contact Us"
        title="A cleaner enquiry path for hospitals, investors, and strategic conversations."
        intro="The live site already routes enquiries by type. This rebuild gives the contact experience a clearer structure, stronger trust cues, and cleaner office information."
        primary={{ label: "Email PlasmIT", href: `mailto:${contactDetails.email}` }}
        secondary={{ label: "WhatsApp", href: contactDetails.whatsapp }}
        asideTitle="Contact posture"
        asideBody="This route should do one job well: make outreach easy while preserving confidence in the organisation behind the platform."
      />

      <Section tone="muted">
        <SectionHeading
          badge="Enquiry form"
          title="Start with the fastest relevant conversation."
          description="The same three enquiry types from the live site are preserved: investor, hospital, and general."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <ContactForm />
          <div className="grid gap-6">
            <Card className="border border-white/8 bg-slate-900/72 text-slate-50">
              <CardHeader>
                <Badge variant="outline" className="w-fit border-white/12 bg-white/4 text-slate-300">
                  Direct contact
                </Badge>
                <CardTitle className="text-2xl leading-tight font-medium tracking-[-0.03em] text-slate-50">
                  Reach the team without searching through the footer.
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm leading-7 text-slate-400">
                <p>{contactDetails.email}</p>
                <p>{contactDetails.phone}</p>
                <p>{contactDetails.australia}</p>
              </CardContent>
            </Card>
            <OfficeCards items={offices} />
          </div>
        </div>
      </Section>

      <FAQSection
        badge="Notes"
        title="Important details from the current live site."
        description="The crawl surfaced a few contact and address inconsistencies that should be resolved before launch."
        items={contactFaqs}
      />
    </SiteFrame>
  )
}
