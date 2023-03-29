import {
    createHTMLElem,
    createHTMLElemMultiClass,
    createImgElemMultiClass,
    createImgElem,
    createPElem,
    createBtnElem,
} from "./create-elem-utils.js";

const createNotepadApp = (container, counter) => {
    const notepadContainer = createHTMLElemMultiClass(
        "div",
        "container__notepad",
        `container__notepad__${counter}`,
        container
    );
    notepadContainer.classList.add("container__default");
    const notepadHeader = createHTMLElem(
        "div",
        "container__default__header",
        notepadContainer
    );
    const notepadHeaderIcons = createHTMLElem(
        "div",
        "container__default__header__icons",
        notepadHeader
    );
    createImgElem(
        "container__default__header__icons__img",
        "../assets/npad.png",
        notepadHeaderIcons
    );
    createPElem(
        "container__default__header__icons__text",
        "Untitled-Notepad",
        notepadHeaderIcons
    );
    const notepadOptionsHeader = createHTMLElem(
        "div",
        "container__default__options__header",
        notepadContainer
    );
    createPElem(
        "container__default__options__header__text",
        "File",
        notepadOptionsHeader
    );
    createPElem(
        "container__default__options__header__text",
        "Edit",
        notepadOptionsHeader
    );
    createPElem(
        "container__default__options__header__text",
        "Format",
        notepadOptionsHeader
    );
    createPElem(
        "container__default__options__header__text",
        "View",
        notepadOptionsHeader
    );
    createPElem(
        "container__default__options__header__text",
        "Help",
        notepadOptionsHeader
    );
    const notepadHeaderButtons = createHTMLElem(
        "div",
        "container__default__header__buttons",
        notepadHeader
    );
    createImgElem(
        "container__default__header__buttons__button",
        "../assets/minimize.png",
        notepadHeaderButtons
    );
    createImgElem(
        "container__default__header__buttons__button",
        "../assets/maximize.png",
        notepadHeaderButtons
    );
    createImgElemMultiClass(
        "container__default__header__buttons__button",
        "exit__button",
        "../assets/exit.png",
        notepadHeaderButtons
    );
    const textWrapper = createHTMLElem(
        "div",
        "container__notepad__textWrapper",
        notepadContainer
    );
    const textArea = createHTMLElem(
        "textarea",
        "container__notepad__textarea",
        textWrapper
    );
    textArea.rows = "20";
    textArea.cols = "100";
    counter++;
    return counter;
};

