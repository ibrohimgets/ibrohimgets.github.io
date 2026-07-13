import { education } from "@/data/portfolio";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { GraduationCap, MapPin } from "./icons";

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic background" tinted>
      <div className="grid gap-6 lg:grid-cols-2">
        {education.map((item, i) => (
          <Reveal as="article" key={item.institution} delay={i * 80}>
            <div className="flex h-full flex-col rounded-2xl border border-line bg-elevated p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-card-hover sm:p-7">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {item.institution}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-accent">
                    {item.degree}
                  </p>
                </div>
              </div>

              <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-line pt-5 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted">Period</dt>
                  <dd className="mt-0.5 font-medium text-foreground">{item.period}</dd>
                </div>
                {item.gpa ? (
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-muted">GPA</dt>
                    <dd className="mt-0.5 font-medium text-foreground">{item.gpa}</dd>
                  </div>
                ) : null}
                {item.advisor ? (
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-muted">
                      Advisor
                    </dt>
                    <dd className="mt-0.5 font-medium text-foreground">
                      {item.advisor}
                    </dd>
                  </div>
                ) : null}
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted">
                    Location
                  </dt>
                  <dd className="mt-0.5 flex items-center gap-1.5 font-medium text-foreground">
                    <MapPin className="h-3.5 w-3.5 text-accent" />
                    {item.location}
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
