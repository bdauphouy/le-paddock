/**
 * HISTORICAL — do not run.
 *
 * This pushed the initial content into Sanity when the project was
 * bootstrapped. Live content in the Studio has since diverged from what's
 * defined here — re-running this script would overwrite it. Not wired to
 * any package.json script. Kept only as a reference for the original
 * content shape.
 */
import { getCliClient } from "sanity/cli";

import { apiVersion } from "../sanity/env";
import type { MenuCategory } from "../lib/menu";

const client = getCliClient({ apiVersion });

const BUSINESS = {
  name: "Le Paddock",
  fullName: "Le Paddock Bar Restaurant Tapas",
  addressLine: "Circuit de Karting La Piardière, 44630 Plessé",
  phoneDisplay: "02 59 10 21 67",
  phoneHref: "tel:+33259102167",
  email: "contact@lepaddock44.fr",
  facebookUrl:
    "https://www.facebook.com/p/Le-Paddock-Bar-Restaurant-61582215407273/",
  instagramUrl: "https://www.instagram.com/lepaddock44/",
};

const OPENING_HOURS = [
  { day: "Lundi", hours: "12h – 17h" },
  { day: "Mardi", hours: "12h – 17h" },
  { day: "Mercredi", hours: "12h – 15h" },
  { day: "Jeudi", hours: "12h – 23h" },
  { day: "Vendredi", hours: "12h – minuit" },
  { day: "Samedi", hours: "12h – minuit" },
  { day: "Dimanche", hours: "12h – 17h" },
];

const SPECIAL_EVENTS = [
  {
    label: "Soirée spéciale moules-frites",
    date: "Vendredi 31 juillet",
    detail: "16,50 €",
  },
];

const TESTIMONIALS = [
  {
    name: "Maxime",
    quote:
      "Très belle découverte ! Le Paddock est un super nouveau lieu pour passer un bon moment entre amis ou en famille. L'ambiance est agréable, le bar est sympa, la restauration est de qualité et la grande terrasse avec vue sur le circuit de karting apporte un vrai plus.",
  },
  {
    name: "Christelle",
    quote:
      "Le nouveau spot incontournable de Plessé ! Superbe ambiance, le cadre est très agréable avec vue sur la piste de karting. La déco soignée et l'accueil au top. On s'est régalé avec des tapas et les cocktails.",
  },
  {
    name: "Gatien",
    quote:
      "Excellente expérience ! L'accueil était chaleureux, le personnel très sympathique et attentif. Les plats étaient délicieux, préparés avec des produits de qualité, et les cocktails étaient parfaitement réalisés.",
  },
  {
    name: "Etienne",
    quote:
      "J'ai passé un super moment au Paddock, c'est une adresse à ne pas manquer lorsque l'on passe à Plessé. La cuisine était très bonne, le service au-delà de mes attentes et l'ambiance du restaurant est très agréable. La terrasse avec vue sur le karting est parfaite pour profiter avec ses amis autour d'un verre.",
  },
  {
    name: "Vincent",
    quote:
      "Très bel endroit, avec vue imprenable sur les pistes. Cuisine au top. Je conseille.",
  },
];

