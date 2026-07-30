import { client } from "../client";
import {
  activeSpecialEventsQuery,
  drinksMenuQuery,
  foodMenuQuery,
  homepageQuery,
  siteSettingsQuery,
  testimonialsQuery,
} from "./queries";
import type {
  DrinksMenu,
  FoodMenu,
  Homepage,
  SiteSettings,
  SpecialEvent,
  Testimonial,
} from "./types";

const options = { next: { revalidate: 60 } };

export function getSiteSettings() {
  return client.fetch<SiteSettings>(siteSettingsQuery, {}, options);
}

export function getActiveSpecialEvents() {
  return client.fetch<SpecialEvent[]>(activeSpecialEventsQuery, {}, options);
}

export function getTestimonials() {
  return client.fetch<Testimonial[]>(testimonialsQuery, {}, options);
}

export function getFoodMenu() {
  return client.fetch<FoodMenu>(foodMenuQuery, {}, options);
}

export function getDrinksMenu() {
  return client.fetch<DrinksMenu>(drinksMenuQuery, {}, options);
}

export function getHomepage() {
  return client.fetch<Homepage>(homepageQuery, {}, options);
}
