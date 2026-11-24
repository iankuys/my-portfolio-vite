import { useState } from "react";
import { Link } from "../../lib/navigation.jsx";
import { ProjectImage } from "./Shared.jsx";

export default function ProjectIndex({
  groups,
  mat = "small",
  label = "Projects",
}) {
  const [activeSlug, setActiveSlug] = useState(null);
  const items = groups.flatMap((group) => group.projects);
  const current =
    items.find((project) => project.slug === activeSlug) || items[0];
  if (!current) return null;
  return (
    <div className={`project-index mat-${mat}`} aria-label={label}>
      <div className="project-index__list">
        {groups
          .filter((group) => group.projects.length)
          .map((group) => (
            <section
              className="index-group"
              key={group.id}
              aria-label={group.title || label}
            >
              {group.title && (
                <h2 className="index-group__title">
                  {group.title}
                  <span>{group.projects.length}</span>
                </h2>
              )}
              <ul>
                {group.projects.map((project) => (
                  <li
                    key={project.slug}
                    className={`project-index__entry${current.slug === project.slug ? " is-previewed" : ""}`}
                    data-project-slug={project.slug}
                  >
                    <Link
                      className="project-index__link"
                      href={`/work/${project.slug}`}
                      onMouseEnter={() => setActiveSlug(project.slug)}
                      onFocus={() => setActiveSlug(project.slug)}
                    >
                      <div
                        className="project-index__thumbnail"
                        aria-hidden="true"
                      >
                        <ProjectImage
                          key={project.figures[0].src}
                          project={project}
                          loading="lazy"
                          alt=""
                        />
                      </div>
                      <div className="project-index__copy">
                        <div className="project-index__title">
                          <h3>{project.title}</h3>
                          <span className="project-index__year">
                            {project.year}
                          </span>
                        </div>
                        <p>{project.summary}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
      </div>
      <aside
        className="project-index__preview"
        data-preview-slug={current.slug}
        aria-label="Project preview"
      >
        <figure>
          <Link
            href={`/work/${current.slug}`}
            aria-label={`Open ${current.title}`}
            className="project-index__image"
          >
            <ProjectImage key={current.figures[0].src} project={current} />
          </Link>
          <figcaption>
            <div className="project-index__caption-title" aria-live="polite">
              <span>{current.title}</span>
              <span>{current.year}</span>
            </div>
            <p>{current.figures[0].caption}</p>
          </figcaption>
        </figure>
      </aside>
    </div>
  );
}
