## 2024-05-15 - FAQ Accordion Accessibility
**Learning:** Accordion components using `focus:outline-none` hide the default focus outline, making it completely invisible to keyboard users without a fallback. Additionally, mapping `id`, `aria-controls`, and `aria-labelledby` properly is crucial for screen readers to navigate complex UI elements correctly.
**Action:** Always provide `focus-visible:ring-*` as a fallback for custom components that hide default focus indicators, and ensure all accordion headers and contents are correctly cross-referenced via ARIA attributes.
## 2024-09-15 - Dynamic Framer Motion Button Interaction
**Learning:** Adding a disabled attribute to a framer-motion component without also overriding the whileHover and whileTap states leads to a confusing UX where the disabled button still reacts physically to user clicks and hovers.
**Action:** When conditionally disabling a motion component, dynamically switch `whileHover` and `whileTap` variants to empty objects `{}` if the component is disabled.
