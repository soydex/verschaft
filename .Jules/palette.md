## 2024-05-15 - FAQ Accordion Accessibility
**Learning:** Accordion components using `focus:outline-none` hide the default focus outline, making it completely invisible to keyboard users without a fallback. Additionally, mapping `id`, `aria-controls`, and `aria-labelledby` properly is crucial for screen readers to navigate complex UI elements correctly.
**Action:** Always provide `focus-visible:ring-*` as a fallback for custom components that hide default focus indicators, and ensure all accordion headers and contents are correctly cross-referenced via ARIA attributes.

## 2026-09-08 - Newsletter Form Accessibility
**Learning:** Form inputs without a visible `<label>` tag require an `aria-label` for screen readers to announce them correctly. Also, disabling inputs and adding `aria-live="polite"` during simulated async operations provides critical context to assistive technologies.
**Action:** Always provide `aria-label` for visually unlabelled inputs and use `aria-live` for dynamic status announcements in forms.
