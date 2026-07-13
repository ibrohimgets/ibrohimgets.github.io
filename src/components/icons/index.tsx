import type { SVGProps } from "react";

/**
 * Inline SVG icon set — no external icon dependency, so nothing is fetched
 * at runtime and everything works under a strict CSP.
 * Stroke icons inherit `currentColor`; sizing is controlled via className.
 */

type IconProps = SVGProps<SVGSVGElement>;

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ArrowUpRight(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...stroke} {...props}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function ArrowDown(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...stroke} {...props}>
      <path d="M12 5v14M19 12l-7 7-7-7" />
    </svg>
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...stroke} {...props}>
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

export function Download(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...stroke} {...props}>
      <path d="M12 3v12M8 11l4 4 4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
    </svg>
  );
}

export function ExternalLink(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...stroke} {...props}>
      <path d="M14 5h5v5M19 5l-9 9M18 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4" />
    </svg>
  );
}

export function Code(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...stroke} {...props}>
      <path d="m9 8-5 4 5 4M15 8l5 4-5 4M13 4l-2 16" />
    </svg>
  );
}

export function FileText(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...stroke} {...props}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5M9 13h6M9 17h6" />
    </svg>
  );
}

export function Sun(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...stroke} {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

export function Moon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...stroke} {...props}>
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  );
}

export function Menu(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...stroke} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function Close(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...stroke} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function MapPin(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...stroke} {...props}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function Mail(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...stroke} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function Phone(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...stroke} {...props}>
      <path d="M4 5a2 2 0 0 1 2-2h2.3a1 1 0 0 1 1 .8l1 4a1 1 0 0 1-.5 1.1L8 10a12 12 0 0 0 6 6l1.1-1.8a1 1 0 0 1 1.1-.4l4 1a1 1 0 0 1 .8 1V19a2 2 0 0 1-2 2A16 16 0 0 1 4 5z" />
    </svg>
  );
}

export function Globe(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...stroke} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
    </svg>
  );
}

export function GraduationCap(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...stroke} {...props}>
      <path d="M22 9 12 4 2 9l10 5 10-5z" />
      <path d="M6 11v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5M22 9v5" />
    </svg>
  );
}

export function Briefcase(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...stroke} {...props}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18" />
    </svg>
  );
}

export function Sparkle(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...stroke} {...props}>
      <path d="M12 3v18M3 12h18M6 6l12 12M18 6 6 18" opacity="0.35" />
      <path d="M12 4l1.6 4.8L18 10l-4.4 1.2L12 16l-1.6-4.8L6 10l4.4-1.2z" />
    </svg>
  );
}

export function Eye(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...stroke} {...props}>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function Brain(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...stroke} {...props}>
      <path d="M9 4.5a2.5 2.5 0 0 0-2.5 2.5A2.5 2.5 0 0 0 5 9.5 2.5 2.5 0 0 0 6.5 14v1a2.5 2.5 0 0 0 5 .5V5.5A2.5 2.5 0 0 0 9 4.5z" />
      <path d="M15 4.5A2.5 2.5 0 0 1 17.5 7 2.5 2.5 0 0 1 19 9.5 2.5 2.5 0 0 1 17.5 14v1a2.5 2.5 0 0 1-5 .5V5.5A2.5 2.5 0 0 1 15 4.5z" />
    </svg>
  );
}

export function Crosshair(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...stroke} {...props}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
    </svg>
  );
}

export function Newspaper(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...stroke} {...props}>
      <path d="M4 5a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v13a2 2 0 0 0 2 2H6a2 2 0 0 1-2-2z" />
      <path d="M17 8h2a1 1 0 0 1 1 1v9a2 2 0 0 1-2 2M8 8h5M8 12h5M8 16h5" />
    </svg>
  );
}

export function Expand(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...stroke} {...props}>
      <path d="M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M8 21H5a2 2 0 0 1-2-2v-3M16 21h3a2 2 0 0 0 2-2v-3" />
    </svg>
  );
}

export function Award(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...stroke} {...props}>
      <circle cx="12" cy="9" r="6" />
      <path d="M8.5 14 7 22l5-3 5 3-1.5-8" />
    </svg>
  );
}

export function BookOpen(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...stroke} {...props}>
      <path d="M12 6C10 4.5 7 4 4 4.5v13C7 17 10 17.5 12 19M12 6c2-1.5 5-2 8-1.5v13c-3-.5-6 0-8 1.5M12 6v13" />
    </svg>
  );
}

/* --- Brand marks (filled) ------------------------------------------------ */

export function GitHub(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" {...props}>
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.22-3.37-1.22-.46-1.18-1.11-1.5-1.11-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.35 9.35 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.92-2.34 4.79-4.57 5.04.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.06 10.06 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" />
    </svg>
  );
}

export function LinkedIn(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}
