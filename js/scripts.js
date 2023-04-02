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
    createIESearchPage,
    goBackHandler,
} from "../modules/app-utils.js";

const startBtn = document.querySelector(".taskbar__start__button");
const menuApp = document.querySelector(".menu");
const desktop = document.querySelector(".container");

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

const ieSearchButton = document.getElementsByClassName("search__google");
const ieSearchPageSearch = document.getElementsByClassName(
    "container__ie__searchbody__top__search"
);

const ieSearch = document.getElementsByClassName("container__ie__body__search");
const steApp = document.querySelector(".app__ste");
const steAppText = document.querySelector(".app__ste__item__text");
const steMenuItem = document.getElementsByClassName(
    "menu__mid__contents__left__item__ste"
);

const goBackIE = document.getElementsByClassName(
    "container__default__options__subheaderback"
);
const goBackIEActive = document.getElementsByClassName(
    "container__default__options__subheaderback--on"
);

const exitButton = document.getElementsByClassName("exit__button__npd");
const exitButtonIE = document.getElementsByClassName("exit__button__ie");
const exitButtonSTE = document.getElementsByClassName("exit__button__ste");

const notepadZIndex = document.getElementsByClassName("container__notepad");
const ieZIndex = document.getElementsByClassName("container__ie");
const steZIndex = document.getElementsByClassName("container__ste");

let isMenuOpen = false;
let notePadOpen = false;
let ieOpen = false;
let steOpen = false;
let counterNotepad = 0;
let zIndexApp = 2;

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

const ieGoBack = () => {
    if (ieSearchButton.length >= 1) {
        ieSearchButton[0].addEventListener("click", () => {
            if (ieSearch[0] !== undefined && ieSearch[0].value !== "") {
                const searchHeaderText = document.querySelector(
                    ".container__default__options__subheader__addressbar__bar"
                );
                const textVal = ieSearch[0].value;
                searchHeaderText.value = `https://www.google.com/search?q=${ieSearch[0].value}`;
                createIESearchPage(
                    document.querySelector(".container__ie"),
                    textVal
                );
                if (ieSearchPageSearch[0] && textVal !== undefined) {
                    ieSearchPageSearch[0].value = textVal;
                    ieChangeAddressBar();
                }
                if (goBackIE[0]) {
                    goBackIE[0].classList.add(
                        "container__default__options__subheaderback--on"
                    );
                    if (goBackIEActive.length >= 1) {
                        goBackIEActive[0].addEventListener("click", () => {
                            goBackHandler(
                                document.querySelector(".container__ie")
                            );
                            goBackIE[0].classList.remove(
                                "container__default__options__subheaderback--on"
                            );
                        });
                    }
                }
            }
        });
    }
};

const ieChangeAddressBar = () => {
    if (ieSearchPageSearch.length >= 1) {
        ieSearchPageSearch[0].addEventListener("keydown", (e) => {
            if (e.code === "Enter") {
                if (ieSearchPageSearch[0].value !== "") {
                    const searchHeaderText = document.querySelector(
                        ".container__default__options__subheader__addressbar__bar"
                    );
                    searchHeaderText.value = `https://www.google.com/search?q=${ieSearchPageSearch[0].value}`;
                    document.querySelector(".bold__span").textContent =
                        ieSearchPageSearch[0].value;
                    if (goBackIE[0]) {
                        goBackIE[0].classList.add(
                            "container__default__options__subheaderback--on"
                        );
                    }
                }
            }
        });
    }
};

const closeApp = (exitButtonName, appClassName) => {
    if (exitButtonName.length >= 1) {
        exitButtonName[0].addEventListener("click", () => {
            if (document.querySelector(appClassName)) {
                desktop.removeChild(document.querySelector(appClassName));
                switch (appClassName) {
                    case ".container__ie":
                        ieOpen = false;
                    case ".container__ste":
                        steOpen = false;
                }
            }
        });
    }
};

startBtn.addEventListener("click", () => {
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
        if (notepadMenuItem.length >= 1) {
            notepadMenuItem[0].addEventListener("click", () => {
                if (!notePadOpen) {
                    startBtn.src = "./assets/buttons-1.png";
                    counterNotepad = createNotepadApp(desktop, counterNotepad);
                    notePadOpen = true;
                    isMenuOpen = false;
                    closeApp(exitButton, ".container__notepad");
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
                    closeApp(exitButtonIE, ".container__ie");
                    ieGoBack();
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
                    closeApp(exitButtonSTE, ".container__ste");
                    menuApp.removeChild(
                        document.getElementsByClassName("menu__container")[0]
                    );
                }
            });
        }
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
    event.stopPropagation();
    if (notepadAppText.classList.contains("container__item__text--clicked")) {
        notepadAppText.classList.remove("container__item__text--clicked");
    }
    if (!notePadOpen) {
        counterNotepad = createNotepadApp(desktop, counterNotepad);
        notePadOpen = true;
        closeApp(exitButton, ".container__notepad");
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
    event.stopPropagation();
    if (ieAppText.classList.contains("container__item__text--clicked")) {
        ieAppText.classList.remove("container__item__text--clicked");
    }
    if (!ieOpen) {
        createIEApp(desktop);
        ieOpen = true;
        ieGoBack();
        closeApp(exitButtonIE, ".container__ie");
    }
});

steApp.addEventListener("click", (event) => {
    const menuChild = document.getElementsByClassName("menu__container")[0];
    if (notepadAppText.classList.contains("container__item__text--clicked")) {
        notepadAppText.classList.remove("container__item__text--clicked");
    }
    if (ieAppText.classList.contains("container__item__text--clicked")) {
        ieAppText.classList.remove("container__item__text--clicked");
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
    event.stopPropagation();
    if (steAppText.classList.contains("container__item__text--clicked")) {
        steAppText.classList.remove("container__item__text--clicked");
    }
    if (!steOpen) {
        createSolitaireApp(desktop);
        steOpen = true;
        closeApp(exitButtonSTE, ".container__ste");
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

setInterval(() => {
    swapZIndex(notepadZIndex, ieZIndex, steZIndex);
    swapZIndex(ieZIndex, notepadZIndex, steZIndex);
    swapZIndex(steZIndex, ieZIndex, notepadZIndex);
    let elem = document.querySelectorAll("img");
    elem.forEach((element) => {
        element.setAttribute("draggable", false);
    });
}, 1500);
