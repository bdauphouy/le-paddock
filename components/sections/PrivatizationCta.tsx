"use client";

import { Button } from "@/components/primitives/Button";
import { Container } from "@/components/primitives/Container";
import { Reveal } from "@/components/primitives/Reveal";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { BUSINESS } from "@/lib/business";
import { useState, type FormEvent } from "react";

const fieldClasses =
  "h-11 w-full min-w-0 rounded-md border border-hairline bg-surface px-4 text-body-md text-ink placeholder:text-muted focus:border-action-strong focus:outline-none transition-colors";

export function PrivatizationCta() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = `Demande de privatisation — ${name || "Le Paddock"}`;
    const body = [
      `Nom : ${name}`,
      `Email : ${email}`,
      phone && `Téléphone : ${phone}`,
      date && `Date souhaitée : ${date}`,
      guests && `Nombre de personnes : ${guests}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${BUSINESS.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section
      id="privatisation"
      aria-labelledby="privatisation-heading"
      className="py-section"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              id="privatisation-heading"
              eyebrow="Réservation & événements privés"
              title="Réservez, ou privatisez Le Paddock."
              sub="Une table pour ce soir, ou tout le lieu pour votre événement — anniversaire, séminaire, sortie d'entreprise, after-course entre amis. Le Paddock se privatise en journée comme en soirée."
            />

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-lg border border-hairline bg-surface p-5">
              <div>
                <p className="text-title-sm text-ink">Une table, ce soir ?</p>
                <p className="text-body-sm text-muted">Un appel suffit.</p>
              </div>
              <Button href={BUSINESS.phoneHref} variant="primary">
                Réserver — {BUSINESS.phoneDisplay}
              </Button>
            </div>

            <p className="mt-6 text-body-sm text-muted">
              Pour un événement privé, décrivez votre projet ci-contre, ou
              écrivez-nous directement à{" "}
              <a
                href={`mailto:${BUSINESS.email}`}
                className="text-action-strong hover:text-action transition-colors"
              >
                {BUSINESS.email}
              </a>
              .
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="priv-name"
                    className="mb-1.5 block text-caption-uppercase text-muted"
                  >
                    Nom
                  </label>
                  <input
                    id="priv-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={fieldClasses}
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label
                    htmlFor="priv-email"
                    className="mb-1.5 block text-caption-uppercase text-muted"
                  >
                    Email
                  </label>
                  <input
                    id="priv-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={fieldClasses}
                    placeholder="vous@exemple.fr"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="min-w-0">
                  <label
                    htmlFor="priv-phone"
                    className="mb-1.5 block text-caption-uppercase text-muted"
                  >
                    Téléphone
                  </label>
                  <input
                    id="priv-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={fieldClasses}
                    placeholder="06 12 34 56 78"
                  />
                </div>
                <div className="min-w-0">
                  <label
                    htmlFor="priv-date"
                    className="mb-1.5 block text-caption-uppercase text-muted"
                  >
                    Date souhaitée
                  </label>
                  <input
                    id="priv-date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className={`${fieldClasses} max-w-xs!`}
                  />
                </div>
                <div className="min-w-0">
                  <label
                    htmlFor="priv-guests"
                    className="mb-1.5 block text-caption-uppercase text-muted"
                  >
                    Personnes
                  </label>
                  <input
                    id="priv-guests"
                    type="number"
                    min={1}
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className={fieldClasses}
                    placeholder="20"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="priv-message"
                  className="mb-1.5 block text-caption-uppercase text-muted"
                >
                  Votre événement
                </label>
                <textarea
                  id="priv-message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`${fieldClasses} h-auto resize-none py-3`}
                  placeholder="Type d'événement, horaires souhaités, besoins particuliers..."
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex h-11 min-h-11 items-center justify-center gap-2 rounded-md bg-action px-5 text-button text-ink transition-colors duration-200 hover:bg-action-strong"
              >
                Envoyer la demande
              </button>
              <p className="text-caption text-muted">
                L&apos;envoi ouvre votre messagerie avec les informations
                pré-remplies, à destination de {BUSINESS.email}.
              </p>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
