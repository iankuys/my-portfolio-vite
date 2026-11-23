import { useState } from "react";
import { projects, featuredSlugs } from "../../data/projects.js";
import { selectProjects } from "../../lib/catalogue.js";
import { Link } from "../../lib/navigation.jsx";
import { ProjectCard } from "./Shared.jsx";
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
        <h1 tabIndex="-1">
          Computer science
          <br />
          and AI, in practice<span className="accent">.</span>
        </h1>
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
            <div>
              <dt>On this site</dt>
              <dd>Selected projects, implementation notes, and experiments</dd>
            </div>
          </dl>
        </div>
      </section>
      <section className="selected-work" aria-labelledby="selected-title">
        <div className="selected-heading">
          <div>
            <h2 id="selected-title">From the archive</h2>
            <p className="mono secondary" aria-live="polite">
              Trial {String(trial + 1).padStart(3, "0")}{" "}
              <span className="selection-detail">
                · n = 8 ·{" "}
                {trial
                  ? "sampled from the archive"
                  : "6 selected, 2 from the archive"}
              </span>
            </p>
          </div>
          <button
            className="shuffle"
            onClick={() => setTrial((t) => t + 1)}
            aria-label="Embrace randomness"
          >
            <span className="shuffle__mark">✳</span>
            <span>
              Embrace
              <br />
              randomness
            </span>
            <small>Run trial {String(trial + 2).padStart(3, "0")}</small>
          </button>
        </div>
        <div className="project-grid mat-small">
          {shown.map((p) => (
            <ProjectCard key={p.slug} project={p} summary />
          ))}
        </div>
        <Link className="all-projects" href="/work">
          All {projects.length} projects
        </Link>
      </section>
    </main>
  );
}
