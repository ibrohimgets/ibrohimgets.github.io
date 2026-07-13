import { about } from "@/data/portfolio";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Teaching machines to reason about what they see"
    >
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div className="space-y-5">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 60}>
              <p className="text-base leading-relaxed text-muted sm:text-lg">{p}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-1">
            {about.highlights.map((item) => (
              <div key={item.label} className="bg-background p-5">
                <dt className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {item.label}
                </dt>
                <dd className="mt-1.5 text-base font-medium text-foreground">
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
