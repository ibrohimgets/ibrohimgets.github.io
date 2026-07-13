import Image from "next/image";
import { projects, type Project } from "@/data/portfolio";
import { asset, cn } from "@/lib/utils";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { ArrowUpRight, FileText, GitHub } from "./icons";

function DetailBlock({ label, children }: { label: string; children: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
        {label}
      </p>
      <p className="mt-1.5 text-sm leading-relaxed text-muted">{children}</p>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const flip = index % 2 === 1; // alternate image/content sides on desktop
  const links = project.links;

  return (
    <Reveal as="article">
      <div className="overflow-hidden rounded-3xl border border-line bg-elevated shadow-card transition-all duration-300 hover:border-accent/40 hover:shadow-card-hover">
        <div className="grid lg:grid-cols-2">
          {/* Figure */}
          <div
            className={cn(
              "relative flex items-center justify-center border-b border-line bg-surface p-4 sm:p-6 lg:border-b-0",
              flip ? "lg:order-2 lg:border-l" : "lg:border-r",
            )}
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
              <Image
                src={asset(project.image)}
                alt={`${project.name} — research figure`}
                fill
                className={cn(
                  project.imageFit === "contain" ? "object-contain" : "object-cover",
                )}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {project.metric ? (
              <span className="absolute left-6 top-6 inline-flex items-center rounded-full border border-accent/30 bg-background/90 px-3 py-1 text-xs font-semibold text-accent shadow-sm backdrop-blur sm:left-8 sm:top-8">
                {project.metric}
              </span>
            ) : null}
          </div>

          {/* Content */}
          <div className={cn("flex flex-col p-6 sm:p-8 lg:p-10", flip && "lg:order-1")}>
            <h3 className="font-display text-2xl font-bold tracking-tight text-foreground">
              {project.name}
            </h3>
            <p className="mt-1 text-sm font-semibold text-accent">{project.tagline}</p>

            <div className="mt-5 space-y-4">
              <DetailBlock label="Overview">{project.overview}</DetailBlock>
              <DetailBlock label="Motivation">{project.motivation}</DetailBlock>
              <DetailBlock label="Contribution">{project.contribution}</DetailBlock>
            </div>

            <ul className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <li key={tech} className="chip">
                  {tech}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap items-center gap-2">
              {links.github ? (
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-contrast shadow-sm transition-all hover:bg-accent-hover hover:shadow-md active:scale-[0.98]"
                >
                  <GitHub className="h-4 w-4" /> GitHub
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              ) : null}
              {links.paper ? (
                <a
                  href={links.paper}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  <FileText className="h-4 w-4" /> Paper
                </a>
              ) : links.paperLabel ? (
                <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-line px-4 py-2 text-sm font-medium text-muted">
                  <FileText className="h-4 w-4" /> {links.paperLabel}
                </span>
              ) : null}
            </div>
          </div>
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
      tinted
    >
      <div className="space-y-8">
        {projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}
