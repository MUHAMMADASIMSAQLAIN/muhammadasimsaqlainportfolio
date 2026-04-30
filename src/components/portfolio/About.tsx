import avatar from "@/assets/avatar.jpg";

export function About() {
  return (
    <section id="about" className="py-28 relative">
      <div className="mx-auto max-w-5xl px-6">
        <SectionLabel>01 — About</SectionLabel>
        <div className="mt-8 grid md:grid-cols-[260px_1fr] gap-10 items-start">
          <div className="relative mx-auto md:mx-0">
            <div className="absolute -inset-4 bg-gradient-primary rounded-3xl opacity-30 blur-2xl" />
            <img
              src={avatar}
              alt="Muhammad Asim Saqlain"
              width={768}
              height={768}
              loading="lazy"
              className="relative h-56 w-56 rounded-3xl object-cover shadow-elegant border border-border animate-float"
            />
          </div>
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter">
              Engineering AI systems that <span className="text-gradient">work 24/7</span>.
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed text-[17px]">
              <p>
                I'm <span className="text-foreground font-medium">Muhammad Asim Saqlain</span>, a
                Full-Stack AI Engineer & Data Scientist passionate about building end-to-end
                solutions. I don't just write Python code — I engineer custom AI agents and
                automation pipelines that solve real operational problems.
              </p>
              <p>
                In a world where speed defines success, manual workflows and messy data hold
                businesses back. I help forward-thinking companies replace them with clean
                architecture and scalable systems that deliver measurable value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-primary-glow">
      <span className="h-px w-8 bg-primary-glow/60" />
      {children}
    </div>
  );
}
