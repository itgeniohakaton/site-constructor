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

            <label for="siteMainHeader">Заголовок сайта:</label>
            <input id="siteMainHeader" name="siteMainHeader" placeholder="Заголовок сайта" />

            <label for="headerBackground">Выберите фон:</label>

            <select
              name="background"
              id="headerBackground"
            >
              <option value="">--Please choose an option--</option>
              <option value="headerBackgroundGreen">Зеленый</option>
              <option value="headerBackgroundBlue">Синий</option>
              <option value="headerBackgroundOrange">Оранжевый</option>
            </select>
        
            <label for="headerFont">Выберите шрифт:</label>

            <select name="font" id="headerFont">
              <option value="">--Please choose an option--</option>
              <option value="headerFontLato">Lato</option>
              <option value="headerFontCursive">Cursive</option>
              <option value="headerFontGill">Gill Sans</option>
            </select>
        
            <button type="submit" class="self-center">Добавить</button>
        </div>
  </form>`
  );
}
