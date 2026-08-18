import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight, Sparkles, MapPin } from "lucide-react";
import { UPWORK_URL, profile } from "@/lib/portfolio/data";

const highlights = ["AI Agents", "n8n Automation", "RAG Systems", "LLM Integration", "FastAPI"];

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20"
    >
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          width={1536}
          height={1024}
          className="h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0 bg-radial-glow" />
      </div>

      <div className="mx-auto max-w-5xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground mb-8">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          Available for AI automation projects on Upwork
        </div>

        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold leading-[1] tracking-tighter">
          <span className="text-foreground">{profile.name}</span>
          <span className="mt-4 block text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
            <span className="text-gradient">AI Automation Engineer</span>
          </span>
        </h1>

        <p className="mt-4 text-sm sm:text-base uppercase tracking-[0.2em] text-primary">
          AI Agents · n8n · RAG · LLM Integration
        </p>

        <p className="mt-8 mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
          {profile.valueProp}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={UPWORK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-glow hover:scale-[1.02] transition-transform"
          >
            Hire Me on Upwork
            <ArrowRight className="h-5 w-5" />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full glass px-7 py-4 text-base font-semibold text-foreground hover:bg-surface-elevated transition"
          >
            View Projects
          </a>
        </div>

        <ul className="mt-12 flex flex-wrap items-center justify-center gap-2.5">
          {highlights.map((h) => (
            <li
              key={h}
              className="rounded-full border border-border bg-surface/70 px-4 py-1.5 text-sm text-muted-foreground"
            >
              {h}
            </li>
          ))}
        </ul>

        <p className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 text-primary" />
          {profile.location} — working with clients worldwide
        </p>
      </div>
    </section>
  );
}
