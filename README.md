# Bigeen Solutions Website

A modern, glassmorphism-styled corporate website built with React 19, TypeScript, and Vite. Features a dual-mode strategy showcasing both **Software Development** and **Consulting** services.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript)
![MUI](https://img.shields.io/badge/MUI-7.3.7-007FFF?logo=mui)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite)

## Features

- **Dual-Mode UI**: Toggle between Software Development and Consulting views with context-aware content
- **Glassmorphism Design**: Modern semi-transparent surfaces with backdrop blur effects
- **Framer Motion Animations**: Physics-based animations including floating blobs, staggered entrances, and hover effects
- **Responsive Layout**: Mobile-first design with MUI Grid v2 syntax
- **Form Integration**: Contact form with validation and Formspree backend
- **State Management**: Zustand for global state (app mode, contact form, navigation)

## 🛠️ Tech Stack

| Category     | Technology            |
| ------------ | --------------------- |
| Framework    | React 19 + TypeScript |
| Build Tool   | Vite 7                |
| UI Library   | Material UI 7         |
| Animations   | Framer Motion 12      |
| Routing      | React Router DOM 7    |
| State        | Zustand 5             |
| Form Backend | Formspree             |

## Project Structure

```
src/
├── assets/images/          # Static images (logo, team, projects)
├── components/
│   ├── contact/            # ContactForm with validation
│   ├── home/               # ModeSwitch toggle component
│   ├── ui/                 # Reusable cards (Feature, Stat, Team, Project)
│   ├── Footer.tsx          # 3-column footer layout
│   └── Navbar.tsx          # Glassmorphic sticky navigation
├── data/
│   └── content.ts          # Centralized content for dual-mode strategy
├── layout/
│   └── MainLayout.tsx      # App shell with Navbar + Footer
├── pages/
│   ├── HomePage.tsx        # Hero, Features, CTA sections
│   ├── AboutPage.tsx       # Mission, Stats, Team sections
│   ├── RoadmapPage.tsx     # Portfolio grid + Timeline
│   └── ContactPage.tsx     # Contact info + Form
├── store/
│   └── useBigeenStore.ts   # Zustand store (appMode, contactForm)
├── theme/
│   └── theme.ts            # MUI theme + glassStyles + gradients
└── types/
    └── index.ts            # Shared TypeScript interfaces
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/bigeen-web.git
cd bigeen-web

# Install dependencies
npm install

# Create environment file
cp .env.example .env
# Edit .env with your Formspree endpoint
```

### Environment Variables

Create a `.env` file in the project root:

```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

### Development

```bash
# Start dev server with HMR
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## Design System

### Glass Styles

```typescript
glassStyles.light // Subtle transparency for cards
glassStyles.medium // Form containers
glassStyles.dark // Dark mode overlays
glassStyles.navbar // Sticky navigation
glassStyles.accent // Highlighted elements
```

### Gradients

```typescript
gradients.primary // #667eea → #764ba2
gradients.accent // #7C3AED → #3B82F6
gradients.dark // #0F172A → #1E293B
```

### Animation Utilities

- `blobKeyframes` - Floating background blob animation
- `containerVariants` / `itemVariants` - Staggered entrance animations
- `floatAnimation` - Continuous floating effect for cards

## Pages

| Route      | Description                                    |
| ---------- | ---------------------------------------------- |
| `/`        | Homepage with hero, mode switch, features, CTA |
| `/about`   | Company mission, stats, team members           |
| `/roadmap` | Portfolio showcase + company timeline          |
| `/contact` | Contact form with glassmorphic inputs          |

## Configuration

### Vite Plugins

- `@vitejs/plugin-react` - React Fast Refresh with Babel

### TypeScript

- Strict mode enabled
- Path aliases configured in `tsconfig.app.json`

## 📄 License

© 2026 Bigeen Solutions. All rights reserved.
