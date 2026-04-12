import type { Metadata } from "next"

import { buildPageMetadata } from "@/lib/page-metadata"
import { ContactUsPageView } from "@/components/pages/contact-us/ContactUsPageView"

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Us",
  description:
    "Contact PlasmIT for hospital, investor, or general enquiries, with office details for Australia and India and a direct enquiry form.",
  path: "/contact-us",
})

export default function ContactUsPage() {
  return <ContactUsPageView />
}
