import { timeline } from "@/data/portfolio";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Timeline() {
  return (
    <Section id="timeline" eyebrow="Research Timeline" title="The path so far">
      <ol className="relative ml-1.5 border-l border-line">
        {timeline.map((item, i) => (
          <Reveal as="li" key={item.title + item.date} delay={i * 60}>
            <div className="relative pb-10 pl-8 last:pb-0">
              {/* node */}
              <span
                aria-hidden
                className="absolute -left-[5px] top-[0.45rem] h-2.5 w-2.5 rounded-full border-2 border-accent bg-background"
              />
              <p className="eyebrow">{item.date}</p>
              <h3 className="mt-1.5 font-display text-xl font-medium text-foreground">
                {item.title}
              </h3>
              <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
