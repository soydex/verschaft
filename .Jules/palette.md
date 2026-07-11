## 2024-05-18 - Framer Motion Transition Types
**Learning:** In TypeScript, when defining variants for Framer Motion outside of components, the `type` property in `transition` (e.g., `"spring"`) must often be cast `as const` to satisfy TypeScript's strict structural typing. Otherwise, it's inferred as a general `string`, which doesn't match the specific string literals expected by Framer Motion's `AnimationGeneratorType`.
**Action:** When extracting animation variants into constants, always use `as const` on string literals defining animation types to prevent typing errors.
