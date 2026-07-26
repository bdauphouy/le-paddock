export type PriceTier = { label: string; value: string };

export type MenuLine = {
  name: string;
  description?: string;
  origin?: string;
  price?: string;
  tiers?: PriceTier[];
};

export type MenuCategory = {
  id: string;
  label: string;
  items: MenuLine[];
  note?: string;
};

export const LUNCH_MENU_INTRO = [
  { label: "Plat du jour", price: "13,90 €" },
  { label: "Formule entrée / plat ou plat / dessert", price: "18,90 €" },
  { label: "Formule entrée / plat / dessert", price: "23,50 €" },
] as const;

export const FOOD_MENU: MenuCategory[] = [
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

export const DRINKS_MENU: MenuCategory[] = [
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
