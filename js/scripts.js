import { createHTMLElem } from "../modules/create-elem-utils.js";
import {
    createMenuHeaderHtml,
    createMenuMidHtml,
    createMenuFooterHtml,
} from "../modules/menu-utils.js";
import {
    createIEApp,
    createNotepadApp,
    createSolitaireApp,
} from "../modules/app-utils.js";

const startBtn = document.querySelector(".taskbar__start__button");
const menuApp = document.querySelector(".menu");
const desktop = document.querySelector(".container");
const notepadZIndex = document.getElementsByClassName("container__notepad");
const ieZIndex = document.getElementsByClassName("container__ie");
const steZIndex = document.getElementsByClassName("container__ste");
const notepadApp = document.querySelector(".app__notepad");
const notepadAppText = document.querySelector(".app__notepad__item__text");
const notepadMenuItem = document.getElementsByClassName(
    "menu__mid__contents__left__item__notepad"
);
const ieApp = document.querySelector(".app__ie");
const ieAppText = document.querySelector(".app__ie__item__text");
const ieMenuItem = document.getElementsByClassName(
    "menu__mid__contents__left__item__ie"
);
const steApp = document.querySelector(".app__ste");
const steAppText = document.querySelector(".app__ste__item__text");
const steMenuItem = document.getElementsByClassName(
    "menu__mid__contents__left__item__ste"
);
const exitButton = document.getElementsByClassName("exit__button__npd");
const exitButtonIE = document.getElementsByClassName("exit__button__ie");
const exitButtonSTE = document.getElementsByClassName("exit__button__ste");
let isMenuOpen = false;
let notePadOpen = false;
let ieOpen = false;
let steOpen = false;
let counterNotepad = 0;
let zIndexApp = 2;
let openedAppCounter = 1;
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
    openedAppCounter = desktop.childElementCount;
    if (notepadAppText.classList.contains("container__item__text--clicked")) {
        notepadAppText.classList.remove("container__item__text--clicked");
    }
    if (ieAppText.classList.contains("container__item__text--clicked")) {
        ieAppText.classList.remove("container__item__text--clicked");
    }
    if (steAppText.classList.contains("container__item__text--clicked")) {
        steAppText.classList.remove("container__item__text--clicked");
    }
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
    const menuChild = document.getElementsByClassName("menu__container")[0];
    if (ieAppText.classList.contains("container__item__text--clicked")) {
        ieAppText.classList.remove("container__item__text--clicked");
    }
    if (steAppText.classList.contains("container__item__text--clicked")) {
        steAppText.classList.remove("container__item__text--clicked");
    }
    if (menuChild) {
        menuApp.removeChild(menuChild);
    }
    startBtn.src = "./assets/buttons-1.png";
    isMenuOpen = false;
    event.stopPropagation();
    notepadAppText.classList.add("container__item__text--clicked");
});

notepadApp.addEventListener("dblclick", (event) => {
    openedAppCounter = desktop.childElementCount;
    event.stopPropagation();
    if (notepadAppText.classList.contains("container__item__text--clicked")) {
        notepadAppText.classList.remove("container__item__text--clicked");
    }
    if (!notePadOpen) {
        counterNotepad = createNotepadApp(desktop, counterNotepad);
        notePadOpen = true;
    }
});

ieApp.addEventListener("click", (event) => {
    const menuChild = document.getElementsByClassName("menu__container")[0];
    if (notepadAppText.classList.contains("container__item__text--clicked")) {
        notepadAppText.classList.remove("container__item__text--clicked");
    }
    if (steAppText.classList.contains("container__item__text--clicked")) {
        steAppText.classList.remove("container__item__text--clicked");
    }
    if (menuChild) {
        menuApp.removeChild(menuChild);
    }
    startBtn.src = "./assets/buttons-1.png";
    isMenuOpen = false;
    event.stopPropagation();
    ieAppText.classList.add("container__item__text--clicked");
});

ieApp.addEventListener("dblclick", (event) => {
    openedAppCounter = desktop.childElementCount;
    event.stopPropagation();
    if (ieApp.classList.contains("container__item__text--clicked")) {
        ieApp.classList.remove("container__item__text--clicked");
    }
    if (!ieOpen) {
        createIEApp(desktop);
        ieOpen = true;
    }
});

