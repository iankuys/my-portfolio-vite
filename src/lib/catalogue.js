import {
  projects,
  sections,
  fieldNames,
  mediumNames,
} from "../data/projects.js";
const values = (p, key) => [
  ...new Set(
    p
      .getAll(key)
      .flatMap((v) => v.split(","))
      .map((v) => v.trim())
      .filter(Boolean),
  ),
];
export function parseWorkSearch(search = "") {
  const p = new URLSearchParams(search);
  return {
    view: p.get("view") === "field" ? "field" : "cabinet",
    rows: ["section", "medium"].includes(p.get("rows"))
      ? p.get("rows")
      : "field",
    mat: ["middle", "fill"].includes(p.get("mat")) ? p.get("mat") : "small",
    sections: values(p, "section").filter((v) =>
      sections.some((s) => s.id === v),
    ),
    fields: values(p, "field").filter((v) => fieldNames.includes(v)),
    media: values(p, "medium").filter((v) => mediumNames.includes(v)),
  };
}
export function workUrl(s) {
  const p = new URLSearchParams();
  if (s.view === "field") p.set("view", "field");
  if (s.rows && s.rows !== "field") p.set("rows", s.rows);
  if (s.mat && s.mat !== "small") p.set("mat", s.mat);
  for (const [key, items] of [
    ["section", s.sections],
    ["field", s.fields],
    ["medium", s.media],
  ])
    if (items?.length) p.set(key, items.join(","));
  return "/work" + (p.size ? "?" + p.toString() : "");
}
export function filterProjects(list, s) {
  return list.filter(
    (p) =>
      (!s.sections?.length || s.sections.includes(p.section)) &&
      (!s.fields?.length || s.fields.some((f) => p.fields.includes(f))) &&
      (!s.media?.length || s.media.some((m) => p.media.includes(m))),
  );
}
export function parseRoute(path) {
  const clean = path.replace(/\/+$/, "") || "/";
  if (clean === "/") return { page: "home" };
  if (clean === "/work") return { page: "work" };
  if (clean === "/about") return { page: "about" };
  if (clean.startsWith("/work/")) {
    let slug;
    try {
      slug = decodeURIComponent(clean.slice(6));
    } catch {
      return { page: "not-found" };
    }
    const project = projects.find((p) => p.slug === slug);
    if (project) return { page: "project", project };
  }
  return { page: "not-found" };
}
export function selectProjects(list, seed, count = 6) {
  let s = (Number(seed) || 1) >>> 0;
  const result = [...list];
  for (let i = result.length - 1; i > 0; i--) {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    const j = s % (i + 1);
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result.slice(0, Math.max(0, count));
}
