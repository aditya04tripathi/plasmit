import type { ReactNode } from "react"

import { Navbar } from "@/components/site/Navbar"
import { SiteFooter } from "@/components/site/SiteFooter"

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
    <div className="dark min-h-dvh bg-background text-foreground">
      <Navbar revealAfterHero={revealNavAfterHero} />
      <main>{children}</main>
      <SiteFooter />
    </div>
  )
}
