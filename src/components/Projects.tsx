import Image from "next/image";
import { projects, type Project } from "@/data/portfolio";
import { asset } from "@/lib/utils";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { ArrowUpRight, Code, ExternalLink, GitHub } from "./icons";

function ProjectArt({ project }: { project: Project }) {
  // Real image if provided, otherwise a branded placeholder with the glyph.
  if (project.image) {
    return (
      <Image
        src={asset(project.image)}
        alt={`${project.name} preview`}
        width={800}
        height={450}
        className="h-full w-full object-cover"
        sizes="(max-width: 1024px) 100vw, 33vw"
      />
    );
  }
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-accent-soft via-surface to-surface">
      <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />
      <span className="relative select-none text-5xl" aria-hidden>
        {project.emoji ?? "🧩"}
      </span>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const links = project.links ?? {};
  return (
    <Reveal as="article" delay={index * 80}>
      <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-elevated shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-card-hover">
        {/* Image / placeholder */}
        <div className="relative aspect-[16/9] overflow-hidden border-b border-line">
          <ProjectArt project={project} />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-lg font-semibold text-foreground">
              {project.name}
            </h3>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-muted transition-colors group-hover:text-accent" />
          </div>
          <p className="mt-1 text-sm font-medium text-accent">{project.tagline}</p>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
            {project.description}
          </p>

          <ul className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li key={tech} className="chip">
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            {links.github ? (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-2 text-xs font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <GitHub className="h-4 w-4" /> GitHub
              </a>
            ) : null}

            {links.demo ? (
              <a
                href={links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-2 text-xs font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <ExternalLink className="h-4 w-4" /> Demo
              </a>
            ) : (
              <span
                className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-dashed border-line px-3.5 py-2 text-xs font-medium text-muted/70"
                title="Demo coming soon"
              >
                <Code className="h-4 w-4" /> Demo · soon
              </span>
            )}
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
      title="Research, shipped as systems"
      description="From cognitively inspired grounding pipelines to embodied perception in simulation — the engineering behind the papers."
      tinted
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}
