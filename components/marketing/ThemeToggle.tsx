"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { Sun, Moon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const reduceMotion = useReducedMotion()

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <span
        className="inline-block h-7 w-12 shrink-0 rounded-full bg-muted"
        aria-hidden
      />
    )
  }

  const isLight = theme === "light"
  const label = isLight ? "Switch to dark mode" : "Switch to light mode"

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      className={cn(
        "relative h-7 w-12 overflow-hidden rounded-full transition-colors duration-300",
        isLight ? "border-border bg-muted" : "border-border bg-secondary"
      )}
      aria-label={label}
      aria-pressed={!isLight}
      onClick={() => setTheme(isLight ? "dark" : "light")}
    >
      <div className="relative flex h-full w-full items-center justify-center">
        {reduceMotion ? (
          <span className="relative z-10 flex w-full items-center justify-center">
            {isLight ? (
              <Moon className="h-3.5 w-3.5 text-muted-foreground" aria-hidden />
            ) : (
              <Sun className="h-3.5 w-3.5 text-chart-3" aria-hidden />
            )}
          </span>
        ) : (
          <>
            <motion.div
              className="absolute h-5 w-5 rounded-full bg-card shadow-sm dark:bg-background"
              animate={{ x: isLight ? 12 : -12 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              aria-hidden
            />
            <div className="relative z-10 flex w-full justify-between px-1">
              <div className="flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {!isLight ? (
                    <motion.div
                      key="sun"
                      initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun className="h-3.5 w-3.5 text-chart-3" aria-hidden />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ opacity: 0, scale: 0.5, rotate: 45 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 0.5, rotate: -45 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon
                        className="h-3.5 w-3.5 text-muted-foreground"
                        aria-hidden
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </>
        )}
      </div>
    </Button>
  )
}
