import { uuid } from "../../utils/uniqueId.js";
import { addAccordionWrapper } from "../accordion/accordionTemplate.js";

export function paragraphWithImgTemplate(classes, imgLink, header, text) {
  const paragraphWithImg = `
    <div class="paragraphWithImg ${classes}" id='paragraphWithImg${uuid()}'>
    <h2>${header}</h2>
      <div>
        <p>
          <img
          src="${imgLink}"
          />
          ${text}
        </p>
      <div style="clear: both"></div></div>
    </div>
    `;
  return paragraphWithImg;
}

export function paragraphWithImgMenuTemplate() {
  return addAccordionWrapper(
    "Абзац с картинкой",
    `
    <form name="paragraphWithImg" id="paragraphWithImgCustomizer">
      <div class="flex direction-col">
        <label for="paragraphWithImgLink">Ссылка на картинку:</label>
        <input id="paragraphWithImgLink" name="imgLink" placeholder="Ссылка на картинку" />

        <label for="paragraphWithImgHeader">Заголовок:</label>
        <input id="paragraphWithImgHeader" name="header" placeholder="Заголовок" />

        <label for="paragraphWithImgText">Текст параграфа:</label>
        <textarea id="paragraphWithImgText" name="text" placeholder="Текст параграфа"></textarea> 

        <label for="paragraphWithImgBackground">Выберите фон:</label>
        <select
          name="paragraphWithImgBackground"
          id="paragraphWithImgBackground"
        >
          <option value="">--Please choose an option--</option>
          <option value="paragraphWithImgBackgroundGreen">Зеленый</option>
          <option value="paragraphWithImgBackgroundBlue">Синий</option>
          <option value="paragraphWithImgBackgroundOrange">Оранжевый</option>
        </select>
        
        <label for="paragraphWithImgFont">Выберите шрифт:</label>
        <select name="paragraphWithImgFont" id="paragraphWithImgFont">
          <option value="">--Please choose an option--</option>
          <option value="paragraphWithImgFontNunito">Nunito</option>
          <option value="paragraphWithImgFontRoboto">Roboto</option>
          <option value="paragraphWithImgFontGill">Gill Sans</option>
        </select>
        
        <label for="paragraphWithImgAlignment">Выравнивание картинки:</label>
        <select
          name="paragraphWithImgAlignment"
          id="paragraphWithImgAlignment"
        >
          <option value="">--Please choose an option--</option>
          <option value="paragraphWithImgRight">Справа</option>
          <option value="paragraphWithImgLeft">Слева</option>
        </select>
        
        <label for="paragraphWithImgSize">Размер картинки:</label>
        <select name="paragraphWithImgSize" id="paragraphWithImgSize">
          <option value="">--Please choose an option--</option>
          <option value="paragraphWithImgSmall">Small</option>
          <option value="paragraphWithImgMedium">Medium</option>
          <option value="paragraphWithImgLarge">Large</option>
        </select>
        
        <button type="submit" class="self-center">Добавить</button>
      </div>
    
    </form>
    `
  );
}
