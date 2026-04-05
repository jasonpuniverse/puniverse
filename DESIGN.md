# Puniverse OS: Developer Design System

This document outlines the strict UI/UX and component architectural standards for the Puniverse platform. Any AI agent or developer generating new React components or pages for this repository **MUST** adhere to these visual and structural rules to maintain the premium "AI Operating System" aesthetic.

## 1. Core Atmosphere & Layout
- **Vibe:** "Bespoke Engineering" — Dark mode exclusive, high-ticket, premium B2B SaaS.
- **Backgrounds:** The global layout enforces a heavy dark background (`bg-[#050505]`).
- **Gradients (Neon Accents):** Large, highly blurred, low-opacity orb gradients exist in the global layout background (`mix-blend-screen`, `blur-[120px]`). Page layout should float *above* them natively.
- **Constraints:** Main content wraps inside `<div className="max-w-6xl mx-auto px-6 pb-16">` to prevent edge-bleeding on large displays.

## 2. Typography & Hierarchy
All typography is explicitly anti-bloat. We rely on high contrast font sizing and tracking:
- **Headers (`h1`):** `text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]`.
- **Text Highlights:** Gradient text is achieved using `text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400`.
- **Labels / Microcopy:** `text-xs font-bold tracking-[0.2em] uppercase` (typically `text-teal-400` or `text-purple-400`).
- **Body Text:** `text-gray-400 leading-relaxed text-sm md:text-base`. Avoid pure white (`text-white`) for paragraph text; keep it dialed back for hierarchy.

## 3. The "Holy Trinity" Components
Do **not** build raw HTML blocks for standard recurring elements. Import and utilize the following natively structured UI components from `src/components/ui/`:

### A. `<GlassCard>`
**Usage:** Any layout grid, pricing tier, metric display, or feature callout.
**Vibe:** Frosted, translucent card element that interacts deeply with the global background orbs.
*   **Default padding:** It self-manages padding (e.g. `p-8`). If constructing a custom inner layout, you can override with standard Tailwind via `className`.
*   **Visual Spec:** `bg-white/5` with a subtle `border-white/10`. Standard `rounded-2xl` geometry.

### B. `<GlowButton>`
**Usage:** **ALL** primary calls to action (CTAs). 
**Vibe:** A pill button `rounded-full` bordered by an animated three-stop neon gradient (`purple-500` -> `teal-500` -> `green-500`).
*   **CRITICAL RULE:** Do **not** inject structural padding (`px-8`, `py-4`) or text sizing (`text-lg`) into the `className` prop of `GlowButton`. It disrupts the parent/child padding alignment against the glowing border.
*   **Safe Prop Injection:** `className="w-full justify-center group"` or `className="mx-auto"`.
*   **Iconography:** Always append a `lucide-react` icon to the interior (e.g. `Unlock <Lock size={16} />`). If it's a navigational link, use `<ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />`.

### C. `<SectionLabel>`
**Usage:** Titles directly preceding a mapping grid or a new thematic section.
**Vibe:** Very subtle, small uppercase text spanning full width over a faint border line.
*   **Implementation:** `<SectionLabel>Categories</SectionLabel>`. No custom styling needed.

## 4. Animation & Motion (`framer-motion`)
Pages must feel alive but not jarring. We use our unified wrapping components from `src/components/ui/ScrollReveal.tsx`.

*   **Page Mount:** The top-level wrapper of every page route should use `<div className="animate-in fade-in duration-700">` (Tailwind Animation hook).
*   **Sequential Reveal / Grids:** If mapping over an array of items (like a grid of `GlassCard`s), wrap the `.map()` block in `<StaggerReveal>` and wrap each iterated child inside `<StaggerItem>`.
*   **Isolated Section Reveal:** For standard headers or isolated blocks, wrap them directly in `<Reveal>`.

## 5. Standard Component Skeleton
*When requested to generate a new page, use this skeleton blueprint:*

```tsx
import React from 'react';
import { ArrowRight, Box } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';
import { GlowButton } from '../components/ui/GlowButton';
import { SectionLabel } from '../components/ui/SectionLabel';
import { Reveal, StaggerReveal, StaggerItem } from '../components/ui/ScrollReveal';

export const NewPage: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      
      {/* 1. HERO BLOCK */}
      <Reveal>
        <header className="text-center mb-24 flex flex-col items-center mt-8">
           <p className="text-xs font-bold tracking-[0.2em] uppercase text-teal-400 mb-6 flex items-center gap-2">
            <Box size={14} /> Micro Label
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8 leading-[1.1] max-w-4xl">
            Headline <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400">Gradient Highlight.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
            Secondary body typography explaining value proposition.
          </p>
        </header>
      </Reveal>

      {/* 2. GRID BLOCK */}
      <section className="mb-32">
        <Reveal>
          <SectionLabel>Component Grid</SectionLabel>
        </Reveal>
        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <StaggerItem key={item}>
              <GlassCard className="h-full flex flex-col">
                <h3 className="text-xl font-medium text-white mb-2">Item {item}</h3>
                <p className="text-sm text-gray-400 flex-grow mb-6">Details here.</p>
                <GlowButton className="w-full justify-center group">
                  Action <ArrowRight size={14} className="ml-2 group-hover:translate-x-1" />
                </GlowButton>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </section>

    </div>
  );
};
```
