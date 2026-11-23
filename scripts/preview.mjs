import http from "node:http";
import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { resolve, sep, extname } from "node:path";
const root = resolve("dist");
const mime = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".gif": "image/gif",
  ".mp4": "video/mp4",
  ".pdf": "application/pdf",
  ".ico": "image/x-icon",
};
const server = http.createServer(async (req, res) => {
  try {
    let path;
    try {
      path = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
    } catch {
      path = "/__invalid";
    }
    let file = resolve(root, "." + path);
    if (file !== root && !file.startsWith(root + sep)) {
      res.writeHead(403);
      res.end();
      return;
    }
    let info;
    try {
      info = await stat(file);
      if (info.isDirectory()) {
        file = resolve(file, "index.html");
        info = await stat(file);
      }
    } catch {
      file = resolve(root, "404.html");
      info = await stat(file);
      res.statusCode = 404;
    }
    res.setHeader(
      "Content-Type",
      mime[extname(file)] || "application/octet-stream",
    );
    res.setHeader("Accept-Ranges", "bytes");
    const match = req.headers.range?.match(/^bytes=(\d+)-(\d*)$/);
    if (match && res.statusCode !== 404) {
      const start = Number(match[1]),
        end = Math.min(
          match[2] ? Number(match[2]) : info.size - 1,
          info.size - 1,
        );
      if (start > end) {
        res.writeHead(416);
        res.end();
        return;
      }
      res.writeHead(206, {
        "Content-Range": `bytes ${start}-${end}/${info.size}`,
        "Content-Length": end - start + 1,
      });
      if (req.method === "HEAD") res.end();
      else createReadStream(file, { start, end }).pipe(res);
    } else {
      res.setHeader("Content-Length", info.size);
      if (req.method === "HEAD") res.end();
      else createReadStream(file).pipe(res);
    }
  } catch {
    res.writeHead(500);
    res.end("Preview unavailable");
  }
});
server.listen(Number(process.env.PORT) || 4173, "0.0.0.0", () =>
  console.log(
    "Production preview: http://localhost:" +
      (Number(process.env.PORT) || 4173),
  ),
);
