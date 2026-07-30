import type { SchemaTypeDefinition } from "sanity";

import { priceTier } from "./objects/priceTier";
import { menuItem } from "./objects/menuItem";
import { menuCategory } from "./objects/menuCategory";
import { openingHour } from "./objects/openingHour";
import { sectionHeading } from "./objects/sectionHeading";

import { siteSettings } from "./documents/siteSettings";
import { specialEvent } from "./documents/specialEvent";
import { testimonial } from "./documents/testimonial";
import { foodMenu } from "./documents/foodMenu";
import { drinksMenu } from "./documents/drinksMenu";
import { homepage } from "./documents/homepage";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // objects
    priceTier,
    menuItem,
    menuCategory,
    openingHour,
    sectionHeading,
    // documents
    siteSettings,
    specialEvent,
    testimonial,
    foodMenu,
    drinksMenu,
    homepage,
  ],
};

export const singletonTypes = new Set([
  "siteSettings",
  "foodMenu",
  "drinksMenu",
  "homepage",
]);
