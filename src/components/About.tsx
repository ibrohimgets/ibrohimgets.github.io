import { about } from "@/data/portfolio";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="A little about me">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
        <div className="space-y-5">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 60}>
              <p className="text-base leading-[1.75] text-muted sm:text-[1.05rem]">
                {p}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <dl className="space-y-5 border-l border-line pl-6 lg:mt-1">
            {about.highlights.map((item) => (
              <div key={item.label}>
                <dt className="eyebrow">{item.label}</dt>
                <dd className="mt-1 font-display text-lg text-foreground">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
