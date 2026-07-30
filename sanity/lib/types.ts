import type { MenuCategory } from "@/lib/menu";

export type OpeningHour = { day: string; hours: string };

export type SiteSettings = {
  name: string;
  fullName: string;
  addressLine: string;
  phoneDisplay: string;
  phoneHref: string;
  email: string;
  facebookUrl: string | null;
  instagramUrl: string | null;
  openingHours: OpeningHour[] | null;
};

export type SpecialEvent = {
  label: string;
  date: string;
  detail: string | null;
};

export type Testimonial = { name: string; quote: string };

export type LunchFormula = { label: string; price: string };

export type FoodMenu = {
  lunchMenuIntro: LunchFormula[] | null;
  categories: MenuCategory[] | null;
};

export type DrinksMenu = {
  categories: MenuCategory[] | null;
};

export type SectionHeading = {
  eyebrow: string;
  title: string;
  sub: string | null;
};

export type Homepage = {
  hero: {
    eyebrow: string;
    title: string;
    paragraph: string;
    highlights: string[] | null;
  };
  about: {
    eyebrow: string;
    title: string;
    sub: string;
    paragraph: string;
  };
  menu: SectionHeading;
  experience: SectionHeading;
  reviews: SectionHeading;
  practicalInfo: SectionHeading;
  privatization: SectionHeading;
};
