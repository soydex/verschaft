## 2024-05-15 - FAQ Accordion Accessibility
**Learning:** Accordion components using `focus:outline-none` hide the default focus outline, making it completely invisible to keyboard users without a fallback. Additionally, mapping `id`, `aria-controls`, and `aria-labelledby` properly is crucial for screen readers to navigate complex UI elements correctly.
**Action:** Always provide `focus-visible:ring-*` as a fallback for custom components that hide default focus indicators, and ensure all accordion headers and contents are correctly cross-referenced via ARIA attributes.

## 2024-06-20 - Disabled Form State Confusion
**Learning:** Even when buttons say "You're in!", screen readers may not announce the success state if `aria-live` is missing, and users might try to resubmit forms if input fields aren't explicitly `disabled`. Framer Motion hover effects running on disabled buttons also create a confusing user experience.
**Action:** When creating success/loading states, consistently apply `disabled` to inputs AND buttons, add visual cues (`disabled:opacity-50`), conditionally disable hover/tap animations, and use `aria-live="polite"` for state changes.
