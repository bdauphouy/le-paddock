import { defineField, defineType } from "sanity";

export const priceTier = defineType({
  name: "priceTier",
  title: "Palier de prix",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Format",
      type: "string",
      description: "Ex. 25cl, 50cl",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "value",
      title: "Prix",
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { title: "label", subtitle: "value" },
  },
});
