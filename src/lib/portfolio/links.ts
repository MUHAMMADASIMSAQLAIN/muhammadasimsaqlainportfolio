import type { MouseEvent } from "react";

/**
 * Opens external links reliably, including inside sandboxed preview iframes
 * where a plain target="_blank" navigation can be swallowed.
 * mailto: links are left to the browser's default handling.
 */
export function handleExternalClick(e: MouseEvent<HTMLAnchorElement>) {
  const href = e.currentTarget.getAttribute("href");
  if (!href || !/^https?:/i.test(href)) return; // mailto:, tel:, #anchors -> default

  // Let modifier-clicks / middle clicks behave natively.
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;

  const win = window.open(href, "_blank", "noopener,noreferrer");
  if (win) {
    e.preventDefault();
    return;
  }

  // Popup blocked (common in sandboxed iframes) -> navigate the top-most frame.
  e.preventDefault();
  try {
    (window.top ?? window).location.href = href;
  } catch {
    window.location.href = href;
  }
}
