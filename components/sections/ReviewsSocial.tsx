import { Container } from "@/components/primitives/Container";
import { GoogleReviewsWidget } from "@/components/primitives/GoogleReviewsWidget";
import { Reveal } from "@/components/primitives/Reveal";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { getHomepage, getTestimonials } from "@/sanity/lib/fetch";

export async function ReviewsSocial() {
  const [testimonials, { reviews }] = await Promise.all([
    getTestimonials(),
    getHomepage(),
  ]);

  return (
    <section id="avis" aria-labelledby="avis-heading" className="py-section">
      <Container>
        <Reveal>
          <SectionHeading
            id="avis-heading"
            eyebrow={reviews.eyebrow}
            title={reviews.title}
            sub={reviews.sub ?? undefined}
            align="center"
          />
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <GoogleReviewsWidget testimonials={testimonials} />
        </Reveal>
      </Container>
    </section>
  );
}
