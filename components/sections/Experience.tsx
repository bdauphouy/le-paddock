import { Container } from "@/components/primitives/Container";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { PhotoFrame } from "@/components/primitives/PhotoFrame";
import { Reveal } from "@/components/primitives/Reveal";

const GALLERY = [
  {
    src: "/images/20.jpg",
    alt: "Fléchettes électroniques et rampe de feux façon départ de course au Paddock",
  },
  {
    src: "/images/9.jpg",
    alt: "Bar du Paddock avec sa sélection de spiritueux et ses bières pression",
  },
  {
    src: "/images/25.jpg",
    alt: "Cocktail rosé posé sur la carte des boissons du Paddock, ambiance tamisée",
  },
  {
    src: "/images/17.jpg",
    alt: "Plaques émaillées vintage Michelin, Mobil et Shell sur les murs du Paddock",
  },
  {
    src: "/images/26.jpg",
    alt: "Pompe à essence vintage Shell exposée dans la déco du Paddock",
  },
  {
    src: "/images/16.jpg",
    alt: "Étagère garage vintage avec bidons d'huile et souvenirs de course",
  },
  {
    src: "/images/22.jpg",
    alt: "Horloge Michelin, pneus et jerricans dans la décoration du Paddock",
  },
  {
    src: "/images/24.jpg",
    alt: "Combinaison de course, casque vintage et affiches dans le coin garage du Paddock",
  },
];

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="py-section">
      <Container>
        <Reveal>
          <SectionHeading
            id="experience-heading"
            eyebrow="L'expérience"
            title="Du casque au cocktail."
            sub="Après une session sur la piste ou simplement pour profiter du coucher de soleil, le rooftop du Paddock prend le relais : lumières chaudes, déco garage vintage assumée, et une ambiance qui dure jusqu'au bout de la soirée."
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <PhotoFrame
            src="/images/23.jpg"
            alt="Le Paddock au coucher du soleil, rooftop bar animé et enseigne lumineuse"
            className="aspect-[16/9] md:aspect-[21/9]"
            overlay={false}
            sizes="100vw"
          />
        </Reveal>

        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          {GALLERY.map((photo, index) => (
            <Reveal key={photo.src} delay={0.05 * index}>
              <PhotoFrame
                src={photo.src}
                alt={photo.alt}
                className="aspect-square"
                sizes="(min-width: 768px) 25vw, 50vw"
                quality={65}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
