import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
  id?: string;
};

export function Reveal({ children, as, delay = 0, className = "", id }: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      id={id}
      className={`reveal ${shown ? "reveal-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

export function SectionHeading({
  label,
  title,
  accent,
  intro,
}: {
  label: string;
  title: string;
  accent?: string;
  intro?: string;
}) {
  return (
    <Reveal>
      <div className="inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.32em] text-primary">
        <span className="h-px w-8 bg-gradient-to-r from-transparent to-primary" />
        {label}
      </div>
      <h2 className="mt-5 font-display text-3xl md:text-5xl font-bold tracking-tight max-w-3xl text-balance">
        {title} {accent ? <span className="text-gradient">{accent}</span> : null}
      </h2>
      {intro ? (
        <p className="mt-5 max-w-2xl text-muted-foreground leading-relaxed">{intro}</p>
      ) : null}
    </Reveal>
  );
}
