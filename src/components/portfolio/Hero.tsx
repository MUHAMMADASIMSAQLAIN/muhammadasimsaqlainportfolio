import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          width={1536}
          height={1024}
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0 bg-radial-glow" />
      </div>

      <div className="mx-auto max-w-5xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground mb-8 animate-pulse-glow">
          <Sparkles className="h-3.5 w-3.5 text-primary-glow" />
          Available for freelance & full-time roles
        </div>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tighter">
          <span className="text-gradient">Full-Stack AI</span>
          <br />
          <span className="text-foreground">Engineer</span>
        </h1>

        <p className="mt-8 mx-auto max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
          I build custom AI agents, RAG systems, and{" "}
          <span className="text-foreground">n8n automations</span> that turn manual chaos into
          intelligent, 24/7 business workflows.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.02] transition-transform"
          >
            Start a project
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-semibold text-foreground hover:bg-surface-elevated transition"
          >
            Explore services
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { k: "AI Agents", v: "Custom" },
            { k: "Automations", v: "n8n + Python" },
            { k: "Certified", v: "Cisco CCNA-W" },
            { k: "Based in", v: "Islamabad, PK" },
          ].map((s) => (
            <div key={s.k} className="text-left">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{s.k}</div>
              <div className="mt-1 font-display font-semibold text-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