const HOMEPAGE = {
  hero: {
    eyebrow: "Plessé · à côté du circuit Solokart",
    title: "Vue sur la piste, verre à la main.",
    paragraph:
      "Le Paddock, restaurant et bar à tapas idéalement collé au karting. Terrasse, rooftop et cuisine généreuse, du déjeuner jusqu'au bout de la soirée.",
    highlights: ["Rooftop & terrasse", "Cuisine maison", "Vue sur le circuit"],
  },
  about: {
    eyebrow: "L'histoire",
    title: "Idéalement collé au karting.",
    sub: "Le Paddock n'est pas un restaurant qui parle de vitesse — il est posé juste à côté. La terrasse et le rooftop donnent directement sur la piste du circuit Solokart de Plessé, l'un des plus grands circuits de karting d'Europe : les moteurs tournent d'un côté de la baie vitrée, les tables de l'autre.",
    paragraph:
      "À l'intérieur, l'ambiance garage assumée : canapés Chesterfield, écusson Porsche au mur, jantes, bidons et plaques émaillées vintage récupérées comme autant de trophées. On y vient pour la vue sur la piste autant que pour la carte.",
  },
  menu: {
    eyebrow: "La carte",
    title: "Même la carte roule sur le thème.",
    sub: "Menu midi, tapas et bar à cocktails — la carte complète du Paddock, sans rien couper. Naviguez par catégorie ci-dessous.",
  },
  experience: {
    eyebrow: "L'expérience",
    title: "Du casque au cocktail.",
    sub: "Après une session sur la piste ou simplement pour profiter du coucher de soleil, le rooftop du Paddock prend le relais : lumières chaudes, déco garage vintage assumée, et une ambiance qui dure jusqu'au bout de la soirée.",
  },
  reviews: {
    eyebrow: "Avis & réseaux",
    title: "Ils y étaient.",
    sub: "Le Paddock vit grâce à vos avis. Parcourez les ou laissez-nous le vôtre après votre passage.",
  },
  practicalInfo: {
    eyebrow: "Infos pratiques",
    title: "Nous trouver.",
    sub: null,
  },
  privatization: {
    eyebrow: "Réservation & événements privés",
    title: "Réservez, ou privatisez Le Paddock.",
    sub: "Une table pour ce soir, ou tout le lieu pour votre événement — anniversaire, séminaire, sortie d'entreprise, after-course entre amis. Le Paddock se privatise en journée comme en soirée.",
  },
};

const LUNCH_MENU_INTRO = [
  { label: "Plat du jour", price: "13,90 €" },
  { label: "Formule entrée / plat ou plat / dessert", price: "18,90 €" },
  { label: "Formule entrée / plat / dessert", price: "23,50 €" },
];

