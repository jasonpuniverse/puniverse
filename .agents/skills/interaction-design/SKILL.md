---
name: interaction-design
description: >
  Apply this skill whenever the user is designing, critiquing, or improving website interactions,
  user flows, UI behaviours, micro-interactions, navigation patterns, forms, CTAs, modals,
  error states, loading states, or any element of how a user moves through and acts on a site.
  Trigger on phrases like: "how should this work", "improve UX", "user flow", "interaction design",
  "make it feel better", "button behaviour", "form design", "navigation", "hover states",
  "onboarding flow", "checkout experience", "landing page flow", "conversion optimisation",
  "friction reduction", "UX review", "UI feedback", "design critique", "interactive prototype
  guidance", or any request to make a website easier, faster, or more satisfying to use.
  Also trigger when building Shopify, landing pages, or e-commerce product pages where user
  behaviour and conversion flow are at stake.
---

# Interaction Design for Websites

## Core Philosophy

Interaction design governs how users move through and act on a site. Good interaction design is
invisible — users accomplish their goals without friction. Bad interaction design is visible —
users get confused, hesitate, or leave.

The goal is always: **reduce cognitive load, build trust, guide action**.

---

## Principles

### 1. Affordance — Make actions obvious
Every interactive element must signal what it does before it is clicked.
- Buttons look tappable (contrast, shape, elevation or shadow, cursor change)
- Links look distinct from body text (colour, underline, or both)
- Inputs look fillable (border, background, placeholder)
- Do not rely on hover-only states to reveal interactivity — mobile has no hover

### 2. Feedback — Confirm every action
Users need to know the system received their input.
- Button click: immediate visual state change (pressed, loading spinner, colour shift)
- Form submit: success message OR inline error, within 300ms of response
- Add to cart / wishlist: count updates, micro-animation on icon
- Page load: skeleton screens or progress indicators, never blank white flash

### 3. Progressive Disclosure — Show only what is needed now
Reveal complexity only when the user signals readiness.
- Lead with the primary action; secondary options are nested or revealed on demand
- Filters and sort options collapse on mobile; expand on interaction
- Long forms use steps (wizard pattern) rather than one intimidating scroll

### 4. Consistency — Same input, same output, everywhere
- All primary CTAs use the same colour and size across the site
- Hover state, active state, and focus state are defined once and applied globally
- Error messages follow a single format: icon + plain-English message + fix instruction
- Spacing, type scale, and motion timing are system-level, not per-component

### 5. Error Prevention > Error Recovery
- Disable the submit button until required fields are complete (or validate inline on blur)
- Use sensible defaults (pre-fill country from geolocation, select most common option)
- Provide format hints inline (e.g. "DD/MM/YYYY") before the user types, not after an error
- Destructive actions (delete, cancel order) require confirmation; make it non-trivial

### 6. Fitts's Law — Target size matters
- Minimum tap target: 44×44px (Apple HIG) / 48×48px (Material)
- Spacing between adjacent clickable elements: at least 8px
- Primary CTA: larger than secondary; high contrast; within thumb reach on mobile
- Never make users click a tiny icon when a labelled button is an option

### 7. Motion — Purposeful, not decorative
Motion should communicate, not decorate. Four jobs: confirm actions (feedback), show spatial relationships (orientation), direct attention (focus), maintain context during transitions (continuity).

**Timing reference:**

| Duration | Use case |
|---|---|
| 100–150ms | Micro-feedback: hovers, clicks, checkbox ticks |
| 200–300ms | Small transitions: toggles, dropdowns, tooltips |
| 300–500ms | Medium transitions: modals, drawers, page changes |
| 500ms+ | Complex choreographed sequences only |

- Ease-out for elements entering; ease-in for elements exiting; spring for playful confirm states
- Prefer spring physics over linear — feels natural, not mechanical
- Animations must be interruptible — never lock the user out during a transition
- Respect `prefers-reduced-motion` — all animations degrade gracefully to instant
- No looping animations near body text — they destroy reading focus
- **Performance rule: animate only `transform` and `opacity`** — never `width`, `height`, `top`, `left`; those force layout recalc and cause jank

---

## Key Patterns by Context

### CTAs and Buttons
- One primary CTA per screen section; everything else is secondary or tertiary
- Label with a verb + outcome: "Add to Bag", "Start Free Trial", "Get My Quote"
- Avoid "Submit", "Click Here", "OK" — they are generic and untrusted
- Loading state on the button itself prevents double-submit: spinner replaces label text
- After success: transition button to a confirmed state ("Added!") before page update

