# Portfolio project content inventory

Date: November 23, 2026

Audience: computer science and AI admissions/research readers.

This is a working inventory, not published portfolio copy. Source inspection establishes that code exists, not that an app is currently deployed, that all README claims are measured, or that Ian is the sole contributor. Attribution, dates, demo material, and quantitative results must be grounded before publication.

MKR and Archiboost are excluded at the user's request. Inflow is included on the understanding that the user intends to make it public; its visibility has not been changed here.

The required preparation scope is the 22 named projects below: six selected projects, six additional case-study candidates, and ten compact-entry candidates. Assess every one and produce a proportionate page when there is enough attributable implementation and safe evidence. Record any specific missing information that prevents inclusion. The six selected projects describe homepage prominence, not the limit of the overhaul.

## Selected projects

### Inflow

- Proposed section: AI & Machine Learning.
- Proposed summary: An email application combining AI classification and response generation with a real-time inbox and background workflows.
- Evidence reviewed: README, repository tree, `backend/agents/classification_agent.py`, `backend/agents/workflow_executor.py`, `backend/services/temporal_workflows.py`.
- Established: classification and response components, dependency-ordered workflow execution, Temporal workflow definitions, database/API structure, Next.js frontend.
- Important boundary: some workflow step handlers contain simplified/scaffold behavior. The case study must describe the implemented path and avoid implying every generic workflow type is complete.
- Needed: exact individual contribution, project dates, a controlled email demo, architecture visual, verified sync/processing behavior. Do not repeat generic enterprise/security/scale claims from the README as measured results.
- Source: https://github.com/iankuys/Inflow

### LinkedIn Recruitment Agent

- Proposed section: AI & Machine Learning.
- Proposed summary: A staged browser-based agent workflow for search, extraction, evaluation, and structured output.
- Evidence reviewed: README, source tree, `src/linkedin_agent/runner/workflow_manager.py`.
- Established: workflow orchestration, shared workflow state, result assembly, fallback paths, agent/tool modules.
- Needed: individual contribution, dates, controlled demo inputs or a recorded trace, and an honest account of failure modes. README accuracy/reliability/scale numbers have not been reproduced and should not be published as established benchmarks.
- Source: https://github.com/iankuys/linkedin_agent

### Thread Scheduling

- Proposed section: Systems & Embedded.
- Proposed summary: A C++ simulator comparing FIFO, earliest-deadline-first, and rate-monotonic scheduling with explicit pthread coordination.
- Evidence reviewed: README, source tree, `main.cpp`, `p3_threads.cpp`, Makefile paths.
- Established: scheduling-policy implementations, mutexes, condition variables, task-resume/preemption coordination, timestamped traces.
- Needed: course/context and authorship, original project year, a reproducible workload, captured schedule traces, and any supported deadline/preemption comparison. Do not present it as a production operating-system scheduler.
- Suggested visuals: same workload under the three policies, annotated task timeline, short synchronization diagram.
- Source: https://github.com/iankuys/Thread-Scheduling

### Manual Segmentation

- Proposed section: Research Software.
- Proposed summary: A browser-based tool for editing irregular regions and updating their area measurements interactively.
- Evidence reviewed: README, root tree, `mask.js`.
- Established: Fabric.js canvas editing, polygon/point/line operations, event-driven updates, polygon-area calculation, existing GIF demo. README identifies it as a feature developed for pysegapp.
- Needed: exact contribution/context, project year, a safe demo image, coordinate units and calibration explanation, limitations of the area measurement.
- Suggested visuals: a region before and after a vertex edit, caption explaining the corresponding measurement change.
- Source: https://github.com/iankuys/manual-seg

### Computer Vision Smart Curtains

- Proposed section: Systems & Embedded; field tags include computer vision and human interaction.
- Evidence reviewed: README and existing portfolio text/assets.
- Established by documentation: Raspberry Pi deployment, Flask interface, gesture-control functions, scheduled and manual curtain control.
- Needed: implementation-level review of the actual gesture/control path, team and personal contribution, original year/context, hardware/demo footage, and supported behavior under failure or ambiguous input.
- Reusable existing assets: two curtain GIFs under the current portfolio's `public/projects/cv-curtains/`.
- Source: https://github.com/iankuys/cv_automated_curtains

### Tissue Cohort Discovery

- Proposed section: Research Software.
- Proposed summary: An interactive research tool for selecting tissue cohorts, inspecting distributions, and exporting matching record identifiers.
- Evidence reviewed: README, tree, `app/server.R`; `app/ui.R` identified.
- Established: R Shiny reactive filters, combined selection logic, plots, and export handlers; README documents REDCap integration.
- Needed: dates, contribution confirmation, synthetic demo data, screenshots of filter/query/output flow, and a precise description of data retrieval/caching.
- Source: https://github.com/iankuys/tissue-repo-discovery

