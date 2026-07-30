import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Contenu")
    .items([
      S.listItem()
        .title("Textes de la page d'accueil")
        .id("homepage")
        .child(S.document().schemaType("homepage").documentId("homepage")),
      S.listItem()
        .title("Informations de l'établissement")
        .id("siteSettings")
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings"),
        ),
      S.listItem()
        .title("Carte — Nourriture")
        .id("foodMenu")
        .child(S.document().schemaType("foodMenu").documentId("foodMenu")),
      S.listItem()
        .title("Carte — Boissons")
        .id("drinksMenu")
        .child(
          S.document().schemaType("drinksMenu").documentId("drinksMenu"),
        ),
      S.divider(),
      S.documentTypeListItem("specialEvent").title("Événements spéciaux"),
      S.documentTypeListItem("testimonial").title("Avis clients"),
    ]);
