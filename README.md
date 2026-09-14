# Renzo — Digital Portfolio

A lightweight static portfolio for GitHub Pages. No build step, framework or CDN is required.

## Structure

- `index.html`: semantic content and project links. Keep all content available without JavaScript.
- `style.css`: cascade layers for tokens, base rules, layout, components and responsive overrides. Change colours, spacing and fonts in the token layer.
- `script.js`: isolated progressive enhancements for the image dialog and click-to-start game.
- `images/` and root image files: existing portfolio artwork and animation.
- `game/`: original GDevelop HTML5 export, unchanged by the redesign.
- `three-scene.js`: legacy background implementation retained for reference; no longer loaded.
- `docs/superpowers/`: historical design notes, not the current design requirements.

## Preview and verify

Run `python3 -m http.server 8000` from this folder and open localhost:8000.
Run `node tests/portfolio.test.cjs` for asset, anchor and interaction-state checks.
The tests use a minimal DOM harness; they do not replace visual or real-browser gameplay checks.
The PowerShell test entry point delegates to this same test suite.

Before publishing, check desktop, iPad and phone layouts, image zoom and Escape-to-close,
video playback, game startup, keyboard controls, stopping and restarting the game.
Verify under the GitHub Pages project subpath as well as at a local server root.

## Publishing

Publish the repository root using the existing GitHub Pages main branch configuration.
Use relative URLs so assets also work under /25768Website/.
The v=7 CSS and script URLs refresh caches after this redesign.

## Updating work

Add images as semantic figure elements inside the appropriate project grid.
Keep descriptive alt text and update the category counts when adding or removing projects.
For a future game update, replace the complete game export together and retain its relative paths.
Game startup only happens after Play game. Stop game removes the iframe and resets the session.