steApp.addEventListener("click", (event) => {
    const menuChild = document.getElementsByClassName("menu__container")[0];
    if (notepadAppText.classList.contains("container__item__text--clicked")) {
        notepadAppText.classList.remove("container__item__text--clicked");
    }
    if (ieApp.classList.contains("container__item__text--clicked")) {
        ieApp.classList.remove("container__item__text--clicked");
    }
    if (menuChild) {
        menuApp.removeChild(menuChild);
    }
    startBtn.src = "./assets/buttons-1.png";
    isMenuOpen = false;
    event.stopPropagation();
    steAppText.classList.add("container__item__text--clicked");
});

steApp.addEventListener("dblclick", (event) => {
    openedAppCounter = desktop.childElementCount;
    event.stopPropagation();
    if (steApp.classList.contains("container__item__text--clicked")) {
        steApp.classList.remove("container__item__text--clicked");
    }
    if (!steOpen) {
        createSolitaireApp(desktop);
        steOpen = true;
    }
});

desktop.addEventListener("click", () => {
    const menuChild = document.getElementsByClassName("menu__container")[0];
    if (notepadAppText.classList.contains("container__item__text--clicked")) {
        notepadAppText.classList.remove("container__item__text--clicked");
    }
    if (ieAppText.classList.contains("container__item__text--clicked")) {
        ieAppText.classList.remove("container__item__text--clicked");
    }
    if (steAppText.classList.contains("container__item__text--clicked")) {
        steAppText.classList.remove("container__item__text--clicked");
    }
    if (menuChild) {
        menuApp.removeChild(menuChild);
    }
    startBtn.src = "./assets/buttons-1.png";
    isMenuOpen = false;
});

const swapZIndex = (moveToFront, moveToBackOne, moveToBackTwo) => {
    if (moveToFront.length >= 1) {
        moveToFront[0].addEventListener("click", () => {
            if (moveToFront[0]) {
                moveToFront[0].style.zIndex = zIndexApp;
            }
            if (moveToBackOne.length >= 1) {
                moveToBackOne[0].style.zIndex = 0;
            }
            if (moveToBackTwo.length >= 1) {
                moveToBackTwo[0].style.zIndex = 0;
            }
        });
    }
};

// const mutationExitNPD = (mutationList) => {
//     for (const mutation of mutationList) {
//         if (mutation.type === "childList") {
//         }
//     }
// };
// const observer = new MutationObserver(mutationExitNPD);

// if (desktop.childElementCount >= 1) {
//     observer.observe(desktop, {
//         childList: true,
//         subtree: true,
//     });
// } else if (desktop.childElementCount < 1) {
//     observer.disconnect();
// }
// observer.disconnect();
setInterval(() => {
    if (exitButton.length >= 1) {
        exitButton[0].addEventListener("click", () => {
            if (document.querySelector(".container__notepad")) {
                desktop.removeChild(
                    document.querySelector(".container__notepad")
                );
                openedAppCounter--;
                notePadOpen = false;
            }
        });
    }
    if (exitButtonIE.length >= 1) {
        exitButtonIE[0].addEventListener("click", () => {
            if (document.querySelector(".container__ie")) {
                desktop.removeChild(document.querySelector(".container__ie"));
                openedAppCounter--;
                ieOpen = false;
            }
        });
    }
    if (exitButtonSTE.length >= 1) {
        exitButtonSTE[0].addEventListener("click", () => {
            if (document.querySelector(".container__ste")) {
                desktop.removeChild(document.querySelector(".container__ste"));
                openedAppCounter--;
                steOpen = false;
            }
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
    if (ieMenuItem.length >= 1) {
        ieMenuItem[0].addEventListener("click", () => {
            if (!ieOpen) {
                startBtn.src = "./assets/buttons-1.png";
                createIEApp(desktop);
                ieOpen = true;
                isMenuOpen = false;
                menuApp.removeChild(
                    document.getElementsByClassName("menu__container")[0]
                );
            }
        });
    }
    if (steMenuItem.length >= 1) {
        steMenuItem[0].addEventListener("click", () => {
            if (!steOpen) {
                startBtn.src = "./assets/buttons-1.png";
                createSolitaireApp(desktop);
                steOpen = true;
                isMenuOpen = false;
                menuApp.removeChild(
                    document.getElementsByClassName("menu__container")[0]
                );
            }
        });
    }
    swapZIndex(notepadZIndex, ieZIndex, steZIndex);
    swapZIndex(ieZIndex, notepadZIndex, steZIndex);
    swapZIndex(steZIndex, notepadZIndex, ieZIndex);
    let elem = document.querySelectorAll("img");
    elem.forEach((element) => {
        element.setAttribute("draggable", false);
    });
}, 1000);
