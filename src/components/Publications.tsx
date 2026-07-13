import { publications, patents, hero, type Publication } from "@/data/portfolio";
import { asset, cn } from "@/lib/utils";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { Button } from "./Button";
import { Award, BookOpen, Code, ExternalLink, FileText } from "./icons";

const AUTHOR = "Ibrohimjon Muminov";

const statusStyles: Record<Publication["status"], string> = {
  Accepted:
    "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
  "Under Review":
    "border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300",
  Published:
    "border-sky-500/30 bg-sky-500/10 text-sky-700 dark:text-sky-300",
  Preprint:
    "border-violet-500/30 bg-violet-500/10 text-violet-700 dark:text-violet-300",
};

function Authors({ authors }: { authors: string[] }) {
  return (
    <p className="mt-1 text-sm text-muted">
      {authors.map((a, i) => (
        <span key={a}>
          <span className={cn(a === AUTHOR && "font-semibold text-foreground")}>
            {a}
          </span>
          {i < authors.length - 1 ? ", " : ""}
        </span>
      ))}
    </p>
  );
}

function PublicationCard({ pub, index }: { pub: Publication; index: number }) {
  const links = pub.links ?? {};
  return (
    <Reveal as="article" delay={index * 70}>
      <div className="group relative flex h-full flex-col rounded-2xl border border-line bg-elevated p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-card-hover sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
            <BookOpen className="h-5 w-5" />
          </span>
          <span
            className={cn(
              "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold",
              statusStyles[pub.status],
            )}
          >
            {pub.status}
          </span>
        </div>

        <h3 className="mt-5 font-display text-lg font-semibold leading-snug text-foreground">
          {pub.title}
        </h3>
        <Authors authors={pub.authors} />

        <p className="mt-3 text-sm font-medium text-accent">
          {pub.venue} · {pub.year}
        </p>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
          {pub.contribution}
        </p>

        {(links.paper || links.code || links.project) && (
          <div className="mt-5 flex flex-wrap gap-2">
            {links.paper && (
              <Button href={links.paper} variant="secondary" size="sm" external>
                <FileText className="h-4 w-4" /> Paper
              </Button>
            )}
            {links.code && (
              <Button href={links.code} variant="secondary" size="sm" external>
                <Code className="h-4 w-4" /> Code
              </Button>
            )}
            {links.project && (
              <Button href={links.project} variant="secondary" size="sm" external>
                <ExternalLink className="h-4 w-4" /> Project
              </Button>
            )}
          </div>
        )}
      </div>
    </Reveal>
  );
}

export function Publications() {
  return (
    <Section
      id="publications"
      eyebrow="Publications & Patents"
      title="Publications & patents"
      description="Peer-reviewed papers on visual grounding and open-world detection, plus a patent that came out of the work."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {publications.map((pub, i) => (
          <PublicationCard key={pub.title} pub={pub} index={i} />
        ))}
      </div>

      {/* Patents */}
      <div className="mt-10">
        <Reveal>
          <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-muted">
            <Award className="h-4 w-4 text-accent" />
            Patents
          </h3>
        </Reveal>

        <div className="mt-5 grid gap-6">
          {patents.map((patent, i) => (
            <Reveal as="article" key={patent.applicationNumber} delay={i * 70}>
              <div className="rounded-2xl border border-line bg-elevated p-6 shadow-card transition-all duration-300 hover:border-accent/40 hover:shadow-card-hover sm:p-7">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="max-w-3xl">
                    <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent-soft px-2.5 py-1 text-xs font-semibold text-accent">
                      {patent.status}
                    </span>
                    <h4 className="mt-3 font-display text-lg font-semibold leading-snug text-foreground">
                      {patent.title}
                    </h4>
                    <Authors authors={patent.authors} />
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {patent.description}
                    </p>
                  </div>

                  <dl className="shrink-0 space-y-2 rounded-xl border border-line bg-surface p-4 text-sm sm:w-64">
                    <div>
                      <dt className="text-xs uppercase tracking-wider text-muted">
                        Office
                      </dt>
                      <dd className="font-medium text-foreground">{patent.office}</dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-wider text-muted">
                        Application No.
                      </dt>
                      <dd className="font-mono text-foreground">
                        {patent.applicationNumber}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-wider text-muted">
                        Date
                      </dt>
                      <dd className="font-medium text-foreground">{patent.date}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Full CV nudge */}
      <Reveal>
        <div className="mt-10 flex flex-col items-start gap-3 rounded-2xl border border-dashed border-line bg-surface p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">
            Looking for the full publication and project record?
          </p>
          <Button href={asset(hero.cv)} variant="secondary" size="sm" external>
            <FileText className="h-4 w-4" /> Download full CV
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
