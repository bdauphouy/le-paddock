import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { MenuHighlights } from "@/components/sections/MenuHighlights";
import { Experience } from "@/components/sections/Experience";
import { ReviewsSocial } from "@/components/sections/ReviewsSocial";
import { PracticalInfo } from "@/components/sections/PracticalInfo";
import { PrivatizationCta } from "@/components/sections/PrivatizationCta";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <MenuHighlights />
        <Experience />
        <ReviewsSocial />
        <PracticalInfo />
        <PrivatizationCta />
      </main>
      <SiteFooter />
    </>
  );
}
