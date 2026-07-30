import { defineField, defineType } from "sanity";

export const sectionHeading = defineType({
  name: "sectionHeading",
  title: "En-tête de section",
  type: "object",
  fields: [
    defineField({
      name: "eyebrow",
      title: "Sur-titre",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      title: "Titre",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "sub",
      title: "Paragraphe",
      type: "text",
      rows: 3,
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "eyebrow" },
  },
});
