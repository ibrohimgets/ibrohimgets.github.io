import { publications, patents, hero, type Publication } from "@/data/portfolio";
import { asset, cn } from "@/lib/utils";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const AUTHOR = "Ibrohimjon Muminov";

const statusDot: Record<Publication["status"], string> = {
  Accepted: "bg-emerald-500",
  "Under Review": "bg-amber-500",
  Published: "bg-sky-500",
  Preprint: "bg-violet-500",
};

function Authors({ authors }: { authors: string[] }) {
  return (
    <p className="mt-1.5 text-sm text-muted">
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

function Entry({ pub, index }: { pub: Publication; index: number }) {
  const links = pub.links ?? {};
  const hasLinks = links.paper || links.code || links.project;
  return (
    <Reveal as="li" delay={index * 60}>
      <div className="grid gap-x-6 border-b border-line py-7 sm:grid-cols-[3rem_1fr]">
        <span className="hidden select-none font-display text-lg italic text-muted/70 sm:block">
          [{index + 1}]
        </span>
        <div>
          <h3 className="font-display text-xl font-medium leading-snug text-foreground">
            {pub.title}
          </h3>
          <Authors authors={pub.authors} />
          <p className="mt-1.5 text-sm italic text-muted">
            {pub.venue} · {pub.year}
            <span className="not-italic">
              {"  "}
              <span
                className={cn(
                  "mx-2 inline-block h-1.5 w-1.5 rounded-full align-middle",
                  statusDot[pub.status],
                )}
                aria-hidden
              />
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-foreground/70">
                {pub.status}
              </span>
            </span>
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
            {pub.contribution}
          </p>
          {hasLinks ? (
            <p className="mt-3 flex flex-wrap gap-5">
              {links.paper ? (
                <a href={links.paper} target="_blank" rel="noopener noreferrer" className="link-meta">
                  Paper
                </a>
              ) : null}
              {links.code ? (
                <a href={links.code} target="_blank" rel="noopener noreferrer" className="link-meta">
                  Code
                </a>
              ) : null}
              {links.project ? (
                <a href={links.project} target="_blank" rel="noopener noreferrer" className="link-meta">
                  Project
                </a>
              ) : null}
            </p>
          ) : null}
        </div>
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
      <ol className="border-t border-line">
        {publications.map((pub, i) => (
          <Entry key={pub.title} pub={pub} index={i} />
        ))}
      </ol>

      {/* Patents */}
      <div className="mt-12">
        <Reveal>
          <p className="eyebrow">Patents</p>
        </Reveal>
        <ol className="mt-4 border-t border-line">
          {patents.map((patent, i) => (
            <Reveal as="li" key={patent.applicationNumber} delay={i * 60}>
              <div className="grid gap-x-6 border-b border-line py-7 sm:grid-cols-[3rem_1fr]">
                <span className="hidden select-none font-display text-lg italic text-muted/70 sm:block">
                  [P{i + 1}]
                </span>
                <div>
                  <h3 className="font-display text-xl font-medium leading-snug text-foreground">
                    {patent.title}
                  </h3>
                  <Authors authors={patent.authors} />
                  <p className="mt-1.5 text-sm italic text-muted">
                    {patent.office}
                    <span className="not-italic">
                      {" "}
                      · Application No.{" "}
                      <span className="font-medium text-foreground/80">
                        {patent.applicationNumber}
                      </span>{" "}
                      · {patent.date}
                    </span>
                  </p>
                  <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                    {patent.status}
                  </p>
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
                    {patent.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>

      {/* Full CV nudge */}
      <Reveal>
        <p className="mt-8 text-sm text-muted">
          Looking for the full publication and project record?{" "}
          <a
            href={asset(hero.cv)}
            target="_blank"
            rel="noopener noreferrer"
            className="link-meta"
          >
            Download full CV
          </a>
        </p>
      </Reveal>
    </Section>
  );
}
