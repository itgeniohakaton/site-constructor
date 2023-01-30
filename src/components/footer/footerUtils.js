import { footerTemplate } from "./footerTemplates.js";

export function addFooter(event, site) {
  const imgLink = event.target.imgLink.value || "defaultLogoWhite.png";
  const name = event.target.name.value || "John Doe";
  const phone = event.target.phone.value || "+ 123 456 78 90";
  const background = event.target.background.value || "footerBackgroundBlue";
  const font = event.target.font.value || "footerFontNunito";
  const classes = background + " " + font;
  site.insertAdjacentHTML(
    "beforeend",
    footerTemplate(classes, imgLink, name, phone)
  );
}
