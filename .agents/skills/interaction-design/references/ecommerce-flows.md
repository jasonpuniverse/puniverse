# E-commerce Interaction Flows

## Table of Contents
1. Product Listing Page (PLP)
2. Product Detail Page (PDP)
3. Cart
4. Checkout
5. Post-Purchase
6. Account and Auth

---

## 1. Product Listing Page (PLP)

### Filter and Sort
- Filters: apply immediately on selection (no "Apply" button needed unless 3+ filters selected simultaneously)
- Active filters shown as removable chips above the grid
- Sort dropdown: label shows current selection; default = "Recommended" or "Best Sellers"
- Result count updates without full page reload

### Grid Interaction
- Hover (desktop): show secondary image + quick-add button overlay
- Quick-add: if product has variants, open a variant selector drawer rather than adding immediately
- Pagination: infinite scroll preferred for browse-mode; numbered pages for search-intent traffic
- Out-of-stock items: shown greyed out with "Sold Out" badge; remove from default view, add toggle to show

---

## 2. Product Detail Page (PDP)

### Image Gallery
- Desktop: large main image + thumbnail strip; click thumbnail to swap main image
- Mobile: horizontal swipe carousel; dots indicator below
- Zoom: pinch-to-zoom on mobile; hover magnifier on desktop
- Video: autoplay muted in gallery; unmute on tap/click; never autoplay with sound

### Variant Selection
- Colour: image swatches (25–32px); tooltip on hover showing colour name
- Size: clickable pills; unavailable combos shown crossed-out (not hidden)
- Selecting a variant updates URL, price, images, and stock message without page reload

### Add to Bag CTA
- Desktop: sticky to right column; visible without scroll
- Mobile: fixed bottom bar with price + "Add to Bag" button (full width)
- On click: button enters loading state ("Adding..."); on success transitions to "Added!" for 1.5s then returns to "Add to Bag"
- Simultaneously: cart icon count increments; optional slide-out cart drawer opens

### Trust and Social Proof
- Reviews summary (stars + count) immediately below product title; click scrolls to review section
- Trust badges (free returns, warranty, secure checkout) in a horizontal row below CTA
- Stock urgency message ("Only 4 left") appears when stock ≤ 10 units

---

## 3. Cart

### Slide-out Drawer (preferred)
- Opens from right; overlay dims page (opacity 0.5 black); Escape or click outside closes
- Line items: image, name, variant, quantity stepper, line price, remove (X icon)
- Quantity stepper: minus / input / plus; minus at quantity 1 changes to trash icon
- Promo code: collapsible section; inline success/error feedback
- Order summary: subtotal, estimated shipping, total; note on tax
- Primary CTA: "Proceed to Checkout" — full width, high contrast
- Secondary: "Continue Shopping" text link — closes drawer

### Empty Cart
- Illustration or icon + "Your bag is empty"
- CTA: "Continue Shopping" → links to best-selling collection or homepage
- Optional: "Recently Viewed" products carousel

---

## 4. Checkout

### Step Structure (recommended 3-step)
1. Contact + Delivery
2. Shipping Method
3. Payment + Review

- Progress indicator at top (numbered steps or breadcrumb)
- Each step validated before advancing; errors shown inline
- Back button available on steps 2 and 3; does not lose entered data

### Contact and Delivery
- Email field first; check for existing account and offer login inline (non-blocking)
- Guest checkout is default — account creation offered post-purchase only
- Address autocomplete (Google Places API); manual override always available
- Save address checkbox for returning users

### Payment
- Card: stripe/payment element embedded; fields are PCI-compliant iframes
- Express options (Apple Pay, Google Pay, Shop Pay) shown at top of payment step as primary options
- Order summary collapsed on mobile (expandable); visible on desktop sidebar
- Place Order button: single submit; enters loading state on click; disabled after first click

### Error Handling
- Card declined: inline message below card field; suggest checking details or trying another card
- Address not found: highlight field; suggest manual entry
- Out of stock during checkout: surface at payment step with option to remove item or be notified

---

## 5. Post-Purchase

### Order Confirmation Page
- Clear success state: checkmark icon, "Order Confirmed" heading
- Order number prominent; "Save this number" nudge
- Estimated delivery date
- Email confirmation note ("Check your inbox at...")
- Account creation offer: "Save your details for next time" (one click with pre-filled data)
- Cross-sell: "You might also like" — curated, not algorithmic noise

### Email Triggers
- Order confirmation: immediate (< 2 min)
- Dispatch confirmation: with tracking link
- Delivery confirmation: with review request (NPS or star rating link)

---

## 6. Account and Auth

### Login
- Email + password; show/hide toggle on password field
- "Forgot password" link inline below password field (not after failed submit)
- Social login options above the form with a divider ("or continue with email")
- On success: return user to where they came from, not always homepage

### Registration
- Minimal fields: email + password only; name optional at registration
- Password requirements shown as checklist that updates in real-time as user types
- No CAPTCHA at registration if possible; use honeypot fields instead

### Password Reset
- Single email field; submit sends reset link
- Confirmation message: "If that email is registered, you'll receive a reset link" (security-safe phrasing)
- Reset link expires in 24 hours; clear message on expiry with option to resend
