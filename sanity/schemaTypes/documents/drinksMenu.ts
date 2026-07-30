import { defineField, defineType } from "sanity";

export const drinksMenu = defineType({
  name: "drinksMenu",
  title: "Carte — Boissons",
  type: "document",
  fields: [
    defineField({
      name: "categories",
      title: "Catégories",
      type: "array",
      of: [{ type: "menuCategory" }],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Carte — Boissons" };
    },
  },
});
