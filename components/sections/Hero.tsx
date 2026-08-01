import { HeroContent } from "@/components/sections/HeroContent";
import { getHomepage } from "@/sanity/lib/fetch";
import type { SiteSettings, SpecialEvent } from "@/sanity/lib/types";

export async function Hero({
  settings,
  events,
}: {
  settings: SiteSettings;
  events: SpecialEvent[];
}) {
  const { hero } = await getHomepage();

  return <HeroContent settings={settings} events={events} content={hero} />;
}
