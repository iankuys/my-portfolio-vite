# Portfolio overhaul verification

Verified November 23, 2026. Local branch: `feat/research-portfolio-overhaul`.

The portfolio now contains Home, Work, About, 22 project pages, and a dedicated not-found page. It targets computer science and AI admissions readers. MKR website and Archiboost project are excluded. Repository visibility and the live deployment were not changed.

## Reference comparison

The reference review covered all 57 linked routes on [Timo Tsui’s portfolio](https://www.timotsui.com/): Home, Work, About, and 54 project pages. The original reference archive contains 134 screenshots. Final desktop comparisons used matching 1440 × 1000 viewports.

| Reference quality or feature | Implemented and checked                                                                                             |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Content-first typography     | Cormorant Garamond headings, Hanken Grotesk body, IBM Plex Mono metadata; faint grid and restrained rules           |
| Home                         | Brief introduction, compact background facts, six selected projects plus two archive entries, eight-project shuffle |
| Cabinet                      | Section groups, 22 cards, Small/Middle/Fill image framing                                                           |
| Filters                      | Section, field, and medium; OR within rows, AND across rows; counts, clear, empty state                             |
| Field                        | Year-based map, three row groupings, row filtering, focus/hover preview, keyboard activation                        |
| Project reading              | Title and metadata strip, large evidence figure, concise implementation discussion, tools, source status, captions  |
| Figure viewer                | Previous/Next, boundary states, arrow keys, Escape, Tab/Shift+Tab containment, restored opener focus                |
| Navigation                   | Direct links, query state, Back/Forward, catalogue return and scroll restoration, previous/next project             |
| Theme and narrow layouts     | Persistent light/dark mode, phone and tablet checks, map scrolling within its region, accessible CV link            |

The portfolio adapts the reference rather than matching every pixel: it uses a wider reading shell, four desktop Cabinet columns, a prominent CV link, and CS/AI-specific project groups. Project imagery consists of original recordings/screenshots, a reproduced scheduler trace, and explicitly captioned explanatory schematics. It does not imply that a schematic is an application screenshot.

## Automated verification

| Check                            | Result                                                                                    |
| -------------------------------- | ----------------------------------------------------------------------------------------- |
| `npm test`                       | 15 passed, 0 failed                                                                       |
| `npm run lint`                   | Passed                                                                                    |
| `npm run build`                  | Passed; 26 prerendered documents                                                          |
| `npm run test:build`             | 27 passed, 0 failed                                                                       |
| `node scripts/check-preview.mjs` | 60 passed, including real 404 responses, all media/CV assets, and HTTP 206 video delivery |
| Production asset size            | Approximately 9.2 MB; large GIFs replaced with complete MP4 recordings                    |

The build retains an existing stale Browserslist dataset warning. No unrelated dependency upgrade was made.

## Browser verification

All 22 project routes were opened in the production preview. Their figures loaded without fallback images or page-level horizontal overflow. Representative layouts were checked at desktop sizes, 768 × 1024, and 390 × 844. Final phone assertions verified the actual viewport width; the 375-pixel content area leaves space for the browser’s vertical scrollbar.

Checked shuffle uniqueness, theme persistence, all mat settings and persistence, combined filtering and counts, both empty states, URL reloads, invalid filter tokens, map groupings and keyboard preview/activation, filtered project return, direct-entry fallback, Back/Forward filters and manually scrolled project positions, gallery keyboard controls and focus, original recordings, CV availability, and unknown routes. Native playback was verified for Manual Segmentation, Object Detection, and Space Hell. The original curtain demonstration was expanded and verified. Captured production console warnings/errors were empty.

The fresh branch review and browser testing found issues with query hydration, stale catalogue return targets, scroll restoration, Field empty states, invalid filter tokens, missing mobile CV navigation, and single-image viewer Tab behavior. These were fixed and the affected flows were retested. Analytics and Speed Insights integrations were retained.

The chronological browser JSON intentionally retains initial failures and test-harness corrections. A viewport override initially targeted the reference tab; final phone captures were replaced after checking actual viewport dimensions in the same call. Strict equality with content width initially overlooked the scrollbar; corrected bounds checks passed. These diagnostics are not unresolved product failures.

## Evidence and limits

Project descriptions distinguish archived prototypes, research software, and collaborative work. Source visibility and date provenance are stated accurately. The scheduler figure uses an observed FIFO log from unchanged public source; EDF and RM aborts are documented rather than presented as successful benchmarks. No invented evaluations, publications, or participant data were added.

This verification covers the local production build and preview. The branch has not been pushed or deployed, so hosted Vercel behavior has not been observed.

## Saved records

The Codex chat output folder contains the screenshot gallery, chronological browser JSON, HTTP results, and full Timo reference archive. See `.cursor/rules/portfolio-quality.mdc` for the required verification process on future changes.
