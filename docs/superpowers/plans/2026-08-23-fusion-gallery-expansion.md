# Fusion Gallery Expansion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add the two supplied Fusion screenshots to a responsive four-card Fusion gallery.

**Architecture:** Preserve the static HTML/CSS structure and existing artwork component. Extend the current regression script with content and asset checks, add the two image files under `images/`, and make only the copy and layout changes required for the four-card gallery.

**Tech Stack:** HTML5, CSS, PowerShell regression checks

---

### Task 1: Add failing Fusion gallery checks

**Files:**
- Modify: `tests/site-structure.tests.ps1`

- [ ] Add checks requiring exactly four `.fusion-artwork` figures.
- [ ] Add checks for `fusion-interlocking-bracket.png`, `fusion-leaf-structure.png`, both approved captions, their alt text, and both files on disk.
- [ ] Run `powershell -ExecutionPolicy Bypass -File tests/site-structure.tests.ps1` and confirm the new checks fail because the gallery and assets are absent.

### Task 2: Add the approved Fusion works

**Files:**
- Create: `images/fusion-interlocking-bracket.png`
- Create: `images/fusion-leaf-structure.png`
- Modify: `index.html`
- Modify: `style.css`

- [ ] Copy the two supplied PNG files to their approved asset names without altering their pixels.
- [ ] Update the Fusion introduction to mention room interiors, mechanical forms, and organic structures.
- [ ] Add two `.fusion-artwork` figures with the approved titles and descriptive alt text.
- [ ] Keep the Fusion gallery at two columns above 700 px and one column below it.
- [ ] Run the regression script and confirm all checks pass.

### Task 3: Render, verify, and deliver

**Files:**
- Verify: `index.html`, `style.css`, both new PNG assets, and `tests/site-structure.tests.ps1`

- [ ] Serve the site locally and inspect the Fusion section at 1280×720 and 390×844.
- [ ] Confirm all four images load, the layout is 2×2 on desktop and one column on mobile, no horizontal overflow occurs, and the browser console has no errors.
- [ ] Run the regression script and `git diff --check` again.
- [ ] Commit the verified changes, push `main`, and read back the remote `main` commit hash.
