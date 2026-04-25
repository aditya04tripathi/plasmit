import type { Metadata } from "next"

import { buildPageMetadata } from "@/lib/page-metadata"
import { HomePageView } from "@/components/pages/home/HomePageView"

export const metadata: Metadata = buildPageMetadata({
  title: "PlasmIT: critical care health technology",
  description:
    "PlasmIT Pty Ltd is an AI-first critical-care health-tech company. PiMed (QLMed), Smart ICU on Mobile™, enables continuous connected care with Australia HQ and strategic India presence.",
  path: "/",
  keywords: [
    "AI critical care",
    "Smart ICU on mobile",
    "digital health transformation",
  ],
})

export default function Page() {
  return <HomePageView />
}
