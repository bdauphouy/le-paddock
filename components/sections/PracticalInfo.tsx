import { Container } from "@/components/primitives/Container";
import { GoogleMapEmbed } from "@/components/primitives/GoogleMapEmbed";
import { Reveal } from "@/components/primitives/Reveal";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { BUSINESS, GOOGLE_MAPS_QUERY, OPENING_HOURS } from "@/lib/business";

export function PracticalInfo() {
  return (
    <section
      id="infos"
      aria-labelledby="infos-heading"
      className="py-section bg-surface"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <Reveal>
            <GoogleMapEmbed
              query={GOOGLE_MAPS_QUERY}
              title="Localisation du Paddock à Plessé"
              className="aspect-[4/3]"
            />
          </Reveal>

          <Reveal delay={0.1}>
            <SectionHeading
              id="infos-heading"
              eyebrow="Infos pratiques"
              title="Nous trouver."
            />

            <dl className="mt-8 space-y-6">
              <div>
                <dt className="text-caption-uppercase text-muted mb-1">
                  Adresse
                </dt>
                <dd>
                  <address className="not-italic text-title-sm text-ink">
                    {BUSINESS.name} — {BUSINESS.addressLine}
                  </address>
                </dd>
              </div>

              <div>
                <dt className="text-caption-uppercase text-muted mb-2">
                  Horaires
                </dt>
                <dd>
                  <ul>
                    {OPENING_HOURS.map(({ day, hours }) => (
                      <li
                        key={day}
                        className="flex items-baseline justify-between gap-4 border-b border-hairline/70 py-2 last:border-none"
                      >
                        <span className="text-body-sm text-muted">{day}</span>
                        <span className="text-body-sm text-ink">{hours}</span>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
