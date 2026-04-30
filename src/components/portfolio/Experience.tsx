import { SectionLabel } from "./About";
import { Award, Briefcase, GraduationCap } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-28 relative">
      <div className="mx-auto max-w-5xl px-6">
        <SectionLabel>04 — Journey</SectionLabel>
        <h2 className="mt-6 font-display text-4xl md:text-5xl font-bold tracking-tighter max-w-3xl">
          Experience, education & <span className="text-gradient">credentials</span>.
        </h2>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {/* Experience */}
          <Card icon={Briefcase} title="Experience">
            <Item
              title="Junior Network Engineer (Intern)"
              meta="PMAS Arid Agriculture University · Apr 2025 – Present"
              body="Planning, configuration & maintenance of university network infrastructure. Router/switch deployment, VPN & firewall management, secure operations."
            />
          </Card>

          {/* Education */}
          <Card icon={GraduationCap} title="Education">
            <Item
              title="BSCS — Artificial Intelligence"
              meta="Arid Agriculture University"
              body="Computer Vision, Machine Learning, Data Science, Cybersecurity."
            />
            <Item
              title="UIIT"
              meta="2021"
              body="Wireless Networking, Computer Vision and 11 more skills."
            />
          </Card>

          {/* Certifications */}
          <Card icon={Award} title="Certifications">
            <Item
              title="CCNA Wireless"
              meta="Cisco · Sep 2024"
              body="Network administration, wireless networking, security."
            />
            <Item
              title="Data Analytics & BI"
              meta="DigiSkills.pk · 2025"
              body="DSTP 3.0 — turning raw data into actionable strategy."
            />
            <Item
              title="Freelancing"
              meta="DigiSkills.pk · 2025"
              body="Platform management, client communication, project delivery."
            />
          </Card>
        </div>
      </div>
    </section>
  );
}

function Card({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl glass p-6 h-full">
      <div className="flex items-center gap-3 mb-5">
        <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-primary text-primary-foreground">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="font-display text-lg font-semibold">{title}</h3>
      </div>
      <div className="space-y-5">{children}</div>
    </div>
  );
}

function Item({ title, meta, body }: { title: string; meta: string; body: string }) {
  return (
    <div className="border-l-2 border-primary/40 pl-4">
      <div className="font-display font-semibold text-foreground leading-snug">{title}</div>
      <div className="text-xs text-primary-glow mt-0.5">{meta}</div>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
    </div>
  );
}
