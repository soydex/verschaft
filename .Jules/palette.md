## 2024-05-15 - FAQ Accordion Accessibility
**Learning:** Accordion components using `focus:outline-none` hide the default focus outline, making it completely invisible to keyboard users without a fallback. Additionally, mapping `id`, `aria-controls`, and `aria-labelledby` properly is crucial for screen readers to navigate complex UI elements correctly.
**Action:** Always provide `focus-visible:ring-*` as a fallback for custom components that hide default focus indicators, and ensure all accordion headers and contents are correctly cross-referenced via ARIA attributes.

## 2024-05-15 - Framer Motion Disabled States
**Learning:** Adding standard HTML `disabled` attributes to Framer Motion components (`<motion.button>`) doesn't automatically disable hover or tap animations (like `whileHover` or `whileTap`). This creates confusing UX where a visually disabled button still responds dynamically to user interaction.
**Action:** When conditionally disabling a `<motion.button>`, also conditionally apply animation props. For example: `whileHover={status !== "success" ? { scale: 1.05 } : {}}`.
