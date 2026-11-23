# Ian Ku portfolio overhaul — proposed design

Date: November 23, 2026

Status: Implemented on `feat/research-portfolio-overhaul`; see `docs/portfolio-quality-assurance.md` for verification. The proposals below record the approved design direction.

## Intent and audience

Rebuild Ian's existing portfolio for computer science and AI master's admissions readers, prospective research supervisors, and technical readers. A visitor should understand Ian's interests quickly, find relevant projects, and inspect his contribution and evidence without navigating promotional material.

The user selected Timo Tsui's portfolio as the reference for both presentation and interaction, after a review of its 57 linked page routes and representative UI states. Preserve the reference's content-first hierarchy, project catalogue, case-study pages, figure viewer, filters, and restrained typography. Create original project descriptions and assets for Ian's work.

Explicit exclusions: the MKR website and Archiboost project. Do not feature them in the catalogue, homepage, diagrams, or project pages. Existing employment can be listed compactly on About when factual, but Archiboost receives no project case study. Inflow is eligible for a public-facing case study; changing repository visibility is a separate action and is not part of this redesign.

## Goals

- Communicate a clear interest in computer science and AI through the selection and explanation of actual work.
- Make a brief scan useful: concise introduction, fixed selected projects, clear project titles, context, and years.
- Support deeper reading: explain the problem, Ian's contribution, methods, evidence, results, and limitations.
- Preserve a consistent presentation for large projects and small experiments, with length proportional to their substance.
- Keep projects grouped by subject rather than treating the repository list as a collection of equally important cards.
- Make direct links, navigation, filters, and galleries work on desktop and mobile, with keyboard access.

## Non-goals and constraints

- No new backend, accounts, CMS, live GitHub dependency, or change of framework is required.
- Do not invent publications, research appointments, contributions, deployment history, users, benchmark numbers, or project dates.
- Distinguish research software, coursework, experiments, and product engineering through concise factual context.
- Use synthetic or demonstrably public data in screenshots of study and clinical tools. Repository access alone does not establish that a data file is suitable for a public portfolio image.
- Do not run email, recruitment, browser automation, or other agents against real accounts to produce demos. Use recorded or controlled demo inputs.
- Do not publish unfinished copy or broken placeholder links. Missing evidence stays in the working inventory; it must not appear as invented results on the site.
- The current Vite production build remains the build contract. Existing hosting must support direct route loads; address rewrites in deployment configuration if necessary.

## Approaches

The user has already chosen a Timo-style project catalogue with individual case studies.

1. **Selected approach: rebuild within the existing React/Vite app.** Separate project content from presentation and replace the current one-page portfolio. This retains a working build and hosting path while allowing the full catalogue and project-reading experience.
2. **Alternative: a static-site framework migration.** This could provide generated HTML and a document-oriented editing workflow, but adds migration work before the content and interface are established. It is not needed for this overhaul.
3. **Alternative: restyle the current single page.** This would be quicker but would not provide the project catalogue, filters, or substantive project pages the user requested.

Framework retention is the builder's recommendation, not a separate preference expressed by the user. Use project-owned content files and local assets. Keep enough separation that pre-rendering can be added later if required by hosting or discoverability checks.

## Positioning and initial selection

Proposed positioning: software engineer interested in computer science and AI, with work spanning agent workflows, real-time and concurrent systems, and tools for research. The interests in computer science and AI are explicit; narrower research interests remain a proposal and should not be presented as established specialization.

Proposed homepage label: **Computer science, AI, and software for research.**

Proposed introduction: **I'm Ian Ku, a software engineer interested in computer science and AI. I build agent workflows, real-time systems, and tools that support research.**

Do not describe Ian as an AI researcher or imply publication history without evidence. About lists the verified UC Irvine B.S. in Computer Engineering, current CV/resume, selected experience, GitHub, LinkedIn, and email.

Initial selected projects, in editorial order:

1. Inflow — AI email workflows and application engineering.
2. LinkedIn Recruitment Agent — stateful tool use and browser-based workflows.
3. Thread Scheduling — concurrency, scheduling policies, and controlled comparisons.
4. Manual Segmentation — interactive geometry and research-tool implementation.
5. Computer Vision Smart Curtains — perception connected to physical control.
6. Tissue Cohort Discovery — configurable data exploration for research.

