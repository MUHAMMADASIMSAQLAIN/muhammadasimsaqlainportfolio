import type { MouseEvent } from "react";

/**
 * Opens external links reliably, including inside sandboxed preview iframes.
 *
 * LinkedIn / Upwork send X-Frame-Options: DENY, so navigating the iframe (or
 * window.top when sandboxed) shows ERR_BLOCKED_BY_RESPONSE. Strategy:
 *  1. Try window.open (new tab) — works on published site and most previews.
 *  2. If popups are blocked, show a full-screen overlay with a real link the
 *     user can tap to leave the frame (user gesture on the overlay link is a
 *     fresh navigation, which browsers allow).
 */
export function handleExternalClick(e: MouseEvent<HTMLAnchorElement>) {
  const href = e.currentTarget.getAttribute("href");
  if (!href || !/^https?:/i.test(href)) return; // mailto:, tel:, #anchors -> default

  // Let modifier-clicks / middle clicks behave natively.
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;

  e.preventDefault();

  const win = window.open(href, "_blank", "noopener,noreferrer");
  if (win) return;

  // Popup blocked (sandboxed iframe): show an overlay with a direct link.
  showExternalLinkOverlay(href);
}

function showExternalLinkOverlay(href: string) {
  const existing = document.getElementById("ext-link-overlay");
  if (existing) existing.remove();

  const overlay = document.createElement("div");
  overlay.id = "ext-link-overlay";
  overlay.style.cssText =
    "position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;background:rgba(2,6,23,0.85);backdrop-filter:blur(8px);padding:24px;";

  const card = document.createElement("div");
  card.style.cssText =
    "max-width:420px;width:100%;background:#0b1220;border:1px solid rgba(148,163,184,0.2);border-radius:20px;padding:28px;text-align:center;font-family:system-ui,sans-serif;color:#e2e8f0;";

  const title = document.createElement("p");
  title.textContent = "Open this link in a new tab";
  title.style.cssText = "font-size:18px;font-weight:600;margin:0 0 8px;";

  const sub = document.createElement("p");
  sub.textContent = "Your browser blocked the automatic redirect inside the preview.";
  sub.style.cssText = "font-size:13px;color:#94a3b8;margin:0 0 20px;";

  const link = document.createElement("a");
  link.href = href;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = href.replace(/^https?:\/\//, "").slice(0, 48) + "…";
  link.style.cssText =
    "display:block;word-break:break-all;background:#38bdf8;color:#082f49;font-weight:600;border-radius:999px;padding:12px 18px;text-decoration:none;margin-bottom:14px;";

  const close = document.createElement("button");
  close.type = "button";
  close.textContent = "Close";
  close.style.cssText =
    "background:transparent;border:1px solid rgba(148,163,184,0.3);color:#e2e8f0;border-radius:999px;padding:10px 22px;cursor:pointer;";
  close.onclick = () => overlay.remove();

  overlay.onclick = (ev) => {
    if (ev.target === overlay) overlay.remove();
  };

  card.append(title, sub, link, close);
  overlay.appendChild(card);
  document.body.appendChild(overlay);
}
