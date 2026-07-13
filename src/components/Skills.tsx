import { skillGroups } from "@/data/portfolio";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { Code } from "./icons";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools I work with"
      description="The tools I reach for most, from a first experiment to trained and evaluated models."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal as="article" key={group.title} delay={i * 80}>
            <div className="h-full rounded-2xl border border-line bg-elevated p-6 shadow-card sm:p-7">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <Code className="h-4 w-4" />
                </span>
                <h3 className="font-display text-base font-semibold text-foreground">
                  {group.title}
                </h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-lg border border-line bg-surface px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                  >
                    {skill}
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
