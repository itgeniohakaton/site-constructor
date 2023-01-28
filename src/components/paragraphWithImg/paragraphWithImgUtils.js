import { paragraphWithImgTemplate } from "./paragraphWithImgTemplates.js";

export function addParagraphWithImg(event, site) {
  const imgLink = event.target.imgLink.value || defaultImgLink;
  const header = event.target.header.value || "Paragraph header";
  const paragraphText = event.target.text.value || defaultText;

  const backgroundStyle =
    event.target.paragraphWithImgBackground.value ||
    "paragraphWithImgBackgroundBlue";
  const fontFamly =
    event.target.paragraphWithImgFont.value || "paragraphWithImgFontLato";
  const imgAligment =
    event.target.paragraphWithImgAlignment.value || "paragraphWithImgRight";
  const imgSize =
    event.target.paragraphWithImgSize.value || "paragraphWithImgSmall";

  const classes =
    backgroundStyle + " " + fontFamly + " " + imgAligment + " " + imgSize;
  site.insertAdjacentHTML(
    "beforeend",
    paragraphWithImgTemplate(classes, imgLink, header, paragraphText)
  );
}
const defaultText = `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, distinctio. Incidunt perferendis, quidem sit unde omnis adipisci ipsum nam ratione alias error maxime facere doloremque, exercitationem modi corporis nemo placeat recusandae assumenda vero reprehenderit vel fuga nihil? Error magnam enim quidem fugiat nulla repellendus distinctio dolor at adipisci veritatis nemo nostrum nesciunt illum, odio, neque quas doloribus ut, atque dicta provident perferendis velit! Sunt in odit eius quos molestias, voluptatibus nesciunt, qui obcaecati, et veritatis aperiam? Ratione soluta veniam officia quaerat id nostrum ea voluptatum possimus nulla officiis vero recusandae, molestias perferendis architecto, a quas ullam, sapiente hic cumque ipsum!
  `;

const defaultImgLink =
  "https://www.meme-arsenal.com/memes/50569ac974c29121ff9075e45a334942.jpg";
