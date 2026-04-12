import type { Metadata } from "next"

import { buildPageMetadata } from "@/lib/page-metadata"
import { HomePageView } from "@/components/pages/home/HomePageView"

export const metadata: Metadata = buildPageMetadata({
  title: "PlasmIT: critical care health technology",
  description:
    "PlasmIT Pty Ltd builds connected critical care infrastructure. Flagship product PiMed (QLMed), Smart ICU on Mobile™, for hospitals; Australia-headquartered, India-first GTM.",
  path: "/",
})

export default function Page() {
  return <HomePageView />
}
