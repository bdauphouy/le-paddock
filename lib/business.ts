export const BUSINESS = {
  name: "Le Paddock",
  fullName: "Le Paddock Bar Restaurant Tapas",
  addressLine: "Circuit de Karting La Piardière, 44630 Plessé",
  phoneDisplay: "02 59 10 21 67",
  phoneHref: "tel:+33259102167",
  email: "contact@lepaddock44.fr",
  facebookUrl:
    "https://www.facebook.com/p/Le-Paddock-Bar-Restaurant-61582215407273/",
  instagramUrl: "https://www.instagram.com/lepaddock44/",
} as const;

export const GOOGLE_MAPS_QUERY = `${BUSINESS.fullName}, ${BUSINESS.addressLine}`;

export const GOOGLE_MAPS_SEARCH_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  GOOGLE_MAPS_QUERY
)}`;

export const FACEBOOK_REVIEWS_URL = `${BUSINESS.facebookUrl}reviews/`;

export const OPENING_HOURS = [
  { day: "Lundi", hours: "12h – 17h" },
  { day: "Mardi", hours: "12h – 17h" },
  { day: "Mercredi", hours: "12h – 15h" },
  { day: "Jeudi", hours: "12h – 23h" },
  { day: "Vendredi", hours: "12h – minuit" },
  { day: "Samedi", hours: "12h – minuit" },
  { day: "Dimanche", hours: "12h – 17h" },
] as const;
