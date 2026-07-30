import { Container } from "@/components/primitives/Container";
import { FacebookIcon, InstagramIcon } from "@/components/primitives/icons";
import type { SiteSettings } from "@/sanity/lib/types";
import { Logo } from "../primitives/Logo";

export function SiteFooter({ settings }: { settings: SiteSettings }) {
  return (
    <footer className="border-t border-hairline bg-surface">
      <Container className="py-12 md:py-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <a href="#top" aria-label="Le Paddock — accueil">
              <Logo />
            </a>
            <p className="text-body-sm text-muted mt-2 max-w-xs">
              Bar, restaurant &amp; tapas, collé au circuit Solokart de Plessé.
            </p>
            <div className="mt-4 flex gap-3">
              {settings.facebookUrl ? (
                <a
                  href={settings.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Le Paddock sur Facebook"
                  className="flex h-11 w-11 items-center justify-center rounded-md border border-hairline text-muted hover:text-action-strong hover:border-action-strong transition-colors"
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
                  className="flex h-11 w-11 items-center justify-center rounded-md border border-hairline text-muted hover:text-action-strong hover:border-action-strong transition-colors"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
              ) : null}
            </div>
          </div>

          <nav
            className="flex flex-col gap-3 text-body-sm text-muted"
            aria-label="Navigation du pied de page"
          >
            <a
              href="#about"
              className="hover:text-action-strong transition-colors"
            >
              L&apos;histoire
            </a>
            <a
              href="#carte"
              className="hover:text-action-strong transition-colors"
            >
              La carte
            </a>
            <a
              href="#experience"
              className="hover:text-action-strong transition-colors"
            >
              L&apos;expérience
            </a>
            <a
              href="#avis"
              className="hover:text-action-strong transition-colors"
            >
              Avis
            </a>
            <a
              href="#privatisation"
              className="hover:text-action-strong transition-colors"
            >
              Privatiser
            </a>
            <a
              href="#infos"
              className="hover:text-action-strong transition-colors"
            >
              Infos pratiques
            </a>
          </nav>

          <div className="text-body-sm text-muted space-y-2">
            <p>{settings.addressLine}</p>
            <a
              href={settings.phoneHref}
              className="block text-ink hover:text-action-strong transition-colors"
            >
              {settings.phoneDisplay}
            </a>
            <a
              href={`mailto:${settings.email}`}
              className="block text-ink hover:text-action-strong transition-colors"
            >
              {settings.email}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse gap-4 border-t border-hairline pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-caption text-muted">
            © {new Date().getFullYear()} Le Paddock — Plessé
          </p>
          <p className="text-caption text-muted">
            L&apos;abus d&apos;alcool est dangereux pour la santé, à consommer
            avec modération.
          </p>
        </div>
      </Container>
    </footer>
  );
}
