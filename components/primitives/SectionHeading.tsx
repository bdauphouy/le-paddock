export function SectionHeading({
  id,
  eyebrow,
  title,
  sub,
  align = "left",
  light = false,
}: {
  id: string;
  eyebrow: string;
  title: string;
  sub?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-2xl" : ""}>
      <p className="text-caption-uppercase text-action-strong mb-3">{eyebrow}</p>
      <h2
        id={id}
        className={`font-display text-display-sm md:text-display-md ${
          light ? "text-ink-on-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {sub ? (
        <p
          className={`mt-4 text-body-md ${
            light ? "text-muted-on-paper" : "text-muted"
          }`}
        >
          {sub}
        </p>
      ) : null}
    </div>
  );
}
