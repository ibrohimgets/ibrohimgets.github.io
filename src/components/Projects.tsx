import Image from "next/image";
import { projects, type Project } from "@/data/portfolio";
import { asset, cn } from "@/lib/utils";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

function DetailBlock({ label, children }: { label: string; children: string }) {
  return (
    <div>
      <p className="eyebrow !text-accent">{label}</p>
      <p className="mt-1.5 text-sm leading-relaxed text-muted">{children}</p>
    </div>
  );
}

function ProjectEntry({ project, index }: { project: Project; index: number }) {
  const flip = index % 2 === 1; // alternate figure/content sides on desktop
  const links = project.links;

  return (
    <Reveal as="article">
      <div
        className={cn(
          "grid gap-8 border-t border-line py-12 lg:grid-cols-2 lg:gap-14",
          index === 0 && "border-t-0 pt-2",
        )}
      >
        {/* Figure with caption */}
        <figure className={cn("self-start", flip && "lg:order-2")}>
          <div className="figure-well">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={asset(project.image)}
                alt={`${project.name} — research figure`}
                fill
                className={cn(
                  project.imageFit === "contain"
                    ? "object-contain p-3"
                    : "object-cover",
                )}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          {project.metric ? (
            <figcaption className="mt-2.5 text-xs italic text-muted">
              {project.metric}
            </figcaption>
          ) : null}
        </figure>

        {/* Content */}
        <div className={cn(flip && "lg:order-1")}>
          <h3 className="font-display text-2xl font-medium tracking-tight text-foreground">
            {project.name}
          </h3>
          <p className="mt-1 font-display text-base italic text-accent">
            {project.tagline}
          </p>

          <div className="mt-6 space-y-5">
            <DetailBlock label="Overview">{project.overview}</DetailBlock>
            <DetailBlock label="Motivation">{project.motivation}</DetailBlock>
            <DetailBlock label="Contribution">{project.contribution}</DetailBlock>
          </div>

          <p className="mt-6 text-sm text-muted">
            <span className="font-semibold text-foreground/70">Stack — </span>
            {project.technologies.join(" · ")}
          </p>

          <p className="mt-5 flex flex-wrap items-center gap-6">
            {links.github ? (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="link-meta"
              >
                GitHub ↗
              </a>
            ) : null}
            {links.paper ? (
              <a
                href={links.paper}
                target="_blank"
                rel="noopener noreferrer"
                className="link-meta"
              >
                Paper ↗
              </a>
            ) : links.paperLabel ? (
              <span className="text-sm italic text-muted">{links.paperLabel}</span>
            ) : null}
          </p>
        </div>
      </div>
    </Reveal>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="What I've been building"
      description="A few systems built around one question: can language reasoning make detection and grounding more reliable? Every figure below comes straight from the project's own repository."
    >
      <div>
        {projects.map((project, i) => (
          <ProjectEntry key={project.name} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}
