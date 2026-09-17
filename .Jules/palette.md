## 2024-05-15 - FAQ Accordion Accessibility
**Learning:** Accordion components using `focus:outline-none` hide the default focus outline, making it completely invisible to keyboard users without a fallback. Additionally, mapping `id`, `aria-controls`, and `aria-labelledby` properly is crucial for screen readers to navigate complex UI elements correctly.
**Action:** Always provide `focus-visible:ring-*` as a fallback for custom components that hide default focus indicators, and ensure all accordion headers and contents are correctly cross-referenced via ARIA attributes.

## 2024-05-24 - Dynamic Content and Screen Readers
**Learning:** Adding screen reader text (sr-only) to input fields provides essential context that placeholders alone do not. Disabling inputs during loading/success states prevents duplicate submissions but requires visual feedback (like a checkmark or spinner) and cursor changes (`cursor-not-allowed`) to be intuitive.
**Action:** Always pair `disabled` state with opacity reduction and cursor changes on both buttons and inputs. Use sr-only labels for inputs that rely only on placeholders. Ensure focus rings contrast well on dark backgrounds by using `ring-white` and an offset color matching the background (e.g., `ring-offset-[#18181b]`).
