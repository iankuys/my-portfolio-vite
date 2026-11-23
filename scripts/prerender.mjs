import { readFile, writeFile, mkdir } from "node:fs/promises";
import { createServer } from "vite";
import { createElement } from "react";
import { renderToString } from "react-dom/server";
import { projects } from "../src/data/projects.js";
const escape = (s) =>
  s
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
const template = await readFile("dist/index.html", "utf8");
const server = await createServer({
  server: { middlewareMode: true },
  appType: "custom",
  logLevel: "error",
});
try {
  const { default: App } = await server.ssrLoadModule("/src/App.jsx");
  const pages = [
    ["/", "Computer science & AI"],
    ["/work", "Work"],
    ["/about", "About"],
    ...projects.map((p) => ["/work/" + p.slug, p.title, p.summary]),
  ];
  for (const [path, title, summary] of pages) {
    const desc =
      summary ||
      "Ian Ku — software engineering, AI systems, and tools for research. Selected projects and implementation notes.";
    const content = renderToString(createElement(App, { initialUrl: path }));
    let html = template
      .replace('<div id="root"></div>', `<div id="root">${content}</div>`)
      .replace(
        /<title>.*?<\/title>/,
        `<title>${escape(title)} — Ian Ku</title>`,
      )
      .replace(
        /(<meta name="description" content=")[^"]*("\s*\/?>)/,
        `$1${escape(desc)}$2`,
      )
      .replace(
        /(<meta property="og:title" content=")[^"]*("\s*\/?>)/,
        `$1${escape(title)} — Ian Ku$2`,
      )
      .replace(
        /(<meta property="og:description" content=")[^"]*("\s*\/?>)/,
        `$1${escape(desc)}$2`,
      );
    const dir = "dist" + (path === "/" ? "" : path);
    await mkdir(dir, { recursive: true });
    await writeFile(dir + "/index.html", html);
  }
  console.log(`Prerendered ${pages.length} static routes.`);
} finally {
  await server.close();
}
