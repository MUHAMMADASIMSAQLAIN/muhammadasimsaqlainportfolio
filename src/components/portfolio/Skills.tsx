import { SectionLabel } from "./About";
import { skillGroups } from "@/lib/portfolio/data";

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="mx-auto max-w-5xl px-6">
        <SectionLabel>04 — Skills & Tech Stack</SectionLabel>
        <h2 className="mt-6 font-display text-3xl md:text-5xl font-bold tracking-tighter max-w-3xl">
          The stack behind the <span className="text-gradient">systems</span>.
        </h2>

        <div className="mt-14 space-y-6">
          {skillGroups.map((g) => (
            <div
              key={g.title}
              className="grid md:grid-cols-[220px_1fr] gap-6 items-start border-t border-border pt-6"
            >
              <h3 className="font-display text-lg font-semibold text-foreground">{g.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 transition"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
