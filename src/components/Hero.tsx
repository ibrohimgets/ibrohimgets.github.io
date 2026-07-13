import Image from "next/image";
import { hero, researchGroups } from "@/data/portfolio";
import { asset } from "@/lib/utils";
import { Button } from "./Button";
import { ArrowDown, Download, MapPin, Sparkle } from "./icons";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      {/* Decorative grid + accent glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-[-10%] h-[26rem] w-[26rem] rounded-full bg-accent/10 blur-3xl"
      />

      <div className="container-page relative">
        <div className="grid items-center gap-12 pb-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:pb-28">
          {/* Left: copy */}
          <div className="max-w-2xl animate-fade-up">
            <span className="chip gap-2 border-accent/30 bg-accent-soft text-accent">
              <Sparkle className="h-3.5 w-3.5" />
              {hero.availability}
            </span>

            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {hero.name}
            </h1>

            <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xl font-medium text-accent sm:text-2xl">
              {hero.title}
            </p>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {hero.summary}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href={asset(hero.cv)} external>
                <Download className="h-4 w-4" />
                View CV
              </Button>
              <Button href="#publications" variant="secondary">
                View Research
              </Button>
              <Button href="#contact" variant="ghost">
                Contact Me
              </Button>
            </div>

            <p className="mt-8 flex items-center gap-2 text-sm text-muted">
              <MapPin className="h-4 w-4 text-accent" />
              Yongsan-gu, Seoul, South Korea
            </p>
          </div>

          {/* Right: portrait */}
          <div className="relative mx-auto w-full max-w-sm animate-fade-in lg:mx-0">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent/25 via-accent/5 to-transparent"
              />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-line bg-surface shadow-card">
                <Image
                  src={asset(hero.photo)}
                  alt="Portrait of Ibrohimjon Muminov"
                  width={600}
                  height={800}
                  priority
                  className="h-full w-full object-cover"
                  sizes="(max-width: 1024px) 24rem, 22rem"
                />
              </div>

              {/* Floating research badge */}
              <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-line bg-elevated/95 p-4 shadow-card backdrop-blur sm:block">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                  Research focus
                </p>
                <p className="mt-1 text-sm font-medium text-foreground">
                  {researchGroups[0].topics.join(" · ")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <a
          href="#about"
          className="group mb-10 hidden items-center gap-2 text-sm text-muted transition-colors hover:text-accent lg:inline-flex"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line group-hover:border-accent">
            <ArrowDown className="h-4 w-4 animate-float" />
          </span>
          Scroll to explore
        </a>
      </div>
    </section>
  );
}
