import test from "node:test";
import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import { projects } from "../src/data/projects.js";
for (const [path, title] of [
  ["/", "Computer science"],
  ["/work", "Work"],
  ["/about", "Ian Ku"],
  ...projects.map((p) => ["/work/" + p.slug, p.title]),
]) {
  test(`production HTML contains readable content and metadata: ${path}`, async () => {
    const file = new URL(
      "../dist" + (path === "/" ? "" : path) + "/index.html",
      import.meta.url,
    );
    const html = await readFile(file, "utf8");
    assert.ok(html.includes("<main"), path);
    assert.ok(html.includes(title.replaceAll("&", "&amp;")), path);
    assert.match(html, /<meta name="description" content="[^"]{30,}"/);
    assert.ok(!html.includes("hi :D"));
    assert.ok(!/archiboost|mkr-app/i.test(html));
  });
}
test("all videos, recordings and CV exist in production assets", async () => {
  const paths = new Set([
    "/ianku/resume.pdf",
    ...projects.flatMap((p) =>
      p.figures.flatMap((f) => [f.src, f.video, f.animation].filter(Boolean)),
    ),
  ]);
  for (const path of paths)
    assert.ok(
      (await stat(new URL("../dist" + path, import.meta.url))).size > 0,
      path,
    );
});
