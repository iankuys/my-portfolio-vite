# CS and AI Portfolio Implementation Plan

> For agentic workers: use superpowers:executing-plans for inline implementation. The user approved implementation on feat/research-portfolio-overhaul and requested thorough testing and reference comparison.

Goal: replace the existing one-page portfolio with the approved Timo-style catalogue and case studies.
Architecture: retain React/Vite; data-driven local project content, small history router, shared catalogue and figure viewer; prerender direct routes at build time.
Spec: ../specs/2026-11-23-portfolio-overhaul-design.md

## Global constraints
- Exclude MKR website and Archiboost project.
- Assess all 22 inventory projects; show accurate implemented scope and private-source status.
- Use real assets and original explanatory diagrams; no invented measured results or sole-authorship claims.
- Keep local branch work reviewable; no repository visibility changes, production push, or new hosting account.

## Review focus
- Unknown/invalid route or query: intentional fallback and safe filter values.
- Deep links and Back/Forward: route, catalogue filters, and return position retained.
- Viewer boundaries and keyboard use: focus, Escape, arrows, and disabled ends.
- Narrow layout: filters/metadata readable and no page-level horizontal overflow.
- Content fidelity: private/forked sources and prototype limitations described accurately.

## Tasks
1. Content and catalogue behavior. Files: src/data/projects.js, src/lib/catalogue.js, tests/catalogue.test.js. Write real filter/URL/selection/content tests, run RED, implement, run GREEN. Interfaces: projects[], sections[], filterProjects(projects,state), parseWorkSearch(search), workUrl(state), parseRoute(path), selectProjects(projects,seed,count).
2. UI. Files: src/App.jsx, src/components/catalogue/*, src/index.css, src/main.jsx. Implement Home, Work cabinet/map, About, detail, not-found, history restoration, mat/theme/shuffle, accessible figure viewer and source links. Verify each interaction through browser control against the reference, including empty filters and keyboard.
3. Figures and evidence. Files: public/projects/diagrams/*, public/projects/evidence/*, source notes. Integrate verified originals and scheduler evidence; original schematics must be captioned as such. Check all project/figure paths.
4. Static build and metadata. Files: scripts/prerender.mjs, index.html, vercel.json, package.json. Prerender all 25 routes, set title/description and static fallback, test production direct loads and unknown routes.
5. QA and comparison. Run unit suite, build, source checks; desktop/narrow screenshots; all 22 routes; compare against saved Timo reference. Fresh branch review and fix material findings. Save QA report and preview screenshots.

## Execution ledger
- Baseline: existing npm run build passes; no existing test script. Existing branch verified; only design docs initially untracked.
- User explicitly selected current branch; implement in place, no additional worktree.
- Dates: use source repository creation years as verified archive metadata, except documented original project dates (poker 2022 and Space Hell 2021 from existing portfolio). Explain the date basis on Work and detail pages.
- Prototype claims: describe scope visible in implementation, not unverified README performance or marketing numbers.
