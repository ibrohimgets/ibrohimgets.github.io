import { news, type NewsItem } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const tagStyles: Record<string, string> = {
  Accepted: "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
  Submission: "border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300",
  Patent: "border-violet-500/30 bg-violet-500/10 text-violet-700 dark:text-violet-300",
  Research: "border-sky-500/30 bg-sky-500/10 text-sky-700 dark:text-sky-300",
};

function Row({ item, last }: { item: NewsItem; last: boolean }) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:gap-6",
        !last && "border-b border-line",
      )}
    >
      <div className="flex items-center gap-3 sm:w-56 sm:shrink-0">
        <time className="font-display text-sm font-semibold text-foreground">
          {item.date}
        </time>
        <span
          className={cn(
            "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold",
            tagStyles[item.tag] ?? "border-line bg-surface text-muted",
          )}
        >
          {item.tag}
        </span>
      </div>
      <p className="text-sm leading-relaxed text-muted sm:text-[0.95rem]">{item.title}</p>
    </div>
  );
}

export function News() {
  return (
    <Section
      id="news"
      eyebrow="News"
      title="Recent updates"
      description="Papers, patents, and milestones from the lab."
    >
      <Reveal>
        <div className="rounded-2xl border border-line bg-elevated px-6 shadow-card sm:px-8">
          {news.map((item, i) => (
            <Row key={item.date + item.title} item={item} last={i === news.length - 1} />
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
