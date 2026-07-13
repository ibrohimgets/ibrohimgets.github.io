import Image from "next/image";
import { events } from "@/data/portfolio";
import { asset } from "@/lib/utils";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

/**
 * Conference & community photos, laid out editorially: one lead photo and a
 * column of supporting ones, each with a proper figure caption.
 */
export function Events() {
  const [lead, ...rest] = events;

  return (
    <Section
      id="events"
      eyebrow="Conferences & Community"
      title="Out in the field"
      description="Presenting papers and meeting the research community at conferences, symposiums, and AI events across Korea."
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
        {/* Lead photo */}
        <Reveal>
          <figure>
            <div className="figure-well">
              <Image
                src={asset(lead.image)}
                alt={lead.caption}
                width={1400}
                height={1503}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <figcaption className="mt-3 border-l-2 border-accent/60 pl-3">
              <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                {lead.event}
              </span>
              <span className="mt-1 block text-sm italic leading-relaxed text-muted">
                {lead.caption}
              </span>
            </figcaption>
          </figure>
        </Reveal>

        {/* Supporting photos */}
        <div className="flex flex-col gap-10">
          {rest.map((item, i) => (
            <Reveal key={item.image} delay={(i + 1) * 80}>
              <figure>
                <div className="figure-well">
                  <Image
                    src={asset(item.image)}
                    alt={item.caption}
                    width={1314}
                    height={1010}
                    className="h-auto w-full object-cover"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                </div>
                <figcaption className="mt-3 border-l-2 border-accent/60 pl-3">
                  <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                    {item.event}
                  </span>
                  <span className="mt-1 block text-sm italic leading-relaxed text-muted">
                    {item.caption}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
