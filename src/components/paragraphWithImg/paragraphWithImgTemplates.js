const defaultImgLink =
  "https://www.meme-arsenal.com/memes/50569ac974c29121ff9075e45a334942.jpg";

const defaultText = `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, distinctio. Incidunt perferendis, quidem sit unde omnis adipisci ipsum nam ratione alias error maxime facere doloremque, exercitationem modi corporis nemo placeat recusandae assumenda vero reprehenderit vel fuga nihil? Error magnam enim quidem fugiat nulla repellendus distinctio dolor at adipisci veritatis nemo nostrum nesciunt illum, odio, neque quas doloribus ut, atque dicta provident perferendis velit! Sunt in odit eius quos molestias, voluptatibus nesciunt, qui obcaecati, et veritatis aperiam? Ratione soluta veniam officia quaerat id nostrum ea voluptatum possimus nulla officiis vero recusandae, molestias perferendis architecto, a quas ullam, sapiente hic cumque ipsum!
`;
const defaultClasses =
  "paragraphWithImgBackgroundGreen paragraphWithImgFontLato paragraphWithImgRight paragraphWithImgSmall";

export function paragraphWithImgTemplate(
  classes = defaultClasses,
  imgLink = defaultImgLink,
  text = defaultText,
  id
) {
  const paragraphWithImg = `
    <div class="paragraphWithImg ${classes}" id="paragraphWithImg${id}">
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
      
        
          <label for="paragraphWithImgBacground">Choose background:</label>

          <select
            name="paragraphWithImgBacground"
            id="paragraphWithImgBacground"
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
      
    </form>
  `;
}
