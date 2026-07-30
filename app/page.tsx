import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { MenuHighlights } from "@/components/sections/MenuHighlights";
import { Experience } from "@/components/sections/Experience";
import { ReviewsSocial } from "@/components/sections/ReviewsSocial";
import { PracticalInfo } from "@/components/sections/PracticalInfo";
import { PrivatizationCta } from "@/components/sections/PrivatizationCta";
import {
  getActiveSpecialEvents,
  getHomepage,
  getSiteSettings,
} from "@/sanity/lib/fetch";

export default async function Home() {
  const [settings, events, homepage] = await Promise.all([
    getSiteSettings(),
    getActiveSpecialEvents(),
    getHomepage(),
  ]);

  return (
    <>
      <SiteHeader settings={settings} />
      <main>
        <Hero settings={settings} events={events} content={homepage.hero} />
        <About />
        <MenuHighlights />
        <Experience />
        <ReviewsSocial />
        <PracticalInfo settings={settings} />
        <PrivatizationCta settings={settings} content={homepage.privatization} />
      </main>
      <SiteFooter settings={settings} />
    </>
  );
}
