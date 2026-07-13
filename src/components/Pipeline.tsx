import type { ComponentType, SVGProps } from "react";
import { pipeline } from "@/data/portfolio";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { ArrowRight, Brain, Crosshair, Eye } from "./icons";

const icons: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  SEE: Eye,
  THINK: Brain,
  DETECT: Crosshair,
};

export function Pipeline() {
  return (
    <Section
      id="pipeline"
      eyebrow="Approach"
      title="See · Think · Detect"
      description="Most of my work comes back to one idea: seeing isn't the same as understanding. A model should look at the scene, use language to figure out what's actually being asked, and only then localize the object."
    >
      <Reveal>
        <div className="grid overflow-hidden rounded-md border border-line sm:grid-cols-3">
          {pipeline.map((step, i) => {
            const Icon = icons[step.key] ?? Eye;
            return (
              <div
                key={step.key}
                className="relative border-b border-line p-7 last:border-b-0 sm:border-b-0 sm:border-r sm:p-8 sm:last:border-r-0"
              >
                <div className="flex items-center justify-between">
                  <span className="eyebrow">Step {i + 1}</span>
                  <Icon className="h-5 w-5 text-accent" aria-hidden />
                </div>
                <h3 className="mt-4 font-display text-2xl font-medium italic text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>

                {/* connector arrow between columns */}
                {i < pipeline.length - 1 ? (
                  <span
                    aria-hidden
                    className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-background text-muted sm:flex"
                  >
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                ) : null}
              </div>
            );
          })}
        </div>
      </Reveal>
    </Section>
  );
}
