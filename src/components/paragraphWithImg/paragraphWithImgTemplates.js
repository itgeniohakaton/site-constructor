export function paragraphWithImgTemplate(classes, imgLink, text) {
  const paragraphWithImg = `
    <div class="paragraphWithImg ${classes}">
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
  return `
    <form name="paragraphWithImg" id="paragraphWithImgCustomizer">
      <h5>Paragraph With Img</h5>
      <div class="flex direction-col">
        <label for="paragraphWithImgLink">Img link:</label>
        <input id="paragraphWithImgLink" name="imgLink" placeholder="Img link" />

        <label for="paragraphWithImgText">Paragraph text:</label>
        <textarea id="paragraphWithImgText" name="text" placeholder="Paragraph text"></textarea> 

        <label for="paragraphWithImgBackground">Choose background:</label>
        <select
          name="paragraphWithImgBackground"
          id="paragraphWithImgBackground"
        >
          <option value="">--Please choose an option--</option>
          <option value="paragraphWithImgBackgroundGreen">Green</option>
          <option value="paragraphWithImgBackgroundBlue">Blue</option>
          <option value="paragraphWithImgBackgroundOrange">Orange</option>
        </select>
        
        <label for="paragraphWithImgFont">Choose font family:</label>
        <select name="paragraphWithImgFont" id="paragraphWithImgFont">
          <option value="">--Please choose an option--</option>
          <option value="paragraphWithImgFontLato">Lato</option>
          <option value="paragraphWithImgFontCursive">Cursive</option>
          <option value="paragraphWithImgFontGill">Gill Sans</option>
        </select>
        
        <label for="paragraphWithImgAlignment">Choose img alignment:</label>
        <select
          name="paragraphWithImgAlignment"
          id="paragraphWithImgAlignment"
        >
          <option value="">--Please choose an option--</option>
          <option value="paragraphWithImgRight">Right</option>
          <option value="paragraphWithImgLeft">Left</option>
        </select>
        
        <label for="paragraphWithImgSize">Choose img size:</label>
        <select name="paragraphWithImgSize" id="paragraphWithImgSize">
          <option value="">--Please choose an option--</option>
          <option value="paragraphWithImgSmall">Small</option>
          <option value="paragraphWithImgMedium">Medium</option>
          <option value="paragraphWithImgLarge">Large</option>
        </select>
        
        <button type="submit" class="self-center">Add</button>
      </div>
      <hr />
    
    </form>
    `;
}
