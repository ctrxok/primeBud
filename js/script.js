// burger menu-----------------------------------------------------
let burgerBtn = document.getElementsByClassName("burger__menu");
let menu = document.getElementsByClassName("header__navigation");
let wrapper = document.getElementsByClassName("wrapper");
burgerBtn[0].onclick = function () {
  menu[0].classList.toggle("active");
  burgerBtn[0].classList.toggle("active");
};
// ------------------------------------------------------------------

// While scroll page change header size------------------------------

let header = document.getElementsByClassName("header");

window.onscroll = () => {
  if (scrollY > 130) {
    header[0].classList.add("scroll");
  } else {
    header[0].classList.remove("scroll");
  }
};
