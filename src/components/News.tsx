import { news } from "@/data/portfolio";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function News() {
  return (
    <Section
      id="news"
      eyebrow="News"
      title="Recent updates"
      description="A running log of papers, patents, and project milestones."
    >
      <ol className="border-t border-line">
        {news.map((item, i) => (
          <Reveal as="li" key={item.date + item.title} delay={i * 50}>
            <div className="grid gap-x-8 gap-y-1 border-b border-line py-5 sm:grid-cols-[9rem_1fr]">
              <div>
                <time className="text-sm font-medium text-foreground">
                  {item.date}
                </time>
                <span className="ml-2 text-xs font-semibold uppercase tracking-[0.12em] text-accent sm:ml-0 sm:block sm:mt-0.5">
                  {item.tag}
                </span>
              </div>
              <p className="text-[0.95rem] leading-relaxed text-muted">
                {item.title}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
