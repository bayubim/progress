let bg = document.getElementsByClassName("bg")[0];
window.addEventListener("scroll", function () {
  var value = window.scrollY;
  bg.style.top = value * 2 + "px";
});

let nav = document.querySelector("nav");
window.addEventListener("scroll", function () {
  nav.classList.toggle("scrolling", window.scrollY > 0);
  if (window.scrollY > 0) {
    nav.classList.remove("navbar-dark");
  } else {
    nav.classList.add("navbar-dark");
  }
});

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 1;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
