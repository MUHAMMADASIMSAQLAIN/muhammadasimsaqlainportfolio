import avatar from "@/assets/avatar.jpg";
import { profile } from "@/lib/portfolio/data";

const builds = [
  "AI agents and agentic workflows with tool calling",
  "Business automations orchestrated in n8n",
  "RAG systems over documents and vector databases",
  "Voice AI workflows wired to real backend actions",
  "Production-ready Python / FastAPI services and APIs",
];

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="mx-auto max-w-5xl px-6">
        <SectionLabel>01 — About / What I Build</SectionLabel>
        <div className="mt-8 grid md:grid-cols-[260px_1fr] gap-10 items-start">
          <div className="relative mx-auto md:mx-0">
            <div className="absolute -inset-4 bg-gradient-primary rounded-3xl opacity-20 blur-2xl" />
            <img
              src={avatar}
              alt="Portrait of Muhammad Asim S., AI Automation Engineer"
              width={768}
              height={768}
              loading="lazy"
              className="relative h-56 w-56 rounded-3xl object-cover shadow-elegant border border-border"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tighter">
              I build AI systems that <span className="text-gradient">run the work</span>, not just
              demos.
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed text-[17px]">
              <p>
                I'm <span className="text-foreground font-medium">{profile.name}</span>, an AI
                Automation Engineer focused on agentic AI, RAG and workflow automation. My work
                connects language models to real business systems — inventory, orders, messaging,
                email, calendars and internal APIs — so a request turns into a completed action.
              </p>
              <p>
                Every project ships with a backend behind it: secure REST APIs and microservices
                built with Python, FastAPI and Flask, database design, authentication and
                integration workflows that hold up outside a prototype.
              </p>
            </div>
            <ul className="mt-7 grid sm:grid-cols-2 gap-2.5">
              {builds.map((b) => (
                <li
                  key={b}
                  className="rounded-xl border border-border bg-surface/60 px-4 py-3 text-sm text-foreground/90"
                >
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-primary">
      <span className="h-px w-8 bg-primary/60" />
      {children}
    </div>
  );
}
