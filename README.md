# Ian Ku — portfolio

A React/Vite portfolio for computer science and AI readers. The catalogue includes 22 project case studies, Cabinet and Field views, URL-based filters, light/dark themes, image framing controls, keyboard-accessible figure galleries, and recorded demonstrations.

## Run locally

```sh
npm ci
npm run dev
```

For the production build and static route preview:

```sh
npm run build
npm run preview
```

The preview listens on http://localhost:4173. It serves the generated documents, returns real 404 statuses, and supports video range requests.

## Verify changes

```sh
npm test
npm run lint
npm run build
npm run test:build
# With npm run preview running:
node scripts/check-preview.mjs
```

Follow `.cursor/rules/portfolio-quality.mdc` for browser, responsive, and reference-comparison checks. The latest verification is recorded in `docs/portfolio-quality-assurance.md`.

## Content and structure

- `src/data/projects.js`: project text, tags, dates, sources, and captioned figures.
- `src/components/catalogue/`: Home, Work, About, project pages, and figure viewer.
- `src/lib/`: catalogue filtering, navigation, and history behavior.
- `public/projects/`: original media, explanatory schematics, and reproduced evidence.
- `scripts/prerender.mjs`: generates Home, Work, About, all 22 project documents, and `404.html`.
- `tests/`: catalogue/history and production-output verification.

Project claims must be supported by implementation or original records. Keep private-source status, collaboration, date provenance, and prototype limitations accurate. Exclude the MKR website and Archiboost project.

The reference is https://www.timotsui.com/. The implementation adapts its content-first visual language and catalogue interactions to Ian’s CS/AI work. The live site uses existing Vercel hosting; local branch changes require a separate deployment.
