import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { parseRoute } from "./catalogue.js";
const Navigation = createContext(null);
export function Router({ initialUrl = "/", children }) {
  const [url, setUrl] = useState(() =>
    typeof window === "undefined"
      ? initialUrl
      : window.location.pathname + window.location.search,
  );
  const navigate = useCallback((href, options = {}) => {
    if (typeof window === "undefined") return;
    const previous = { ...window.history.state, scroll: window.scrollY };
    window.history.replaceState(previous, "");
    const from = window.location.pathname;
    const state = {
      ...previous,
      ...options.state,
      scroll: options.preserveScroll ? window.scrollY : (options.scroll ?? 0),
    };
    if (from === "/work" && href.startsWith("/work/")) {
      state.returnTo = from + window.location.search;
      state.returnScroll = window.scrollY;
    }
    window.history[options.replace ? "replaceState" : "pushState"](
      state,
      "",
      href,
    );
    setUrl(window.location.pathname + window.location.search);
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        window.scrollTo(0, state.scroll || 0);
        if (from !== window.location.pathname)
          document.querySelector("main h1")?.focus({ preventScroll: true });
      }),
    );
  }, []);
  useEffect(() => {
    const old = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    const pop = (e) => {
      setUrl(window.location.pathname + window.location.search);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => window.scrollTo(0, e.state?.scroll || 0)),
      );
    };
    window.addEventListener("popstate", pop);
    return () => {
      window.removeEventListener("popstate", pop);
      window.history.scrollRestoration = old;
    };
  }, []);
  const path = url.split("?")[0];
  const route = parseRoute(path);
  useEffect(() => {
    const title =
      route.project?.title ||
      {
        home: "Computer science & AI",
        work: "Work",
        about: "About",
        "not-found": "Page not found",
      }[route.page];
    document.title = title + " — Ian Ku";
    const description =
      route.project?.summary ||
      "Ian Ku — software engineering, AI systems, and tools for research. Selected projects and implementation notes.";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", description);
  }, [url]);
  return (
    <Navigation.Provider value={{ url, path, route, navigate }}>
      {children}
    </Navigation.Provider>
  );
}
export const useNavigation = () => useContext(Navigation);
export function Link({ href, onClick, children, ...props }) {
  const { navigate } = useNavigation();
  return (
    <a
      href={href}
      {...props}
      onClick={(e) => {
        onClick?.(e);
        if (
          e.defaultPrevented ||
          e.button !== 0 ||
          e.metaKey ||
          e.ctrlKey ||
          e.shiftKey ||
          e.altKey ||
          props.target ||
          props.download
        )
          return;
        e.preventDefault();
        navigate(href);
      }}
    >
      {children}
    </a>
  );
}
