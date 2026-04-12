import type { LucideIcon } from "lucide-react"
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Cpu,
  Globe2,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Waypoints,
  Workflow,
} from "lucide-react"

import type { FeatureCard } from "@/lib/site-content"

export const featureGridIcons = {
  activity: Activity,
  "heart-pulse": HeartPulse,
  sparkles: Sparkles,
  workflow: Workflow,
  waypoints: Waypoints,
  "shield-check": ShieldCheck,
  building: Building2,
  stethoscope: Stethoscope,
  briefcase: BriefcaseBusiness,
  globe: Globe2,
  "badge-check": BadgeCheck,
  "arrow-right": ArrowRight,
  cpu: Cpu,
} satisfies Record<FeatureCard["icon"], LucideIcon>
