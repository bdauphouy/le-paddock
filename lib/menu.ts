export type PriceTier = { label: string; value: string };

export type MenuLine = {
  name: string;
  description?: string | null;
  origin?: string | null;
  price?: string | null;
  tiers?: PriceTier[] | null;
};

export type MenuCategory = {
  id: string;
  label: string;
  items: MenuLine[] | null;
  note?: string | null;
};
