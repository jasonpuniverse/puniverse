# Implementation Patterns

Code-ready patterns for common interactions. React + Framer Motion unless noted.

---

## Easing Tokens (CSS Custom Properties)

Define once in your design system:

```css
:root {
  --ease-out:     cubic-bezier(0.16, 1, 0.3, 1);    /* Decelerate — entering */
  --ease-in:      cubic-bezier(0.55, 0, 1, 0.45);   /* Accelerate — exiting */
  --ease-in-out:  cubic-bezier(0.65, 0, 0.35, 1);   /* Both — moving within */
  --spring:       cubic-bezier(0.34, 1.56, 0.64, 1); /* Overshoot — playful confirm */
}
```

---

## Button Micro-interaction

```jsx
import { motion } from "framer-motion";

export function InteractiveButton({ children, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="px-4 py-2 bg-brand text-white rounded-lg"
    >
      {children}
    </motion.button>
  );
}
```

---

## Loading States

### Skeleton Screen (Tailwind)

```jsx
function CardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-48 bg-gray-200 rounded-lg" />
      <div className="mt-4 h-4 bg-gray-200 rounded w-3/4" />
      <div className="mt-2 h-4 bg-gray-200 rounded w-1/2" />
    </div>
  );
}
```

### Determinate Progress Bar

```jsx
function ProgressBar({ progress }) {
  return (
    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-brand"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ ease: "easeOut" }}
      />
    </div>
  );
}
```

---

## State Transitions

### Toggle (Spring physics)

```jsx
function Toggle({ checked, onChange }) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`relative w-12 h-6 rounded-full transition-colors duration-200
        ${checked ? "bg-brand" : "bg-gray-300"}`}
    >
      <motion.span
        className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow"
        animate={{ x: checked ? 24 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </button>
  );
}
```

---

## Page Transitions

```jsx
import { AnimatePresence, motion } from "framer-motion";

function PageTransition({ children, key }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={key}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
```

Note: use `y` offset ≤ 20px — larger vertical movement causes motion sickness on long pages.

---

## Feedback: Ripple Effect

```jsx
function RippleButton({ children, onClick }) {
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const ripple = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      id: Date.now(),
    };
    setRipples((prev) => [...prev, ripple]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
    }, 600);
    onClick?.(e);
  };

  return (
    <button onClick={handleClick} className="relative overflow-hidden">
      {children}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full animate-ripple"
          style={{ left: ripple.x, top: ripple.y }}
        />
      ))}
    </button>
  );
}
```

---

## Gesture: Swipe to Dismiss

```jsx
function SwipeCard({ children, onDismiss }) {
  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={(_, info) => {
        if (Math.abs(info.offset.x) > 100) onDismiss();
      }}
      className="cursor-grab active:cursor-grabbing"
    >
      {children}
    </motion.div>
  );
}
```

---

## CSS Keyframe Patterns

```css
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.5; }
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.animate-fadeIn { animation: fadeIn 0.3s ease-out; }
.animate-pulse  { animation: pulse 2s ease-in-out infinite; }
.animate-spin   { animation: spin 1s linear infinite; }
```

### Card Hover Lift

```css
.card {
  transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}
```

---

## Reduced Motion (React)

```jsx
function AnimatedComponent() {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  return (
    <motion.div
      animate={{ opacity: 1 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
    />
  );
}
```

See `accessibility.md` for the full CSS `@media (prefers-reduced-motion)` block.

---

## Performance Rules

- **Animate only `transform` and `opacity`** — these run on the GPU compositor thread and never trigger layout
- **Never animate** `width`, `height`, `top`, `left`, `margin`, `padding` — these force layout recalc and cause jank
- **`will-change: transform`** — use sparingly, only on elements that animate frequently; excess use wastes GPU memory
- **60fps target** — budget ~16ms per frame; complex box-shadows and filters on animated elements break this
- **Clean up on unmount** — remove animation listeners and cancel `requestAnimationFrame` calls to prevent memory leaks
- **Test on real devices** — mid-range Android devices expose animation performance issues that desktop Chrome never will

---

## Common Mistakes

| Mistake | Fix |
|---|---|
| Animating `width`/`height` | Use `transform: scaleX()` / `scaleY()` instead |
| Too much motion simultaneously | Stagger list items; animate container not each child |
| Hover animations on touch devices | Gate with `@media (hover: hover)` |
| Long animation blocking next interaction | Keep < 500ms; never `pointer-events: none` during animation |
| Flash of unstyled content on mount | Set `initial` state to match server-rendered HTML |
