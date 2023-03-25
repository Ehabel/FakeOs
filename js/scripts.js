const startBtn = document.querySelector(".taskbar__start__button");
const menuApp = document.querySelector(".menu");
let isMenuOpen = false;

function updateClock() {
    let now = new Date();
    let time = now.getHours() + ":" + ("0" + now.getMinutes()).slice(-2);
    document.querySelector(".taskbar__time").textContent = time;
    setTimeout(updateClock, 1000);
}
updateClock();

const createMenuHTML = () => {
    const divTag = document.createElement("div");
    divTag.classList.add("menu__container");
    menuApp.appendChild(divTag);
    const menuChild = document.getElementsByClassName("menu__container")[0];
    menuChild.innerHTML += `
        <div class="menu__header">
            <img src="./assets/ball.jpg" class="menu__header__image" />
        </div>`;
};

startBtn.addEventListener("click", () => {
    const menuChild = document.getElementsByClassName("menu__container")[0];
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
