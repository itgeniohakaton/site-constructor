import { addAccordionWrapper } from "../accordion/accordionTemplate.js";

export function hamdurgerMenuTemplate(menuItems, classes) {
  return `
  <div id='hamburgerMenu' class='${classes}'>
		<input type="checkbox" id="checkbox">
		<div class="BlueCircle">
			<label for="checkbox" class="button">
				<span>
				</span>
			</label>
		</div>
    <div class="hamburgerMenuWrapper">${menuItems}
    </div>
  </div>
    
    `;
}

export function hamdurgerMenuCustomizerTemplate() {
  return addAccordionWrapper(
    "Гамбургер меню",
    `
    <form name="hamburgerMenu" id="hamburgerMenuCustomizer">
      <div class="flex direction-col">

        <label for="hamburgerMenuBackground">Выберите фон:</label>
        <select
        name="background"
        id="hamburgerMenuBackground"
        >
          <option value="">--Please choose an option--</option>
          <option value="hamburgerMenuBackgroundGreen">Зеленый</option>
          <option value="hamburgerMenuBackgroundBlue">Синий</option>
          <option value="hamburgerMenuBackgroundOrange">Оранжевый</option>
        </select>
        
        <label for="hamburgerMenuFont">Выберите шрифт:</label>
        <select name="font" id="hamburgerMenuFont">
          <option value="">--Please choose an option--</option>
          <option value="hamburgerMenuFontLato">Lato</option>
          <option value="hamburgerMenuFontCursive">Cursive</option>
          <option value="hamburgerMenuFontGill">Gill Sans</option>
        </select>
        <button type="submit" class="self-center">Добавить</button>
      </div>
    </form>
  `
  );
}
