import { defineField, defineType } from "sanity";

export const specialEvent = defineType({
  name: "specialEvent",
  title: "Événement spécial",
  type: "document",
  fields: [
    defineField({
      name: "label",
      title: "Titre",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "date",
      title: "Date (affichée)",
      type: "string",
      description: "Ex. Vendredi 31 juillet",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "detail",
      title: "Détail",
      type: "string",
      description: "Ex. le prix, ou une info complémentaire",
    }),
    defineField({
      name: "active",
      title: "Afficher dans le bandeau",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "order",
      title: "Ordre",
      type: "number",
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: "Ordre d'affichage",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "label", subtitle: "date", active: "active" },
    prepare({ title, subtitle, active }) {
      return { title, subtitle: `${subtitle}${active ? "" : " — masqué"}` };
    },
  },
});
