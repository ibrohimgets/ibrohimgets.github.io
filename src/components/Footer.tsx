import { navItems, socials, contact, hero, site } from "@/data/portfolio";
import { asset } from "@/lib/utils";
import { GitHub, LinkedIn, Mail } from "./icons";

const iconFor: Record<string, typeof GitHub> = {
  GitHub,
  LinkedIn,
  Email: Mail,
};

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div className="max-w-sm">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent font-display text-sm font-bold text-accent-contrast">
                IM
              </span>
              <span className="font-display text-base font-semibold text-foreground">
                {site.name}
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {site.title} — combining language reasoning with computer vision so
              AI can see and reason about the world.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {socials.map((s) => {
                const Icon = iconFor[s.label] ?? Mail;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-elevated text-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigate */}
          <nav aria-label="Footer">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              Navigate
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Elsewhere */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              Elsewhere
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-sm text-muted transition-colors hover:text-accent"
                >
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors hover:text-accent"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors hover:text-accent"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={asset(hero.cv)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors hover:text-accent"
                >
                  Curriculum Vitae
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-sm text-muted sm:flex-row">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>
            Built with Next.js &amp; Tailwind CSS · Deployed on GitHub Pages
          </p>
        </div>
      </div>
    </footer>
  );
}
