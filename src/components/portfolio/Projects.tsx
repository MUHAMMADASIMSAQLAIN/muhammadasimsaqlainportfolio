import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Star } from "lucide-react";
import { SectionLabel } from "./About";
import { projects } from "@/lib/portfolio/data";

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel>03 — Featured Projects</SectionLabel>
        <h2 className="mt-6 font-display text-3xl md:text-5xl font-bold tracking-tighter max-w-3xl">
          Case studies in <span className="text-gradient">AI automation</span>.
        </h2>
        <p className="mt-5 max-w-2xl text-muted-foreground leading-relaxed">
          Each project below shows the business problem, the solution, the architecture and the
          exact stack used to build it.
        </p>

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <article
              key={p.slug}
              className={`group relative flex flex-col rounded-2xl glass p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow ${
                i === 0 ? "md:col-span-2 md:p-10" : ""
              }`}
            >
              {p.featured && (
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary">
                  <Star className="h-3.5 w-3.5" aria-hidden="true" />
                  {i === 0 ? "Hero case study" : "Featured"}
                </span>
              )}
              <h3
                className={`mt-4 font-display font-bold tracking-tight ${
                  i === 0 ? "text-3xl md:text-4xl" : "text-2xl"
                }`}
              >
                {p.name}
              </h3>
              <p className="mt-1 text-primary text-sm">{p.tagline}</p>
              <p className="mt-4 text-muted-foreground leading-relaxed text-[15px]">{p.solution}</p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {p.stack.slice(0, 6).map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              <Link
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-90 transition"
              >
                View Case Study
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
