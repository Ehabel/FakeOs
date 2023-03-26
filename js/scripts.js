const startBtn = document.querySelector(".taskbar__start__button");
const menuApp = document.querySelector(".menu");
let isMenuOpen = false;
const menuHTML = `
<div class="menu__header">
<div class="menu__header__contents">
    <img
        src="./assets/ball.jpg"
        class="menu__header__image"
    />
    <p class="menu__header__user">USER</p>
</div>
</div>
<div class="menu__mid">
<div class="menu__mid__contents">
    <div class="menu__mid__contents__left">
        <div class="menu__mid__contents__left__item">
            <img
                src="./assets/cal.png"
                class="menu__mid__contents__left__item__image"
            />
            <p
                class="menu__mid__contents__left__item__text"
            >
                Calculator
            </p>
        </div>
    </div>
    <div class="menu__mid__contents__right">
        <div class="menu__mid__contents__right__item">
            <img
                src="./assets/mydocs.png"
                class="menu__mid__contents__right__item__image"
            />
            <p
                class="menu__mid__contents__right__item__text"
            >
                My documents
            </p>
        </div>
        <div class="menu__mid__contents__right__item">
            <img
                src="./assets/recentdocs.png"
                class="menu__mid__contents__right__item__image"
            />
            <p
                class="menu__mid__contents__right__item__text"
            >
                My Recent documents
            </p>
        </div>
        <div class="menu__mid__contents__right__item">
            <img
                src="./assets/mypics.png"
                class="menu__mid__contents__right__item__image"
            />
            <p
                class="menu__mid__contents__right__item__text"
            >
                My Pictures
            </p>
        </div>
        <div class="menu__mid__contents__right__item">
            <img
                src="./assets/mymusic.png"
                class="menu__mid__contents__right__item__image"
            />
            <p
                class="menu__mid__contents__right__item__text"
            >
                My Music
            </p>
        </div>
    </div>
</div>
</div>
<div class="menu__footer">
<div class="menu__footer__contents"></div>
</div>`;

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
