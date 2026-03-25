---
trigger: always_on
---

# AGENTS.md - Project Context & Rules

## 🎯 Project Overview
- Name: Puniverse Website
- Tech Stack: React (Vite), Tailwind CSS, Supabase, Framer Motion.
- Primary Goal: A high-performance, interactive website with micro-interactions.

## 🚫 Critical Exclusions (Context Protection)
Always ignore the following directories. Do not index or read them unless explicitly requested:
- `node_modules/`
- `package-lock.json`
- `.next/`
- `dist/`
- `.claude/`

## 🛠️ Commands
- **Dev:** `npm run dev`
- **Build:** `npm run build`
- **Lint:** `npm run lint`

## 🎨 Coding Standards
- Use **TypeScript** for all new files.
- Prefer **Tailwind CSS** for all styling; avoid custom CSS files.
- Use **Lucide React** for icons.
- Animations should use **Framer Motion**.

## 🤖 Interaction Rules
- Before making major architectural changes, create a plan in `artifacts/plan.md`.
- After modifying UI, use the Antigravity Browser Agent to verify animations.