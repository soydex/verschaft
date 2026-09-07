## 2024-05-15 - FAQ Accordion Accessibility
**Learning:** Accordion components using `focus:outline-none` hide the default focus outline, making it completely invisible to keyboard users without a fallback. Additionally, mapping `id`, `aria-controls`, and `aria-labelledby` properly is crucial for screen readers to navigate complex UI elements correctly.
**Action:** Always provide `focus-visible:ring-*` as a fallback for custom components that hide default focus indicators, and ensure all accordion headers and contents are correctly cross-referenced via ARIA attributes.

## 2024-09-07 - Dynamic Button Width Jitter
**Learning:** When a button's content changes dynamically (e.g., swapping text for a loading spinner), the button's width can jump or jitter if the new content is smaller or larger than the original text, leading to a jarring user experience.
**Action:** Always apply a `min-w-[...]` (minimum width) or a fixed width to buttons with dynamic content states to ensure the layout remains stable during state transitions.