### Forms
- Single-column layout on mobile; two-column acceptable on desktop for short paired fields
- Label above the input, always — never placeholder-only (disappears on type)
- Inline validation on blur (when user leaves the field), not on keystroke
- Error message: red border + icon + message directly below the field
- Group related fields visually (delivery address as a block, card details as a block)
- Auto-advance to next field for fixed-length inputs (postcode, card expiry)
- Password field: show/hide toggle; never mask confirmation fields without toggle

### Navigation
- Primary nav: 5–7 items maximum; more items reduce findability
- Mobile: hamburger is acceptable but hamburger + bottom nav bar converts better for shops
- Active page: clearly indicated in nav (colour, weight, underline, or icon state)
- Breadcrumbs: required on product detail pages and any page 3+ levels deep
- Sticky nav: beneficial on long pages; ensure it does not eat more than 10% of viewport height
- Mega menu: only if there are 3+ top-level categories with 4+ sub-items each; otherwise use dropdowns

### Modals and Overlays
- Trigger modals only for actions that benefit from focused context (confirm, quick view, auth)
- Do not use modals for informational content that belongs on a page
- Always closeable via: X button (top right), Escape key, click outside overlay
- Do not auto-open a modal on page load — it destroys trust and is blocked by browsers
- Mobile: full-screen sheet (slides up from bottom) outperforms centre-screen modal

### E-commerce Specific
- Product page: primary CTA (Add to Bag) must be above the fold on desktop; sticky on mobile scroll
- Variant selector: image swatches preferred over text dropdowns for colour; size = clickable pills
- Trust signals (reviews, badges, guarantees) immediately below or beside the CTA
- Cart: slide-out drawer preferred over redirect to cart page — keeps user in context
- Checkout: guest checkout as default; account creation offered post-purchase
- Out-of-stock: disable variant, show "Notify Me" — never silently remove it from the page
- Urgency: stock count ("Only 3 left") and delivery cutoff ("Order by 2pm for next-day") — only when true

### Gesture Interactions
- Swipe to dismiss: threshold 100px offset; snap back if under threshold; visual drag indicator
- Drag and drop: show drag ghost at 0.9 opacity; highlight valid drop zones; spring snap on release
- Pull to refresh: show indicator at 60px pull; trigger at 80px; elastic resistance above threshold
- Pinch to zoom (product images): clamp zoom 1x–3x; double-tap to reset; momentum on release
- All gestures need a non-gesture fallback (button, menu item) — gestures are progressive enhancement

### Loading and Empty States
- Skeleton screens for content areas; spinner only for actions (button submit, search)
- Empty state (no results, empty cart): always show a primary action — never a dead end
- 404 page: search field + 3 recommended paths; branded, helpful, not just an error code
- Offline / error: clear message + retry button; never a raw error string to the user

---

## Applying This Skill

When asked to review or design an interaction:

1. **Identify the user goal** — what is the user trying to accomplish at this moment?
2. **Map the current flow** — what steps does the user take, where are the decision points?
3. **Identify friction** — where do users hesitate, re-read, or fail?
4. **Apply the relevant principle** — affordance, feedback, progressive disclosure, consistency, error prevention, Fitts's law, or motion
5. **Propose a specific change** — not "improve the CTA" but "change the CTA label from 'Submit' to 'Add to Bag' and add a loading spinner state on click"
6. **State the expected outcome** — conversion lift, reduced drop-off, fewer support tickets

When generating UI copy for interactions, keep it:
- **Short**: button labels 1–3 words; error messages 1–2 sentences
- **Specific**: say what happens next, not just what to do
- **Calm**: no exclamation marks in error states; no aggressive urgency language

---

## Reference Files

- `references/implementation-patterns.md` — Copy-paste code: Framer Motion, CSS keyframes, easing tokens, skeleton screens, gestures, performance rules
- `references/ecommerce-flows.md` — Detailed interaction specs for product page, cart, checkout, and post-purchase flows
- `references/motion-system.md` — Full timing tokens, easing curves, per-component animation specs, anti-patterns
- `references/accessibility.md` — WCAG 2.2 keyboard nav, ARIA patterns, contrast requirements, testing checklist

Read a reference file only if the user's query directly concerns that area and the SKILL.md body is insufficient.
