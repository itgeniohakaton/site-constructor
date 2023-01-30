import { addAccordionWrapper } from "../accordion/accordionTemplate.js";
export function footerTemplate(classes, imgLink, name, phone) {
  return `
  <footer class="footer ${classes}" id='footer'>
    <div class='footerImgWrapper'><a href="#" class="logo"><img src="${imgLink}" alt=""></a></div>
    <div class="footer-right">
      <a class="active" href="#">${name}</a>
      <a href="tel:${phone}">${phone}</a>
    </div>
  </footer>
`;
}

export function footerMenuTemplate() {
  return addAccordionWrapper(
    "Footer",
    `
    <form name="footer" id="footerCustomizer">
      <div class="flex direction-col">

      <label for="footerImgLink">Ссылка на картинку:</label>
      <input id="footerImgLink" name="imgLink" placeholder="Ссылка на картинку" />
      <label for="footerName">Имя:</label>
      <input id="footerName" name="name" placeholder="Имя" />
      <label for="footerPhone">Номер телефона:</label>
      <input id="footerPhone" name="phone" placeholder="Номер телефона" />
        <label for="footerBackground">Выберите фон:</label>
        <select
        name="background"
        id="footerBackground"
        >
          <option value="">--Please choose an option--</option>
          <option value="footerBackgroundGreen">Зеленый</option>
          <option value="footerBackgroundBlue">Синий</option>
          <option value="footerBackgroundOrange">Оранжевый</option>
        </select>
        
        <label for="footerFont">Выберите шрифт:</label>
        <select name="font" id="footerFont">
          <option value="">--Please choose an option--</option>
          <option value="footerFontNunito">Nunito</option>
          <option value="footerFontRoboto">Roboto</option>
          <option value="footerFontGill">Gill Sans</option>
        </select>
        <button type="submit" class="self-center">Добавить</button>
      </div>
    </form>
  `
  );
}
