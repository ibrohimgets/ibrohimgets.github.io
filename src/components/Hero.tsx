import Image from "next/image";
import { hero } from "@/data/portfolio";
import { asset } from "@/lib/utils";
import { ArrowDown, Download } from "./icons";

export function Hero() {
  return (
    <section id="top" className="pt-32 sm:pt-36 lg:pt-40">
      <div className="container-page">
        <div className="grid items-start gap-12 pb-16 sm:pb-20 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
          {/* Left: copy */}
          <div className="max-w-2xl animate-fade-up">
            <p className="eyebrow">{hero.availability}</p>

            <h1 className="mt-6 font-display text-[2.6rem] font-medium leading-[1.12] tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem]">
              Building AI Systems That <em className="text-accent">See</em>,{" "}
              <em className="text-accent">Think</em>, and{" "}
              <em className="text-accent">Reason</em>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {hero.subtitle}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <a
                href={asset(hero.cv)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
              >
                <Download className="h-4 w-4" />
                View CV
              </a>
              <a href="#publications" className="link-quiet text-sm font-medium">
                Publications
              </a>
              <a href="#projects" className="link-quiet text-sm font-medium">
                Projects
              </a>
              <a href="#contact" className="link-quiet text-sm font-medium">
                Contact
              </a>
            </div>

            <p className="mt-10 text-sm text-muted">
              {hero.name} · Yongsan-gu, Seoul, South Korea
            </p>
          </div>

          {/* Right: portrait as an editorial figure */}
          <figure className="mx-auto w-full max-w-[17rem] animate-fade-in sm:max-w-[19rem] lg:mx-0 lg:justify-self-end">
            <div className="figure-well">
              <Image
                src={asset(hero.photo)}
                alt="Portrait of Ibrohimjon Muminov"
                width={240}
                height={294}
                priority
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 19rem, 19rem"
              />
            </div>
            <figcaption className="mt-3 border-l-2 border-accent/60 pl-3">
              <span className="block text-sm font-medium text-foreground">
                {hero.title}
              </span>
              <span className="mt-0.5 block text-sm italic text-muted">
                M.S. in AI · Dongguk University
              </span>
            </figcaption>
          </figure>
        </div>

        {/* Scroll hint */}
        <a
          href="#pipeline"
          className="group hidden items-center gap-2 pb-4 text-sm text-muted transition-colors hover:text-accent lg:inline-flex"
        >
          <ArrowDown className="h-4 w-4" />
          Explore the research
        </a>
      </div>
    </section>
  );
}
