/* Created by Tivotal */

let icons = document.querySelectorAll("li");

icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    icon.classList.toggle("shadow");
    icon.classList.toggle("fill");
  });
});
