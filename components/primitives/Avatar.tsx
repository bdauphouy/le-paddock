const VARIANTS = [
  "bg-action text-ink",
  "bg-ink-on-paper text-surface-paper",
  "bg-muted-on-paper text-surface-paper",
];

export function Avatar({
  name,
  index = 0,
}: {
  name?: string | null;
  index?: number;
}) {
  const variant = VARIANTS[index % VARIANTS.length];
  const initial = name?.trim()?.[0]?.toUpperCase();

  return (
    <span
      aria-hidden="true"
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-title-sm ${variant}`}
    >
      {initial ?? (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-4.418 0-8 2.239-8 5v1a1 1 0 001 1h14a1 1 0 001-1v-1c0-2.761-3.582-5-8-5z" />
        </svg>
      )}
    </span>
  );
}
