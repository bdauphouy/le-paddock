import Image from "next/image";

export function PhotoFrame({
  src,
  alt,
  className = "",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  overlay = true,
  quality = 75,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  overlay?: boolean;
  quality?: number;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-hairline ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        quality={quality}
        className="object-cover"
      />
      {overlay ? (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ground/60 via-transparent to-transparent" />
      ) : null}
    </div>
  );
}
