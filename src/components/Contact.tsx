import { contact, hero } from "@/data/portfolio";
import { asset } from "@/lib/utils";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { Button } from "./Button";
import {
  ArrowUpRight,
  Download,
  GitHub,
  Globe,
  LinkedIn,
  Mail,
  MapPin,
  Phone,
} from "./icons";

const channels = [
  {
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
    Icon: Mail,
    external: false,
  },
  {
    label: "GitHub",
    value: "github.com/ibrohimgets",
    href: contact.github,
    Icon: GitHub,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "in/ibrohim-muminov",
    href: contact.linkedin,
    Icon: LinkedIn,
    external: true,
  },
  {
    label: "Website",
    value: contact.website.replace("https://", ""),
    href: contact.website,
    Icon: Globe,
    external: true,
  },
  {
    label: "Phone",
    value: contact.phone,
    href: `tel:${contact.phone.replace(/\s/g, "")}`,
    Icon: Phone,
    external: false,
  },
  {
    label: "Location",
    value: contact.location,
    href: undefined,
    Icon: MapPin,
    external: false,
  },
];

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build systems that see and reason"
      description="I'm open to research collaborations, Ph.D. opportunities, and AI/ML engineering roles. The fastest way to reach me is email."
      tinted
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
        {/* Primary CTA */}
        <Reveal>
          <div className="flex h-full flex-col justify-between rounded-2xl border border-line bg-elevated p-8 shadow-card">
            <div>
              <h3 className="font-display text-2xl font-semibold text-foreground">
                Get in touch
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Whether it&apos;s a paper, a project, or a potential role, I&apos;d
                love to hear from you. Drop a message or grab my CV.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={`mailto:${contact.email}`}>
                <Mail className="h-4 w-4" /> Email me
              </Button>
              <Button href={asset(hero.cv)} variant="secondary" external>
                <Download className="h-4 w-4" /> Download CV
              </Button>
            </div>
          </div>
        </Reveal>

        {/* Channels grid */}
        <Reveal delay={80}>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {channels.map(({ label, value, href, Icon, external }) => {
              const inner = (
                <>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-wider text-muted">
                      {label}
                    </span>
                    <span className="block truncate text-sm font-medium text-foreground">
                      {value}
                    </span>
                  </span>
                  {href ? (
                    <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-accent" />
                  ) : null}
                </>
              );

              const classes =
                "group flex items-center gap-3 rounded-2xl border border-line bg-elevated p-4 shadow-card transition-all";

              return href ? (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className={`${classes} hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-card-hover`}
                >
                  {inner}
                </a>
              ) : (
                <div key={label} className={classes}>
                  {inner}
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
