# Motion System Reference

## Timing Tokens

| Token         | Duration | Use case                                      |
|---------------|----------|-----------------------------------------------|
| instant       | 0ms      | State changes that need no animation          |
| fast          | 100ms    | Tooltip appear/disappear, checkbox tick        |
| quick         | 150ms    | Button press feedback, badge update            |
| standard      | 200ms    | Hover states, dropdown open                   |
| deliberate    | 300ms    | Modal open, drawer slide, tab switch          |
| slow          | 400ms    | Page transition, hero animation               |
| very-slow     | 500ms    | Onboarding reveal, skeleton to content        |

Never exceed 500ms for UI interactions. Users perceive anything longer as a bug.

---

## Easing Reference

| Easing         | CSS value                         | Use when                                      |
|----------------|-----------------------------------|-----------------------------------------------|
| ease-out       | cubic-bezier(0.0, 0.0, 0.2, 1)   | Element enters the screen                     |
| ease-in        | cubic-bezier(0.4, 0.0, 1, 1)     | Element leaves the screen                     |
| ease-in-out    | cubic-bezier(0.4, 0.0, 0.2, 1)   | Element moves within the screen               |
| spring         | cubic-bezier(0.34, 1.56, 0.64, 1)| Playful confirm / success states              |
| linear         | linear                            | Spinners, progress bars, continuous motion    |

---

## Pattern Specs

### Slide-out Drawer (cart, filters, mobile nav)
- Direction: right to left (enter), left to right (exit)
- Duration: 300ms
- Easing: ease-out (enter), ease-in (exit)
- Overlay: fade in/out at 200ms, opacity 0 → 0.5

### Modal / Dialog
- Scale + fade: transform scale(0.95) + opacity 0 → scale(1) + opacity 1
- Duration: 250ms
- Easing: ease-out
- Dismiss: reverse at 200ms ease-in

### Toast / Notification
- Slide in from top-right (desktop) or bottom (mobile)
- Duration enter: 250ms ease-out
- Auto-dismiss after 4000ms
- Duration exit: 200ms ease-in

### Button Loading State
- Replace label text with spinner icon
- Spinner: 360deg rotation, linear, 700ms, infinite
- No scale or position change on the button itself

### Skeleton Screens
- Background: base colour at 10% opacity
- Shimmer: linear-gradient sweep, left to right, 1500ms linear infinite
- Fade out on content ready: 200ms opacity transition

### Page Transition (Shopify / SPA)
- Outgoing page: fade to opacity 0, 200ms ease-in
- Incoming page: fade from opacity 0, 300ms ease-out
- Do not move Y position — vertical slide transitions cause motion sickness on long scrolls

---

## Reduced Motion

Always implement `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

For skeleton screens: swap shimmer for a static placeholder colour instead of removing entirely.
For page transitions: instant swap, no fade.
For spinners: keep the spinner but remove the rotation (static loading icon is acceptable).

---

## Motion Anti-Patterns to Avoid

- Parallax scrolling on product images: disorienting, adds no conversion value
- Scroll-triggered animations that delay content paint: hurt LCP scores
- Hover animations on mobile (no hover state exists)
- Looping animations adjacent to text (destroys reading focus)
- Bounce/elastic easing on anything larger than 100px — it reads as broken
- Multiple simultaneous animations in the same viewport region
- Animation on every element in a list — stagger or animate the container instead
