import { useEffect, useState } from "react";
import {
  projects,
  sections,
  fieldNames,
  mediumNames,
} from "../../data/projects.js";
import {
  filterProjects,
  parseWorkSearch,
  workUrl,
} from "../../lib/catalogue.js";
import { Link } from "../../lib/navigation.jsx";
import { useNavigation } from "../../lib/navigation-context.js";
import { ProjectCard } from "./Shared.jsx";

function Toggle({ active, onClick, children, ...props }) {
  return (
    <button
      type="button"
      className={"toggle" + (active ? " is-active" : "")}
      aria-pressed={active}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
function FilterRow({ label, items, selected, onChange }) {
  return (
    <div className="filter-row">
      <span className="filter-label mono">{label}</span>
      <div className="filter-row__items">
        {items.map((i) => (
          <Toggle
            key={i.id}
            active={selected.includes(i.id)}
            onClick={() => onChange(i.id)}
          >
            {i.name}
            <span className="filter-count">{i.count}</span>
          </Toggle>
        ))}
      </div>
    </div>
  );
}
function FieldView({ state, visible, toggle }) {
  const [hovered, setHovered] = useState(null);
  const sorted = [...projects].sort(
    (a, b) => a.year - b.year || a.id.localeCompare(b.id),
  );
  const names =
    state.rows === "section"
      ? sections.map((s) => s.id)
      : state.rows === "medium"
        ? mediumNames
        : fieldNames;
  const property =
    state.rows === "section"
      ? "sections"
      : state.rows === "medium"
        ? "media"
        : "fields";
  const belongs = (p, n) =>
    state.rows === "section"
      ? p.section === n
      : (state.rows === "medium" ? p.media : p.fields).includes(n);
  const label = (n) =>
    state.rows === "section" ? sections.find((s) => s.id === n).name : n;
  const width = 1020,
    height = names.length * 36 + 90;
  const active = new Set(visible.map((p) => p.slug));
  const current = hovered && active.has(hovered.slug) ? hovered : null;
  return (
    <section className="fieldview" aria-label="Project field view">
      <div className="fieldview__heading">
        <div className="control-group">
          <span className="mono secondary">Rows</span>
          {["section", "field", "medium"].map((n) => (
            <Toggle
              key={n}
              active={state.rows === n}
              onClick={() => toggle("rows", n)}
            >
              {n}
            </Toggle>
          ))}
        </div>
        <p>
          One column per project, oldest at the left. A mark in every row it
          belongs to.
        </p>
      </div>
      <div
        className="fieldview__scroll"
        role="region"
        aria-label="Project timeline; scroll horizontally on smaller screens"
        tabIndex="0"
      >
        <svg
          className="fieldview__plot"
          viewBox={`0 0 ${width} ${height}`}
          role="group"
          aria-label={`Projects by year and ${state.rows}`}
        >
          {names.map((n, r) => (
            <g key={n}>
              <line
                x1="218"
                x2="990"
                y1={40 + r * 36}
                y2={40 + r * 36}
                className="field-rule"
              />
              <text
                x="198"
                y={44 + r * 36}
                textAnchor="end"
                className={
                  "field-name" +
                  (state[property].includes(n) ? " is-picked" : "")
                }
                role="button"
                tabIndex="0"
                aria-pressed={state[property].includes(n)}
                onClick={() => toggle(property, n)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggle(property, n);
                  }
                }}
              >
                {label(n)}
              </text>
              <text
                x="1010"
                y={44 + r * 36}
                textAnchor="end"
                className="field-count"
              >
                {projects.filter((p) => belongs(p, n)).length}
              </text>
            </g>
          ))}
          {sorted.map((p, i) => {
            const x = 235 + i * 35;
            const rows = names
              .map((n, r) => (belongs(p, n) ? r : -1))
              .filter((r) => r >= 0);
            const enabled = active.has(p.slug);
            const marks = (
              <>
                <rect
                  x={x - 13}
                  y="22"
                  width="26"
                  height={names.length * 36}
                  className="field-hit"
                />
                {rows.length > 1 && (
                  <line
                    x1={x}
                    x2={x}
                    y1={40 + Math.min(...rows) * 36}
                    y2={40 + Math.max(...rows) * 36}
                    className="field-stem"
                  />
                )}
                {rows.map((r) => (
                  <circle key={r} cx={x} cy={40 + r * 36} r="4" />
                ))}
              </>
            );
            return enabled ? (
              <Link
                key={p.slug}
                href={"/work/" + p.slug}
                aria-label={`${p.id} ${p.title}, ${p.year}`}
                className={
                  "field-col" + (current?.slug === p.slug ? " is-focused" : "")
                }
                onMouseEnter={() => setHovered(p)}
                onFocus={() => setHovered(p)}
                onMouseLeave={() => setHovered(null)}
                onBlur={() => setHovered(null)}
              >
                {marks}
              </Link>
            ) : (
              <g key={p.slug} className="field-col is-off" aria-hidden="true">
                {marks}
              </g>
            );
          })}
          {[...new Set(sorted.map((p) => p.year))].map((year) => {
            const indexes = sorted
              .map((p, i) => (p.year === year ? i : -1))
              .filter((i) => i >= 0);
            return (
              <text
                key={year}
                x={235 + (indexes[0] + indexes.at(-1)) * 17.5}
                y={height - 20}
                textAnchor="middle"
                className="field-year"
              >
                {year}
              </text>
            );
          })}
        </svg>
      </div>
      <div className="field-preview" aria-live="polite">
        {current ? (
          <>
            <span className="mono secondary">
              {current.id} · {current.year}
            </span>
            <h2>
              <Link href={"/work/" + current.slug}>{current.title}</Link>
            </h2>
            <p>{current.summary}</p>
            <p className="mono secondary">
              {sections.find((s) => s.id === current.section).name} ·{" "}
              {current.fields.join(", ")} · {current.media.join(", ")}
            </p>
          </>
        ) : (
          <>
            <p>
              Point at a column or focus it with the keyboard to see a project.
              Click or press Enter to open it.
            </p>
            <p>Click a row’s name to filter the archive.</p>
          </>
        )}
      </div>
    </section>
  );
}
export default function Work() {
  const { url, navigate } = useNavigation();
  const state = parseWorkSearch(url.split("?")[1]);
  const visible = filterProjects(projects, state);
  const change = (patch) =>
    navigate(workUrl({ ...state, ...patch }), { preserveScroll: true });
  const toggle = (key, value) => {
    if (["view", "rows"].includes(key)) {
      change({ [key]: value });
      return;
    }
    change({
      [key]: state[key].includes(value)
        ? state[key].filter((v) => v !== value)
        : [...state[key], value],
    });
  };
  const mat = (value) => {
    try {
      localStorage.setItem("portfolio-mat", value);
    } catch {
      /* Storage is optional. */
    }
    change({ mat: value });
  };
  useEffect(() => {
    if (new URLSearchParams(url.split("?")[1]).has("mat")) return;
    try {
      const saved = localStorage.getItem("portfolio-mat");
      if (["middle", "fill"].includes(saved))
        navigate(
          workUrl({ ...parseWorkSearch(url.split("?")[1]), mat: saved }),
          { replace: true, preserveScroll: true },
        );
    } catch {
      /* Storage is optional. */
    }
  }, [navigate, url]);
  const hasFilters =
    state.sections.length + state.fields.length + state.media.length > 0;
  return (
    <main id="main" className="page work-page">
      <div className="work-heading">
        <h1 tabIndex="-1">Work</h1>
        <div className="work-controls">
          <div className="control-group" aria-label="View">
            {["cabinet", "field"].map((n) => (
              <Toggle
                key={n}
                active={state.view === n}
                onClick={() => change({ view: n })}
              >
                {n}
              </Toggle>
            ))}
          </div>
          <div className="control-group" aria-label="Image mat">
            <span className="mono secondary">Mat</span>
            {["small", "middle", "fill"].map((n) => (
              <Toggle key={n} active={state.mat === n} onClick={() => mat(n)}>
                {n}
              </Toggle>
            ))}
          </div>
          <span className="mono result-count" role="status">
            {visible.length} {visible.length === 1 ? "project" : "projects"}
          </span>
        </div>
      </div>
      <div className="filters" aria-label="Project filters">
        <FilterRow
          label="Section"
          items={sections.map((s) => ({
            ...s,
            count: projects.filter((p) => p.section === s.id).length,
          }))}
          selected={state.sections}
          onChange={(v) => toggle("sections", v)}
        />
        <FilterRow
          label="Field"
          items={fieldNames.map((f) => ({
            id: f,
            name: f,
            count: projects.filter((p) => p.fields.includes(f)).length,
          }))}
          selected={state.fields}
          onChange={(v) => toggle("fields", v)}
        />
        <FilterRow
          label="Medium"
          items={mediumNames.map((f) => ({
            id: f,
            name: f,
            count: projects.filter((p) => p.media.includes(f)).length,
          }))}
          selected={state.media}
          onChange={(v) => toggle("media", v)}
        />
        {hasFilters && (
          <button
            className="text-button clear-filters"
            onClick={() => change({ sections: [], fields: [], media: [] })}
          >
            Clear all
          </button>
        )}
      </div>
      {!visible.length ? (
        <div className="empty-state">
          <h2>No project carries all of these together.</h2>
          <p>Remove a filter or clear the selection to explore the archive.</p>
          <button
            className="text-button"
            onClick={() => change({ sections: [], fields: [], media: [] })}
          >
            Clear all filters
          </button>
        </div>
      ) : state.view === "field" ? (
        <FieldView state={state} visible={visible} toggle={toggle} />
      ) : (
        <div className={"cabinet mat-" + state.mat}>
          {sections.map((s) => {
            const group = visible.filter((p) => p.section === s.id);
            return (
              group.length > 0 && (
                <section
                  key={s.id}
                  className="work-section"
                  aria-labelledby={"section-" + s.id}
                >
                  <h2 id={"section-" + s.id}>
                    <span className="mono">{s.id}</span>
                    {s.name}
                    <span className="mono section-count">{group.length}</span>
                  </h2>
                  <div className="project-grid">
                    {group.map((p) => (
                      <ProjectCard key={p.slug} project={p} />
                    ))}
                  </div>
                </section>
              )
            );
          })}
        </div>
      )}
      <p className="archive-note">
        Years indicate the source archive date, except where the original
        project date is documented. Each project explains its context and scope.
      </p>
    </main>
  );
}
