# Portfolio Simplification Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remove unnecessary portfolio controls and improve the responsive seed-to-plant 3D background.

**Architecture:** Keep the existing static HTML/CSS/JavaScript structure. Add a lightweight PowerShell regression check for document structure and scene capabilities, then make surgical edits to the four production files.

**Tech Stack:** HTML5, CSS, browser JavaScript, Three.js 0.128, PowerShell regression checks

---

### Task 1: Add structural regression checks

**Files:**
- Create: `tests/site-structure.tests.ps1`
- Test: `index.html`, `style.css`, `script.js`, `three-scene.js`

- [ ] Write checks that reject Reflection, `.nav-links`, `.hero-actions`, `.button`, and magnet-button JavaScript.
- [ ] Write checks that require a non-link brand, alternating content panels, `THREE.CatmullRomCurve3`, `THREE.TubeGeometry`, `THREE.ShapeGeometry`, particles, reduced-motion handling, visibility handling, and a capped pixel ratio.
- [ ] Run `powershell -ExecutionPolicy Bypass -File tests/site-structure.tests.ps1` and confirm it fails against the old site.

### Task 2: Simplify the document and styling

**Files:**
- Modify: `index.html`
- Modify: `style.css`
- Modify: `script.js`

- [ ] Replace the linked header controls with a non-interactive brand label.
- [ ] Remove Reflection and both hero shortcuts.
- [ ] Alternate the remaining gallery, Blender, Fusion, and animation panels.
- [ ] Remove styles and JavaScript that only served deleted controls.
- [ ] Re-run the structural checks and confirm the interface checks pass.

### Task 3: Improve the 3D growth scene

**Files:**
- Modify: `three-scene.js`

- [ ] Build the plant from curved tube paths and tapered leaf shapes.
- [ ] Animate growth, leaf emergence, subtle wind, seed transition, particles, and scroll-based side changes.
- [ ] Preserve narrow-screen limits, reduced-motion static rendering, visibility pausing, resize handling, diagnostics, and fallback behavior.
- [ ] Re-run the structural checks and confirm all checks pass.

### Task 4: Browser verification and delivery

**Files:**
- Verify: all production files

- [ ] Serve the site locally and inspect desktop and mobile viewports.
- [ ] Check top, middle, and bottom scroll positions for overlap and JavaScript errors.
- [ ] Confirm WebGL fallback and reduced-motion behavior remain usable.
- [ ] Run the full structural check one final time, inspect `git diff --check`, commit the intended files, and push the verified commit to `origin/main`.
