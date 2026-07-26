export function Ticker({ items }: { items: string[] }) {
  const track = [...items, ...items, ...items, ...items, ...items];

  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden border-y border-ink/10 bg-ground/40 py-3 backdrop-blur-sm"
    >
      <div className="flex w-max animate-marquee">
        {track.map((item, index) => (
          <span
            key={index}
            className="flex items-center gap-6 whitespace-nowrap pl-6 text-caption-uppercase text-ink/70"
          >
            {item}
            <span className="text-action-strong">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
