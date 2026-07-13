import type { ComponentType, SVGProps } from "react";
import { pipeline } from "@/data/portfolio";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { ArrowDown, ArrowRight, Brain, Crosshair, Eye } from "./icons";

const icons: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  SEE: Eye,
  THINK: Brain,
  DETECT: Crosshair,
};

function Connector() {
  return (
    <>
      {/* horizontal (desktop) */}
      <div className="hidden flex-1 items-center px-2 lg:flex" aria-hidden>
        <div className="h-0.5 flex-1 flow-x rounded-full" />
        <ArrowRight className="-ml-1 h-5 w-5 text-accent" />
      </div>
      {/* vertical (mobile / tablet) */}
      <div className="flex flex-col items-center py-2 lg:hidden" aria-hidden>
        <div className="h-8 w-0.5 flow-y rounded-full" />
        <ArrowDown className="-mt-1 h-5 w-5 text-accent" />
      </div>
    </>
  );
}

export function Pipeline() {
  return (
    <Section
      id="pipeline"
      eyebrow="Research Philosophy"
      title="See · Think · Detect"
      description="My work follows one idea: perception alone isn't understanding. A system should see the scene, reason about intent with language, and only then detect — so grounding becomes a decision, not a guess."
    >
      <div className="flex flex-col items-stretch gap-2 lg:flex-row lg:items-center">
        {pipeline.map((step, i) => {
          const Icon = icons[step.key] ?? Eye;
          return (
            <div key={step.key} className="contents">
              <Reveal delay={i * 130} className="lg:flex-1">
                <div className="group relative h-full overflow-hidden rounded-2xl border border-line bg-elevated p-7 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-card-hover lg:p-8">
                  {/* soft accent glow */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -top-12 left-1/2 h-28 w-28 -translate-x-1/2 rounded-full bg-accent/10 blur-2xl transition-opacity duration-300 group-hover:bg-accent/20"
                  />
                  <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-soft text-accent ring-1 ring-accent/20">
                    <Icon className="h-8 w-8" />
                  </div>
                  <p className="relative mt-5 font-display text-xs font-semibold uppercase tracking-[0.3em] text-muted">
                    Step {i + 1}
                  </p>
                  <h3 className="relative mt-1 font-display text-2xl font-bold tracking-tight text-foreground">
                    {step.title}
                  </h3>
                  <p className="relative mx-auto mt-3 max-w-xs text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </Reveal>

              {i < pipeline.length - 1 ? <Connector /> : null}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
