export function addAccordion() {
  let acc = document.querySelectorAll(".accordion_item");
  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
    });
  }
}
