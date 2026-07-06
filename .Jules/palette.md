## 2024-05-15 - FAQ Accordion Accessibility
**Learning:** Accordion components using `focus:outline-none` hide the default focus outline, making it completely invisible to keyboard users without a fallback. Additionally, mapping `id`, `aria-controls`, and `aria-labelledby` properly is crucial for screen readers to navigate complex UI elements correctly.
**Action:** Always provide `focus-visible:ring-*` as a fallback for custom components that hide default focus indicators, and ensure all accordion headers and contents are correctly cross-referenced via ARIA attributes.

## 2024-05-16 - Form Submission Feedback & Accessibility
**Learning:** Forms simulating API calls without a loading state or disabled inputs leave users wondering if their action succeeded, which can lead to multiple unintended submissions. Furthermore, visual input placeholders are not a substitute for proper screen reader labels (`aria-label`).
**Action:** Always include a distinct loading state (like a spinner) for asynchronous form submissions, disable inputs and buttons during processing, and ensure `aria-label` is present on inputs even when placeholders exist.
