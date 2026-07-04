## 2024-05-15 - FAQ Accordion Accessibility
**Learning:** Accordion components using `focus:outline-none` hide the default focus outline, making it completely invisible to keyboard users without a fallback. Additionally, mapping `id`, `aria-controls`, and `aria-labelledby` properly is crucial for screen readers to navigate complex UI elements correctly.
**Action:** Always provide `focus-visible:ring-*` as a fallback for custom components that hide default focus indicators, and ensure all accordion headers and contents are correctly cross-referenced via ARIA attributes.
## 2026-07-04 - Newsletter Form Accessibility
**Learning:** Added focus-visible classes for better keyboard navigation. Found standard form missing accessible names and loading states. Screen reader doesn't know placeholder exists for generic input.
**Action:** Use `aria-label` on form elements lacking labels, always include a submitting state for inputs, and configure button disabled states properly.
