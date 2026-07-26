"use client";

import { Badge } from "@/components/primitives/Badge";
import { Button } from "@/components/primitives/Button";
import { Container } from "@/components/primitives/Container";
import { Parallax } from "@/components/primitives/Parallax";
import { Ticker } from "@/components/primitives/Ticker";
import { BUSINESS } from "@/lib/business";
import { EVENT_TICKER_ITEMS } from "@/lib/events";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

const HIGHLIGHTS = [
  "Rooftop & terrasse",
  "Cuisine maison",
  "Vue sur le circuit",
];

export function Hero() {
  const prefersReduced = useReducedMotion();

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

      <div className="pt-16">
        <Ticker items={EVENT_TICKER_ITEMS} />
      </div>

      <div className="relative flex flex-1 items-center">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: prefersReduced ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <p className="text-caption-uppercase text-action-strong mb-4">
              Plessé · à côté du circuit Solokart
            </p>
            <h1 className="font-display text-display-lg md:text-display-xl text-ink">
              Vue sur la piste, verre à la main.
            </h1>
            <p className="mt-6 text-body-md text-muted max-w-lg">
              Le Paddock, restaurant et bar à tapas idéalement collé au karting.
              Terrasse, rooftop et cuisine généreuse, du déjeuner jusqu&apos;au
              bout de la soirée.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href={BUSINESS.phoneHref} variant="primary">
                Réserver — {BUSINESS.phoneDisplay}
              </Button>
              <Button href="#about" variant="secondary">
                Découvrir Le Paddock
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {HIGHLIGHTS.map((item) => (
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
