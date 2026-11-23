const cleanPath = (url) => url.split("?")[0].replace(/\/+$/, "") || "/";
export function nextHistoryState(
  previous,
  from,
  href,
  currentScroll,
  options = {},
) {
  const source = cleanPath(from),
    destination = cleanPath(href);
  const next = {
    ...options.state,
    scroll: options.preserveScroll ? currentScroll : (options.scroll ?? 0),
  };
  if (source === "/work" && destination.startsWith("/work/")) {
    next.returnTo =
      "/work" + (from.includes("?") ? "?" + from.split("?")[1] : "");
    next.returnScroll = currentScroll;
  } else if (
    source.startsWith("/work/") &&
    destination.startsWith("/work/") &&
    previous.returnTo
  ) {
    next.returnTo = previous.returnTo;
    next.returnScroll = previous.returnScroll || 0;
  }
  return next;
}
export const canHydrate = (prerenderUrl, currentUrl) =>
  Boolean(prerenderUrl) && prerenderUrl === currentUrl;
