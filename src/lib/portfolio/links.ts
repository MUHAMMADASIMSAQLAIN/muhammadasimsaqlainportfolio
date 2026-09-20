import type { MouseEvent } from "react";

/** Opens external links outside the embedded preview frame. */
export function handleExternalClick(e: MouseEvent<HTMLAnchorElement>) {
  const href = e.currentTarget.getAttribute("href");
  if (!href || !/^https?:/i.test(href)) return; // mailto:, tel:, #anchors -> default

  // Let modifier-clicks / middle clicks behave natively.
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;

  if (window.self !== window.top) {
    // A user-initiated top-level navigation avoids LinkedIn/Upwork's iframe ban.
    e.preventDefault();
    const escaped = window.open(href, "_top");
    if (!escaped) window.open(href, "_blank", "noopener,noreferrer");
    return;
  }

  // Outside the preview, retain normal browser new-tab behavior.
  e.currentTarget.target = "_blank";
}
