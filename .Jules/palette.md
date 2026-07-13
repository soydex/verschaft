## 2024-05-15 - FAQ Accordion Accessibility
**Learning:** Accordion components using `focus:outline-none` hide the default focus outline, making it completely invisible to keyboard users without a fallback. Additionally, mapping `id`, `aria-controls`, and `aria-labelledby` properly is crucial for screen readers to navigate complex UI elements correctly.
**Action:** Always provide `focus-visible:ring-*` as a fallback for custom components that hide default focus indicators, and ensure all accordion headers and contents are correctly cross-referenced via ARIA attributes.

## 2024-07-13 - Form State Accessibility
**Learning:** Forms that change state after submission (like showing a success message) need explicit ARIA announcements so screen readers know the result. Also, input fields and buttons should be disabled during/after success to prevent duplicate submissions and visually communicate state.
**Action:** Always add `aria-live="polite"` to elements containing dynamic success/status text, and remember to use the `disabled` attribute along with `disabled:opacity-*` utilities on both inputs and buttons when an operation is completed.
