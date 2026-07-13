import { timeline } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Timeline() {
  return (
    <Section
      id="timeline"
      eyebrow="Research Timeline"
      title="The path so far"
      tinted
    >
      <ol className="relative mx-auto max-w-3xl">
        {/* center line (lg) / left line (mobile) */}
        <span
          aria-hidden
          className="absolute left-4 top-2 h-[calc(100%-1rem)] w-px bg-line lg:left-1/2 lg:-translate-x-1/2"
        />

        {timeline.map((item, i) => {
          const right = i % 2 === 1;
          return (
            <li key={item.title + item.date} className="relative mb-8 last:mb-0">
              {/* node */}
              <span
                aria-hidden
                className="absolute left-4 top-2 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border-2 border-accent bg-background lg:left-1/2"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              </span>

              <div
                className={cn(
                  "pl-11 lg:w-1/2 lg:pl-0",
                  right ? "lg:ml-auto lg:pl-10" : "lg:pr-10 lg:text-right",
                )}
              >
                <Reveal delay={i * 60}>
                  <div className="rounded-2xl border border-line bg-elevated p-5 shadow-card transition-colors hover:border-accent/40">
                    <span className="inline-flex items-center rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-semibold text-accent">
                      {item.date}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
