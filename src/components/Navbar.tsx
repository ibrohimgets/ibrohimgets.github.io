"use client";

import { useEffect, useState } from "react";
import { navItems, hero } from "@/data/portfolio";
import { asset, cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { Close, Menu } from "./icons";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  // Solidify the bar once the page scrolls past the hero.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the nav link for the section currently in view.
  useEffect(() => {
    const ids = navItems.map((i) => i.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-line bg-background/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="container-page flex h-16 items-center justify-between">
        {/* Brand */}
        <a
          href="#top"
          className="font-display text-lg font-medium tracking-tight text-foreground transition-colors hover:text-accent"
          aria-label="Back to top"
        >
          Ibrohimjon Muminov
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={cn(
                  "text-[0.82rem] font-medium tracking-wide transition-colors",
                  active === item.href
                    ? "text-accent"
                    : "text-muted hover:text-foreground",
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href={asset(hero.cv)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center rounded-full border border-line px-4 py-1.5 text-[0.82rem] font-medium text-foreground transition-colors hover:border-accent hover:text-accent sm:inline-flex"
          >
            CV
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-foreground lg:hidden"
          >
            {open ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-line bg-background transition-[max-height] duration-300 ease-out lg:hidden",
          open ? "max-h-[26rem]" : "max-h-0 border-t-transparent",
        )}
      >
        <ul className="container-page flex flex-col py-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "block border-b border-line py-3.5 text-base transition-colors last:border-b-0",
                  active === item.href
                    ? "text-accent"
                    : "text-foreground hover:text-accent",
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <a
              href={asset(hero.cv)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex items-center rounded-full border border-line px-5 py-2 text-sm font-medium text-foreground"
            >
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
