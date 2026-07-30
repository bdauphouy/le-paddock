import { Container } from "@/components/primitives/Container";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { PhotoFrame } from "@/components/primitives/PhotoFrame";
import { Reveal } from "@/components/primitives/Reveal";
import { getHomepage } from "@/sanity/lib/fetch";

export async function About() {
  const { about } = await getHomepage();

  return (
    <section id="about" aria-labelledby="about-heading" className="py-section">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <SectionHeading
              id="about-heading"
              eyebrow={about.eyebrow}
              title={about.title}
              sub={about.sub}
            />
            <p className="mt-6 text-body-md text-muted max-w-lg">
              {about.paragraph}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              <PhotoFrame
                src="/images/21.jpg"
                alt="Salon intérieur du Paddock avec canapés Chesterfield en cuir et écusson Porsche au mur"
                className="aspect-[3/4] col-span-1"
                sizes="(min-width: 1024px) 25vw, 50vw"
              />
              <PhotoFrame
                src="/images/13.jpg"
                alt="Vue depuis la terrasse du Paddock donnant directement sur la piste du circuit Solokart de Plessé"
                className="aspect-[3/4] col-span-1 mt-8"
                sizes="(min-width: 1024px) 25vw, 50vw"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
