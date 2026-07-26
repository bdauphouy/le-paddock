export function GoogleMapEmbed({
  query,
  title,
  className = "",
}: {
  query: string;
  title: string;
  className?: string;
}) {
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(
    query
  )}&z=15&output=embed`;

  return (
    <div
      className={`overflow-hidden rounded-lg border border-hairline ${className}`}
    >
      <iframe
        src={src}
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full w-full"
        style={{ border: 0 }}
      />
    </div>
  );
}
