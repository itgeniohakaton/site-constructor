import { hamdurgerMenuTemplate } from "./hamburgerMenuTemplates.js";

export function addHamburgerMenu(event, site) {
  const components = document.querySelectorAll("#site > div");
  let menuItems = "";
  components.forEach((component) => {
    let menuItemHeader = document.querySelector(
      `#${component.id} h2`
    ).innerHTML;
    menuItems += `<div class="links"><a href='#${component.id}'>${menuItemHeader}</a></div>`;
  });
  let background =
    event.target.background.value || "hamburgerMenuBackgroundBlue";
  let font = event.target.font.value || "hamburgerMenuFontLato";
  let classes = background + " " + font;
  site.insertAdjacentHTML(
    "beforeend",
    hamdurgerMenuTemplate(menuItems, classes)
  );
}
