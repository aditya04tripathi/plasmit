"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

export function RouteFocus() {
  const pathname = usePathname()

  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      const main = document.getElementById("main-content")
      if (!main) return
      const h1 = main.querySelector("h1")
      if (h1 instanceof HTMLElement) {
        h1.tabIndex = -1
        h1.focus({ preventScroll: true })
        return
      }
      main.focus({ preventScroll: true })
    })
    return () => window.cancelAnimationFrame(id)
  }, [pathname])

  return null
}
