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
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <ContactForm />
          <div className="grid gap-6">
            <Card className="border border-white/8 bg-slate-900/72 text-slate-50">
              <CardHeader>
                <Badge variant="outline" className="w-fit border-white/12 bg-white/4 text-slate-300">
                  Direct contact
                </Badge>
                <CardTitle className="text-2xl leading-tight font-medium tracking-[-0.03em] text-slate-50">
                  Reach our team directly.
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
        badge="Support"
        title="Common enquiries."
        description="Quick answers to help you get started with PlasmIT."
        items={contactFaqs}
      />
    </SiteFrame>
  )
}
