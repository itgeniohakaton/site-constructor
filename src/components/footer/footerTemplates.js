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

      <label for="footerImgLink">Img link:</label>
      <input id="footerImgLink" name="imgLink" placeholder="Img link" />
      <label for="footerName">Name:</label>
      <input id="footerName" name="name" placeholder="Name" />
      <label for="footerPhone">Phone number:</label>
      <input id="footerPhone" name="phone" placeholder="Phone number" />
        <label for="footerBackground">Choose background:</label>
        <select
        name="background"
        id="footerBackground"
        >
          <option value="">--Please choose an option--</option>
          <option value="footerBackgroundGreen">Green</option>
          <option value="footerBackgroundBlue">Blue</option>
          <option value="footerBackgroundOrange">Orange</option>
        </select>
        
        <label for="footerFont">Choose font family:</label>
        <select name="font" id="footerFont">
          <option value="">--Please choose an option--</option>
          <option value="footerFontLato">Lato</option>
          <option value="footerFontCursive">Cursive</option>
          <option value="footerFontGill">Gill Sans</option>
        </select>
        <button type="submit" class="self-center">Add</button>
      </div>
    </form>
  `
  );
}
