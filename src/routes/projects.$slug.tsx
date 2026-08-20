import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Nav } from "@/components/portfolio/Nav";
import { UPWORK_URL, projects } from "@/lib/portfolio/data";
import { handleExternalClick } from "@/lib/portfolio/links";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => {
    const title = loaderData
      ? `${loaderData.name} — ${loaderData.tagline} | Muhammad Asim Saqlain`
      : "Case study | Muhammad Asim Saqlain";
    const description = loaderData
      ? loaderData.solution.slice(0, 155)
      : "AI automation case study by Muhammad Asim Saqlain, AI Automation Engineer.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: CaseStudy,
});

function CaseStudy() {
  const p = Route.useLoaderData();

  return (
    <div className="dark min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <main className="pt-32 pb-24">
        <article className="mx-auto max-w-4xl px-6">
          <Link
            to="/"
            hash="projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All projects
          </Link>

          <header className="mt-6">
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tighter">
              {p.name}
            </h1>
            <p className="mt-3 text-lg text-primary">{p.tagline}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {p.stack.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground"
                >
                  {t}
                </li>
              ))}
            </ul>
          </header>

          <Block title="Problem">
            <p className="text-muted-foreground leading-relaxed">{p.problem}</p>
          </Block>

          <Block title="Solution">
            <p className="text-muted-foreground leading-relaxed">{p.solution}</p>
          </Block>

          <Block title="Key features">
            <ul className="grid sm:grid-cols-2 gap-2.5">
              {p.features.map((f) => (
                <li
                  key={f}
                  className="flex gap-3 rounded-xl border border-border bg-surface/60 px-4 py-3 text-sm"
                >
                  <CheckCircle2
                    className="h-4 w-4 shrink-0 text-primary mt-0.5"
                    aria-hidden="true"
                  />
                  {f}
                </li>
              ))}
            </ul>
          </Block>

          <Block title="Architecture & workflow">
            <ol className="space-y-3">
              {p.architecture.map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gradient-primary text-xs font-semibold text-primary-foreground">
                    {i + 1}
                  </span>
                  <span className="text-muted-foreground leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </Block>

          <Block title="My role">
            <ul className="space-y-2.5">
              {p.role.map((r) => (
                <li key={r} className="flex gap-3 text-muted-foreground leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {r}
                </li>
              ))}
            </ul>
          </Block>

          <section className="mt-14 rounded-3xl glass p-8 md:p-12 shadow-elegant">
            <h2 className="font-display text-2xl md:text-4xl font-bold tracking-tighter">
              What I can build for <span className="text-gradient">your business</span>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">
              I can adapt this same approach — agents, automation workflows, retrieval and a
              production backend — to the processes your team runs manually today.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={UPWORK_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleExternalClick}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-glow hover:scale-[1.02] transition-transform"
              >
                Hire Me on Upwork
                <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
              </a>
              <Link
                to="/"
                hash="contact"
                className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 font-semibold text-foreground hover:bg-surface-elevated transition"
              >
                Contact me
              </Link>
            </div>
          </section>

          <nav aria-label="Other projects" className="mt-16">
            <h2 className="font-display text-xl font-semibold">Other case studies</h2>
            <ul className="mt-5 grid sm:grid-cols-2 gap-3">
              {projects
                .filter((o) => o.slug !== p.slug)
                .map((o) => (
                  <li key={o.slug}>
                    <Link
                      to="/projects/$slug"
                      params={{ slug: o.slug }}
                      className="flex items-center justify-between gap-3 rounded-xl border border-border bg-surface/60 px-5 py-4 hover:border-primary/60 transition"
                    >
                      <span>
                        <span className="block font-medium">{o.name}</span>
                        <span className="block text-xs text-muted-foreground">{o.tagline}</span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>
        </article>
      </main>
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="font-display text-2xl font-semibold">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}
