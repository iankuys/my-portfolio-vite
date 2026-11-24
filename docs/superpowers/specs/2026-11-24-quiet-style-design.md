# Quiet portfolio restyle

Selected direction: Quiet, confirmed by Ian on November 24, 2026.

## Scope

Restyle the existing React/Vite portfolio. Preserve all 22 projects and their factual content, routes, filters and counts, Cabinet/Field modes, mat controls, shuffle, galleries, recordings, history and scroll restoration, CV, and light/dark persistence. Keep the pushed version at commit `2f3ca7d` as the checkpoint; implement the restyle on a new local branch.

## Appearance

- Use Quiet’s Literata serif, regular weights, and a compact introduction. Keep controls in a restrained, readable sans-serif. Use near-white paper, charcoal text, fine gray rules, and a subtle muted accent. Provide a corresponding warm charcoal dark mode.
- Remove the drafting-grid background, oversized display headline, circular shuffle treatment, registration crosses, and boxed thumbnail grid.
- Home presents the same eight-project selection as a simple index. Work preserves its section groups and filters but presents Cabinet as a list of titles, years, and concise summaries.
- On desktop, the index sits beside a large, sticky project preview. Hover or keyboard focus updates the preview; clicking a project opens its existing detail page. Show a useful default preview immediately.
- On phones, show each project’s thumbnail beside its entry. Content and navigation must work without hover.
- Keep Small/Middle/Fill framing on the desktop preview and phone thumbnails. Field remains available with its current behavior and receives the same typography and colors.
- Restyle project pages, About, the viewer, and the header/footer consistently. Keep large evidence figures and comfortable reading widths. Retain visible CV and theme controls.

## Alternatives considered

Quiet was selected over the earlier warm editorial render, a cooler technical layout, and Erudite-style sidebar organization. Borrow Quiet’s visual principles while retaining this portfolio’s existing information and interactions. No theme purchase, framework migration, CMS, or hosting change is needed.

## Verification

Run the existing unit, lint, build, static-output, and HTTP checks. In the production browser, check all project pages and affected flows, including list preview with mouse/keyboard, phone thumbnails, combined filters and empty states, mat settings, shuffle, Field navigation, history/return scroll, gallery focus/arrows/Escape, recordings, CV, themes, and 404s. Compare visual screenshots against Quiet and functionality against the saved Timo reference. Verify actual desktop/phone/tablet viewport dimensions and save screenshots.

Reference: https://demo-quiet.semirare.com/
