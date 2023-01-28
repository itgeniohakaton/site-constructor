export function galleryTemplate(classes, images, header) {
  const gallery = `
    <div class="gallery ${classes}">
        <h1>${header}</h1>
        <img class="img" src="${images[0]}" >
        <img class="img" src="${images[1]}" >
        <img class="img" src="${images[2]}" >
        <img class="img" src="${images[3]}" >
        <img class="img" src="${images[4]}" >
    </div>`;
  return gallery;
}

export function galleryMenuTemplate() {
  return `
  <form name="gallery" id="galleryCustomizer">
    <h5>Gallery</h5>
    <div>
      <label for="galleryHeader">Header:</label>
      <input id="gallery" name="header" placeholder="Gallery header" />
    </div>
    <div>
      <label for="">Img links:</label>
      <input id="galleryImgLink1" name="imgLink1" placeholder="Img link 1" />

      <input id="galleryImgLink2" name="imgLink2" placeholder="Img link 2" />

      <input id="galleryImgLink3" name="imgLink3" placeholder="Img link 3" />

      <input id="galleryImgLink4" name="imgLink4" placeholder="Img link 4" />

      <input id="galleryImgLink5" name="imgLink5" placeholder="Img link 5" />
    </div>

    <div>
      <div>
        <label for="galleryBackground">Choose background:</label>

        <select name="background" id="galleryBackground">
          <option value="">--Please choose an option--</option>
          <option value="galleryBackgroundGreen">Green</option>
          <option value="galleryBackgroundBlue">Blue</option>
          <option value="galleryBackgroundOrange">Orange</option>
        </select>
      </div>
      <div>
        <label for="galleryHeaderFont">Choose font family:</label>

        <select name="headerFont" id="galleryHeaderFont">
          <option value="">--Please choose an option--</option>
          <option value="galleryHeaderFontLato">Lato</option>
          <option value="galleryHeaderFontCursive">Cursive</option>
          <option value="galleryHeaderFontGill">Gill Sans</option>
        </select>
      </div>
    </div>
    <button type="submit">Add</button>
    <hr />
  </form>
  `;
}
