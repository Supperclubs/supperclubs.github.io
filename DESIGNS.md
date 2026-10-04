# Supper Club designs

The site is still plain HTML, CSS, and JavaScript, ready for GitHub Pages.

## Try a design

Use the design selector at the bottom of any page. The choice follows you between pages and is remembered in your browser. Copy the page URL to share a particular design:

- `index.html?design=living-room` — reference-inspired paper white, charcoal and cognac; the default
- `index.html?design=candlelight` — black and white, intimate, dark
- `index.html?design=journal` — paper, olive, and literary serif type
- `index.html?design=salon` — modern green, bold sans-serif type, rounded shapes

## Change the default

Change `SUPPER_DEFAULT_DESIGN` in `js/designs.js`, and the `data-design` attribute on each HTML page (including `sessions/_template.html`) to the same ID. Existing visitors keep their saved selection until they choose another design.

## Add another design

1. Add an `{ id, name }` entry to `SUPPER_DESIGNS` in `js/designs.js`.
2. Add an `html[data-design="your-id"]` block in `css/designs.css`, defining the palette and optional layout or typography overrides. Follow an existing design.
3. The selector updates automatically on every page. No content duplication or build step is needed.
4. Check the homepage, events, about, and a reading page at both phone and desktop widths.

## Editing content

Update the normal HTML pages. Add gatherings to `events.html` and update the homepage selection in `index.html`. New reading pages should start from `sessions/_template.html`, which includes the design system. Session section headings automatically appear in the reading outline.

`css/style.css` is the original foundation. `css/designs.css` supplies the shared readability improvements and the original three visual directions. `css/living-room.css` contains the reference-inspired Living Room design; the supplied illustration is in `images/reading-together.png`. Reading content remains visible without JavaScript; JavaScript adds the selector, menu controls, saved choice, and reading outline.

## Preview

From this folder, run `python3 -m http.server 8765` and open http://localhost:8765.

The changes are local until committed and deployed through the existing GitHub Pages workflow.
