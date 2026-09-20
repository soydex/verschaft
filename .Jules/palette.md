## 2024-05-15 - FAQ Accordion Accessibility
**Learning:** Accordion components using `focus:outline-none` hide the default focus outline, making it completely invisible to keyboard users without a fallback. Additionally, mapping `id`, `aria-controls`, and `aria-labelledby` properly is crucial for screen readers to navigate complex UI elements correctly.
**Action:** Always provide `focus-visible:ring-*` as a fallback for custom components that hide default focus indicators, and ensure all accordion headers and contents are correctly cross-referenced via ARIA attributes.

## 2026-09-20 - High-Contrast Focus Rings on Gradient Buttons
**Learning:** When applying focus rings for keyboard accessibility to bright gradient buttons on very dark backgrounds, a single ring can blend in or look muddy.
**Action:** Use a white focus ring with a dark offset to create a high-contrast double-ring effect. Example: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#18181b]`.
