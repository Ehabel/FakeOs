import { menuHTML } from "../modules/boiler.js";

const startBtn = document.querySelector(".taskbar__start__button");
const menuApp = document.querySelector(".menu");
let isMenuOpen = false;

function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let AmOrPm = hours >= 12 ? "pm" : "am";
    let time = `${hours % 12}:${("0" + now.getMinutes()).slice(-2)} ${AmOrPm}`;
    document.querySelector(".taskbar__time").textContent = time;
    setTimeout(updateClock, 1000);
}
updateClock();

const createMenuHTML = () => {
    const divTag = document.createElement("div");
    divTag.classList.add("menu__container");
    menuApp.appendChild(divTag);
    const menuChild = document.getElementsByClassName("menu__container")[0];
    menuChild.innerHTML += menuHTML;
};

startBtn.addEventListener("click", () => {
    const menuChild = document.getElementsByClassName("menu__container")[0];
    // menuApp.classList.toggle("menu--show");
    if (!isMenuOpen) {
        startBtn.src = "./assets/buttons-3.png";
        createMenuHTML();
        isMenuOpen = true;
    } else {
        if (menuChild) {
            menuApp.removeChild(menuChild);
        }
        startBtn.src = "./assets/buttons-1.png";
        isMenuOpen = false;
    }
});
