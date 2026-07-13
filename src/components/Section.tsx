import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

/**
 * Editorial section shell: a hairline rule, a small-caps label, and a serif
 * title — the rhythm repeats down the page like chapters in a paper.
 */
export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn("scroll-mt-24 py-14 sm:py-16", className)}
    >
      <div className="container-page">
        <div className="border-t border-line pt-10 sm:pt-12">
          <Reveal>
            <p className="eyebrow">{eyebrow}</p>
            <h2
              id={`${id}-title`}
              className="mt-3 font-display text-3xl font-medium tracking-tight text-foreground sm:text-4xl"
            >
              {title}
            </h2>
            {description ? (
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
                {description}
              </p>
            ) : null}
          </Reveal>

          <div className="mt-10 sm:mt-12">{children}</div>
        </div>
      </div>
    </section>
  );
}
