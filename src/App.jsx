import { useEffect, useState } from "react";
import { Router, Link } from "./lib/navigation.jsx";
import { useNavigation } from "./lib/navigation-context.js";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Home from "./components/catalogue/Home.jsx";
import Work from "./components/catalogue/Work.jsx";
import Project from "./components/catalogue/Project.jsx";
import About from "./components/catalogue/About.jsx";
import { Bulb } from "./components/catalogue/Shared.jsx";
function Portfolio() {
  const { route } = useNavigation();
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    let saved;
    try {
      saved = localStorage.getItem("portfolio-theme");
    } catch {
      /* Storage is optional. */
    }
    const value = saved === "dark" ? "dark" : "light";
    setTheme(value);
    document.documentElement.dataset.theme = value;
  }, []);
  const toggle = () => {
    const value = theme === "dark" ? "light" : "dark";
    setTheme(value);
    document.documentElement.dataset.theme = value;
    try {
      localStorage.setItem("portfolio-theme", value);
    } catch {
      /* Storage is optional. */
    }
  };
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <Link href="/" className="wordmark">
          Ian Ku
        </Link>
        <nav aria-label="Main">
          <Link
            href="/work"
            aria-current={
              ["work", "project"].includes(route.page) ? "page" : undefined
            }
          >
            Work
          </Link>
          <Link
            href="/about"
            aria-current={route.page === "about" ? "page" : undefined}
          >
            About
          </Link>
          <a
            className="header-cv"
            href="/ianku/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            CV
          </a>
          <button
            className="theme-switch"
            aria-label="Dark mode"
            aria-pressed={theme === "dark"}
            onClick={toggle}
          >
            <Bulb />
            <span>{theme === "dark" ? "Light" : "Dark"}</span>
          </button>
        </nav>
      </header>
      {route.page === "home" ? (
        <Home />
      ) : route.page === "work" ? (
        <Work />
      ) : route.page === "project" ? (
        <Project key={route.project.slug} project={route.project} />
      ) : route.page === "about" ? (
        <About />
      ) : (
        <main id="main" className="page not-found">
          <span className="mono secondary">404</span>
          <h1 tabIndex="-1">This page isn’t in the archive.</h1>
          <p>Explore the project catalogue or return to the introduction.</p>
          <div>
            <Link href="/work">View Work</Link>
            <Link href="/">Home</Link>
          </div>
        </main>
      )}
      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Ian Ku</span>
        <a href="mailto:iankuyisien@gmail.com">Email</a>
        <a href="https://github.com/iankuys" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </footer>
    </>
  );
}
export default function App({ initialUrl = "/" }) {
  return (
    <Router initialUrl={initialUrl}>
      <Portfolio />
      <Analytics />
      <SpeedInsights />
    </Router>
  );
}
