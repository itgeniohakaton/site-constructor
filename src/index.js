import { paragraphWithImgMenuTemplate } from "./components/paragraphWithImg/paragraphWithImgTemplates.js";
import { addParagraphWithImg } from "./components/paragraphWithImg/paragraphWithImgUtils.js";
import { actionButtonsTemplate } from "./components/actionButtons/actionButtonsTemplate.js";
import { galleryMenuTemplate } from "./components/gallery/galleryTemplates.js";
import { addGallery } from "./components/gallery/galleryUtils.js";
const customizer = document.getElementById("customizer");

//adding customizers
//for paragraph with img
customizer.insertAdjacentHTML("beforeend", paragraphWithImgMenuTemplate());

customizer.insertAdjacentHTML("beforeend", galleryMenuTemplate());

//adding action buttons
const actionButtons = document.getElementById("action-buttons");
actionButtons.insertAdjacentHTML("beforeend", actionButtonsTemplate());

const site = document.getElementById("site");

const paragraphWithImgMenu = document.getElementById(
  "paragraphWithImgCustomizer"
);
paragraphWithImgMenu.addEventListener("submit", (event) => {
  event.preventDefault();
  addParagraphWithImg(event, site);
});

const galleryCustomizer = document.getElementById("galleryCustomizer");
galleryCustomizer.addEventListener("submit", (event) => {
  event.preventDefault();
  addGallery(event, site);
});
