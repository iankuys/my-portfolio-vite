import { useState } from "react";
import { Link } from "../../lib/navigation.jsx";
export function ProjectImage({
  project,
  figure = project.figures[0],
  ...props
}) {
  const [failed, setFailed] = useState(false);
  return failed ? (
    <span className="image-fallback">
      {project.title}
      <small>Visual unavailable</small>
    </span>
  ) : (
    <img
      {...props}
      src={figure.src}
      alt={figure.alt}
      onError={() => setFailed(true)}
    />
  );
}
export function ProjectCard({ project, summary = false }) {
  return (
    <article className="project-card">
      <Link
        href={"/work/" + project.slug}
        aria-label={`${project.id} ${project.title}, ${project.year}`}
      >
        <div className="project-card__image">
          <ProjectImage project={project} loading="lazy" />
        </div>
        <div className="project-card__text">
          <div className="card-meta">
            <span>{project.id}</span>
            <span>{project.year}</span>
          </div>
          <h3>{project.title}</h3>
          {summary && <p>{project.summary}</p>}
        </div>
      </Link>
    </article>
  );
}
export function Bulb() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
    >
      <circle cx="12" cy="12" r="8" />
      <path d="M12 4a8 8 0 0 1 0 16Z" fill="currentColor" stroke="none" />
    </svg>
  );
}
