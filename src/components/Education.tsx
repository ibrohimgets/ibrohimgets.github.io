import { education } from "@/data/portfolio";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic background">
      <ol className="border-t border-line">
        {education.map((item, i) => (
          <Reveal as="li" key={item.institution} delay={i * 60}>
            <div className="grid gap-x-10 gap-y-3 border-b border-line py-8 lg:grid-cols-[11rem_1fr]">
              <p className="text-sm font-medium text-foreground">{item.period}</p>
              <div>
                <h3 className="font-display text-xl font-medium text-foreground">
                  {item.institution}
                </h3>
                <p className="mt-1 text-sm italic text-muted">
                  {item.degree} · {item.location}
                </p>
                <p className="mt-3 text-sm text-muted">
                  {item.gpa ? (
                    <>
                      <span className="font-medium text-foreground/75">GPA</span>{" "}
                      {item.gpa}
                    </>
                  ) : null}
                  {item.gpa && item.advisor ? <span className="mx-3 text-line">|</span> : null}
                  {item.advisor ? (
                    <>
                      <span className="font-medium text-foreground/75">Advisor</span>{" "}
                      {item.advisor}
                    </>
                  ) : null}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
