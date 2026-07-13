import { navItems, contact, hero, site } from "@/data/portfolio";
import { asset } from "@/lib/utils";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-4 border-t border-line">
      <div className="container-page py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-sm">
            <a
              href="#top"
              className="font-display text-lg font-medium text-foreground transition-colors hover:text-accent"
            >
              {site.name}
            </a>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              M.S. student in Artificial Intelligence at Dongguk University,
              working on multimodal AI, visual grounding, and open-world detection.
            </p>
          </div>

          {/* Navigate */}
          <nav aria-label="Footer">
            <h3 className="eyebrow">Navigate</h3>
            <ul className="mt-4 space-y-2">
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
            <h3 className="eyebrow">Elsewhere</h3>
            <ul className="mt-4 space-y-2">
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

        <div className="mt-12 flex flex-col items-start justify-between gap-2 border-t border-line pt-6 text-sm text-muted sm:flex-row sm:items-center">
          <p>
            © {year} {site.name}
          </p>
          <p>Seoul, South Korea</p>
        </div>
      </div>
    </footer>
  );
}
