"use client";

import { useRef } from "react";
import { TESTIMONIALS } from "@/lib/reviews";
import { GoogleReviewCard } from "./GoogleReviewCard";
import { ChevronIcon } from "./icons";

export function GoogleReviewsWidget() {
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollByCard(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    const amount = (card?.offsetWidth ?? 280) + 16;
    track.scrollBy({ left: amount * direction, behavior: "smooth" });
  }

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth p-6"
      >
        {TESTIMONIALS.map((testimonial, index) => (
          <GoogleReviewCard
            key={testimonial.quote}
            {...testimonial}
            index={index}
          />
        ))}
      </div>

      <div className="mt-2 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          aria-label="Avis précédents"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-ink transition-colors duration-200 hover:border-action-strong hover:text-action-strong"
        >
          <ChevronIcon className="h-4 w-4 rotate-180" />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          aria-label="Avis suivants"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-ink transition-colors duration-200 hover:border-action-strong hover:text-action-strong"
        >
          <ChevronIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
