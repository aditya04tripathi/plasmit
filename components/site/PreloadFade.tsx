"use client"

import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

export function PreloadFade() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const id = window.setTimeout(() => setMounted(true), 40)
    return () => window.clearTimeout(id)
  }, [])

  return (
    <div
      aria-hidden="true"
      className={cn("preload-overlay", mounted && "preload-overlay--off")}
    />
  )
}

