import { SectionLabel } from "./About";
import { Briefcase, GraduationCap } from "lucide-react";
import { education, experience } from "@/lib/portfolio/data";

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="mx-auto max-w-5xl px-6">
        <SectionLabel>05 — Experience</SectionLabel>
        <h2 className="mt-6 font-display text-3xl md:text-5xl font-bold tracking-tighter max-w-3xl">
          Where I've <span className="text-gradient">built and shipped</span>.
        </h2>

        <div className="mt-14 space-y-5">
          {experience.map((e) => (
            <article key={e.role} className="rounded-2xl glass p-7">
              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gradient-primary text-primary-foreground">
                  <Briefcase className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold leading-snug">{e.role}</h3>
                  <p className="text-sm text-primary mt-0.5">
                    {e.org} · {e.period}
                  </p>
                </div>
              </div>
              <ul className="mt-5 space-y-2.5 pl-1">
                {e.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-[15px] text-muted-foreground leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div id="education" className="mt-12 scroll-mt-28">
          <h3 className="font-display text-2xl font-semibold">Education</h3>
          <div className="mt-5 rounded-2xl glass p-7 flex items-start gap-4">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gradient-primary text-primary-foreground">
              <GraduationCap className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <div className="font-display text-lg font-semibold">{education.degree}</div>
              <p className="text-sm text-primary mt-0.5">
                {education.school} · {education.period}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
