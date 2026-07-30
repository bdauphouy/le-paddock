import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Informations de l'établissement",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nom court",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "fullName",
      title: "Nom complet",
      type: "string",
      description: "Utilisé pour la recherche Google Maps",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "addressLine",
      title: "Adresse",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "phoneDisplay",
      title: "Téléphone (affiché)",
      type: "string",
      description: "Ex. 02 59 10 21 67",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "phoneHref",
      title: "Téléphone (lien tel:)",
      type: "string",
      description: "Ex. tel:+33259102167",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (rule) => rule.required().email(),
    }),
    defineField({
      name: "facebookUrl",
      title: "URL Facebook",
      type: "url",
    }),
    defineField({
      name: "instagramUrl",
      title: "URL Instagram",
      type: "url",
    }),
    defineField({
      name: "openingHours",
      title: "Horaires d'ouverture",
      type: "array",
      of: [{ type: "openingHour" }],
    }),
  ],
  preview: {
    select: { title: "name" },
    prepare({ title }) {
      return { title: title ?? "Informations de l'établissement" };
    },
  },
});