NLP/ML Experiments can replace a selected project once its task, split, baselines, and measured results are documented. This is an evidence-readiness decision, not a judgment that machine learning is less relevant.

## Information architecture

### Home — `/`

- Persistent simple header: Ian Ku, Work, About, CV/resume, theme control.
- One focused introduction and compact facts about focus, background, and current work. Avoid a time-sensitive current-role claim unless verified.
- Six fixed selected projects with a title, year, category, representative visual, and one-sentence summary.
- A clear link to all projects. A small shuffle control can offer alternate selections, but the initial selection remains fixed so the strongest work is always visible first.
- Compact footer with contact links.

### Work — `/work`

- Default Cabinet view: grouped project grid with consistent image frames and title/year/context metadata.
- Three image-mat settings: Small, Middle, and Fill. Small/Middle retain the whole image with different inset sizes; Fill uses a cropped preview while the project page preserves the complete figure.
- Four proposed primary sections: AI & Machine Learning; Systems & Embedded; Research Software; Applications & Experiments.
- Secondary field tags drawn only from actual content, such as agent systems, machine learning, concurrency, computer vision, scientific tools, and networked applications.
- Medium tags such as web application, desktop application, hardware, experiment, and data tool.
- Multi-select OR within a filter row and AND across filter rows, matching the observed reference behavior.
- Result counts, selected states, Clear all, and an informative empty result.
- Encode view, row grouping, and filters in URL query parameters. Browser Back/Forward must restore them.
- Field view: projects positioned by verified year, with marks for their sections, fields, or media; focus/hover exposes a project preview. Click or Enter opens the project; row labels filter the catalogue.
- Offer Cabinet as an equally capable alternative to the visual map, including on narrow screens.

### Project — `/work/:slug`

Use a stable shared template:

1. Back to Work, title, year, section, context, team/role, and available source/demo links.
2. Large cover image, diagram, or embedded recorded demo with a descriptive caption.
3. One paragraph explaining the problem and what was built.
4. Ian's contribution, explicit for collaborative projects.
5. How it works: architecture, algorithms, implementation choices, and relevant tradeoffs.
6. Evidence and outcomes: measurements when supported; otherwise concrete behavior, outputs, and demonstrated capability.
7. Scope and limitations, with explanation proportional to the project.
8. Captioned figure collection, full-screen image viewer, and previous/next project navigation.

Research papers and references appear only where real and relevant. Compact projects may omit empty sections rather than repeating filler. Next/Previous follows stable catalogue order and displays a project counter; Back to Work restores the previous catalogue view, filters, and scroll position where available, with `/work` as the direct-entry fallback.

### About — `/about`

- Portrait, short professional biography, and stated interests.
- Education and compact selected experience rather than a long animated timeline.
- Clearly labeled CV/resume download plus email, GitHub, and LinkedIn links.

### Unknown route

Render an intentional not-found page with Work and Home links; do not crash or silently show an unrelated project.

## Visual direction

Reference qualities: generous whitespace, a faint drafting grid, thin borders, serif headings, sans-serif reading text, and quiet monospace metadata. Use a coherent light and dark palette with one restrained accent. Proposed default: light, with a persistent user choice for theme.

Use typography and project imagery to establish hierarchy. Avoid the current typewriter introduction, tilted cards, bouncing decorations, floating shapes, technology-pill walls, and entrance animations that hide content. Small hover and focus transitions are sufficient. Respect reduced-motion preferences.

Body text must be at least 16px; labels should generally be 14px or larger. Use a comfortable reading width for the case-study text, broader space for figures and the catalogue. Cards should show useful content immediately and not require hovering to reveal a project's identity. Use meaningful diagrams, screenshots, and traces instead of generating decorative project imagery.

Mobile behavior: header links remain accessible, filters wrap without clipping, cards collapse to fewer columns, project prose stays readable, metadata stacks, and the image viewer fits the available screen. The map may scroll horizontally in a labeled region while Cabinet provides a simple alternative.

## Content model

