import { useCallback, useEffect, useRef, useState } from "react";
import { parseRoute } from "./catalogue.js";
import { nextHistoryState } from "./history.js";
import { Navigation, useNavigation } from "./navigation-context.js";
const key = () => Math.random().toString(36).slice(2) + Date.now().toString(36);
export function Router({ initialUrl = "/", children }) {
  const [url, setUrl] = useState(() =>
    typeof window === "undefined"
      ? initialUrl
      : window.location.pathname + window.location.search,
  );
  const currentKey = useRef(null),
    positions = useRef(new Map());
  const restore = (y, focus = false) =>
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        window.scrollTo(0, y);
        if (focus)
          document.querySelector("main h1")?.focus({ preventScroll: true });
      }),
    );
  const navigate = useCallback((href, options = {}) => {
    const previous = {
      ...window.history.state,
      scroll: window.scrollY,
      key: currentKey.current || key(),
    };
    positions.current.set(previous.key, previous.scroll);
    window.history.replaceState(previous, "");
    const from = window.location.pathname + window.location.search;
    const state = {
      ...nextHistoryState(previous, from, href, window.scrollY, options),
      key: options.replace ? previous.key : key(),
    };
    window.history[options.replace ? "replaceState" : "pushState"](
      state,
      "",
      href,
    );
    currentKey.current = state.key;
    positions.current.set(state.key, state.scroll);
    setUrl(window.location.pathname + window.location.search);
    restore(state.scroll, from.split("?")[0] !== window.location.pathname);
  }, []);
  useEffect(() => {
    const old = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    const initial = {
      ...window.history.state,
      key: window.history.state?.key || key(),
    };
    currentKey.current = initial.key;
    window.history.replaceState(initial, "");
    const track = () =>
      positions.current.set(currentKey.current, window.scrollY);
    const persist = () =>
      window.history.replaceState(
        { ...window.history.state, scroll: window.scrollY },
        "",
      );
    const pop = (e) => {
      track();
      const next = e.state || {};
      currentKey.current = next.key || key();
      setUrl(window.location.pathname + window.location.search);
      restore(positions.current.get(currentKey.current) ?? next.scroll ?? 0);
    };
    window.addEventListener("scroll", track, { passive: true });
    window.addEventListener("pagehide", persist);
    window.addEventListener("popstate", pop);
    return () => {
      window.removeEventListener("scroll", track);
      window.removeEventListener("pagehide", persist);
      window.removeEventListener("popstate", pop);
      window.history.scrollRestoration = old;
    };
  }, []);
  const path = url.split("?")[0],
    route = parseRoute(path);
  const title =
    (route.project?.title ||
      {
        home: "Computer science & AI",
        work: "Work",
        about: "About",
        "not-found": "Page not found",
      }[route.page]) + " — Ian Ku";
  const description =
    route.project?.summary ||
    "Ian Ku — software engineering, AI systems, and tools for research. Selected projects and implementation notes.";
  useEffect(() => {
    document.title = title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", description);
  }, [title, description]);
  return (
    <Navigation.Provider value={{ url, path, route, navigate }}>
      {children}
    </Navigation.Provider>
  );
}
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
