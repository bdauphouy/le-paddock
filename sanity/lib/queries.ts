import { defineQuery } from "next-sanity";

export const siteSettingsQuery = defineQuery(`
  *[_type == "siteSettings"][0]{
    name,
    fullName,
    addressLine,
    phoneDisplay,
    phoneHref,
    email,
    facebookUrl,
    instagramUrl,
    openingHours[]{ day, hours },
    calLink
  }
`);

export const activeSpecialEventsQuery = defineQuery(`
  *[_type == "specialEvent" && active == true] | order(order asc){
    label,
    date,
    detail
  }
`);

export const testimonialsQuery = defineQuery(`
  *[_type == "testimonial"] | order(order asc){
    name,
    quote
  }
`);

const menuCategoryProjection = `{
  "id": categoryId.current,
  label,
  note,
  items[]{
    name,
    description,
    origin,
    price,
    tiers[]{ label, value }
  }
}`;

export const foodMenuQuery = defineQuery(`
  *[_type == "foodMenu"][0]{
    lunchMenuIntro[]{ label, price },
    categories[]${menuCategoryProjection}
  }
`);

export const drinksMenuQuery = defineQuery(`
  *[_type == "drinksMenu"][0]{
    categories[]${menuCategoryProjection}
  }
`);

const sectionHeadingProjection = `{ eyebrow, title, sub }`;

export const homepageQuery = defineQuery(`
  *[_type == "homepage"][0]{
    hero{ eyebrow, title, paragraph, highlights },
    about{ eyebrow, title, sub, paragraph },
    menu${sectionHeadingProjection},
    experience${sectionHeadingProjection},
    reviews${sectionHeadingProjection},
    practicalInfo${sectionHeadingProjection},
    privatization${sectionHeadingProjection}
  }
`);
