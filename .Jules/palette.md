## 2024-05-15 - FAQ Accordion Accessibility
**Learning:** Accordion components using `focus:outline-none` hide the default focus outline, making it completely invisible to keyboard users without a fallback. Additionally, mapping `id`, `aria-controls`, and `aria-labelledby` properly is crucial for screen readers to navigate complex UI elements correctly.
**Action:** Always provide `focus-visible:ring-*` as a fallback for custom components that hide default focus indicators, and ensure all accordion headers and contents are correctly cross-referenced via ARIA attributes.

## 2024-05-16 - Form Loading State Accessibility
**Learning:** When adding loading states to buttons that replace text, layout shifts can happen. Using min-w-[x] fixes the visual jank. Screen reader users need label associations with inputs, even when visually hidden.
**Action:** Always add an sr-only label tied with htmlFor to inputs when placeholders are used as the only visual label, and ensure disabled attributes are applied to both input and buttons during loading to prevent double submission.
