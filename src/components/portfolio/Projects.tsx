import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Star, Github, ExternalLink } from "lucide-react";
import { handleExternalClick } from "@/lib/portfolio/links";
import { SectionLabel } from "./About";
import { projects } from "@/lib/portfolio/data";

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel>03 — Featured Projects</SectionLabel>
        <h2 className="mt-6 font-display text-3xl md:text-5xl font-bold tracking-tighter max-w-3xl">
          Case studies in <span className="text-gradient">AI & automation</span>.
        </h2>
        <p className="mt-5 max-w-2xl text-muted-foreground leading-relaxed">
          Each project below shows the business problem, the solution, the architecture and the
          exact stack used to build it.
        </p>

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => {
            const cover = p.cover ?? p.screenshots?.[0];
            return (
              <article
                key={p.slug}
                className={`group relative flex flex-col overflow-hidden rounded-2xl glass transition-all duration-300 hover:-translate-y-1 hover:shadow-glow ${
                  i === 0 ? "md:col-span-2" : ""
                }`}
              >
                {cover && (
                  <div
                    className={`relative overflow-hidden border-b border-border bg-surface/60 ${
                      i === 0 ? "aspect-[16/9] md:aspect-[21/8]" : "aspect-[16/9]"
                    }`}
                  >
                    <img
                      src={cover.src}
                      alt={cover.alt}
                      loading="lazy"
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                  </div>
                )}
                <div className={`flex flex-1 flex-col p-7 ${i === 0 ? "md:p-10" : ""}`}>
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
                  {p.status && (
                    <span className="mt-3 inline-flex w-fit rounded-full border border-border bg-surface px-2.5 py-0.5 text-[11px] uppercase tracking-wider text-muted-foreground">
                      {p.status}
                    </span>
                  )}
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
                  {(p.liveUrl || p.repoUrl) && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.liveUrl && (
                        <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" onClick={handleExternalClick} className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-medium hover:border-primary hover:text-primary transition">
                          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" /> Live demo
                        </a>
                      )}
                      {p.repoUrl && (
                        <a href={p.repoUrl} target="_blank" rel="noopener noreferrer" onClick={handleExternalClick} className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-medium hover:border-primary hover:text-primary transition">
                          <Github className="h-3.5 w-3.5" aria-hidden="true" /> Source code
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
