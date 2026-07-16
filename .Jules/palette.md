## 2024-05-15 - FAQ Accordion Accessibility
**Learning:** Accordion components using `focus:outline-none` hide the default focus outline, making it completely invisible to keyboard users without a fallback. Additionally, mapping `id`, `aria-controls`, and `aria-labelledby` properly is crucial for screen readers to navigate complex UI elements correctly.
**Action:** Always provide `focus-visible:ring-*` as a fallback for custom components that hide default focus indicators, and ensure all accordion headers and contents are correctly cross-referenced via ARIA attributes.

## 2024-05-16 - Form Labels and Dynamic Button Feedback Accessibility
**Learning:** Single-input forms often use placeholders instead of visible labels for aesthetics, which harms screen reader users. Additionally, dynamically updating submit buttons (like changing to "Success") aren't announced by screen readers unless specifically instructed to do so.
**Action:** Always include a visually hidden `<label>` (using `sr-only` class) tied to the input's `id` for placeholder-only inputs. Use `aria-live="polite"` on submit buttons that change text/state to announce the result to assistive technologies.
