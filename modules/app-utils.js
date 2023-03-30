import {
    createHTMLElem,
    createHTMLElemMultiClass,
    createImgElemMultiClass,
    createImgElem,
    createPElem,
    createBtnElem,
    createLiElem,
} from "./create-elem-utils.js";

const createHeaderForApp = (headerDiv) => {
    createPElem("container__default__options__header__text", "File", headerDiv);
    createPElem("container__default__options__header__text", "Edit", headerDiv);
    createPElem("container__default__options__header__text", "View", headerDiv);
    createPElem(
        "container__default__options__header__text",
        "Favourites",
        headerDiv
    );
    createPElem(
        "container__default__options__header__text",
        "Tools",
        headerDiv
    );
    createPElem("container__default__options__header__text", "Help", headerDiv);
};

const createSearchPElem = (classAdd, text, textTwo, parentNode, spantext) => {
    const tagName = document.createElement("p");
    const tagTwo = document.createElement("span");
    tagTwo.appendChild(document.createTextNode(spantext));
    tagTwo.classList.add("bold__span");
    tagName.classList.add(classAdd);
    tagName.appendChild(document.createTextNode(text));
    tagName.appendChild(tagTwo);
    tagName.appendChild(document.createTextNode(textTwo));
    parentNode.appendChild(tagName);
    return tagName;
};

const createTopBarForApp = (container, imgLink, appName, exitClassName) => {
    const appHeader = createHTMLElem(
        "div",
        "container__default__header",
        container
    );
    const appHeaderIcons = createHTMLElem(
        "div",
        "container__default__header__icons",
        appHeader
    );
    createImgElem(
        "container__default__header__icons__img",
        `../assets/${imgLink}.png`,
        appHeaderIcons
    );
    createPElem(
        "container__default__header__icons__text",
        `${appName}`,
        appHeaderIcons
    );
    const appHeaderButtons = createHTMLElem(
        "div",
        "container__default__header__buttons",
        appHeader
    );
    createImgElem(
        "container__default__header__buttons__button",
        "../assets/minimize.png",
        appHeaderButtons
    );
    createImgElem(
        "container__default__header__buttons__button",
        "../assets/maximize.png",
        appHeaderButtons
    );
    createImgElemMultiClass(
        "container__default__header__buttons__button",
        `exit__button__${exitClassName}`,
        "../assets/exit.png",
        appHeaderButtons
    );
};

const createNotepadApp = (container, counter) => {
    const notepadContainer = createHTMLElemMultiClass(
        "div",
        "container__notepad",
        `container__notepad__${counter}`,
        container
    );
    notepadContainer.classList.add("container__default");
    createTopBarForApp(notepadContainer, "npad", "Untitled-Notepad", "npd");
    const notepadOptionsHeader = createHTMLElem(
        "div",
        "container__default__options__header",
        notepadContainer
    );
    createHeaderForApp(notepadOptionsHeader);
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
    createTopBarForApp(ieContainer, "ie", "Internet Explorer", "ie");
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
    createHeaderForApp(ieOptionsHeader);
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
    const googleSearchButton = createBtnElem(
        "container__ie__body__button",
        "Google Search",
        ieMainBtnContainer
    );
    googleSearchButton.classList.add("search__google");
    createBtnElem(
        "container__ie__body__button",
        "I'm Feeling Lucky",
        ieMainBtnContainer
    );
};

const createIESearchPage = (container, searchText) => {
    container.removeChild(document.querySelector(".container__ie__body"));
    const ieMainBody = createHTMLElem(
        "div",
        "container__ie__searchbody",
        container
    );
    const ieMainBodyTopContainer = createHTMLElem(
        "div",
        "container__ie__searchbody__topcont",
        ieMainBody
    );
    const ieMainBodyTop = createHTMLElem(
        "div",
        "container__ie__searchbody__top",
        ieMainBodyTopContainer
    );
    createImgElem(
        "container__ie__searchbody__top__logo",
        "../assets/google.png",
        ieMainBodyTop
    );
    const ieSearchBar = createHTMLElem(
        "div",
        "container__ie__searchbody__top__bar",
        ieMainBodyTop
    );
    createHTMLElem(
        "input",
        "container__ie__searchbody__top__search",
        ieSearchBar
    );
    const ieMainBodyBottom = createHTMLElem(
        "div",
        "container__ie__searchbody__bottom",
        ieMainBody
    );
    // createPElem(
    //     "container__ie__searchbody__bottom__text",
    //     "Your Search - ",
    //     ieMainBodyBottom
    // );
    // createPElem(
    //     "container__ie__searchbody__bottom__text",
    //     " - did not match any documents.",
    //     ieMainBodyBottom
    // );
    createSearchPElem(
        "container__ie__searchbody__bottom__text",
        "Your Search - ",
        " - did not match any documents.",
        ieMainBodyBottom,
        searchText
    );
    createPElem(
        "container__ie__searchbody__bottom__text",
        "Suggestions",
        ieMainBodyBottom
    );
    const suggestionsList = createHTMLElem(
        "ul",
        "container__ie__searchbody__bottom__text",
        ieMainBodyBottom
    );
    createLiElem(
        "container__ie__searchbody__bottom__text__list",
        "Make sure that all words are spelled correctly.",
        suggestionsList
    );
    createLiElem(
        "container__ie__searchbody__bottom__text__list",
        "Try different keywords.",
        suggestionsList
    );
    createLiElem(
        "container__ie__searchbody__bottom__text__list",
        "Try more general keywords.",
        suggestionsList
    );
};

const createSolitaireApp = (container) => {
    const solitaireContainer = createHTMLElem(
        "div",
        "container__ste",
        container
    );
    solitaireContainer.classList.add("container__default");
    createTopBarForApp(solitaireContainer, "solitaire", "Solitaire", "ste");

    const solitaireOptionsHeader = createHTMLElem(
        "div",
        "container__default__options__header",
        solitaireContainer
    );
    createPElem(
        "container__default__options__header__text",
        "Game",
        solitaireOptionsHeader
    );
    createPElem(
        "container__default__options__header__text",
        "Help",
        solitaireOptionsHeader
    );
    createImgElem(
        "container__ste__body__img",
        "../assets/solitaireImg.png",
        solitaireContainer
    );
};

export {
    createNotepadApp,
    createIEApp,
    createSolitaireApp,
    createIESearchPage,
};
