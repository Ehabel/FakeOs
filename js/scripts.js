import { createHTMLElem } from "../modules/create-elem-utils.js";
import {
    createMenuHeaderHtml,
    createMenuMidHtml,
    createMenuFooterHtml,
} from "../modules/menu-utils.js";
import { createNotepadApp } from "../modules/app-utils.js";

const startBtn = document.querySelector(".taskbar__start__button");
const menuApp = document.querySelector(".menu");
const desktop = document.querySelector(".container");
const notepadApp = document.querySelector(".container__item");
const notepadAppText = document.querySelector(".container__item__text");
const notepadMenuItem = document.getElementsByClassName(
    "menu__mid__contents__left__item__notepad"
);
const exitButton = document.getElementsByClassName("exit__button");
let isMenuOpen = false;
let notePadOpen = false;
let counterNotepad = 0;

const updateClock = () => {
    let now = new Date();
    let hours = now.getHours();
    let AmOrPm = hours >= 12 ? "pm" : "am";
    let time = `${hours % 12 || 12}:${("0" + now.getMinutes()).slice(
        -2
    )} ${AmOrPm}`;
    document.querySelector(".taskbar__time").textContent = time;
    setTimeout(updateClock, 1000);
};
updateClock();

const createMenuHTML = () => {
    const menuContainer = createHTMLElem("div", "menu__container", menuApp);
    createMenuHeaderHtml(menuContainer);
    createMenuMidHtml(menuContainer);
    createMenuFooterHtml(menuContainer);
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

notepadApp.addEventListener("click", (event) => {
    event.stopPropagation();
    notepadAppText.classList.add("container__item__text--clicked");
});

notepadApp.addEventListener("dblclick", (event) => {
    event.stopPropagation();
    if (notepadAppText.classList.contains("container__item__text--clicked")) {
        notepadAppText.classList.remove("container__item__text--clicked");
    }
    if (!notePadOpen) {
        counterNotepad = createNotepadApp(desktop, counterNotepad);
        notePadOpen = true;
    }
});

desktop.addEventListener("click", () => {
    if (notepadAppText.classList.contains("container__item__text--clicked")) {
        notepadAppText.classList.remove("container__item__text--clicked");
    }
});

setInterval(() => {
    if (exitButton.length >= 1) {
        exitButton[0].addEventListener("click", () => {
            desktop.removeChild(document.querySelector(".container__notepad"));
            notePadOpen = false;
        });
    }
    if (notepadMenuItem.length >= 1) {
        notepadMenuItem[0].addEventListener("click", () => {
            if (!notePadOpen) {
                startBtn.src = "./assets/buttons-1.png";
                counterNotepad = createNotepadApp(desktop, counterNotepad);
                notePadOpen = true;
                isMenuOpen = false;
                menuApp.removeChild(
                    document.getElementsByClassName("menu__container")[0]
                );
            }
        });
    }
}, 500);
