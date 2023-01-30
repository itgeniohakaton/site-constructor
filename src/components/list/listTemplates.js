import { uuid } from "../../utils/uniqueId.js";
import { addAccordionWrapper } from "../accordion/accordionTemplate.js";
export function listTemplate(classes, header, items, type) {
  let listItems = "";
  items.forEach((item) => {
    listItems += `<li>${item}</li>`;
  });
  const list = `
    <div id="list${uuid()}" class='whitetext list ${classes}'>
      <div id='listWrapper'>
        <h2>${header}</h2>
        <${type}>
          ${listItems}
        </${type}>
      </div>  
    </div>
  `;
  return list;
}

export function listMenuTemplate() {
  return addAccordionWrapper(
    "Список",
    `
  <form name="list" id="listCustomizer">
    <div class="flex direction-col">
        <label for="header">Заголовок списка:</label>
        <input id="header" name="header" placeholder="Заголовок списка" />

        <label for="listItem">Элемент списка (для сохранения элемента нажмите Enter):</label>
        <input id="listItem" name="listItem" placeholder="Элемент списка" />

        <label for="listType">Выберите тип списка:</label>
        <select name="listType" id="listType">
            <option value="">--Please choose an option--</option>
            <option value="ol">Ordered list</option>
            <option value="ul">Unordered list</option>
        </select>


        <label for="listBackground">Выберите фон:</label>
        <select name="listBackground" id="listBackground">
            <option value="">--Please choose an option--</option>
            <option value="listBackgroundGreen">Зеленый</option>
            <option value="listBackgroundBlue">Синий</option>
            <option value="listBackgroundOrange">Оранжевый</option>
        </select>

        <label for="listFont">Выберите шрифт:</label>
        <select name="listFont" id="listFont">
            <option value="">--Please choose an option--</option>
            <option value="listFontLato">Lato</option>
            <option value="listFontCursive">Cursive</option>
            <option value="listFontGill">Gill Sans</option>
        </select>
        
        <button type="submit" class="self-center">Добавить</button>
    </div>

</form>
  `
  );
}
