"use client";

import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/primitives/Button";
import { Logo } from "@/components/primitives/Logo";
import { FacebookIcon, InstagramIcon } from "@/components/primitives/icons";
import { BUSINESS } from "@/lib/business";

const NAV_LINKS = [
  { href: "#about", label: "L'histoire" },
  { href: "#carte", label: "La carte" },
  { href: "#experience", label: "L'expérience" },
  { href: "#avis", label: "Avis" },
  { href: "#privatisation", label: "Privatiser" },
  { href: "#infos", label: "Infos pratiques" },
];

export function MobileNav({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-ground/98 md:hidden"
        >
          <div className="flex items-center justify-between px-4 h-16 border-b border-hairline">
            <Logo />
            <button
              type="button"
              onClick={onClose}
              aria-label="Fermer le menu"
              className="flex h-11 w-11 items-center justify-center rounded-md text-ink hover:text-action-strong"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col px-4 py-6" aria-label="Navigation principale">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="min-h-11 flex items-center text-title-md text-ink border-b border-hairline py-4"
              >
                {link.label}
              </a>
            ))}
            <a
              href={BUSINESS.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-11 flex items-center gap-3 text-title-md text-ink py-4"
            >
              <FacebookIcon className="h-5 w-5" />
              Facebook
            </a>
            <a
              href={BUSINESS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-11 flex items-center gap-3 text-title-md text-ink py-4"
            >
              <InstagramIcon className="h-5 w-5" />
              Instagram
            </a>
            <div className="mt-6">
              <Button href={BUSINESS.phoneHref} variant="primary" className="w-full">
                Réserver — {BUSINESS.phoneDisplay}
              </Button>
            </div>
          </nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
