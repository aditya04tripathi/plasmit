import type { ReactNode } from "react"

import { Navbar } from "@/components/marketing/Navbar"
import { SiteFooter } from "@/components/marketing/SiteFooter"

export function SiteFrame({
  children,
  revealNavAfterHero = false,
}: {
  children: ReactNode
  revealNavAfterHero?: boolean
}) {
  return (
    <div className="min-h-dvh overflow-x-clip bg-background text-foreground">
      <Navbar revealAfterHero={revealNavAfterHero} />
      <main
        id="main-content"
        tabIndex={-1}
        className="outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        {children}
      </main>
      <SiteFooter />
    </div>
  )
}
