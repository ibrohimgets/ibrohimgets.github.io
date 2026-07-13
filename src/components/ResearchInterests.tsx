import { researchGroups } from "@/data/portfolio";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function ResearchInterests() {
  return (
    <Section
      id="research"
      eyebrow="Research Interests"
      title="Where language meets vision"
      description="The topics I keep coming back to. They all sit somewhere between language and vision."
      tinted
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {researchGroups.map((group, i) => (
          <Reveal as="article" key={group.title} delay={i * 70}>
            <div className="group h-full rounded-2xl border border-line bg-elevated p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-card-hover sm:p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-soft font-display text-sm font-bold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {group.title}
                </h3>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted">
                {group.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {group.topics.map((topic) => (
                  <li key={topic} className="chip">
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
