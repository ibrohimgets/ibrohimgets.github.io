import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  /** Tint the section background to separate it from its neighbours. */
  tinted?: boolean;
  className?: string;
};

/**
 * A consistent section shell: anchor id, tinted background option, and a
 * standard eyebrow + title + description header.
 */
export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  tinted = false,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn(
        "scroll-mt-20 py-20 sm:py-24 lg:py-28",
        tinted && "bg-surface",
        className,
      )}
    >
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            <span aria-hidden className="h-px w-6 bg-accent" />
            {eyebrow}
          </p>
          <h2
            id={`${id}-title`}
            className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              {description}
            </p>
          ) : null}
        </Reveal>

        <div className="mt-12 sm:mt-14">{children}</div>
      </div>
    </section>
  );
}
