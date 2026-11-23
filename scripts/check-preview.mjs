import assert from "node:assert/strict";
import { projects } from "../src/data/projects.js";
const base = process.env.PREVIEW_URL || "http://localhost:4173";
const checks = [];
for (const path of [
  "/",
  "/work",
  "/about",
  ...projects.map((p) => "/work/" + p.slug),
]) {
  const response = await fetch(base + path);
  const html = await response.text();
  assert.equal(response.status, 200, path);
  assert.ok(html.includes("<main"), path);
  checks.push({ path, status: 200 });
}
for (const path of [
  "/work/no-such-project",
  "/unknown-route",
  "/work/%E0%A4%A",
]) {
  const response = await fetch(base + path);
  assert.equal(response.status, 404, path);
  assert.ok(
    (await response.text()).includes("This page isn’t in the archive."),
  );
  checks.push({ path, status: 404 });
}
const assets = new Set([
  "/ianku/resume.pdf",
  ...projects.flatMap((p) =>
    p.figures.flatMap((f) => [f.src, f.video, f.animation].filter(Boolean)),
  ),
]);
for (const path of assets) {
  const response = await fetch(base + path, { method: "HEAD" });
  assert.equal(response.status, 200, path);
  assert.ok(Number(response.headers.get("content-length")) > 0, path);
  checks.push({ path, status: 200 });
}
const range = await fetch(base + "/projects/evidence/manual-seg.mp4", {
  headers: { Range: "bytes=0-31" },
});
assert.equal(range.status, 206);
assert.equal((await range.arrayBuffer()).byteLength, 32);
checks.push({ path: "Video range request", status: 206 });
console.log(
  JSON.stringify(
    { checks: checks.length, passed: checks.length, results: checks },
    null,
    2,
  ),
);