const createIEAppHeader = (ieContainer) => {
    const ieHeader = createHTMLElem(
        "div",
        "container__default__header",
        ieContainer
    );
    const ieHeaderIcons = createHTMLElem(
        "div",
        "container__default__header__icons",
        ieHeader
    );
    createImgElem(
        "container__default__header__icons__img",
        "../assets/ie.png",
        ieHeaderIcons
    );
    createPElem(
        "container__default__header__icons__text",
        "Internet Explorer",
        ieHeaderIcons
    );
    const ieHeaderOptions = createHTMLElem(
        "div",
        "container__default__options",
        ieContainer
    );
    const ieOptionsHeader = createHTMLElem(
        "div",
        "container__default__options__header",
        ieHeaderOptions
    );
    createPElem(
        "container__default__options__header__text",
        "File",
        ieOptionsHeader
    );
    createPElem(
        "container__default__options__header__text",
        "Edit",
        ieOptionsHeader
    );
    createPElem(
        "container__default__options__header__text",
        "View",
        ieOptionsHeader
    );
    createPElem(
        "container__default__options__header__text",
        "Favourites",
        ieOptionsHeader
    );
    createPElem(
        "container__default__options__header__text",
        "Tools",
        ieOptionsHeader
    );
    createPElem(
        "container__default__options__header__text",
        "Help",
        ieOptionsHeader
    );

    const ieHeaderButtons = createHTMLElem(
        "div",
        "container__default__header__buttons",
        ieHeader
    );
    createImgElem(
        "container__default__header__buttons__button",
        "../assets/minimize.png",
        ieHeaderButtons
    );
    createImgElem(
        "container__default__header__buttons__button",
        "../assets/maximize.png",
        ieHeaderButtons
    );
    createImgElemMultiClass(
        "container__default__header__buttons__button",
        "exit__button__ie",
        "../assets/exit.png",
        ieHeaderButtons
    );
    createHTMLElem(
        "div",
        "container__default__options__border",
        ieHeaderOptions
    );
    const ieOptionssubheader = createHTMLElem(
        "div",
        "container__default__options__subheader",
        ieHeaderOptions
    );
    const ieOptionssubheaderBack = createHTMLElem(
        "div",
        "container__default__options__subheaderback",
        ieOptionssubheader
    );
    createImgElem(
        "container__default__options__subheader__other__button",
        "../assets/ie/back.png",
        ieOptionssubheaderBack
    );
    createPElem(
        "container__default__options__subheader__text",
        "Back",
        ieOptionssubheaderBack
    );
    createHTMLElemMultiClass(
        "div",
        "container__default__options__subheader__text",
        "arrow__down",
        ieOptionssubheaderBack
    );
    const ieOptionssubheaderForward = createHTMLElem(
        "div",
        "container__default__options__subheaderforward",
        ieOptionssubheader
    );
    createImgElem(
        "container__default__options__subheader__other__button",
        "../assets/ie/forward.png",
        ieOptionssubheaderForward
    );
    createHTMLElemMultiClass(
        "div",
        "container__default__options__subheader__text",
        "arrow__down",
        ieOptionssubheaderForward
    );
    createImgElem(
        "container__default__options__subheader__button",
        "../assets/ie/ieStop.png",
        ieOptionssubheader
    );
    createImgElem(
        "container__default__options__subheader__button",
        "../assets/ie/ieRefresh.png",
        ieOptionssubheader
    );
    createImgElem(
        "container__default__options__subheader__button",
        "../assets/ie/ieHome.png",
        ieOptionssubheader
    );
    createHTMLElem(
        "div",
        "container__default__options__subheader__separator",
        ieOptionssubheader
    );
    const ieOptionssubheaderSearch = createHTMLElem(
        "div",
        "container__default__options__subheaderother",
        ieOptionssubheader
    );
    createImgElem(
        "container__default__options__subheader__other__button",
        "../assets/search.png",
        ieOptionssubheaderSearch
    );
    createPElem(
        "container__default__options__subheader__text",
        "Search",
        ieOptionssubheaderSearch
    );
    const ieOptionssubheaderFavourites = createHTMLElem(
        "div",
        "container__default__options__subheaderother",
        ieOptionssubheader
    );
    createImgElem(
        "container__default__options__subheader__other__button",
        "../assets/ie/favorites.png",
        ieOptionssubheaderFavourites
    );
    createPElem(
        "container__default__options__subheader__text",
        "Favorites",
        ieOptionssubheaderFavourites
    );
    createHTMLElem(
        "div",
        "container__default__options__subheader__separator",
        ieOptionssubheader
    );

    createHTMLElem(
        "div",
        "container__default__options__border",
        ieHeaderOptions
    );
    const addressBar = createHTMLElem(
        "div",
        "container__default__options__subheader__addressbar",
        ieHeaderOptions
    );
    createPElem(
        "container__default__options__subheader__addressbar__text",
        "Address",
        addressBar
    );
    const searchBar = createHTMLElem(
        "input",
        "container__default__options__subheader__addressbar__bar",
        addressBar
    );
    searchBar.value = "https://www.google.com";
    createHTMLElem(
        "div",
        "container__default__options__border",
        ieHeaderOptions
    );
};

const createIEApp = (container) => {
    const ieContainer = createHTMLElem("div", "container__ie", container);
    ieContainer.classList.add("container__default");
    createIEAppHeader(ieContainer);
    const ieMainBody = createHTMLElem(
        "div",
        "container__ie__body",
        ieContainer
    );
    createImgElem(
        "container__ie__body__logo",
        "../assets/google.png",
        ieMainBody
    );
    createHTMLElem("input", "container__ie__body__search", ieMainBody);
    const ieMainBtnContainer = createHTMLElem(
        "div",
        "container__ie__body__btnContainer",
        ieMainBody
    );
    createBtnElem(
        "container__ie__body__button",
        "Google Search",
        ieMainBtnContainer
    );
    createBtnElem(
        "container__ie__body__button",
        "I'm Feeling Lucky",
        ieMainBtnContainer
    );
};

export { createNotepadApp, createIEApp };
