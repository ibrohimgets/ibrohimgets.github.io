import { contact, hero } from "@/data/portfolio";
import { asset } from "@/lib/utils";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const channels = [
  { label: "Email", value: contact.email, href: `mailto:${contact.email}`, external: false },
  { label: "GitHub", value: "github.com/ibrohimgets", href: contact.github, external: true },
  {
    label: "LinkedIn",
    value: "in/ibrohim-muminov",
    href: contact.linkedin,
    external: true,
  },
  {
    label: "Phone",
    value: contact.phone,
    href: `tel:${contact.phone.replace(/\s/g, "")}`,
    external: false,
  },
  { label: "Location", value: contact.location, href: undefined, external: false },
];

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Get in touch"
      description="I'm open to research collaborations, PhD opportunities, and ML engineering roles. Email is the best way to reach me."
    >
      <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
        {/* Left: reach out */}
        <Reveal>
          <div>
            <h3 className="font-display text-2xl font-medium text-foreground">
              Reach out
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
              Whether it&apos;s about a paper, a project, or a role, feel free to
              get in touch. Email me or grab my CV.
            </p>
            <p className="mt-7">
              <a
                href={`mailto:${contact.email}`}
                className="font-display text-2xl italic text-accent underline decoration-accent/30 decoration-1 underline-offset-[6px] transition-colors hover:decoration-accent sm:text-3xl"
              >
                {contact.email}
              </a>
            </p>
            <p className="mt-7">
              <a
                href={asset(hero.cv)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
              >
                Download CV
              </a>
            </p>
          </div>
        </Reveal>

        {/* Right: channels */}
        <Reveal delay={80}>
          <dl className="border-t border-line">
            {channels.map(({ label, value, href, external }) => (
              <div
                key={label}
                className="grid grid-cols-[6.5rem_1fr] items-baseline gap-4 border-b border-line py-4"
              >
                <dt className="eyebrow">{label}</dt>
                <dd className="min-w-0 truncate text-sm">
                  {href ? (
                    <a
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="link-quiet"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-foreground">{value}</span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
