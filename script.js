const hamburger = document.querySelector(".hamburger");
const ul = document.getElementById("navUl");
const ulCorner = document.querySelector(".ul__corner-piece");
const body = document.querySelector("body");
const arrow = document.getElementById("arrow");

const mobileMQ = window.matchMedia("(max-width: 850px)");

hamburger.addEventListener("click", () => {
    ul.classList.toggle("display");
    ulCorner.classList.toggle("display");
    body.classList.toggle("display");
    arrow.classList.toggle("display");
});
