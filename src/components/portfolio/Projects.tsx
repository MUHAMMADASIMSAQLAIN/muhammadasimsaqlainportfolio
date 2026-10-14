import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Star } from "lucide-react";
import { SectionLabel } from "./About";
import { projects } from "@/lib/portfolio/data";
import { perfumeProject } from "@/lib/portfolio/perfume-project";

const featuredProjects = [projects[0], perfumeProject, ...projects.slice(1)];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel>03 — Featured Projects</SectionLabel>
        <h2 className="mt-6 font-display text-3xl md:text-5xl font-bold tracking-tighter max-w-3xl">
          Case studies in <span className="text-gradient">AI automation</span> and digital products.
        </h2>
        <p className="mt-5 max-w-2xl text-muted-foreground leading-relaxed">
          Explore AI agents, automation systems, machine learning work and a separate branded
          e-commerce product. Each case study explains the problem, solution and tools used.
        </p>

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {featuredProjects.map((p, i) => (
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

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  className="inline-flex w-fit items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-90 transition"
                >
                  View Case Study
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                {p.slug === "asim-saqlain-perfumes" && (
                  <>
                    <a
                      href="https://asim-saqlain-perfume.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-fit items-center gap-2 rounded-full border border-border-strong bg-surface/60 px-5 py-2.5 text-sm font-semibold text-foreground hover:border-primary/50 transition"
                    >
                      Visit Live Storefront
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                    <a
                      href="https://github.com/MUHAMMADASIMSAQLAIN/asim-saqlain-perfume"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-fit items-center gap-2 rounded-full border border-border-strong bg-surface/60 px-5 py-2.5 text-sm font-semibold text-foreground hover:border-primary/50 transition"
                    >
                      Source on GitHub
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 border-t border-border pt-10">
          <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight">
            Selected <span className="text-gradient">GitHub repositories</span>
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Source repositories for selected AI, data and product work, all linked to the public GitHub account.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { name: "AI Business Management Platform", description: "Inventory and supply-chain management", href: "https://github.com/MUHAMMADASIMSAQLAIN/Z3W-AI-Powered-Real-Time-Business-Management-Platform-for-Inventory-and-Supply-Chain-Automation" },
              { name: "Data Analytics & BI Portfolio", description: "Analytics and business intelligence projects", href: "https://github.com/MUHAMMADASIMSAQLAIN/Data-Analytics-and-Business-Intelligence-PORTFOLIO" },
              { name: "Microsoft Power BI", description: "Dashboards and reporting work", href: "https://github.com/MUHAMMADASIMSAQLAIN/Microsoft-Power-Bi" },
              { name: "Artificial Intelligence using Python", description: "Python-based AI learning and projects", href: "https://github.com/MUHAMMADASIMSAQLAIN/Artificial-Intelligence-using-Python" },
              { name: "ASIM SAQLAIN Perfumes", description: "Independent branded storefront", href: "https://github.com/MUHAMMADASIMSAQLAIN/asim-saqlain-perfume" },
              { name: "Developer Portfolio", description: "Portfolio source code", href: "https://github.com/MUHAMMADASIMSAQLAIN/muhammadasimsaqlainportfolio" },
            ].map((repo) => (
              <li key={repo.href}>
                <a href={repo.href} target="_blank" rel="noopener noreferrer" className="group flex h-full items-start justify-between gap-3 rounded-xl border border-border bg-surface/50 p-4 transition hover:border-primary/60 hover:bg-surface-elevated">
                  <span>
                    <span className="block font-medium text-foreground">{repo.name}</span>
                    <span className="mt-1 block text-sm text-muted-foreground">{repo.description}</span>
                  </span>
                  <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
