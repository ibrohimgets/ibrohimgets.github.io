import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "sm";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  /** When true, opens in a new tab with safe rel. */
  external?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-contrast shadow-sm hover:bg-accent-hover hover:shadow-md active:scale-[0.98]",
  secondary:
    "border border-line bg-elevated text-foreground hover:border-accent hover:text-accent active:scale-[0.98]",
  ghost: "text-muted hover:bg-surface hover:text-foreground",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  sm: "px-3.5 py-2 text-xs",
};

/** A link styled as a button — every CTA on the site is a navigable anchor. */
export function Button({
  variant = "primary",
  size = "md",
  external,
  className,
  children,
  ...props
}: ButtonProps) {
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <a
      className={cn(base, variants[variant], sizes[size], className)}
      {...externalProps}
      {...props}
    >
      {children}
    </a>
  );
}
