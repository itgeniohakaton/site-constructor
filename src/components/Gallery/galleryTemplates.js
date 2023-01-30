import { uuid } from "../../utils/uniqueId.js";
import { addAccordionWrapper } from "../accordion/accordionTemplate.js";
export function galleryTemplate(classes, images, header) {
  const gallery = `
    <div class="gallery ${classes}" id='gallery${uuid()}'>
        <h2>${header}</h2>
        <img class="img" src="${images[0]}" >
        <img class="img" src="${images[1]}" >
        <img class="img" src="${images[2]}" >
        <img class="img" src="${images[3]}" >
        <img class="img" src="${images[4]}" >
    </div>`;
  return gallery;
}

export function galleryMenuTemplate() {
  return addAccordionWrapper(
    "Галерея",
    `
  <form name="gallery" id="galleryCustomizer">
    <div class="flex direction-col">

   
      <label for="galleryHeader">Заголовок:</label>
      <input id="gallery" name="header" placeholder="Заголовок" />
    
      <label for="">Ссылки на картинки:</label>
      <input id="galleryImgLink1" name="imgLink1" placeholder="Ссылка на картинку 1" />

      <input id="galleryImgLink2" name="imgLink2" placeholder="Ссылка на картинку 2" />

      <input id="galleryImgLink3" name="imgLink3" placeholder="Ссылка на картинку 3" />

      <input id="galleryImgLink4" name="imgLink4" placeholder="Ссылка на картинку 4" />

      <input id="galleryImgLink5" name="imgLink5" placeholder="Ссылка на картинку 5" />
    
      
        <label for="galleryBackground">Выберите фон:</label>

        <select name="background" id="galleryBackground">
          <option value="">--Please choose an option--</option>
          <option value="galleryBackgroundGreen">Зеленый</option>
          <option value="galleryBackgroundBlue">Синий</option>
          <option value="galleryBackgroundOrange">Оранжевый</option>
        </select>
      
        <label for="galleryHeaderFont">Выберите шрифт:</label>

        <select name="headerFont" id="galleryHeaderFont">
          <option value="">--Please choose an option--</option>
          <option value="galleryHeaderFontNunito">Nunito</option>
          <option value="galleryHeaderFontRoboto">Roboto</option>
          <option value="galleryHeaderFontGill">Gill Sans</option>
        </select>
      
        <button type="submit" class="self-center">Добавить</button>
    </div>
  </form>
  `
  );
}
