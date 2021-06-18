let hamburger = document.querySelector(".hamburger");
let ul = document.getElementById("navUl");

hamburger.addEventListener("click", () => {
    ul.classList.toggle("display");
});
