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
    >
      <div className="grid gap-x-16 gap-y-10 sm:grid-cols-2">
        {researchGroups.map((group, i) => (
          <Reveal as="article" key={group.title} delay={i * 60}>
            <div className="border-t-2 border-foreground/80 pt-5">
              <h3 className="font-display text-xl font-medium text-foreground">
                {group.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                {group.description}
              </p>
              <p className="mt-3.5 text-sm font-medium text-foreground/80">
                {group.topics.join("  ·  ")}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
