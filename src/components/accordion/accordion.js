export function addAccordion() {
  let acc = document.querySelectorAll(".accordion_header");
  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.parentElement.classList.toggle("active");
    });
  }
}
