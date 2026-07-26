export const SPECIAL_EVENTS = [
  {
    label: "Soirée spéciale moules-frites",
    date: "Vendredi 31 juillet",
    detail: "16,50 €",
  },
] as const;

export const EVENT_TICKER_ITEMS = SPECIAL_EVENTS.map(
  ({ label, date, detail }) => `Événement · ${label} · ${date} · ${detail}`
);
