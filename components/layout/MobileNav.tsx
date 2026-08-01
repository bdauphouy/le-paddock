"use client";

import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/primitives/Button";
import { Logo } from "@/components/primitives/Logo";
import { FacebookIcon, InstagramIcon } from "@/components/primitives/icons";
import { NAV_LINKS } from "@/lib/nav";
import type { SiteSettings } from "@/sanity/lib/types";

export function MobileNav({
  open,
  onClose,
  settings,
}: {
  open: boolean;
  onClose: () => void;
  settings: SiteSettings;
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
            {settings.facebookUrl ? (
              <a
                href={settings.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-11 flex items-center gap-3 text-title-md text-ink py-4"
              >
                <FacebookIcon className="h-5 w-5" />
                Facebook
              </a>
            ) : null}
            {settings.instagramUrl ? (
              <a
                href={settings.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-11 flex items-center gap-3 text-title-md text-ink py-4"
              >
                <InstagramIcon className="h-5 w-5" />
                Instagram
              </a>
            ) : null}
            <div className="mt-6">
              <Button
                href="#privatisation"
                variant="primary"
                className="w-full"
              >
                Réserver — {settings.phoneDisplay}
              </Button>
            </div>
          </nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
