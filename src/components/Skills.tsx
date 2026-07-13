import { skillGroups } from "@/data/portfolio";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools I work with"
      description="The tools I reach for most, from a first experiment to trained and evaluated models."
    >
      <div className="border-t border-line">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 60}>
            <div className="grid gap-x-10 gap-y-1 border-b border-line py-6 lg:grid-cols-[16rem_1fr]">
              <h3 className="eyebrow lg:pt-1">{group.title}</h3>
              <p className="font-display text-lg text-foreground/90">
                {group.skills.join("  ·  ")}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
