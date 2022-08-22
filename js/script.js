var nav = document.querySelector("nav");
window.addEventListener("scroll", function () {
  nav.classList.toggle("scrolling", window.scrollY > 0);
});

let bg = document.getElementsByClassName("bg")[0];
window.addEventListener("scroll", function () {
  var value = window.scrollY;
  bg.style.top = value * 0.5 + "px";
});
