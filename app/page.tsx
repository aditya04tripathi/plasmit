import type { Metadata } from "next"

import { buildPageMetadata } from "@/lib/page-metadata"
import { HomePageView } from "@/components/pages/home/HomePageView"

export const metadata: Metadata = buildPageMetadata({
  title: "Connected Critical Care",
  description:
    "PlasmIT homepage introducing PiMed, the shift from physical rounds to continuous connected care, and the core paths for hospitals and investors.",
  path: "/",
})

export default function Page() {
  return <HomePageView />
}
