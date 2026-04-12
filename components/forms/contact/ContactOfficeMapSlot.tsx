"use client"

import dynamic from "next/dynamic"

import type { OfficeMapLocation } from "@/components/forms/contact/OfficeMap"

const OfficeMapClient = dynamic(
  () =>
    import("@/components/forms/contact/OfficeMap").then((m) => ({
      default: m.OfficeMap,
    })),
  {
    ssr: false,
    loading: () => (
      <div
        className="flex h-[min(50vh,420px)] min-h-[280px] w-full items-center justify-center border border-foreground/8 bg-muted text-sm text-muted-foreground"
        role="status"
        aria-live="polite"
      >
        Loading map…
      </div>
    ),
  }
)

export function ContactOfficeMapSlot({
  locations,
}: {
  locations: readonly OfficeMapLocation[]
}) {
  return <OfficeMapClient locations={locations} />
}
