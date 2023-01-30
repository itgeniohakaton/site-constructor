import { addAccordionWrapper } from "../accordion/accordionTemplate.js";
export function headerTemplate(classes, siteMainHeader) {
  return `
  <header id='header' class='${classes}'>
  <h1>${siteMainHeader}</h1>
    <ul id="navbar">
      <li><a href="#">Главная</a></li>
      <li><a href="#">Новости</a></li>
      <li><a href="#">Контакты</a></li>
      <li><a href="#">О нас</a></li>
    </ul>
  </header>
`;
}

export function headerMenuTemplate() {
  return addAccordionWrapper(
    "Header",
    `<form name="header" id='headerCustomizer'>
        <div class="flex direction-col">

            <label for="siteMainHeader">Site main header:</label>
            <input id="siteMainHeader" name="siteMainHeader" placeholder="Site main header" />

            <label for="headerBackground">Choose background:</label>

            <select
              name="background"
              id="headerBackground"
            >
              <option value="">--Please choose an option--</option>
              <option value="headerBackgroundGreen">Green</option>
              <option value="headerBackgroundBlue">Blue</option>
              <option value="headerBackgroundOrange">Orange</option>
            </select>
        
            <label for="headerFont">Choose font family:</label>

            <select name="font" id="headerFont">
              <option value="">--Please choose an option--</option>
              <option value="headerFontLato">Lato</option>
              <option value="headerFontCursive">Cursive</option>
              <option value="headerFontGill">Gill Sans</option>
            </select>
        
            <button type="submit" class="self-center">Add</button>
        </div>
  </form>`
  );
}
