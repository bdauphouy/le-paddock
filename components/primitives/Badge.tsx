export function Badge({
  children,
  variant = "accent",
}: {
  children: React.ReactNode;
  variant?: "accent" | "paper";
}) {
  const classes =
    variant === "accent"
      ? "bg-action/15 text-action-strong border border-action/30"
      : "bg-surface-paper text-ink-on-paper border border-hairline-paper";

  return (
    <span
      className={`inline-flex items-center rounded-pill px-3 py-1 text-caption ${classes}`}
    >
      {children}
    </span>
  );
}
