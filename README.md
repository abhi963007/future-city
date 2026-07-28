# Harroway React

A modern React application built with TypeScript, Vite, and advanced animation libraries for creating smooth, interactive web experiences.

## Features

- **Smooth Scrolling**: Lenis integration for buttery smooth scroll experiences
- **Advanced Animations**: GSAP with ScrollTrigger for complex scroll-based animations
- **Modern React**: Built with React 19 and TypeScript for type safety
- **Routing**: React Router for client-side navigation
- **SEO Ready**: React Helmet Async for managing document head
- **Custom Components**: Reusable UI components including buttons and parallax images
- **Custom Hooks**: Specialized hooks for animations, scroll triggers, and window interactions

## Tech Stack

- **Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite
- **Animation**: GSAP (GreenSock Animation Platform)
- **Smooth Scroll**: Lenis
- **Routing**: React Router DOM
- **SEO**: React Helmet Async
- **Linting**: Oxlint
- **Styling**: CSS with Webflow-inspired classes

## Installation

```bash
# Install dependencies
npm install
```

## Usage

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Project Structure

```
src/
├── components/
│   └── common/
│       ├── Button/          # Reusable button component with variants
│       ├── Label/           # Label component
│       └── ParallaxImage/   # Parallax image component
├── hooks/
│   ├── useLenis.ts          # Lenis smooth scroll hook
│   ├── useNavbarAnimation.ts # Navbar animation hook
│   ├── useScrollTrigger.ts  # GSAP ScrollTrigger hook
│   ├── useSplitText.ts      # Text splitting animation hook
│   └── useWindowSize.ts     # Window size tracking hook
├── styles/
│   ├── global.css           # Global styles
│   ├── lenis.css            # Lenis specific styles
│   ├── webflow-page.min.css # Webflow page styles
│   └── webflow-shared.min.css # Webflow shared styles
├── utils/
│   ├── constants.ts         # Application constants
│   ├── gsap.ts              # GSAP configuration
│   └── helpers.ts           # Utility functions
├── App.tsx                  # Main application component
├── main.tsx                 # Application entry point
└── index.css                # Base styles
```

## Key Features

### Smooth Scrolling with Lenis
The application uses Lenis for smooth scrolling, integrated with GSAP's ticker for optimal performance. The `useLenis` hook provides a singleton instance across the application.

### GSAP Animations
Custom hooks make it easy to implement GSAP animations:
- `useScrollTrigger`: Set up scroll-based animations with automatic cleanup
- `useSplitText`: Animate text by splitting it into characters/words
- `useNavbarAnimation`: Animate navbar elements on scroll

### Reusable Components
- **Button**: Primary and secondary variants with hover animations
- **ParallaxImage**: Images with parallax scroll effects in multiple sizes

## Development

The project uses Oxlint for fast linting. To enable type-aware linting, install `oxlint-tsgolint` and update `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

## React Compiler

The React Compiler is not enabled by default. To add it, see the [React Compiler documentation](https://react.dev/learn/react-compiler/installation).

## License

This project is private and proprietary.
