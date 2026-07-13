"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { gallery } from "@/data/portfolio";
import { asset, cn } from "@/lib/utils";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { ArrowRight, Close, Expand } from "./icons";

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const move = useCallback(
    (dir: number) =>
      setOpen((cur) =>
        cur === null ? cur : (cur + dir + gallery.length) % gallery.length,
      ),
    [],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, move]);

  const active = open === null ? null : gallery[open];

  return (
    <Section
      id="gallery"
      eyebrow="Research Gallery"
      title="Figures from the work"
      description="Pipeline diagrams, model architectures, grounding outputs, and attention maps — pulled directly from the project repositories. Click any figure to expand."
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map((item, i) => (
          <Reveal key={item.image} delay={(i % 3) * 70}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="group relative block w-full overflow-hidden rounded-2xl border border-line bg-surface text-left shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface">
                <Image
                  src={asset(item.image)}
                  alt={item.caption}
                  fill
                  className={cn(
                    "transition-transform duration-500 group-hover:scale-[1.03]",
                    item.fit === "contain" ? "object-contain p-2" : "object-cover",
                  )}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <span className="absolute left-3 top-3 inline-flex items-center rounded-full border border-line bg-background/90 px-2.5 py-1 text-xs font-semibold text-accent shadow-sm backdrop-blur">
                  {item.tag}
                </span>
                <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-line bg-background/90 text-muted opacity-0 shadow-sm backdrop-blur transition-opacity group-hover:opacity-100">
                  <Expand className="h-4 w-4" />
                </span>
              </div>
              <p className="border-t border-line px-4 py-3 text-sm leading-snug text-muted">
                {item.caption}
              </p>
            </button>
          </Reveal>
        ))}
      </div>

      {/* Lightbox */}
      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          className="fixed inset-0 z-[70] flex flex-col items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-fade-in sm:p-8"
          onClick={close}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={close}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <Close className="h-5 w-5" />
          </button>

          {/* Prev / Next */}
          <button
            type="button"
            aria-label="Previous figure"
            onClick={(e) => {
              e.stopPropagation();
              move(-1);
            }}
            className="absolute left-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 sm:flex"
          >
            <ArrowRight className="h-5 w-5 rotate-180" />
          </button>
          <button
            type="button"
            aria-label="Next figure"
            onClick={(e) => {
              e.stopPropagation();
              move(1);
            }}
            className="absolute right-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 sm:flex"
          >
            <ArrowRight className="h-5 w-5" />
          </button>

          <figure
            className="flex max-h-full max-w-5xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset(active.image)}
              alt={active.caption}
              className="max-h-[78vh] w-auto max-w-full rounded-lg bg-white object-contain shadow-2xl"
            />
            <figcaption className="mt-4 max-w-2xl text-center text-sm text-white/80">
              <span className="mr-2 font-semibold text-accent">{active.tag}</span>
              {active.caption}
            </figcaption>
          </figure>
        </div>
      ) : null}
    </Section>
  );
}
