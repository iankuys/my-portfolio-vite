import { useState } from "react";
import { projects, sections } from "../../data/projects.js";
import { Link } from "../../lib/navigation.jsx";
import { useNavigation } from "../../lib/navigation-context.js";
import { ProjectImage } from "./Shared.jsx";
import Lightbox from "./Lightbox.jsx";
export default function Project({ project }) {
  const [viewer, setViewer] = useState(null);
  const { navigate } = useNavigation();
  const index = projects.findIndex((p) => p.slug === project.slug);
  const back = () => {
    const s = window.history.state;
    navigate(s?.returnTo || "/work", { scroll: s?.returnScroll || 0 });
  };
  return (
    <main id="main" className="page project-page">
      <button className="text-button back-to-work" onClick={back}>
        Back to Work
      </button>
      <div className="project-title">
        <span className="mono">{project.id}</span>
        <h1 tabIndex="-1">{project.title}</h1>
      </div>
      <dl className="project-facts">
        <div>
          <dt>Project</dt>
          <dd>{project.id}</dd>
        </div>
        <div>
          <dt>Section</dt>
          <dd>{sections.find((s) => s.id === project.section).name}</dd>
        </div>
        <div>
          <dt>Year</dt>
          <dd>{project.year}</dd>
        </div>
        <div>
          <dt>Figures</dt>
          <dd>{project.figures.length}</dd>
        </div>
      </dl>
      <p className="project-context mono">{project.context}</p>
      <figure className="project-cover">
        {project.figures[0].video ? (
          <video
            controls
            preload="none"
            poster={project.figures[0].src}
            aria-label={`${project.title} original recording`}
          >
            <source src={project.figures[0].video} type="video/mp4" />
          </video>
        ) : (
          <button aria-label="Enlarge cover image" onClick={() => setViewer(0)}>
            <ProjectImage project={project} />
          </button>
        )}
        <figcaption>
          {project.figures[0].caption}
          {project.figures[0].video && (
            <button
              className="text-button cover-still"
              aria-label="Enlarge cover image"
              onClick={() => setViewer(0)}
            >
              Enlarge still image
            </button>
          )}
        </figcaption>
      </figure>
      {project.figures[0].animation && (
        <details className="recording animation-recording">
          <summary>View original demonstration</summary>
          <img
            loading="lazy"
            src={project.figures[0].animation}
            alt={`${project.title} original animated demonstration`}
          />
        </details>
      )}
      <article className="project-reading">
        <p className="project-lead">{project.summary}</p>
        {project.blocks.map((block) => (
          <section key={block.title}>
            <h2>{block.title}</h2>
            {block.body.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </section>
        ))}
        <div className="project-tools">
          <h2>Tools</h2>
          <p>{project.tech.join(" · ")}</p>
          <h2>Source & context</h2>
          <ul className="source-list">
            {project.sources.map((s) => (
              <li key={s.url}>
                {s.public ? (
                  <a href={s.url} target="_blank" rel="noreferrer">
                    {s.label}
                  </a>
                ) : (
                  <span>
                    {s.label}{" "}
                    <span className="secondary">(currently private)</span>
                  </span>
                )}
              </li>
            ))}
          </ul>
          <p className="source-note">{project.yearNote}</p>
        </div>
      </article>
      <section className="figures" aria-labelledby="figures-title">
        <h2 id="figures-title">
          Figures{" "}
          <span className="mono secondary">{project.figures.length}</span>
        </h2>
        <div className="figure-grid">
          {project.figures.map((f, i) => (
            <figure key={f.src}>
              <button
                aria-label={"Enlarge figure " + (i + 1)}
                onClick={() => setViewer(i)}
              >
                <ProjectImage project={project} figure={f} loading="lazy" />
              </button>
              <figcaption>
                <span className="mono">{String(i + 1).padStart(2, "0")}</span>
                {f.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
      <nav className="project-pagination" aria-label="Project navigation">
        <div>
          {index > 0 && (
            <>
              <span className="mono secondary">
                Previous · {projects[index - 1].id}
              </span>
              <Link href={"/work/" + projects[index - 1].slug}>
                {projects[index - 1].title}
              </Link>
            </>
          )}
        </div>
        <div className="project-pagination__middle">
          <span className="mono">
            Project {index + 1} of {projects.length}
          </span>
          <button className="text-button" onClick={back}>
            Back to Work
          </button>
        </div>
        <div>
          {index < projects.length - 1 && (
            <>
              <span className="mono secondary">
                Next · {projects[index + 1].id}
              </span>
              <Link href={"/work/" + projects[index + 1].slug}>
                {projects[index + 1].title}
              </Link>
            </>
          )}
        </div>
      </nav>
      {viewer !== null && (
        <Lightbox
          project={project}
          index={viewer}
          setIndex={setViewer}
          onClose={() => setViewer(null)}
        />
      )}
    </main>
  );
}
