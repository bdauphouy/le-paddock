import { defineField, defineType } from "sanity";

export const openingHour = defineType({
  name: "openingHour",
  title: "Horaire",
  type: "object",
  fields: [
    defineField({
      name: "day",
      title: "Jour",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "hours",
      title: "Horaires",
      type: "string",
      description: "Ex. 12h – 17h, ou Fermé",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { title: "day", subtitle: "hours" },
  },
});
