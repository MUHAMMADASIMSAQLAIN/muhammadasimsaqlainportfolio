import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { UPWORK_URL, profile } from "@/lib/portfolio/data";
import { HeroVisual } from "./HeroVisual";

const highlights = ["AI Agents", "n8n Automation", "RAG Systems", "LLM Integration", "FastAPI"];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-surface/40 via-background to-background" />
        <div className="absolute inset-0 grid-bg opacity-70" />
        <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-primary/10 blur-[130px] animate-aurora" />
        <div className="absolute bottom-0 right-0 h-[320px] w-[420px] rounded-full bg-cyan/10 blur-[120px] animate-aurora" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div
            className="inline-flex items-center gap-2.5 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground animate-rise"
            style={{ animationDelay: "60ms" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary animate-status-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for AI Automation &amp; Agentic AI projects
          </div>

          <h1
            className="mt-7 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl animate-rise text-balance"
            style={{ animationDelay: "140ms" }}
          >
            <span className="text-foreground">{profile.name}</span>
            <span className="mt-4 block text-xl font-semibold leading-snug sm:text-2xl md:text-3xl">
              <span className="text-gradient">AI Automation Engineer</span>
              <span className="text-muted-foreground"> | AI Agents | n8n | RAG | LLM Integration</span>
            </span>
          </h1>

          <p
            className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground animate-rise"
            style={{ animationDelay: "240ms" }}
          >
            {profile.valueProp}
          </p>

          <div
            className="mt-9 flex flex-wrap items-center gap-3.5 animate-rise"
            style={{ animationDelay: "320ms" }}
          >
            <a
              href="#projects"
              className="btn-shine group inline-flex min-h-12 items-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-[15px] font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
            >
              View Projects
              <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href={UPWORK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-12 items-center gap-2 rounded-full border border-border-strong bg-surface/60 px-6 py-3.5 text-[15px] font-semibold text-foreground transition-colors hover:border-primary/50 hover:bg-surface-elevated"
            >
              Hire Me on Upwork
              <ArrowUpRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </a>
          </div>

          <ul
            className="mt-10 flex flex-wrap items-center gap-2 animate-rise"
            style={{ animationDelay: "400ms" }}
          >
            {highlights.map((h) => (
              <li
                key={h}
                className="rounded-full border border-border bg-surface/60 px-3.5 py-1.5 text-[13px] text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
              >
                {h}
              </li>
            ))}
          </ul>

          <p
            className="mt-7 inline-flex items-center gap-2 text-sm text-muted-foreground animate-rise"
            style={{ animationDelay: "460ms" }}
          >
            <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
            {profile.location} — working with clients worldwide
          </p>
        </div>

        <div className="animate-rise" style={{ animationDelay: "260ms" }}>
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
