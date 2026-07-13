"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { gallery } from "@/data/portfolio";
import { asset, cn } from "@/lib/utils";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { ArrowRight, Close } from "./icons";

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
      eyebrow="Gallery"
      title="Figures from the work"
      description="Architecture diagrams, grounding outputs, and attention maps taken from the project repositories. Click a figure to view it full size."
    >
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map((item, i) => (
          <Reveal key={item.image} delay={(i % 3) * 60}>
            <figure>
              <button
                type="button"
                onClick={() => setOpen(i)}
                className="group block w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label={`View figure: ${item.caption}`}
              >
                <div className="figure-well transition-colors group-hover:border-accent/50">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={asset(item.image)}
                      alt={item.caption}
                      fill
                      className={cn(
                        "transition-transform duration-500 group-hover:scale-[1.02]",
                        item.fit === "contain" ? "object-contain p-2" : "object-cover",
                      )}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </div>
              </button>
              <figcaption className="mt-2.5 text-sm leading-snug text-muted">
                <span className="mr-2 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                  {item.tag}
                </span>
                <span className="italic">{item.caption}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      {/* Lightbox */}
      {active ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          className="fixed inset-0 z-[70] flex flex-col items-center justify-center bg-black/85 p-4 backdrop-blur-sm animate-fade-in sm:p-8"
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
              className="max-h-[78vh] w-auto max-w-full rounded-sm bg-white object-contain shadow-2xl"
            />
            <figcaption className="mt-4 max-w-2xl text-center text-sm text-white/80">
              <span className="mr-2 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                {active.tag}
              </span>
              <span className="italic">{active.caption}</span>
            </figcaption>
          </figure>
        </div>
      ) : null}
    </Section>
  );
}
