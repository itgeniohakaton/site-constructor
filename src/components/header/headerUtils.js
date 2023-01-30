import { headerTemplate } from "./headerTemplates.js";

export function addHeader(event, site) {
  const siteMainHeader =
    event.target.siteMainHeader.value || "Site Main Header";
  const background = event.target.background.value || "headerBackgroundBlue";
  const font = event.target.font.value || "headerFontLato";
  const classes = background + " " + font;
  site.insertAdjacentHTML(
    "afterbegin",
    headerTemplate(classes, siteMainHeader)
  );
}
