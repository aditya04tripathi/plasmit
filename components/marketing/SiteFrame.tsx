import type { ReactNode } from "react"

import { Navbar } from "@/components/marketing/Navbar"
import { SiteFooter } from "@/components/marketing/SiteFooter"

export function SiteFrame({
  children,
  hideTopBar = false,
  revealNavAfterHero = false,
}: {
  children: ReactNode
  hideTopBar?: boolean
  revealNavAfterHero?: boolean
}) {
  return (
    <div className="min-h-dvh overflow-x-clip bg-background text-foreground">
      <Navbar revealAfterHero={revealNavAfterHero} />
      <main>{children}</main>
      <SiteFooter />
    </div>
  )
}
