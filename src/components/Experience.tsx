import { experience } from "@/data/portfolio";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { Briefcase } from "./icons";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Research & engineering track record"
    >
      <ol className="relative space-y-8 border-l border-line pl-6 sm:pl-8">
        {experience.map((item, i) => (
          <Reveal as="li" key={`${item.organization}-${item.period}`} delay={i * 70}>
            {/* Timeline node */}
            <span
              aria-hidden
              className="absolute -left-[9px] mt-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-line bg-background"
            >
              <span className="h-2 w-2 rounded-full bg-accent" />
            </span>

            <div className="rounded-2xl border border-line bg-elevated p-6 shadow-card transition-colors hover:border-accent/40 sm:p-7">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-accent" />
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {item.role}
                  </h3>
                  {item.current ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-700 dark:text-emerald-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      Current
                    </span>
                  ) : null}
                </div>
                <span className="text-sm font-medium text-muted">{item.period}</span>
              </div>

              <p className="mt-1 text-sm font-medium text-accent">
                {item.organization}
                <span className="text-muted"> · {item.location}</span>
              </p>

              <ul className="mt-4 space-y-2">
                {item.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-3 text-sm leading-relaxed text-muted"
                  >
                    <span
                      aria-hidden
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
