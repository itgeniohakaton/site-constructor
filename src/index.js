import { paragraphWithImgMenuTemplate } from "./components/paragraphWithImg/paragraphWithImgTemplates.js";
import { addParagraphWithImg } from "./components/paragraphWithImg/paragraphWithImgUtils.js";
import { actionButtonsTemplate } from "./components/actionButtons/actionButtonsTemplate.js";
const customizer = document.getElementById("customizer");

//adding customizer for paragraph with img
customizer.insertAdjacentHTML("beforeend", paragraphWithImgMenuTemplate());
const paragraphWithImgMenu = document.getElementById(
  "paragraphWithImgCustomizer"
);

//adding action buttons
const actionButtons = document.getElementById("action-buttons");
actionButtons.insertAdjacentHTML("beforeend", actionButtonsTemplate());

const site = document.getElementById("site");

paragraphWithImgMenu.addEventListener("submit", (event) => {
  event.preventDefault();
  addParagraphWithImg(event, site);
});

const scatchList = document.querySelector("#site")

const deleteBtn = document.getElementById("button--delete-last-component").onclick = function deleteScatch() {
  scatchList.removeChild(scatchList.lastElementChild)

}

const resetBtn = document.getElementById("button--delete-all").onclick = function resetAll() {
  document.getElementById("site").innerHTML = ""
}