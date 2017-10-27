var menu = document.querySelector(".nav-main");
var toggle = document.querySelector(".nav-main__btn");

menu.classList.remove("nav-main--no-js");
menu.classList.add("nav-main--closed");

toggle.onclick = function() {
  if (menu.classList.contains("nav-main--closed")) {
    menu.classList.remove("nav-main--closed");
    menu.classList.add("nav-main--opened");
    toggle.classList.remove("nav-main__btn--open");
    toggle.classList.add("nav-main__btn--close");
  } else {
    menu.classList.add("nav-main--closed");
    menu.classList.remove("nav-main--opened");
    toggle.classList.remove("nav-main__btn--close");
    toggle.classList.add("nav-main__btn--open");
  }
};
