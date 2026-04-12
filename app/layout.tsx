import type { Metadata } from "next"
import { Lora, Bricolage_Grotesque } from "next/font/google"

import { siteMeta } from "@/lib/site-content"
import { cn } from "@/lib/utils"

import { RouteFocus } from "@/components/marketing/RouteFocus"
import { ThemeProvider } from "@/components/providers/theme-provider"

import "./globals.css"
import { sharedKeywords } from "@/lib/page-metadata"

const sans = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

const display = Lora({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
  display: "swap",
})

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteMeta.url),
  title: {
    default: `${siteMeta.name} | Smart ICU on Mobile™`,
    template: `%s | ${siteMeta.name}`,
  },
  description:
    "PlasmIT's PiMed platform delivers Smart ICU on Mobile™ — an AI-powered, device-agnostic critical care platform enabling 24×7 real-time ICU monitoring and remote intervention for hospitals.",
  applicationName: "PiMed — Smart ICU on Mobile",
  authors: [{ name: "Awadhesh Kumar", url: siteMeta.url }],
  creator: "PlasmIT Pty Ltd",
  publisher: "PlasmIT Pty Ltd",
  keywords: sharedKeywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteMeta.url,
    siteName: siteMeta.name,
    title: `${siteMeta.name} | Smart ICU on Mobile™`,
    description:
      "AI-powered, device-agnostic Smart ICU on Mobile™ platform for hospitals. Real-time ICU monitoring, 24×7 remote care intervention, and AI-driven clinical pathways — built for India, scaling globally.",
    locale: "en_AU",
    images: [
      {
        url: "/media/og-image.png",
        width: 1200,
        height: 630,
        alt: `${siteMeta.name} — Smart ICU on Mobile™`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: siteMeta.twitterHandle,
    creator: siteMeta.twitterHandle,
    title: `${siteMeta.name} | Smart ICU on Mobile™`,
    description:
      "AI-powered, device-agnostic Smart ICU on Mobile™ platform for hospitals. Real-time ICU monitoring, 24×7 remote care intervention, and AI-driven clinical pathways.",
    images: ["/media/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  category: "Healthcare Technology",
  classification: "Health-tech / Critical Care / Hospital SaaS",
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
            className="fixed top-0 left-4 z-[100] -translate-y-full bg-primary px-4 py-2 font-medium text-primary-foreground transition-transform focus:translate-y-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Skip to content
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
