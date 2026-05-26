# Premium Data Scientist Portfolio — Implementation Blueprint

## Phase 1 — Initialize Project

### Create Project

```bash
npx create-next-app@latest data-scientist-portfolio
```

### Recommended Setup

* TypeScript → Yes
* ESLint → Yes
* Tailwind → Yes
* App Router → Yes
* src directory → Yes
* Turbopack → Yes
* Import alias → @/*

---

# Install Dependencies

```bash
npm install gsap @studio-freight/lenis clsx tailwind-merge lucide-react
```

Optional:

```bash
npm install class-variance-authority
```

---

# Final Folder Structure

```txt
src/
├── app/
│   ├── blog/
│   ├── projects/
│   │   └── [slug]/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── not-found.tsx
│
├── components/
│   ├── client/
│   │   ├── animations/
│   │   ├── smooth-scroll/
│   │   ├── progress/
│   │   └── transitions/
│   │
│   ├── layout/
│   ├── sections/
│   ├── cards/
│   ├── ui/
│   └── typography/
│
├── content/
│   ├── blog/
│   └── projects/
│
├── data/
│   ├── projects.ts
│   ├── timeline.ts
│   ├── certifications.ts
│   └── skills.ts
│
├── lib/
│   ├── gsap.ts
│   ├── utils.ts
│   └── constants.ts
│
└── styles/
```

---

# Phase 2 — Typography + Theme

## layout.tsx

```tsx
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "Debjit Das",
  description: "Data Scientist & Research Enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} bg-[#f8fafc] text-slate-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
```

---

# globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: #f8fafc;
  --foreground: #0f172a;
  --muted: #64748b;
  --border: rgba(15, 23, 42, 0.08);
  --emerald: #059669;
}

html {
  scroll-behavior: auto !important;
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-inter);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--font-space);
}

::selection {
  background: rgba(5, 150, 105, 0.15);
}

.noise-bg {
  position: relative;
}

.noise-bg::before {
  content: "";
  position: fixed;
  inset: 0;
  opacity: 0.03;
  pointer-events: none;
  background-image: radial-gradient(#000 0.5px, transparent 0.5px);
  background-size: 10px 10px;
}
```

---

# Phase 3 — Smooth Scroll Setup

## components/client/smooth-scroll/lenis-provider.tsx

```tsx
"use client";

import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
```

---

# Wrap App With Lenis

```tsx
import LenisProvider from "@/components/client/smooth-scroll/lenis-provider";

<body>
  <LenisProvider>{children}</LenisProvider>
</body>
```

---

# Phase 4 — Reusable Layout System

## Section Container

### components/layout/container.tsx

```tsx
import { cn } from "@/lib/utils";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16",
        className
      )}
    >
      {children}
    </div>
  );
}
```

---

# Section Spacing Pattern

Use consistently:

```tsx
<section className="py-24 md:py-32">
```

---

# Phase 5 — Homepage Sections

## Order

```txt
Hero
About
Featured Projects
Skills
Certifications
Resume Timeline
Blog Preview
Contact CTA
```

---

# Hero Section Structure

## Components

```txt
components/sections/
├── hero.tsx
├── about.tsx
├── featured-projects.tsx
├── skills.tsx
├── certifications.tsx
├── timeline.tsx
├── blog-preview.tsx
└── contact-cta.tsx
```

---

# Hero Design Direction

Requirements:

* oversized typography
* profile image
* subtle emerald glow
* mathematical background grid
* slow reveal motion
* editorial spacing

Layout:

```txt
LEFT:
headline
subtitle
cta

RIGHT:
profile image
ambient background
```

---

# Phase 6 — GSAP Reveal System

## Reusable Reveal Component

### components/client/animations/reveal.tsx

```tsx
"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Reveal({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return <div ref={ref}>{children}</div>;
}
```

---

# Motion Rules

Use ONLY:

* fade up
* opacity reveals
* slight scale
* stagger
* smooth easing

Avoid:

* bounce
* aggressive transforms
* over-rotation
* chaotic motion

---

# Phase 7 — Scroll Progress Indicator

## components/client/progress/scroll-progress.tsx

```tsx
"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = (window.scrollY / total) * 100;

      setScroll(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="fixed left-0 top-0 z-[999] h-[2px] bg-emerald-600 transition-all duration-150"
      style={{ width: `${scroll}%` }}
    />
  );
}
```

---

# Phase 8 — Data Layer

## src/data/projects.ts

```ts
export const projects = [
  {
    slug: "counterfeit-medicine-detection",
    title: "Counterfeit Medicine Detection",
    category: "Computer Vision / NLP",
    description:
      "Multimodal deep learning system for counterfeit medicine verification.",
    image: "/projects/medicine.jpg",
    metrics: [
      {
        label: "Accuracy",
        value: "92%",
      },
    ],
  },
];
```

---

# Phase 9 — Project Detail Page

## Structure

```txt
Hero
Overview
Methodology
Metrics Cards
Large Visual Block
Results
Key Learnings
```

---

# Important Design Rule

Large imagery is important.

Without large visuals:

* the portfolio feels empty
* content feels junior
* spacing feels unintentional

Use:

* large screenshots
* blurred backgrounds
* subtle overlays
* wide editorial imagery

---

# Page Transition Strategy

Keep transitions SIMPLE.

Recommended:

* fade
* opacity
* slight y movement

Do NOT:

* overengineer route transitions
* delay navigation excessively

---

# Mobile Strategy

On mobile:

* simplify transforms
* reduce stagger amount
* reduce blur intensity
* preserve smoothness
* maintain spacing rhythm

Do NOT disable animations entirely.

---

# Performance Rules

DO:

* use next/image
* lazy load below-the-fold images
* isolate GSAP
* keep client components tiny
* use Server Components aggressively

DO NOT:

* add use client everywhere
* animate huge DOM trees
* create giant providers
* overhydrate components

---

# Final MVP Priorities

## Priority 1

Typography + spacing

## Priority 2

Hero section polish

## Priority 3

Smooth scrolling

## Priority 4

Project detail pages

## Priority 5

Reveal animations

## Priority 6

Background atmosphere

---

# Most Important Principle

The website should FEEL expensive.

Not because of engineering complexity.

But because of:

* rhythm
* spacing
* typography
* pacing
* motion timing
* editorial composition

That is the leverage point.
