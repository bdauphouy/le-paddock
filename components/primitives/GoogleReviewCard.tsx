import { Avatar } from "./Avatar";
import { StarRating } from "./StarRating";
import { GoogleIcon } from "./icons";

export function GoogleReviewCard({
  quote,
  name,
  index = 0,
}: {
  quote: string;
  name?: string | null;
  index?: number;
}) {
  return (
    <figure className="flex h-full w-[280px] shrink-0 snap-start flex-col rounded-lg border border-black/10 bg-white p-5">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-3">
          <Avatar name={name} index={index} />
          <div>
            <figcaption className="text-title-sm text-ink-on-paper leading-tight">
              {name ?? "Avis client"}
            </figcaption>
            <StarRating className="mt-1" />
          </div>
        </div>
        <GoogleIcon className="h-4 w-4 shrink-0" />
      </div>
      <blockquote className="mt-3 flex-1">
        <p className="text-body-sm text-muted-on-paper">{quote}</p>
      </blockquote>
    </figure>
  );
}