## Additional case-study candidates

| Project | Proposed section | Evidence/readiness and next action |
| --- | --- | --- |
| NLP/ML Experiments | AI & Machine Learning | README and `main.py` reviewed; BERT, regression, and decision-tree code exists. Document task, preprocessing, split, baselines, metrics, and reproducibility before promoting to the homepage. |
| Building Management System | Systems & Embedded | README, tree, and `main.py` reviewed; sensor/GPIO, concurrency, HVAC/door state, weather integration, and display modules. Verify original context, individual work, hardware availability, and demo output. |
| C2C Video Study App | Research Software | README, tree, and `flask_site.py` reviewed; participant access/completion checks and REDCap-linked workflow. Use synthetic demo records; verify video progression/tracking in frontend code and clarify collaboration. |
| ZigZag | Research Software | Merge `zigzag_frontend` and `zigzag_fastapi_backend`; README, trees, and backend `main.py` reviewed. Show request-to-PowerPoint flow and confirm which original VBS/template work belongs to Ian. |
| Poker | Applications & Experiments | README, source tree, and Makefile reviewed. Actual build uses C11, GCC, GTK 2, and pthreads despite C++/GTK 3 claims in README. Inspect network protocol, hand evaluation, game-state handling, and personal contribution; reuse existing screenshots if accurate. |
| Space Hell | Applications & Experiments | README and existing portfolio assets reviewed. Inspect the C++/SFML source before writing architecture/algorithm claims. Show real gameplay, implementation decisions, and contribution/context. |

## Compact entries and experiments

These remain eligible for the catalogue, with concise pages when their contribution and evidence are clear. They should not be padded into flagship research claims.

| Project | What the available evidence supports | Next action |
| --- | --- | --- |
| LiveSheets | README and 40-line Flask/Socket.IO server: shared 5x5 cell grid with in-memory state and broadcast edits. | Controlled two-browser demo; explain persistence/conflict-handling limits. |
| FlaskChatApp | README describes Flask/Socket.IO realtime chat. | Inspect app code and capture a local message exchange. |
| TCP Chat | Repo inventory only. | Inspect client/server implementation and establish distinctive contribution. |
| P2PAgent | README explicitly describes a one-day FastAPI/WebSocket coordination proof of concept with simulated identity. | Inspect code and label simulated trust/identity accurately; controlled trace only. |
| PDF Analysis | README describes an interview demo using PDF parsing and LLM context; embedding/RAG is partly described as optional. | Inspect code to distinguish implemented retrieval from proposed additions; demo on a public PDF. |
| Object Detection | README, tree, and `obj_detection.py`: OpenCV, a pretrained YOLOv5 model, frame inference, and bounding-box display. | Identify authored integration, describe pretrained model use, and capture an original demo; no training claim. |
| AspireChatApp | Tree shows .NET Aspire, Blazor, authentication pages, and SignalR chat. No README was found at `README.md`. | Inspect custom implementation and separate template scaffolding from authored features. |
| Java Swing Calendar | README describes multi-user local-file event management and calendar sharing. | Inspect implementation, contribution, persistence behavior, and demo readiness. |
| Budget Buddy | Tree and backend code show React/Node and Plaid integration; some UI components are very small. | Establish implemented end-to-end behavior and distinguish sample integration from authored features. |
| Converge | README identifies several integrations as planned or mock-ready. | Inspect implemented scope before deciding on a compact prototype entry. Do not imply all listed integrations are complete. |

## Remaining inventory

The complete connected inventory is in `github-repository-inventory.txt`. Older mobile apps, individual coursework, profile/cheatsheet repositories, duplicate portfolio repositories, and partially inspected work can be evaluated after the primary catalogue is established. No additional page is required merely because a repository exists.

Ulendo-related repositories may be considered together as professional engineering work after reviewing their implementation and Ian's contribution. They are not equivalent to the excluded MKR website or Archiboost, but have not yet been selected as a verified standalone case study.

## Content preparation order

1. Thread Scheduling: inspect runnable behavior and prepare the first full case-study draft.
2. Inflow: map the implemented AI/email path and prepare a controlled demo narrative.
3. Manual Segmentation: prepare an original visual example and contribution statement.
4. LinkedIn Agent: select a controlled or recorded trace and document orchestration/fallback behavior.
5. Remaining selected projects, followed by additional case studies and compact entries.
6. Confirm the final editorial order after reading the finished pages, with CS/AI relevance and evidence quality as the selection criteria.