const FOOD_MENU: MenuCategory[] = [
  {
    id: "entrees",
    label: "Entrées à grignoter",
    items: [
      {
        name: "Œufs mayonnaise",
        description: "Mayonnaise maison",
        price: "6,00 €",
      },
      {
        name: "Terrine du moment",
        description: "Et ses cornichons",
        price: "7,00 €",
      },
      {
        name: "Burrata crémeuse",
        description: "Sauce tomate, pesto et huile d'olive",
        price: "9,00 €",
      },
    ],
  },
  {
    id: "plats",
    label: "Plats",
    items: [
      {
        name: "Fish & chips de cabillaud",
        description: "Cabillaud frit avec panure, frites et sauce tartare",
        price: "13,90 €",
      },
      {
        name: "Salade césar",
        description:
          "Sucrine, tenders de poulet, tomate, parmesan, croûtons, œuf et sauce césar",
        price: "14,50 €",
      },
      {
        name: "Le classic burger",
        description:
          "Pain blanc, bœuf façon bouchère VBF, cheddar, tomate, sauce maison et frites",
        price: "14,90 €",
      },
      {
        name: "Le burger du Paddock",
        description:
          "Pain blanc, bœuf, cheddar, bacon, salade, oignons caramélisés, sauce maison et frites",
        price: "15,00 €",
      },
      {
        name: "Entrecôte VBF",
        description: "Sauce maison avec frites",
        price: "21,90 €",
      },
      {
        name: "Carpaccio de bœuf charolais",
        description: "Parmesan, pesto avec frites",
        price: "17,90 €",
      },
      {
        name: 'Andouillette « ha ha ha ha »',
        description: "Sauce maison avec frites",
        price: "19,90 €",
      },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    items: [
      { name: "Mousse au chocolat maison", price: "7,00 €" },
      {
        name: "Brioche perdue maison",
        description: "Caramel beurre salé et boule de glace vanille",
        price: "9,00 €",
      },
      { name: "Panna cotta, coulis fruits rouges", price: "7,00 €" },
      {
        name: "Fromage blanc",
        description: "Miel ou coulis fruits rouges",
        price: "5,50 €",
      },
      { name: "Tarte du jour maison", price: "7,00 €" },
    ],
  },
];

const DRINKS_MENU: MenuCategory[] = [
  {
    id: "pression",
    label: "Pression",
    items: [
      {
        name: "La Paddock (Heineken) blonde 4,2°",
        tiers: [
          { label: "25cl", value: "3,50 €" },
          { label: "50cl", value: "7,00 €" },
          { label: "75cl", value: "20,00 €" },
        ],
      },
      {
        name: "Affligem blonde 6,7°",
        tiers: [
          { label: "25cl", value: "4,00 €" },
          { label: "50cl", value: "7,50 €" },
          { label: "75cl", value: "22,00 €" },
        ],
      },
      {
        name: "Galia IPA 4,3°",
        tiers: [
          { label: "25cl", value: "4,00 €" },
          { label: "50cl", value: "7,50 €" },
          { label: "75cl", value: "22,00 €" },
        ],
      },
      {
        name: "Galia blanche 4°",
        tiers: [
          { label: "25cl", value: "4,00 €" },
          { label: "50cl", value: "7,50 €" },
          { label: "75cl", value: "22,00 €" },
        ],
      },
      {
        name: "Pélican",
        tiers: [
          { label: "25cl", value: "4,00 €" },
          { label: "50cl", value: "8,00 €" },
          { label: "75cl", value: "23,00 €" },
        ],
      },
    ],
  },
  {
    id: "bouteilles",
    label: "Bouteilles 33cl",
    items: [
      {
        name: "Desperados",
        description: "Aromatisée tequila 5,9°",
        price: "5,00 €",
      },
      { name: "Chouffe blonde 8°", price: "5,00 €" },
      {
        name: "Heineken 0,0°",
        description: "Blonde sans alcool",
        price: "4,00 €",
      },
    ],
  },
  {
    id: "cocktails",
    label: "Cocktails 20cl",
    items: [
      {
        name: "Moscow Mule",
        description: "Vodka, ginger beer, citron vert",
        price: "8,00 €",
      },
      {
        name: "London Mule",
        description: "Gin, ginger beer, citron vert",
        price: "8,00 €",
      },
      {
        name: "Paddock Mule",
        description: "Rosé, ginger beer, hibiscus, citron vert",
        price: "8,00 €",
      },
      {
        name: "Pornstar Martini",
        description: "Vodka, vanille, passion, citron vert, prosecco",
        price: "8,00 €",
      },
      {
        name: "Sex on the Beach",
        description: "Vodka, pêche, orange, cranberry",
        price: "8,00 €",
      },
      {
        name: "Cuba Libre",
        description: "Rhum, citron vert, Coca-Cola",
        price: "7,00 €",
      },
    ],
  },
  {
    id: "spiritueux",
    label: "Spiritueux 20cl",
    items: [
      { name: "Aperol", price: "8,50 €" },
      { name: "Limoncello", price: "8,50 €" },
      { name: "Saint-Germain", price: "8,50 €" },
    ],
  },
  {
    id: "mojitos",
    label: "Mojitos 20cl",
    items: [
      { name: "Original", price: "7,50 €" },
      { name: "Framboise", price: "8,00 €" },
      { name: "Passion", price: "8,00 €" },
    ],
  },
  {
    id: "mocktails",
    label: "Mocktails 20cl",
    items: [
      { name: "Thé glacé maison", price: "5,50 €" },
      { name: "Virgin mojito classique", price: "6,00 €" },
      { name: "Virgin mojito framboise", price: "6,00 €" },
      { name: "Virgin mojito passion", price: "6,00 €" },
    ],
  },
  {
    id: "aperitifs",
    label: "Apéritifs",
    items: [
      { name: "Ricard 2cl", price: "3,50 €" },
      { name: "Martini blanc 5cl", price: "4,00 €" },
      { name: "Martini rouge 5cl", price: "4,00 €" },
      { name: "Porto blanc 5cl", price: "4,20 €" },
      { name: "Porto rouge 5cl", price: "4,20 €" },
      { name: "Kir vin blanc 12cl", price: "4,50 €" },
      { name: "Kir pétillant 12cl", price: "4,60 €" },
    ],
  },
  {
    id: "whiskies",
    label: "Whiskies 4cl",
    items: [
      { name: "Jameson", origin: "Irlande", price: "6,50 €" },
      { name: "Eddu Silver", origin: "Bretagne", price: "7,00 €" },
      { name: "Jack Daniel's", origin: "USA", price: "7,00 €" },
      { name: "Woodford", origin: "USA", price: "8,00 €" },
      { name: "Nikka", origin: "Japon", price: "8,00 €" },
      { name: "Chivas", origin: "Écosse", price: "8,00 €" },
      { name: "Oban", origin: "Écosse", price: "10,00 €" },
    ],
  },
  {
    id: "gins",
    label: "Gins 4cl",
    items: [
      { name: "Bombay Sapphire", origin: "Angleterre", price: "7,00 €" },
      { name: "Citadelle", origin: "France", price: "7,00 €" },
      { name: "Hendrick's", origin: "France", price: "7,00 €" },
      { name: "Supplément tonic", price: "1,00 €" },
    ],
  },
  {
    id: "vins",
    label: "Pole Position — vins",
    items: [],
    note: "Sélection du moment — demandez la carte des vins à votre serveur.",
  },
  {
    id: "soft",
    label: "Safety Car — soft",
    items: [],
    note: "Sodas, jus et eaux — demandez la carte à votre serveur.",
  },
  {
    id: "digestifs",
    label: "Grand Prix — digestifs",
    items: [],
    note: "Sélection du moment — demandez la carte des digestifs à votre serveur.",
  },
];

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(new RegExp("[\\u0300-\\u036f]", "g"), "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function toSanityCategory(category: MenuCategory) {
  return {
    _type: "menuCategory",
    _key: category.id,
    categoryId: { _type: "slug", current: category.id },
    label: category.label,
    note: category.note,
    items: category.items?.map((item) => ({
      _type: "menuItem",
      _key: slugify(item.name),
      name: item.name,
      description: item.description,
      origin: item.origin,
      price: item.price,
      tiers: item.tiers?.map((tier) => ({
        _type: "priceTier",
        _key: slugify(tier.label),
        label: tier.label,
        value: tier.value,
      })),
    })),
  };
}

async function seed() {
  console.log("Seeding homepage...");
  await client.createOrReplace({
    _id: "homepage",
    _type: "homepage",
    ...HOMEPAGE,
  });

  console.log("Seeding siteSettings...");
  await client.createOrReplace({
    _id: "siteSettings",
    _type: "siteSettings",
    ...BUSINESS,
    openingHours: OPENING_HOURS.map(({ day, hours }) => ({
      _type: "openingHour",
      _key: slugify(day),
      day,
      hours,
    })),
  });

  console.log("Seeding foodMenu...");
  await client.createOrReplace({
    _id: "foodMenu",
    _type: "foodMenu",
    lunchMenuIntro: LUNCH_MENU_INTRO.map(({ label, price }) => ({
      _type: "lunchFormula",
      _key: slugify(label),
      label,
      price,
    })),
    categories: FOOD_MENU.map(toSanityCategory),
  });

  console.log("Seeding drinksMenu...");
  await client.createOrReplace({
    _id: "drinksMenu",
    _type: "drinksMenu",
    categories: DRINKS_MENU.map(toSanityCategory),
  });

  console.log("Seeding specialEvent documents...");
  for (const [index, event] of SPECIAL_EVENTS.entries()) {
    await client.createOrReplace({
      _id: `specialEvent-${slugify(event.label)}`,
      _type: "specialEvent",
      label: event.label,
      date: event.date,
      detail: event.detail,
      active: true,
      order: index,
    });
  }

  console.log("Seeding testimonial documents...");
  for (const [index, testimonial] of TESTIMONIALS.entries()) {
    await client.createOrReplace({
      _id: `testimonial-${slugify(testimonial.name)}-${index}`,
      _type: "testimonial",
      name: testimonial.name,
      quote: testimonial.quote,
      order: index,
    });
  }

  console.log("Done.");
}

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});
