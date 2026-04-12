import type { Metadata } from "next"

import { buildPageMetadata } from "@/lib/page-metadata"
import { PiMedPageView } from "@/components/pages/pimed/PiMedPageView"

export const metadata: Metadata = buildPageMetadata({
  title: "PiMed: PlasmIT flagship product",
  description:
    "PiMed (QLMed), Smart ICU on Mobile™ by PlasmIT Pty Ltd: product definition, features, edge-to-cloud architecture, and Life / Elixir / Nirvana roadmap phases.",
  path: "/pimed",
})

export default function PiMedPage() {
  return <PiMedPageView />
}
