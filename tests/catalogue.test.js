import test from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { projects, sections } from "../src/data/projects.js";
import {
  filterProjects,
  parseWorkSearch,
  workUrl,
  parseRoute,
  selectProjects,
} from "../src/lib/catalogue.js";

const sample = [
  { section: "AI", fields: ["Agents", "Software"], media: ["Web"] },
  { section: "SY", fields: ["Concurrency", "Software"], media: ["Experiment"] },
  { section: "AI", fields: ["Machine learning"], media: ["Experiment"] },
];
test("unknown filter values are discarded while recognized selections remain removable", () => {
  const s = parseWorkSearch(
    "?section=NOPE,AI&field=Ghost,Agents&medium=Unknown,Web",
  );
  assert.deepEqual(s.sections, ["AI"]);
  assert.deepEqual(s.fields, ["Agents"]);
  assert.deepEqual(s.media, ["Web"]);
});
test("catalogue accounts for all 22 accepted projects and excludes rejected work", () => {
  assert.equal(projects.length, 22);
  assert.equal(new Set(projects.map((p) => p.slug)).size, 22);
  assert.equal(new Set(projects.map((p) => p.id)).size, 22);
  assert.ok(!/archiboost|mkr-app/i.test(JSON.stringify(projects)));
  assert.ok(projects.every((p) => sections.some((s) => s.id === p.section)));
});
test("each page has substantive content, source provenance and captioned assets", () => {
  for (const p of projects) {
    assert.ok(p.title && p.summary && p.context && p.year, p.slug);
    assert.ok(p.blocks?.length >= 2, p.slug);
    assert.ok(
      p.blocks.reduce((n, b) => n + b.body.join(" ").length, 0) > 450,
      p.slug,
    );
    assert.ok(
      p.figures?.length >= 1 &&
        p.figures.every((f) => f.src && f.alt && f.caption),
      p.slug,
    );
    assert.ok(
      p.sources?.length >= 1 &&
        p.sources.every((s) => /^https:\/\/github.com\//.test(s.url)),
      p.slug,
    );
  }
});
test("all local figure assets exist", () => {
  for (const p of projects)
    for (const f of p.figures)
      assert.ok(
        existsSync(new URL("../public" + f.src, import.meta.url)),
        `${p.slug}: ${f.src}`,
      );
});
test("no filters shows all projects", () =>
  assert.equal(filterProjects(sample, parseWorkSearch("")).length, 3));
test("filters OR within rows and AND across rows", () => {
  assert.equal(
    filterProjects(sample, { sections: ["AI", "SY"], fields: [], media: [] })
      .length,
    3,
  );
  assert.equal(
    filterProjects(sample, {
      sections: ["AI"],
      fields: ["Software"],
      media: [],
    }).length,
    1,
  );
  assert.equal(
    filterProjects(sample, {
      sections: [],
      fields: ["Software", "Machine learning"],
      media: ["Experiment"],
    }).length,
    2,
  );
});
test("incompatible filters produce an empty collection", () =>
  assert.equal(
    filterProjects(sample, {
      sections: ["SY"],
      fields: ["Machine learning"],
      media: [],
    }).length,
    0,
  ));
test("query parsing validates view, rows and mat and handles repeated or comma-separated values", () => {
  const s = parseWorkSearch(
    "?view=field&rows=medium&mat=fill&section=AI,SY&section=AI&field=Agents&medium=Web",
  );
  assert.deepEqual(s, {
    view: "field",
    rows: "medium",
    mat: "fill",
    sections: ["AI", "SY"],
    fields: ["Agents"],
    media: ["Web"],
  });
  assert.equal(parseWorkSearch("?view=bad&rows=bad&mat=bad").view, "cabinet");
  assert.equal(parseWorkSearch("?mat=bad").mat, "small");
});
test("filter URLs round trip and defaults stay compact", () => {
  const s = parseWorkSearch(
    "?view=field&rows=section&mat=middle&section=AI&field=Agents&medium=Web",
  );
  assert.deepEqual(parseWorkSearch(workUrl(s).split("?")[1]), s);
  assert.equal(workUrl(parseWorkSearch("")), "/work");
});
test("routes distinguish valid project pages, unknown slugs and malformed encodings", () => {
  assert.deepEqual(parseRoute("/"), { page: "home" });
  assert.deepEqual(parseRoute("/work/"), { page: "work" });
  assert.equal(
    parseRoute("/work/thread-scheduling").project?.slug,
    "thread-scheduling",
  );
  assert.equal(parseRoute("/work/no-such-project").page, "not-found");
  assert.equal(parseRoute("/work/%E0%A4%A").page, "not-found");
  assert.equal(parseRoute("/something").page, "not-found");
});
test("selections are deterministic, unique, bounded and change across seeds", () => {
  const pool = Array.from({ length: 22 }, (_, i) => ({ slug: String(i) }));
  assert.deepEqual(selectProjects(pool, 17, 6), selectProjects(pool, 17, 6));
  assert.equal(new Set(selectProjects(pool, 17, 6).map((p) => p.slug)).size, 6);
  assert.notDeepEqual(selectProjects(pool, 17, 6), selectProjects(pool, 18, 6));
  assert.equal(selectProjects(pool, 1, 99).length, 22);
  assert.equal(selectProjects([], 1, 6).length, 0);
});
