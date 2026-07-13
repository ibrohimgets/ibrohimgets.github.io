import { experience } from "@/data/portfolio";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked">
      <ol className="border-t border-line">
        {experience.map((item, i) => (
          <Reveal as="li" key={`${item.organization}-${item.period}`} delay={i * 60}>
            <div className="grid gap-x-10 gap-y-3 border-b border-line py-8 lg:grid-cols-[11rem_1fr]">
              {/* Date rail */}
              <div>
                <p className="text-sm font-medium text-foreground">{item.period}</p>
                {item.current ? (
                  <p className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-emerald-600 dark:text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Current
                  </p>
                ) : null}
              </div>

              <div>
                <h3 className="font-display text-xl font-medium text-foreground">
                  {item.role}
                </h3>
                <p className="mt-1 text-sm italic text-muted">
                  {item.organization} · {item.location}
                </p>
                <ul className="mt-4 space-y-2">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 text-sm leading-relaxed text-muted"
                    >
                      <span aria-hidden className="mt-[0.65rem] h-px w-3 shrink-0 bg-accent/70" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
