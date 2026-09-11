## 2024-05-15 - FAQ Accordion Accessibility
**Learning:** Accordion components using `focus:outline-none` hide the default focus outline, making it completely invisible to keyboard users without a fallback. Additionally, mapping `id`, `aria-controls`, and `aria-labelledby` properly is crucial for screen readers to navigate complex UI elements correctly.
**Action:** Always provide `focus-visible:ring-*` as a fallback for custom components that hide default focus indicators, and ensure all accordion headers and contents are correctly cross-referenced via ARIA attributes.

## 2024-05-23 - Interactive Forms: Disabled State & Screen Reader Announcements
**Learning:** Interactive forms lacking disabled states during/after submission can lead to accidental multiple submissions. Dynamic state changes (like success messages that replace the button text) need `aria-live="polite"` to be properly perceived by screen readers without losing focus.
**Action:** When creating forms with async actions, always disable inputs/buttons during/after submission and use `aria-live` regions for status text changes within interactive elements.
