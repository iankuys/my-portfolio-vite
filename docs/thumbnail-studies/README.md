# Project visual research checkpoint

Paused at Ian's request on November 24, 2026.

## The actual problem to resume

Ian clarified that the repeated **IMPLEMENTATION OVERVIEW** graphics are the problem. His example is Java Swing Calendar: four generic boxes labelled Date selection, Calendar model, Event editing, and Local files. The same composition is generated for every project by `scripts/generate-diagrams.mjs`.

Do not resume by polishing only the projects that already have real imagery. Replace the generic overview graphics with visuals that explain each individual project. Keep the current Quiet typography, paper background, index layout, and existing functionality.

At this checkpoint, **no portfolio application code or published project assets have changed**. The current app remains the Quiet version at c773b09. The files in this directory are research and a throwaway visual study.

## Findings and direction

- Six projects already have usable source material: Manual Segmentation, Object Detection, Smart Curtains, Thread Scheduling, Online Poker, and Space Hell.
- The ML experiments repository adds archived regression plots and a decision-tree PDF. The plots have not been reproduced in this session.
- The remaining 15 catalogue entries need new captures or individually drawn technical visuals. A missing saved screenshot does not mean an application cannot be run and captured.
- Prefer original output or a controlled capture of the implemented interface. Where those are unavailable, use a precise source-based illustration with sample content identified in its caption.
- Keep native colors and complete technical geometry. Match the surrounding framing and typography; do not force every image into the same composition.
- A cover can be simpler than the full evidence figure. Preserve the full original figures and recordings in project articles.
- The scheduler study redraws the first six seconds of one actual FIFO run. Its bars use recorded timestamps. T0 iteration 2 completed at 2.903 seconds against a 2.000 second deadline. It does not claim successful EDF/RM evaluation.
- The curtain source image is a mechanism CAD rendering. The Space Hell study uses an actual gameplay frame at 15 seconds, rather than the existing credits-screen image.

## Timo reference

The inspected pages mix project outputs and explanatory illustrations. The graphics tool used for each image is not established.

- [Point-cloud classification](https://www.timotsui.com/work/point_cloud_classification): a chair shown as points, pillars, and a bird's-eye grid.
- [Scene layout](https://www.timotsui.com/work/scene_layout_agents): side-by-side reconstructed room outputs.
- [Ingestion pipeline](https://www.timotsui.com/work/llm_ingestion_pipeline): a timeline cover explicitly described as using invented data.

The useful lesson is project-specific visual explanation. Do not claim all his assets are AI-generated.

## Saved studies

- `source-audit.json`: default-branch tree metadata for 23 source repositories behind the 22 portfolio entries; available root READMEs were inspected.
- `real-material.html` and `real/`: source material collected for seven projects.
- `quiet-cover-study.html` and `quiet-study.css`: seven-source visual study using the actual Quiet stylesheet. This helped assess framing but does not address all of the generic covers Ian complained about.
- `study-provenance.json`: study sources and limits.
- `preview-checks.json`: all seven study images loaded and keyboard focus selected the corresponding preview.
- `quiet-study-*.jpg`: desktop, dark-mode, and phone screenshots.

To view the studies locally, serve this directory with a static server. Project navigation links in the throwaway study point to the portfolio preview at localhost:4173.

## Verification and next work

The visual study was checked with keyboard preview selection for all seven items, light/dark themes, and a 390 × 844 phone viewport. All seven inline images loaded on the phone; the desktop rail was hidden and there was no horizontal overflow. The temporary browser viewport was reset.

Application checks were not rerun for this documentation-only checkpoint. The last application implementation and its QA remain recorded in `docs/quiet-portfolio-quality-assurance.md`.

Resume with the generic examples: Calendar should show its calendar/event model, LiveSheets should show its actual 5 × 5 edit/save/broadcast behavior, and Inflow should show its inbox and asynchronous workflow. Confirm details from source, evaluate the replacements inside Quiet on desktop and phone, then apply the chosen approach to the remaining overviews. No new design was approved or applied after Ian's clarification.
