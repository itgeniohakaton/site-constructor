export function actionButtonsTemplate() {
  return `
  <div class='flex direction-col'>
    <button id="button--delete-all">Удалить всё</button>
    <button id="button--delete-component" onclick='lookelem()'>Удалить компонент</button>
    <button id="button--delete-last-component">Удалить последний компонент</button>
    <button id="button--download">Скачать</button>
    <button id="sortelem" onclick="sortelems()">Изменить порядок компонентов</button>
  </div>
  `;
}
