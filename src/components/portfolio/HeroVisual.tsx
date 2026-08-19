import { Bot, Cpu, Workflow, Plug, Database, Mail } from "lucide-react";

const nodes = [
  { icon: Cpu, label: "LLM", sub: "OpenAI · Gemini" },
  { icon: Bot, label: "AI Agent", sub: "Tool calling" },
  { icon: Workflow, label: "n8n", sub: "Orchestration" },
  { icon: Plug, label: "APIs", sub: "FastAPI" },
  { icon: Database, label: "Database", sub: "MongoDB · Vectors" },
  { icon: Mail, label: "Business Tools", sub: "Gmail · Calendar" },
];

/** Abstract, illustrative orchestration graphic — not a screenshot of a client system. */
export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      {/* ambient glow + orbit */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-radial-glow animate-pulse-glow"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 grid place-items-center"
      >
        <div className="h-[105%] w-[105%] rounded-full border border-primary/10 animate-orbit">
          <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-primary shadow-glow" />
          <span className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-cyan" />
        </div>
      </div>

      <div className="panel noise relative overflow-hidden rounded-3xl p-5 sm:p-6 animate-float">
        <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          <span>Agent Orchestration</span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            live flow
          </span>
        </div>

        <ul className="mt-5 space-y-2.5">
          {nodes.map((n, i) => (
            <li key={n.label} className="relative">
              <div
                className="group flex items-center gap-3 rounded-xl border border-border bg-surface/70 px-3.5 py-3 transition-colors hover:border-primary/40"
                style={{ animation: `rise-in 0.7s cubic-bezier(0.22,1,0.36,1) ${200 + i * 90}ms both` }}
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
                  <n.icon className="h-4.5 w-4.5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-foreground">{n.label}</span>
                  <span className="block truncate text-xs text-muted-foreground">{n.sub}</span>
                </span>
                <span className="ml-auto font-mono text-[10px] text-muted-foreground/70">
                  0{i + 1}
                </span>
              </div>

              {i < nodes.length - 1 && (
                <svg
                  aria-hidden="true"
                  className="mx-auto block h-2.5 w-4"
                  viewBox="0 0 8 12"
                  fill="none"
                >
                  <line
                    x1="4"
                    y1="0"
                    x2="4"
                    y2="12"
                    stroke="var(--color-primary)"
                    strokeOpacity="0.5"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    className="animate-dash"
                  />
                </svg>
              )}
            </li>
          ))}
        </ul>

        <p className="mt-5 text-[11px] leading-relaxed text-muted-foreground/80">
          Illustrative architecture of how I wire LLMs into business systems.
        </p>
      </div>
    </div>
  );
}
