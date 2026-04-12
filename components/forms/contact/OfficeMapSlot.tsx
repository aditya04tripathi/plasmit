"use client"

import dynamic from "next/dynamic"

const OfficeMap = dynamic(
  () => import("./OfficeMap").then((m) => m.OfficeMap),
  { ssr: false }
)

export function OfficeMapSlot() {
  return <OfficeMap />
}

