## 2024-05-15 - FAQ Accordion Accessibility
**Learning:** Accordion components using `focus:outline-none` hide the default focus outline, making it completely invisible to keyboard users without a fallback. Additionally, mapping `id`, `aria-controls`, and `aria-labelledby` properly is crucial for screen readers to navigate complex UI elements correctly.
**Action:** Always provide `focus-visible:ring-*` as a fallback for custom components that hide default focus indicators, and ensure all accordion headers and contents are correctly cross-referenced via ARIA attributes.

## 2024-05-16 - Dynamic Submit Button Accessibility
**Learning:** Placeholders should not substitute labels (a visually hidden `.sr-only` label provides essential context). When a form is successfully submitted and the button text updates to a success state (like "You're in!"), screen readers won't announce the new state unless it's an `aria-live` region.
**Action:** Always provide a `sr-only` `<label>` explicitly tied to an `<input>` using `htmlFor` and `id`. Use `aria-live="polite"` on dynamically changing elements to ensure screen readers announce state updates. Add `disabled` states to prevent multi-submissions and remove hover/tap animations for clarity.