Keep content independent from components. Each project record includes: stable slug, title, primary section, field/medium tags, verified year or date range, editorial order, concise summary, project type/context, role/team, source/demo URLs and their visibility, cover, captioned figures, and optional case-study sections.

Maintain a working evidence record separately: source files reviewed, what they establish, attribution to confirm, assets to produce, and measurements to reproduce. Do not ship this internal checklist in the visitor UI. Treat uncertain dates as missing during drafting and omit them from the timeline until verified.

Each accepted standalone project receives one page. Merge split frontend/backend repositories and variants that are really the same project. Small prototypes receive short entries when their contribution is identifiable; generic exercises and duplicate implementations need not become separate pages just to increase the count.

### Required overhaul scope

The six homepage selections are not the entire launch catalogue. The content-preparation scope is all 22 named projects in the accompanying inventory: the six selected projects, six additional case-study candidates, and ten compact-entry candidates. Assess each, establish its actual implemented scope and attribution, and prepare a proportionate page for every viable project. The first milestone does not complete the overhaul.

The finished catalogue must account for all 22: either a factual, reviewable page or a documented reason that inclusion needs a specific user decision or unavailable evidence. Unresolved required content remains outstanding work and must be reported rather than silently dropped. Do not pad a prototype into a large case study to satisfy a count. Ulendo-related work and other repositories outside these 22 remain optional follow-up scope.

## First implementation milestone

The first reviewable slice is Home, a populated Work catalogue in Cabinet view, and a complete Thread Scheduling case study, plus the shared header, typography, theme control, and project navigation. Use verified scheduler code and, if it runs reliably in a controlled environment, a reproducible comparison visual. It demonstrates the reading format without requiring third-party accounts or clinical data.

Then extend the same template to Inflow and Manual Segmentation to verify that AI systems, visual research tools, and systems studies all fit. Add Field view, the remaining case studies and short entries, About, and final metadata/hosting work after the content and template are sound. These are milestones within one overhaul, not a proposal to omit the requested UI.

## Validation and completion

- Production build succeeds. Do not introduce unrelated dependency upgrades.
- Check route loads directly, refresh, browser Back/Forward, and unknown projects.
- Test filter logic, empty results, URL restoration, image-mat persistence, and catalogue return behavior.
- Test figure opening, Previous/Next, Escape, focus restoration, and boundaries; captions and alt text remain available.
- Inspect desktop and narrow layouts, keyboard navigation, light/dark themes, reduced motion, and missing-image handling.
- Check CV/resume and source links. Label unavailable/private source accurately without changing GitHub permissions.
- Capture screenshots of key pages and states and compare them against the agreed visual direction and verified content.
- Make a local reviewable version before the production deployment step. User-facing project content must be fact-checked before publication.

## Open content questions

These do not block implementing the shell and catalogue template:

- Confirm Ian's individual responsibilities and collaborators for Inflow, LinkedIn Agent, Thread Scheduling, Smart Curtains, and other team work where source ownership alone is insufficient.
- Confirm project years from repository history and original course/work context; do not substitute last repository update date.
- Identify available safe screenshots, demos, traces, reports, and evaluation outputs.
- Verify which current CV/resume and professional-role details should appear at launch.

## Builder discretion

The builder may choose component boundaries, plain content-file format, small routing utilities or an existing routing library, styling organization, responsive breakpoints, and a lightweight static-host-compatible approach. Preserve the existing React/Vite build. Match the agreed visual and interaction behavior rather than adding infrastructure for its own sake. Do not reduce the specified project catalogue to the old one-page portfolio.

## Sources

- Reference pages: https://www.timotsui.com/ ; https://www.timotsui.com/work ; https://www.timotsui.com/work/scene_layout_agents ; https://www.timotsui.com/about
- Reference screenshots and route inventory: `outputs/timo-reference/` in this chat workspace.
- Existing app: `/home/ianku/my-portfolio-vite` in WSL.
- Connected GitHub inventory: 55 accessible repositories under `iankuys`, recorded in `outputs/github-repository-inventory.txt`.
- Project evidence pointers and readiness: `portfolio-project-content-inventory.md` alongside this document.
