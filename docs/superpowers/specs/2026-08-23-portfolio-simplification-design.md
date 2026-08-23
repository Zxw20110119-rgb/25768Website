# Portfolio Simplification Design

## Goal

Simplify the portfolio so the work is the focus, while improving the seed-to-plant WebGL background without changing the portfolio content.

## Interface

- Remove the entire Reflection panel.
- Replace the linked navigation brand with a small non-interactive `Renzo Studio` label.
- Remove the four section links and the two hero shortcut buttons.
- Keep the four portfolio topics and alternate their panel alignment from left to right.
- Keep the scroll meter, gallery interactions, video controls, and accessibility text.

## 3D background

- Preserve the seed-to-plant scroll narrative.
- Replace the rigid cylinder stem with a curved tubular stem and smaller curved branches.
- Use tapered leaf geometry arranged in balanced pairs, with gentle wind motion.
- Add restrained glow particles and ground light around the growing plant.
- Move the visual subject between open page margins as the reader scrolls so it does not obscure the content.
- Cap rendering resolution and object counts on narrow screens, pause work when the page is hidden, and render static states when reduced motion is requested.
- Keep the existing visible WebGL fallback message.

## Verification

- Automated static checks confirm removed elements are absent and required scene/performance features remain.
- Browser checks cover desktop and mobile layouts, scrolling, JavaScript errors, and WebGL fallback behavior.
- The final Git diff must be limited to the intended site files, tests, and these implementation notes.
