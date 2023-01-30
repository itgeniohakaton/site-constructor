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
    "Hamburger menu",
    `
    <form name="hamburgerMenu" id="hamburgerMenuCustomizer">
      <div class="flex direction-col">

        <label for="hamburgerMenuBackground">Choose background:</label>
        <select
        name="background"
        id="hamburgerMenuBackground"
        >
          <option value="">--Please choose an option--</option>
          <option value="hamburgerMenuBackgroundGreen">Green</option>
          <option value="hamburgerMenuBackgroundBlue">Blue</option>
          <option value="hamburgerMenuBackgroundOrange">Orange</option>
        </select>
        
        <label for="hamburgerMenuFont">Choose font family:</label>
        <select name="font" id="hamburgerMenuFont">
          <option value="">--Please choose an option--</option>
          <option value="hamburgerMenuFontLato">Lato</option>
          <option value="hamburgerMenuFontCursive">Cursive</option>
          <option value="hamburgerMenuFontGill">Gill Sans</option>
        </select>
        <button type="submit" class="self-center">Add</button>
      </div>
    </form>
  `
  );
}
