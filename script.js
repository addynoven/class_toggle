const menu = document.querySelectorAll("i");
const circle = document.querySelector(".circle");
const main = document.querySelector(".main");

menu.forEach((ele) => {
    ele.addEventListener("click", () => {
        circle.classList.toggle("circle_rotate");
        main.classList.toggle("rotate");
    });
});
