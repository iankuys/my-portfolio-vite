import { useState } from "react";
import { projects, featuredSlugs } from "../../data/projects.js";
import { selectProjects } from "../../lib/catalogue.js";
import { Link } from "../../lib/navigation.jsx";
import ProjectIndex from "./ProjectIndex.jsx";
const selected = featuredSlugs.map((slug) =>
  projects.find((p) => p.slug === slug),
);
const opening = [
  ...selected,
  ...selectProjects(
    projects.filter((p) => !featuredSlugs.includes(p.slug)),
    17,
    2,
  ),
];
export default function Home() {
  const [trial, setTrial] = useState(0);
  const shown = trial ? selectProjects(projects, trial * 7171, 8) : opening;
  return (
    <main id="main" className="page home-page">
      <section className="intro">
        <h1 tabIndex="-1">Computer science & AI.</h1>
        <div className="intro__bottom">
          <p className="intro__description">
            I’m Ian Ku, a software engineer interested in AI systems, machine
            learning, and tools for research.
          </p>
          <dl className="intro__facts">
            <div>
              <dt>Focus</dt>
              <dd>
                Agent workflows, concurrent systems, and scientific software
              </dd>
            </div>
            <div>
              <dt>Background</dt>
              <dd>
                B.S. Computer Engineering, University of California, Irvine
              </dd>
            </div>
          </dl>
        </div>
      </section>
      <section className="selected-work" aria-labelledby="selected-title">
        <div className="selected-heading">
          <div>
            <h2 id="selected-title">Selected projects</h2>
            <p className="mono secondary" aria-live="polite">
              Selection {String(trial + 1).padStart(2, "0")}{" "}
              <span className="selection-detail">
                · 8 projects ·{" "}
                {trial
                  ? "sampled from the archive"
                  : "6 selected, 2 from the archive"}
              </span>
            </p>
          </div>
          <button
            className="shuffle"
            onClick={() => setTrial((t) => t + 1)}
            aria-label="Shuffle selected projects"
          >
            Shuffle selection
          </button>
        </div>
        <ProjectIndex
          groups={[{ id: "selected", projects: shown }]}
          label="Selected projects"
        />
        <Link className="all-projects" href="/work">
          All {projects.length} projects
        </Link>
      </section>
    </main>
  );
}
