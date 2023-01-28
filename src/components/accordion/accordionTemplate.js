export function addAccordionWrapper(componentName, componentCustomizer) {
  return `<div class="accordion_item">
<div class="accordion_header">
  <div class="accordion_title">${componentName}</div>
</div>
<div class="accordion_content">
  ${componentCustomizer}
</div>
</div>`;
}
