import test, { after } from "node:test";
import assert from "node:assert/strict";
import { createServer } from "vite";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { projects, featuredSlugs } from "../src/data/projects.js";

const server = await createServer({
  server: { middlewareMode: true },
  appType: "custom",
});
after(() => server.close());
const { default: App } = await server.ssrLoadModule("/src/App.jsx");
const render = (url) =>
  renderToStaticMarkup(createElement(App, { initialUrl: url }));
const entries = (html) =>
  [...html.matchAll(/data-project-slug="([^"]+)"/g)].map((m) => m[1]);

// Losing a list entry, routing a row to the wrong case, or previewing an
// unfiltered project must fail these user-visible SSR integration checks.
test("every Cabinet result remains a navigable entry before client JavaScript", () => {
  const html = render("/work");
  assert.equal(new Set(entries(html)).size, 22);
  for (const project of projects)
    assert.ok(html.includes(`href="/work/${project.slug}"`));
});
test("a filtered catalogue defaults its preview to a matching project", () => {
  const html = render("/work?section=SY&field=Concurrency");
  assert.deepEqual(entries(html), ["thread-scheduling", "building-management"]);
  assert.ok(html.includes('data-preview-slug="thread-scheduling"'));
  assert.ok(!html.includes('data-preview-slug="inflow"'));
});
test("empty filtered catalogues retain a clear action and no preview", () => {
  const html = render("/work?section=AI&medium=Hardware");
  assert.ok(html.includes("Clear all filters"));
  assert.equal(entries(html).length, 0);
  assert.ok(!html.includes("data-preview-slug"));
});
test("Home retains eight unique selections including the six featured projects", () => {
  const html = render("/");
  const selected = entries(html);
  assert.equal(selected.length, 8);
  assert.equal(new Set(selected).size, 8);
  assert.ok(featuredSlugs.every((slug) => selected.includes(slug)));
  assert.ok(html.includes(`data-preview-slug="${featuredSlugs[0]}"`));
});
