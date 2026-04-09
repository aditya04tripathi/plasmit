import type { Metadata } from "next"

import { contactDetails, contactFaqs, offices } from "@/lib/site-content"
import { buildPageMetadata } from "@/lib/page-metadata"
import { ContactForm } from "@/components/contact/ContactForm"
import { WebflowFrame } from "@/components/webflow/WebflowFrame"
import {
  WebflowFAQ,
  WebflowHero,
  WebflowOfficeCards,
  WebflowSection,
  WebflowSectionHeading,
} from "@/components/webflow/sections"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = buildPageMetadata({
  title: "Webflow Contact Us",
  description:
    "Webflow-inspired contact page for PlasmIT with investor, hospital, and general enquiry paths plus office details and direct contact info.",
  path: "/webflow/contact-us",
})

export default function WebflowContactUsPage() {
  return (
    <WebflowFrame>
      <WebflowHero
        badge="Contact"
        title="A Webflow-style contact page for hospital, investor, and partner enquiries."
        intro="This route preserves the same PlasmIT contact model while giving it a lighter, more polished information hierarchy."
        primary={{ label: "Email PlasmIT", href: `mailto:${contactDetails.email}` }}
        secondary={{ label: "WhatsApp", href: contactDetails.whatsapp }}
      />

      <WebflowSection tone="soft">
        <WebflowSectionHeading
          badge="Contact form"
          title="Route the conversation to the right team."
          description="The underlying enquiry logic stays the same: investor, hospital, and other."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <ContactForm variant="light" />
          <div className="grid gap-6">
            <Card className="rounded-none border border-sky-950/10 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.05)]">
              <CardHeader>
                <Badge variant="outline" className="w-fit border-sky-200 bg-sky-50 text-sky-700">
                  Direct contact
                </Badge>
                <CardTitle className="text-2xl leading-tight font-medium tracking-[-0.03em] text-slate-950">
                  Reach PlasmIT directly.
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm leading-7 text-slate-600">
                <p>{contactDetails.email}</p>
                <p>{contactDetails.phone}</p>
                <p>{contactDetails.australia}</p>
              </CardContent>
            </Card>
            <WebflowOfficeCards items={offices} />
          </div>
        </div>
      </WebflowSection>

      <WebflowFAQ
        badge="Notes"
        title="Address and source clarity carried over from the crawl."
        description="The same contact caveats remain true in the Webflow route."
        items={contactFaqs}
      />
    </WebflowFrame>
  )
}
