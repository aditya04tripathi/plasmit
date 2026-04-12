import type { Metadata } from "next"
import { Manrope, Newsreader } from "next/font/google"

import { siteMeta } from "@/lib/site-content"
import { cn } from "@/lib/utils"

import { RouteFocus } from "@/components/marketing/RouteFocus"
import { ThemeProvider } from "@/components/providers/theme-provider"

import "./globals.css"

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

const display = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-display",
  display: "swap",
})

export const metadata: Metadata = {
  title: siteMeta.name,
  description: siteMeta.description,
  metadataBase: new URL("https://www.plasmitvector.com"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          sans.variable,
          display.variable,
          "min-h-dvh bg-background font-sans text-foreground antialiased"
        )}
      >
        <ThemeProvider>
          <RouteFocus />
          <a
            href="#main-content"
            className="bg-primary text-primary-foreground fixed top-0 left-4 z-[100] -translate-y-full px-4 py-2 text-sm font-medium transition-transform focus:translate-y-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Skip to content
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
