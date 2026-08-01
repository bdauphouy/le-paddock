"use client";

import { Button } from "@/components/primitives/Button";
import { Container } from "@/components/primitives/Container";
import { Logo } from "@/components/primitives/Logo";
import { FacebookIcon, InstagramIcon } from "@/components/primitives/icons";
import { NAV_LINKS } from "@/lib/nav";
import type { SiteSettings } from "@/sanity/lib/types";
import { useState } from "react";
import { MobileNav } from "./MobileNav";

export function SiteHeader({ settings }: { settings: SiteSettings }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-hairline bg-ground/80 backdrop-blur">
        <Container className="flex h-16 items-center justify-between">
          <a href="#top" aria-label="Le Paddock — accueil">
            <Logo />
          </a>

          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Navigation principale"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="min-h-11 flex items-center text-nav-link text-muted hover:text-action-strong transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-6">
            {settings.facebookUrl ? (
              <a
                href={settings.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Le Paddock sur Facebook"
                className="flex items-center justify-center text-muted hover:text-action-strong transition-colors"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
            ) : null}
            {settings.instagramUrl ? (
              <a
                href={settings.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Le Paddock sur Instagram"
                className="flex items-center justify-center text-muted hover:text-action-strong transition-colors"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            ) : null}
            <Button href={settings.phoneHref} variant="primary">
              {settings.phoneDisplay}
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Ouvrir le menu"
            className="flex h-11 w-11 items-center justify-center rounded-md text-ink md:hidden"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </Container>
      </header>

      <MobileNav
        open={open}
        onClose={() => setOpen(false)}
        settings={settings}
      />
    </>
  );
}
