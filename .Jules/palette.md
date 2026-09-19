## 2024-05-15 - FAQ Accordion Accessibility
**Learning:** Accordion components using `focus:outline-none` hide the default focus outline, making it completely invisible to keyboard users without a fallback. Additionally, mapping `id`, `aria-controls`, and `aria-labelledby` properly is crucial for screen readers to navigate complex UI elements correctly.
**Action:** Always provide `focus-visible:ring-*` as a fallback for custom components that hide default focus indicators, and ensure all accordion headers and contents are correctly cross-referenced via ARIA attributes.

## 2024-10-24 - Gradient Button Focus Accessibility
**Learning:** Interactive gradient components (like waitlist buttons) on dark backgrounds often lack clear focus states when using default browser outlines or soft color rings, making them inaccessible to keyboard users navigating via Tab.
**Action:** When styling interactive gradient components against dark backgrounds (e.g. `bg-zinc-900`), use `focus-visible:ring-white` combined with `focus-visible:ring-offset-2 focus-visible:ring-offset-[#18181b]` to ensure a high-contrast, clearly defined focus state.
