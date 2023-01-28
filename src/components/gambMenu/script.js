let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");
menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
});
let h1 = document.querySelectorAll("h1");
let h2 = document.querySelectorAll("h2");
let p = document.querySelectorAll("p");
if (h1 != null) {
  if (h1.innerHTML == undefined) {
    let arr = h1.length;
    for (let i = 0; i < h1.length; i++) {
      menu.innerHTML += ` h1: <a href="#h1_${i}" style="text-decoration: none;"> ${h1[i].innerHTML} </a>;`;
    }
  } else {
    menu.innerHTML += ` h1: <a href="#h1_1" style="text-decoration: none;"> ${h1.innerHTML} </a>;`;
  }
}
if (h2 != null) {
  if (h2.innerHTML == undefined) {
    let arr = h2.length;
    for (let g = 0; g < h2.length; g++) {
      menu.innerHTML += ` h2: <a href="#h2_${g}" style="text-decoration: none;"> ${h2[g].innerHTML} </a>;`;
    }
  } else {
    menu.innerHTML += ` h2: <a href="#h2_1" style="text-decoration: none;"> ${h2.innerHTML} </a>;`;
  }
}
if (p != null) {
  if (p.innerHTML == undefined) {
    let arr = p.length;
    for (let h = 0; h < p.length; h++) {
      menu.innerHTML += ` p: <a href="#p_${h}" style="text-decoration: none;"> ${p[h].innerHTML}</a>;`;
    }
  } else {
    menu.innerHTML += `<a href="#p_1" style="text-decoration: none;"> p: ${p.innerHTML}</a>;`;
  }
}
