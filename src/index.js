import { paragraphWithImgMenuTemplate } from "./components/paragraphWithImg/paragraphWithImgTemplates.js";
import { addParagraphWithImg } from "./components/paragraphWithImg/paragraphWithImgUtils.js";
import { actionButtonsTemplate } from "./components/actionButtons/actionButtonsTemplate.js";
import { galleryMenuTemplate } from "./components/gallery/galleryTemplates.js";
import { addGallery } from "./components/gallery/galleryUtils.js";
import { feedbackMenuTemplate } from "./components/feedback/feedbackTemplates.js";
import { addFeedback } from "./components/feedback/feedbackUtils.js";
import { addList } from "./components/list/listUtils.js";
import { listMenuTemplate } from "./components/list/listTemplates.js";
import { addListItem } from "./components/list/listUtils.js";
import { addAccordion } from "./components/accordion/accordion.js";
import { hamdurgerMenuCustomizerTemplate } from "./components/hamburgerMenu/hamburgerMenuTemplates.js";
import { addHamburgerMenu } from "./components/hamburgerMenu/hamburgerMenuUtils.js";
const customizer = document.getElementById("customizer");

//adding customizers
//for paragraph with img
customizer.insertAdjacentHTML("beforeend", paragraphWithImgMenuTemplate());
//for gallery
customizer.insertAdjacentHTML("beforeend", galleryMenuTemplate());
//for feedback
customizer.insertAdjacentHTML("beforeend", feedbackMenuTemplate());
//for list
customizer.insertAdjacentHTML("beforeend", listMenuTemplate());
//for hamburger menu
customizer.insertAdjacentHTML("beforeend", hamdurgerMenuCustomizerTemplate());

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

const feedbackCustomizer = document.getElementById("feedbackCustomizer");
feedbackCustomizer.addEventListener("submit", (event) => {
  event.preventDefault();
  addFeedback(event, site);
});

const listCustomizer = document.getElementById("listCustomizer");
const listItem = document.getElementById("listItem");
listItem.addEventListener("keypress", (event) => {
  event.stopPropagation();
  if (event.key === "Enter") {
    event.preventDefault();
    addListItem(event.target.value);
    event.target.value = "";
  }
});

listCustomizer.addEventListener("submit", (event) => {
  event.preventDefault();
  addList(event, site);
});

const hamburgerMenuCustomizer = document.getElementById(
  "hamburgerMenuCustomizer"
);
hamburgerMenuCustomizer.addEventListener("submit", (event) => {
  event.preventDefault();
  if (document.getElementById("hamburgerMenu")) {
    hamburgerMenuCustomizer.insertAdjacentHTML(
      "beforeend",
      `<p style='color:red' id='hamburgerMenuAlert'>Delete previous hamburger menu first!</p>`
    );
    setTimeout(() => {
      document.getElementById("hamburgerMenuAlert").remove();
    }, 5000);
    return;
  }
  addHamburgerMenu(event, site);
});

const scatchList = document.querySelector("#site");

const deleteBtn = (document.getElementById(
  "button--delete-last-component"
).onclick = function deleteScatch() {
  scatchList.removeChild(scatchList.lastElementChild);
});

const resetBtn = (document.getElementById("button--delete-all").onclick =
  function resetAll() {
    document.getElementById("site").innerHTML = "";
  });

addAccordion();
