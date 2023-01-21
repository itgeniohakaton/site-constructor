import { paragraphWithImgTemplate } from "./paragraphWithImgTemplates.js";

export function addParagraphWithImg(event, site) {
  {
    const imgLink = event.target.imgLink.value || undefined;
    const paragraphText = event.target.text.value || undefined;

    const backgroundStyle = event.target.paragraphWithImgBacground.value;
    const fontFamly = event.target.paragraphWithImgFont.value;
    const imgAligment = event.target.paragraphWithImgAlignment.value;
    const imgSize = event.target.paragraphWithImgSize.value;

    const classes =
      backgroundStyle || fontFamly || imgAligment || imgSize || false
        ? backgroundStyle + " " + fontFamly + " " + imgAligment + " " + imgSize
        : undefined;

    site.insertAdjacentHTML(
      "beforeend",
      paragraphWithImgTemplate(classes, imgLink, paragraphText)
    );
  }
}
