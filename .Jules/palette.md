## 2024-05-15 - FAQ Accordion Accessibility
**Learning:** Accordion components using `focus:outline-none` hide the default focus outline, making it completely invisible to keyboard users without a fallback. Additionally, mapping `id`, `aria-controls`, and `aria-labelledby` properly is crucial for screen readers to navigate complex UI elements correctly.
**Action:** Always provide `focus-visible:ring-*` as a fallback for custom components that hide default focus indicators, and ensure all accordion headers and contents are correctly cross-referenced via ARIA attributes.
## 2024-05-19 - Prevent layout shift in dynamic buttons
**Learning:** Changing button text during asynchronous operations (e.g., from "Join Now" to "Joining..." and "You're in!") causes layout jank if the button isn't fixed-width.
**Action:** Add a `min-w-[140px]` or similar constrained width to buttons that undergo state-based text transformations to ensure visual stability.

## 2024-05-19 - Framer Motion disabled states
**Learning:** `disabled` attributes do not inherently prevent Framer Motion's `whileHover` and `whileTap` animations from triggering, creating confusing visual feedback for screen readers and sighted users.
**Action:** Always conditionally disable animation properties based on state (e.g., `whileHover={isDisabled ? {} : { scale: 1.05 }}`).
