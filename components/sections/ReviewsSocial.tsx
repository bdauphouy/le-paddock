import { Container } from "@/components/primitives/Container";
import { GoogleReviewsWidget } from "@/components/primitives/GoogleReviewsWidget";
import { FacebookIcon, InstagramIcon } from "@/components/primitives/icons";
import { Reveal } from "@/components/primitives/Reveal";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { BUSINESS, FACEBOOK_REVIEWS_URL } from "@/lib/business";

const LINKS = [
  {
    href: FACEBOOK_REVIEWS_URL,
    icon: FacebookIcon,
    title: "Avis Facebook",
    description: "Voir et laisser un avis sur notre page Facebook",
  },
  {
    href: BUSINESS.facebookUrl,
    icon: FacebookIcon,
    title: "Suivre sur Facebook",
    description: "Actus, événements et photos du bord de piste",
  },
  {
    href: BUSINESS.instagramUrl,
    icon: InstagramIcon,
    title: "Suivre sur Instagram",
    description: "@lepaddock44 — les coulisses du Paddock",
  },
];

export function ReviewsSocial() {
  return (
    <section id="avis" aria-labelledby="avis-heading" className="py-section">
      <Container>
        <Reveal>
          <SectionHeading
            id="avis-heading"
            eyebrow="Avis & réseaux"
            title="Ils y étaient."
            sub="Le Paddock vit grâce à vos avis. Parcourez les ou laissez-nous le vôtre après votre passage."
            align="center"
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <GoogleReviewsWidget />
        </Reveal>
      </Container>
    </section>
  );
}
