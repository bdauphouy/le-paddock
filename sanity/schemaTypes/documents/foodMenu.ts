import { defineField, defineType } from "sanity";

export const foodMenu = defineType({
  name: "foodMenu",
  title: "Carte — Nourriture",
  type: "document",
  fields: [
    defineField({
      name: "lunchMenuIntro",
      title: "Formules midi",
      type: "array",
      of: [
        {
          type: "object",
          name: "lunchFormula",
          fields: [
            defineField({ name: "label", title: "Formule", type: "string" }),
            defineField({ name: "price", title: "Prix", type: "string" }),
          ],
          preview: { select: { title: "label", subtitle: "price" } },
        },
      ],
    }),
    defineField({
      name: "categories",
      title: "Catégories",
      type: "array",
      of: [{ type: "menuCategory" }],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Carte — Nourriture" };
    },
  },
});
