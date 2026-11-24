# Quiet Portfolio Style Implementation Plan

> **For agentic workers:** Use superpowers:executing-plans inline. The user approved applying the written scope on a new branch; continue through implementation and verification without another handoff.

**Goal:** Apply the approved Quiet visual treatment while preserving the portfolio’s content and functionality.
**Architecture:** Retain React/Vite, routing, data, and existing controls. Introduce one shared ProjectIndex presentation for Home and Cabinet, with a desktop preview and phone thumbnails. Replace the visual stylesheet and restyle the shared header and reading pages.
**Tech Stack:** Existing React 19, Vite, native CSS, Node test runner; no new dependencies.
**Spec:** ../specs/2026-11-24-quiet-style-design.md

## Global Constraints

- Preserve all22 factual cases, routes, filters, counts, Cabinet/Field, mats, shuffle, galleries, recordings, history, CV, and themes.
- Exclude MKR website and Archiboost project. No content claims or source visibility changes.
- Work on feat/quiet-portfolio-style from2f3ca7d; retain existing checkout per the established in-place workflow. No merge, push, or deployment.
- Quiet is the visual reference; saved Timo captures remain the interaction reference.

## Review Focus

- Filtering or shuffling removes the previewed project: show a current result, never stale content.
- Keyboard or touch users: every project remains independently navigable without hover.
- Narrow or short screens: previews never hide content, trap scrolling, or overflow the page.
- Changing a preview with a failed image must not inherit another image’s fallback state.
- New presentation must preserve query navigation, return scroll, and image-mat behavior.

### Task 1: Restyle and integrate the shared project index

**Files:** Create src/components/catalogue/ProjectIndex.jsx and tests/presentation.test.js. Modify src/components/catalogue/{Home,Work,Shared}.jsx, src/App.jsx, src/index.css, package.json.
**Interfaces:** ProjectIndex({groups:[{id,title?,projects}],mat='small',label}) consumes existing project records and Link navigation. Home supplies one group; Work supplies filtered section groups. ProjectImage resets per source through a React key at the usage site.

- [x] Add server-rendered integration tests: all22 unique Cabinet entries have navigable links before JS; a filtered catalogue previews a matching result; empty filters show an actionable state without a stale preview; Home retains its eight-project opening selection.
- [x] Run the presentation test against the old app and observe failures.
- [x] Implement the list/preview, keyboard focus and pointer updates, default preview, mobile thumbnails, and mats. Keep project data and navigation utilities unchanged.
- [x] Apply Literata, compact headers/intro, paper/charcoal palette, subtle rules, consistent project/About/viewer styles, and a small theme icon. Retain all control functions.
- [x] Run unit/presentation tests, lint, build, and static-output tests; fix observed issues; commit.

### Task 2: Verify behavior, compare references, review, and record

**Files:** Update .cursor/rules/portfolio-quality.mdc and docs/portfolio-quality-assurance.md. Save user screenshots/report under the chat’s outputs/quiet-portfolio-qa/.

- [x] Run production preview and60 HTTP checks.
- [x] Browser-check list previews by mouse/keyboard, filtering/shuffle fallback, phone thumbnails, all mat modes, Field groups/filter/activation, history and return scroll, viewer focus/arrows/Escape, video playback, CV, theme persistence, invalid routes and queries. Open all22 detail routes and verify images/layout.
- [x] Verify actual desktop, phone, and tablet widths. Capture Home, Cabinet, Field, project, About, dark, and mobile states; compare against Quiet and prior functionality captures.
- [x] Request one fresh whole-branch review. Fix material findings in one pass with reproductions; rerun affected checks.
- [x] Record results and limitations, commit, verify clean tree and the unchanged pushed checkpoint. Leave a usable local preview; do not push or deploy.

## Execution ledger

- Design scope explicitly approved by user: Apply this scope, November24,2026.
- Prior user-selected in-place workflow retained; a new branch isolates the style commits from the pushed checkpoint.
- Tasks1–2 share ProjectIndex behavior and CSS; Task 2 validates the final interfaces from Task 1. No conflict found.

- Task1: complete at1e069e2. Presentation checks3RED/1baseline pass→4GREEN; full unit/presentation suite19/19. Lint,26-document build,27/27 static tests and60HTTP checks passed.
- Task2: complete. Browser covered all22 cases and all planned flows across actual desktop/short/phone/tablet dimensions. Quiet visual comparison completed.
- Final review: fresh independent reviewer found two Important CSS issues. Both reproduced and fixed in one pass: Fill height coverage and short-window inline previews; browser RED→GREEN and full checks passed.
- Final: minor (deferred): row-to-destination assertion can be stronger; all actual22+8 mappings were independently verified.
- Final: Ruling: visual fidelity and live history/scroll checks delegated to the primary agent were verified in the browser; no unresolved discrepancy found. Native screen-reader speech was not tested; keyboard and accessibility-tree checks passed.
- Final validation report: ../../quiet-portfolio-quality-assurance.md. Existing pushed checkpoint and main remain unchanged; local restyle is not pushed or deployed.
