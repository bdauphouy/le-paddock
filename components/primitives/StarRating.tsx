import { StarIcon } from "./icons";

export function StarRating({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-0.5 text-[#F4B400] ${className}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} className="h-3.5 w-3.5" />
      ))}
    </div>
  );
}
