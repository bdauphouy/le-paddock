"use client";

import { Badge } from "@/components/primitives/Badge";
import { Button } from "@/components/primitives/Button";
import { Container } from "@/components/primitives/Container";
import { Parallax } from "@/components/primitives/Parallax";
import { Ticker } from "@/components/primitives/Ticker";
import type { Homepage, SiteSettings, SpecialEvent } from "@/sanity/lib/types";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

export function HeroContent({
  settings,
  events,
  content,
}: {
  settings: SiteSettings;
  events: SpecialEvent[];
  content: Homepage["hero"];
}) {
  const prefersReduced = useReducedMotion();
  const tickerItems = events.map(
    (event) =>
      `Événement · ${event.label} · ${event.date}${
        event.detail ? ` · ${event.detail}` : ""
      }`,
  );

  return (
    <section
      id="top"
      className="relative flex h-[100svh] min-h-[680px] flex-col overflow-hidden"
    >
      {/* Background media layer — swappable for video later without touching layout below */}
      <div className="absolute inset-0 -z-10">
        <Parallax strength={20} className="h-full w-full">
          <Image
            src="/images/27.jpg"
            alt="Le drapeau à damier flotte au-dessus de la façade du Paddock, bar-restaurant à tapas de Plessé"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </Parallax>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ground via-ground/55 to-ground/40" />

      {tickerItems.length > 0 ? (
        <div className="pt-16">
          <Ticker items={tickerItems} />
        </div>
      ) : (
        <div className="pt-16" />
      )}

      <div className="relative flex flex-1 items-center">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: prefersReduced ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <p className="text-caption-uppercase text-action-strong mb-4">
              {content.eyebrow}
            </p>
            <h1 className="font-display text-display-lg md:text-display-xl text-ink">
              {content.title}
            </h1>
            <p className="mt-6 text-body-md text-muted max-w-lg">
              {content.paragraph}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="#privatisation" variant="primary">
                Réserver — {settings.phoneDisplay}
              </Button>
              <Button href="#about" variant="secondary">
                Découvrir Le Paddock
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {(content.highlights ?? []).map((item) => (
                <Badge key={item} variant="accent">
                  {item}
                </Badge>
              ))}
            </div>
          </motion.div>
        </Container>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="hidden md:flex absolute bottom-8 right-8 wide:right-16 flex-col items-center gap-2 text-ink/70 hover:text-action-strong transition-colors"
      >
        <span className="text-caption-uppercase [writing-mode:vertical-rl]">
          Découvrir
        </span>
        <motion.span
          animate={prefersReduced ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M2 5l6 6 6-6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.span>
      </motion.a>
    </section>
  );
}
