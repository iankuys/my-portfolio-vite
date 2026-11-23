import test from "node:test";
import assert from "node:assert/strict";
import { nextHistoryState, canHydrate } from "../src/lib/history.js";
test("a Home selection cannot inherit a stale filtered-catalogue return target", () => {
  const next = nextHistoryState(
    { returnTo: "/work?section=AI", returnScroll: 900 },
    "/",
    "/work/inflow",
    120,
  );
  assert.equal(next.returnTo, undefined);
  assert.equal(next.returnScroll, undefined);
  assert.equal(next.scroll, 0);
});
test("entering a project from Work saves normalized catalogue state and scroll", () => {
  assert.deepEqual(
    nextHistoryState({}, "/work/?field=Agents", "/work/inflow", 480),
    { returnTo: "/work?field=Agents", returnScroll: 480, scroll: 0 },
  );
});
test("project-to-project navigation retains its catalogue target", () => {
  const next = nextHistoryState(
    { returnTo: "/work?section=SY", returnScroll: 540 },
    "/work/thread-scheduling",
    "/work/building-management",
    200,
  );
  assert.equal(next.returnTo, "/work?section=SY");
  assert.equal(next.returnScroll, 540);
  assert.equal(next.scroll, 0);
});
test("prerendered default catalogue must not hydrate query-specific markup", () => {
  assert.equal(canHydrate("/work", "/work?view=field"), false);
  assert.equal(canHydrate("/work", "/work?section=AI"), false);
  assert.equal(canHydrate("/work", "/work"), true);
  assert.equal(canHydrate(undefined, "/"), false);
});
