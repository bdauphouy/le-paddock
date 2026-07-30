import { Container } from "@/components/primitives/Container";
import { MenuTabsCard } from "@/components/primitives/MenuTabsCard";
import { Reveal } from "@/components/primitives/Reveal";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { getDrinksMenu, getFoodMenu, getHomepage } from "@/sanity/lib/fetch";

export async function MenuHighlights() {
  const [foodMenu, drinksMenu, { menu }] = await Promise.all([
    getFoodMenu(),
    getDrinksMenu(),
    getHomepage(),
  ]);
  const lunchMenuIntro = foodMenu.lunchMenuIntro ?? [];
  const foodCategories = foodMenu.categories ?? [];
  const drinksCategories = drinksMenu.categories ?? [];

  return (
    <section
      id="carte"
      aria-labelledby="carte-heading"
      className="py-section bg-surface"
    >
      <Container>
        <Reveal>
          <SectionHeading
            id="carte-heading"
            eyebrow={menu.eyebrow}
            title={menu.title}
            sub={menu.sub ?? undefined}
          />
        </Reveal>

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-2">
          <Reveal className="min-w-0">
            <MenuTabsCard
              image={{
                src: "/images/7.jpg",
                alt: "Planche de tapas du Paddock : burrata, terrine et salade",
              }}
              intro={
                <div className="mb-4">
                  <p className="text-caption-uppercase text-action">
                    Menu midi & carte
                  </p>
                  <h3 className="font-display text-title-lg text-ink-on-paper mt-1">
                    Nos plats
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {lunchMenuIntro.map((entry) => (
                      <span
                        key={entry.label}
                        className="rounded-pill bg-ink-on-paper/5 px-3 py-1 text-caption text-muted-on-paper"
                      >
                        {entry.label} · {entry.price}
                      </span>
                    ))}
                  </div>
                </div>
              }
              categories={foodCategories}
            />
          </Reveal>

          <Reveal delay={0.1} className="min-w-0">
            <MenuTabsCard
              image={{
                src: "/images/6.jpg",
                alt: "Cocktail rosé garni de fraises servi au Paddock",
              }}
              intro={
                <div className="mb-4">
                  <p className="text-caption-uppercase text-action">Bar</p>
                  <h3 className="font-display text-title-lg text-ink-on-paper mt-1">
                    Nos boissons
                  </h3>
                </div>
              }
              categories={drinksCategories}
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
