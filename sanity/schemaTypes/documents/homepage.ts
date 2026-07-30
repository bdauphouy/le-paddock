import { defineField, defineType } from "sanity";

export const homepage = defineType({
  name: "homepage",
  title: "Page d'accueil",
  type: "document",
  groups: [
    { name: "hero", title: "Hero" },
    { name: "about", title: "L'histoire" },
    { name: "menu", title: "La carte" },
    { name: "experience", title: "L'expérience" },
    { name: "reviews", title: "Avis & réseaux" },
    { name: "practicalInfo", title: "Infos pratiques" },
    { name: "privatization", title: "Privatisation" },
  ],
  fields: [
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      group: "hero",
      fields: [
        defineField({ name: "eyebrow", title: "Sur-titre", type: "string" }),
        defineField({ name: "title", title: "Titre", type: "string" }),
        defineField({
          name: "paragraph",
          title: "Paragraphe",
          type: "text",
          rows: 3,
        }),
        defineField({
          name: "highlights",
          title: "Badges",
          type: "array",
          of: [{ type: "string" }],
        }),
      ],
    }),
    defineField({
      name: "about",
      title: "L'histoire",
      type: "object",
      group: "about",
      fields: [
        defineField({ name: "eyebrow", title: "Sur-titre", type: "string" }),
        defineField({ name: "title", title: "Titre", type: "string" }),
        defineField({
          name: "sub",
          title: "Premier paragraphe",
          type: "text",
          rows: 3,
        }),
        defineField({
          name: "paragraph",
          title: "Second paragraphe",
          type: "text",
          rows: 3,
        }),
      ],
    }),
    defineField({
      name: "menu",
      title: "La carte",
      type: "sectionHeading",
      group: "menu",
    }),
    defineField({
      name: "experience",
      title: "L'expérience",
      type: "sectionHeading",
      group: "experience",
    }),
    defineField({
      name: "reviews",
      title: "Avis & réseaux",
      type: "sectionHeading",
      group: "reviews",
    }),
    defineField({
      name: "practicalInfo",
      title: "Infos pratiques",
      type: "sectionHeading",
      group: "practicalInfo",
    }),
    defineField({
      name: "privatization",
      title: "Privatisation",
      type: "sectionHeading",
      group: "privatization",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Page d'accueil" };
    },
  },
});
