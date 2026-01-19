import AutoGraphIcon from "@mui/icons-material/AutoGraph"
import PsychologyIcon from "@mui/icons-material/Psychology"
import ConstructionIcon from "@mui/icons-material/Construction"
import StorageIcon from "@mui/icons-material/Storage"
import LanIcon from "@mui/icons-material/Lan"
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser"
import type { SvgIconComponent } from "@mui/icons-material"

export type ViewMode = "tech" | "consult"

interface HeroContent {
  headline: string
  subhead: string
  ctaPrimary: string
  ctaSecondary: string
}

interface FeatureItem {
  id: string
  title: string
  description: string
  icon: SvgIconComponent
}

interface ContentConfig {
  hero: HeroContent
  features: FeatureItem[]
}

export const CONTENT: Record<ViewMode, ContentConfig> = {
  // MODE A: TECHNOLOGY (SaaS & Custom Tools)
  tech: {
    hero: {
      headline: "Automate the Routine. Scale the Impact.",
      subhead:
        "We don't just write code; we install the 'Business Operating Systems' that survive African realities. From SaaS enablement to custom automation, we build the digital backbone your business needs.",
      ctaPrimary: "View Solutions",
      ctaSecondary: "Get a Tech Audit",
    },
    features: [
      {
        id: "t1",
        title: "SaaS Implementation",
        description:
          "Curated selection, installation, and team training for HR, Accounting, and CRM tools.",
        icon: StorageIcon,
      },
      {
        id: "t2",
        title: "Workflow Automation",
        description:
          "Connecting your disconnected systems to eliminate manual data entry and human error.",
        icon: LanIcon,
      },
      {
        id: "t3",
        title: "Custom Development",
        description:
          "Building proprietary tools when off-the-shelf software falls short of your unique needs.",
        icon: ConstructionIcon,
      },
    ],
  },

  // MODE B: CONSULTING (Strategy & Operations)
  consult: {
    hero: {
      headline: "From Chaotic Survival to Sustainable Scale.",
      subhead:
        "80% of SMEs fail due to broken operations. We combine strategy with execution to fix your financial health, operational maturity, and compliance gaps.",
      ctaPrimary: "Book a Consultation",
      ctaSecondary: "Our Methodology",
    },
    features: [
      {
        id: "c1",
        title: "Business Diagnostics",
        description:
          '2–4 week deep-dive into your cash flow, systems, and "Skill, Will, Opportunity" gaps.',
        icon: PsychologyIcon,
      },
      {
        id: "c2",
        title: "Process Architecture",
        description:
          "Structuring your org chart and SOPs so the business runs without you.",
        icon: AutoGraphIcon,
      },
      {
        id: "c3",
        title: "Risk & Compliance",
        description:
          "Navigating regulatory hurdles (CAC, FIRS) to secure your foundation.",
        icon: VerifiedUserIcon,
      },
    ],
  },
}
