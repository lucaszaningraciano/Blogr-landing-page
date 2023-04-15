// abrir o menu Connect
let navigation = document.getElementById("nav-left");
let connectMenu = document.getElementById("connect-menu");
let newMenu = document.getElementById("new-menu");
let arrowUp = document.getElementById("arrow-up");
let arrowDown = document.getElementById("arrow-down");

function openMenu() {
  document.getElementById("new-menu").style.display = "block";
  document.getElementById("arrow-down").style.display = "none";
  document.getElementById("arrow-up").style.display = "block";
}

function closeMenu() {
  document.getElementById("new-menu").style.display = "none";
  document.getElementById("arrow-up").style.display = "none";
  document.getElementById("arrow-down").style.display = "block";
}

//menu hamburguer

let show = true;
const menuSection = document.querySelector(".menu-section");
const menuToggle = document.querySelector(".menu-toggle");

menuToggle.addEventListener("click", () => {
  document.body.style.overflow = show ? "hidden" : "initial";
  menuSection.classList.toggle("on", show);
  show = !show;
});

//abrir menu connect mobile

let navigationMobile = document.querySelector(".menu-responsive");
let menuConnectMobile = document.querySelector(".connect-menu-responsive");
let arrowDownMobile = document.getElementById("arrowDownMobile");
let arrowUpMobile = document.getElementById("arrowUpMobile");

function openMenuMobile() {
  document.querySelector(".connect-menu-responsive").style.display = "flex";
  document.getElementById("arrowDownMobile").style.display = "none";
  document.getElementById("arrowUpMobile").style.display = "block";
}

//fechar menu connect mobile
function closeMenuMobile() {
  document.querySelector(".connect-menu-responsive").style.display = "none";
  document.getElementById("arrowUpMobile").style.display = "none";
  document.getElementById("arrowDownMobile").style.display = "block";
}
