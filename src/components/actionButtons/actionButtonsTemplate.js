export function actionButtonsTemplate() {
  return `
  <div class='flex direction-col'>
    <button id="button--delete-all">Delete all</button>
    <button id="button--delete-component" onclick='lookelem()'>Delete component</button>
    <button id="button--download">Download</button>
    <button id="sortelem" onclick="sortelems()">Change components order</button>
  </div>
  `;
}
