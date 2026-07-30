import { defineField, defineType } from "sanity";

export const menuItem = defineType({
  name: "menuItem",
  title: "Article",
  type: "object",
  fields: [
    defineField({
      name: "name",
      title: "Nom",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "origin",
      title: "Origine",
      type: "string",
      description: "Ex. Irlande, Écosse — utilisé pour les whiskies/gins",
    }),
    defineField({
      name: "price",
      title: "Prix",
      type: "string",
      description: "Laisser vide si l'article a des paliers de prix",
    }),
    defineField({
      name: "tiers",
      title: "Paliers de prix",
      type: "array",
      of: [{ type: "priceTier" }],
      description: "Ex. pression vendue en 25cl / 50cl / 75cl",
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "price" },
  },
});
