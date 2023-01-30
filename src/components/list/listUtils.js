import { listTemplate } from "./listTemplates.js";
let listItems = [];
export function addListItem(item) {
  listItems.push(item);
  console.log(listItems);
}

export function addList(event, site) {
  const header = event.target.header.value || "Заголовок списка";
  const background = event.target.listBackground.value || "listBackgroundBlue";
  const font = event.target.listFont.value || "listFontNunito";
  const type = event.target.listType.value || "ul";
  const classes = background + " " + font;
  if (!listItems.length) {
    listItems = ["Первый элемент", "Второй элемент", "Третий элемент"];
  }
  site.insertAdjacentHTML(
    "beforeend",
    listTemplate(classes, header, listItems, type)
  );
  listItems = [];
}
