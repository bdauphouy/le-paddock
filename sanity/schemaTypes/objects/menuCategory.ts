import { defineField, defineType } from "sanity";

export const menuCategory = defineType({
  name: "menuCategory",
  title: "Catégorie",
  type: "object",
  fields: [
    defineField({
      name: "categoryId",
      title: "Identifiant",
      type: "slug",
      description: "Utilisé comme clé d'onglet, ex. entrees, cocktails",
      options: { source: "label" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "label",
      title: "Nom affiché",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "note",
      title: "Note",
      type: "string",
      description: "Affiché si la catégorie n'a pas d'articles listés",
    }),
    defineField({
      name: "items",
      title: "Articles",
      type: "array",
      of: [{ type: "menuItem" }],
    }),
  ],
  preview: {
    select: { title: "label", items: "items" },
    prepare({ title, items }) {
      return {
        title,
        subtitle: `${items?.length ?? 0} article(s)`,
      };
    },
  },
});
