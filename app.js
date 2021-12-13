const burger = document.querySelector(".burger");
const navbar = document.querySelector(".navbar");
const rightNav = document.querySelector(".rightNav");
const navList = document.querySelector(".nav-list");

burger.addEventListener("click", () => {
  navbar.classList.toggle("height-nav-resp");
  navList.classList.toggle("nav-visibility");
});
