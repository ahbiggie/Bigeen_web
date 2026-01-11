import BoltIcon from "@mui/icons-material/Bolt"
import GppGoodIcon from "@mui/icons-material/GppGood"
import AutoGraphIcon from "@mui/icons-material/AutoGraph"
import HandshakeIcon from "@mui/icons-material/Handshake"
import PsychologyIcon from "@mui/icons-material/Psychology"
import LightbulbIcon from "@mui/icons-material/Lightbulb"
import type { SvgIconComponent } from "@mui/icons-material"

// Define the shape of our content
export type ViewMode = "Software" | "General Consulting"

export interface HeroContent {
  headline: React.ReactNode
  subhead: string
  ctaPrimary: string
  ctaSecondary: string
}

export interface FeatureItem {
  id: string
  title: string
  description: string
  icon: SvgIconComponent
}

export const CONTENT = {
  dev: {
    hero: {
      headline: "Building the Future of Digital Solutions",
      subhead:
        "We craft robust, scalable, and high-performance web applications tailored to your business needs.",
      ctaPrimary: "View Projects",
      ctaSecondary: "Get a Quote",
    },
    features: [
      {
        id: "d1",
        title: "High Velocity",
        description: "Built on Vite for sub-second load times.",
        icon: BoltIcon,
      },
      {
        id: "d2",
        title: "Enterprise Grade",
        description: "Bank-level security standards baked into every endpoint.",
        icon: GppGoodIcon,
      },
      {
        id: "d3",
        title: "Data Visualization",
        description: "Turning raw metrics into actionable, animated insights.",
        icon: AutoGraphIcon,
      },
    ] as FeatureItem[],
  },
  consult: {
    hero: {
      headline: "Strategic Engineering for Complex Problems",
      subhead:
        "We don't just write code. We audit, architect, and optimize your digital infrastructure for scale.",
      ctaPrimary: "Book Consultation",
      ctaSecondary: "View Case Studies",
    },
    features: [
      {
        id: "c1",
        title: "Technical Audits",
        description:
          "Deep-dive analysis of your current stack to find bottlenecks.",
        icon: PsychologyIcon,
      },
      {
        id: "c2",
        title: "Architecture Design",
        description:
          "Blueprinting scalable systems before a single line of code is written.",
        icon: LightbulbIcon,
      },
      {
        id: "c3",
        title: "Team Augmentation",
        description:
          "Embedding senior engineering leadership into your existing squads.",
        icon: HandshakeIcon,
      },
    ] as FeatureItem[],
  },
}
