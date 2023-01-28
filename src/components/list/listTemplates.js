export function listTemplate(classes, header, items, type) {
  let listItems = "";
  items.forEach((item) => {
    listItems += `<li>${item}</li>`;
  });
  const list = `
    <div id="list" class='whitetext ${classes}'>
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
  return `
  <form name="list" id="listCustomizer">
    <h5>List</h5>
    <div class="flex direction-col">
        <label for="header">List header:</label>
        <input id="header" name="header" placeholder="List header" />

        <label for="listItem">List item (press enter to save list item):</label>
        <input id="listItem" name="listItem" placeholder="List  item" />

        <label for="listType">Choose list type:</label>
        <select name="listType" id="listType">
            <option value="">--Please choose an option--</option>
            <option value="ol">Ordered list</option>
            <option value="ul">Unordered list</option>
        </select>


        <label for="listBackground">Choose background:</label>
        <select name="listBackground" id="listBackground">
            <option value="">--Please choose an option--</option>
            <option value="listBackgroundGreen">Green</option>
            <option value="listBackgroundBlue">Blue</option>
            <option value="listBackgroundOrange">Orange</option>
        </select>

        <label for="listFont">Choose font family:</label>
        <select name="listFont" id="listFont">
            <option value="">--Please choose an option--</option>
            <option value="listFontLato">Lato</option>
            <option value="listFontCursive">Cursive</option>
            <option value="listFontGill">Gill Sans</option>
        </select>
        
        <button type="submit" class="self-center">Add</button>
    </div>
    <hr />

</form>
  `;
}
