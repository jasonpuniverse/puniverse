# Accessibility: Interaction Requirements (WCAG 2.2)

## Keyboard Navigation

All interactive elements must be reachable and operable via keyboard alone.

### Tab Order
- Follows logical reading order (top to bottom, left to right in LTR layouts)
- No tab traps except modal dialogs (where focus must be contained within the modal)
- Skip-to-main-content link as first focusable element on every page

### Focus Visible (WCAG 2.2 SC 2.4.11 — AA)
- Focus ring must be visible; never `outline: none` without a custom replacement
- Minimum focus indicator: 2px solid, 3:1 contrast ratio against adjacent colours
- Preferred: 3px solid brand colour + 2px white offset (highly visible on any background)

```css
:focus-visible {
  outline: 3px solid #your-brand-colour;
  outline-offset: 2px;
}
```

### Keyboard Interactions by Component

| Component        | Keys required                                         |
|------------------|-------------------------------------------------------|
| Button           | Enter, Space to activate                              |
| Link             | Enter to follow                                       |
| Checkbox         | Space to toggle                                       |
| Radio group      | Arrow keys to navigate within group                   |
| Select dropdown  | Arrow keys, Enter to select, Escape to close          |
| Modal            | Escape to close; Tab cycles within modal only         |
| Drawer / panel   | Escape to close; focus returned to trigger on close   |
| Tabs             | Arrow keys to switch tabs; Enter/Space to activate    |
| Accordion        | Enter/Space to expand/collapse                        |
| Carousel         | Arrow keys to advance slides                          |

---

## ARIA Roles and Labels

### Buttons vs Links
- `<button>` for actions (submit, add to cart, open modal)
- `<a href>` for navigation (go to page, open URL)
- Never use `<div>` or `<span>` as interactive elements without `role` and `tabindex`

### Icon-only Buttons
Must have an accessible name:
```html
<button aria-label="Remove item from cart">
  <svg aria-hidden="true">...</svg>
</button>
```

### Form Labels
- Every input must have an associated `<label>` (via `for`/`id` or wrapping)
- Placeholder text is not a substitute for a label
- Error messages linked to inputs via `aria-describedby`

```html
<label for="email">Email address</label>
<input id="email" type="email" aria-describedby="email-error" />
<span id="email-error" role="alert">Please enter a valid email address</span>
```

### Live Regions
Use `aria-live` to announce dynamic changes:
- Cart count update: `aria-live="polite"` on the count element
- Error messages: `role="alert"` (implicit `aria-live="assertive"`)
- Success toasts: `aria-live="polite"`
- Loading states: `aria-busy="true"` on the container while loading

### Modal Dialogs
```html
<div role="dialog" aria-modal="true" aria-labelledby="modal-title">
  <h2 id="modal-title">Confirm your order</h2>
  ...
</div>
```
On open: move focus to first focusable element inside modal (or the dialog itself).
On close: return focus to the element that triggered the modal.

---

## Colour and Contrast

| Element                  | Minimum contrast ratio |
|--------------------------|------------------------|
| Body text (< 18pt)       | 4.5:1                  |
| Large text (≥ 18pt bold) | 3:1                    |
| UI components / icons    | 3:1                    |
| Placeholder text         | 4.5:1                  |
| Disabled elements        | No requirement (but should still be distinguishable) |

Do not convey information by colour alone:
- Error state: colour + icon + text message (not red border alone)
- Required fields: asterisk (*) + legend explaining the asterisk, not just colour
- Selected variant: filled background + checkmark, not just colour change

---

## Touch Targets (Mobile)

- Minimum: 44×44px (WCAG 2.5.5 AAA recommends 44×44; WCAG 2.2 SC 2.5.8 AA requires 24×24)
- Target: 48×48px for primary actions
- Spacing between targets: at least 8px to prevent mis-taps

---

## Motion and Vestibular Disorders

WCAG 2.3.3 (AAA) — Animation from Interactions: users can disable non-essential motion.
Always implement `prefers-reduced-motion` (see motion-system.md).

Avoid:
- Large-scale parallax effects
- Auto-playing carousels (or provide pause control)
- Flashing content > 3 times per second (this is a WCAG A hard fail)

---

## Testing Checklist

Before launch, verify:
- [ ] Tab through every interactive element on the page in logical order
- [ ] All modals trap focus and return focus on close
- [ ] All form errors announced to screen readers (use VoiceOver / NVDA)
- [ ] All images have `alt` text (decorative images: `alt=""`)
- [ ] Contrast ratios checked with browser DevTools or Colour Contrast Analyser
- [ ] Site is usable with OS font size set to 200%
- [ ] No horizontal scroll at 320px viewport width
- [ ] `prefers-reduced-motion` disables all animations
