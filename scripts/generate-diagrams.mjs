import { mkdir, writeFile } from "node:fs/promises";
import { projects } from "../src/data/projects.js";
const esc = (s) =>
  s.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
await mkdir("public/projects/diagrams", { recursive: true });
for (const p of projects) {
  const boxes = p.diagram
    .map((label, i) => {
      const x = 65 + (i % 2) * 490,
        y = 100 + Math.floor(i / 2) * 245;
      const words = label.split(" ");
      const cut = Math.ceil(words.length / 2);
      const lines =
        label.length > 22
          ? [words.slice(0, cut).join(" "), words.slice(cut).join(" ")]
          : [label];
      return `<g><rect x="${x}" y="${y}" width="380" height="132" fill="${i === 0 ? "#edf1ee" : "#fff"}" stroke="#606b65" stroke-width="1.3"/><text x="${x + 20}" y="${y + 28}" font-size="12" fill="#69756e">${["INPUT", "PROCESS", "STATE", "OUTPUT"][i]}</text>${lines.map((s, j) => `<text x="${x + 20}" y="${y + 70 + j * 27}" font-size="21">${esc(s)}</text>`).join("")}</g>`;
    })
    .join("");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 600" role="img" aria-label="${esc(p.title)} implementation schematic"><defs><marker id="a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0 10 5 0 10" fill="none" stroke="#65796d"/></marker></defs><rect width="1000" height="600" fill="#fff"/><g fill="#24332b" font-family="Arial,sans-serif"><text x="65" y="48" font-size="13" letter-spacing="1.5">${esc(p.id)} / IMPLEMENTATION OVERVIEW</text>${boxes}<g stroke="#65796d" fill="none" stroke-width="1.5" marker-end="url(#a)"><path d="M449 166H545"/><path d="M744 241V290H255V335"/><path d="M449 411H545"/></g><text x="65" y="555" font-size="12" fill="#778078">${esc(p.tech.slice(0, 5).join(" · "))}</text></g></svg>`;
  await writeFile(`public/projects/diagrams/${p.slug}.svg`, svg);
}
console.log(`Generated ${projects.length} original implementation schematics.`);
