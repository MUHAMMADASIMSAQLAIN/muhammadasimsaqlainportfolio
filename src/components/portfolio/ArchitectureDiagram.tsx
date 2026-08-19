import { User, Mic, Workflow, Server, Database, Receipt, Bell, CalendarClock } from "lucide-react";

const flow = [
  { icon: User, label: "Customer", sub: "Chat / WhatsApp" },
  { icon: Mic, label: "AI Agent + Voice", sub: "LLM · ElevenLabs" },
  { icon: Workflow, label: "n8n", sub: "Orchestration" },
  { icon: Server, label: "API / Business Logic", sub: "FastAPI" },
  { icon: Database, label: "MongoDB", sub: "Products · Orders" },
];

const outputs = [
  { icon: Receipt, label: "Invoice" },
  { icon: Bell, label: "WhatsApp / Gmail" },
  { icon: CalendarClock, label: "Calendar reminder" },
];

/** Illustrative BlueWave AI workflow diagram (design mockup, not a client screenshot). */
export function ArchitectureDiagram() {
  return (
    <div className="panel relative overflow-hidden rounded-2xl p-5 sm:p-6">
      <div className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
        Workflow architecture
      </div>

      <div className="mt-5 flex flex-col gap-2 lg:flex-row lg:items-stretch">
        {flow.map((n, i) => (
          <div key={n.label} className="flex flex-1 items-center gap-2 lg:flex-col lg:gap-2">
            <div className="flex w-full flex-1 items-center gap-3 rounded-xl border border-border bg-surface/70 px-3 py-2.5 transition-colors hover:border-primary/40 lg:flex-col lg:items-start">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
                <n.icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-semibold text-foreground">{n.label}</span>
                <span className="block text-[11px] text-muted-foreground">{n.sub}</span>
              </span>
            </div>
            {i < flow.length - 1 && (
              <svg aria-hidden="true" className="h-4 w-4 shrink-0 lg:hidden" viewBox="0 0 12 16">
                <line
                  x1="6" y1="0" x2="6" y2="16"
                  stroke="var(--color-primary)" strokeOpacity="0.5" strokeWidth="1.5"
                  strokeDasharray="4 4" className="animate-dash"
                />
              </svg>
            )}
          </div>
        ))}
      </div>

      <svg aria-hidden="true" className="mt-3 hidden h-2 w-full lg:block" viewBox="0 0 100 2" preserveAspectRatio="none">
        <line
          x1="0" y1="1" x2="100" y2="1"
          stroke="var(--color-primary)" strokeOpacity="0.35" strokeWidth="1"
          strokeDasharray="4 4" className="animate-dash"
        />
      </svg>

      <div className="mt-3 grid gap-2 sm:grid-cols-3">
        {outputs.map((o) => (
          <div
            key={o.label}
            className="flex items-center gap-2.5 rounded-xl border border-border bg-surface/50 px-3 py-2.5"
          >
            <o.icon className="h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />
            <span className="text-xs text-foreground/90">{o.label}</span>
          </div>
        ))}
      </div>

      <p className="mt-4 text-[11px] text-muted-foreground/80">
        Design mockup of the system architecture — illustrative, not a product screenshot.
      </p>
    </div>
  );
}
