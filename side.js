const bars = document.querySelector(".fa-bars");
const mainbar = document.querySelector(".main-bar");
const closingButton = document.querySelector(".fa-times");

bars.addEventListener("click", () => {
  mainbar.classList.toggle("show-sidebar");
});

closingButton.addEventListener("click", () => {
  mainbar.classList.remove("show-sidebar");
});