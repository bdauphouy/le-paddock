import Link from "next/link";

export type ButtonVariant = "primary" | "secondary" | "on-color" | "text-link";

export const buttonVariantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-action text-ink hover:bg-action-strong",
  secondary:
    "bg-transparent text-ink border border-hairline hover:border-action-strong hover:text-action-strong",
  "on-color":
    "bg-ink text-ink-on-paper hover:bg-white",
  "text-link":
    "bg-transparent text-ink underline underline-offset-4 decoration-hairline hover:decoration-action-strong hover:text-action-strong px-0 h-auto",
};

export const buttonBaseClasses =
  "inline-flex h-11 min-h-11 items-center justify-center gap-2 rounded-md px-5 text-button transition-colors duration-200";

export function getButtonClasses(variant: ButtonVariant, className = "") {
  return `${buttonBaseClasses} ${buttonVariantClasses[variant]} ${className}`;
}

export function Button({
  href,
  variant = "primary",
  className = "",
  children,
}: {
  href: string;
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
}) {
  const classes = getButtonClasses(variant, className);
  const isExternalOrProtocol = /^(https?:|tel:|mailto:)/.test(href);

  if (isExternalOrProtocol) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
