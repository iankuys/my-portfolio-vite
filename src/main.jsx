import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { canHydrate } from "./lib/history.js";
const root = document.getElementById("root");
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);
if (
  root.hasChildNodes() &&
  canHydrate(
    root.dataset.prerenderUrl,
    window.location.pathname + window.location.search,
  )
)
  hydrateRoot(root, app);
else createRoot(root).render(app);
