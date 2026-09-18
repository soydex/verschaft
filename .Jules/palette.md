## 2024-05-15 - FAQ Accordion Accessibility
**Learning:** Accordion components using `focus:outline-none` hide the default focus outline, making it completely invisible to keyboard users without a fallback. Additionally, mapping `id`, `aria-controls`, and `aria-labelledby` properly is crucial for screen readers to navigate complex UI elements correctly.
**Action:** Always provide `focus-visible:ring-*` as a fallback for custom components that hide default focus indicators, and ensure all accordion headers and contents are correctly cross-referenced via ARIA attributes.

## 2024-05-16 - Gradient Button Focus State Accessibility
**Learning:** Interactive gradient components (like buttons) against dark backgrounds can have poor default focus visibility. Using the browser's default focus ring might clash or be unnoticeable against complex gradient backgrounds or dark theme bases.
**Action:** Always provide explicit, high-contrast focus rings for gradient interactive components. For dark backgrounds, use `focus-visible:ring-white` combined with `focus-visible:ring-offset-2 focus-visible:ring-offset-[#18181b]` (or the matching dark background color) to ensure clear, accessible focus states for keyboard users.
