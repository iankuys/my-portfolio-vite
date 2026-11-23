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
      width="26"
      height="30"
      viewBox="0 0 20 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
    >
      <path d="M6 17c0-4-3-4-3-8a7 7 0 0 1 14 0c0 4-3 4-3 8ZM7 20h6m-5 3h4M10 0v-2M0 3l-2-2m22 2 2-2M-1 9h-2m24 0h2" />
    </svg>
  );
}
