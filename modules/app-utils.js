import {
    createHTMLElem,
    createHTMLElemMultiClass,
    createImgElemMultiClass,
    createImgElem,
    createPElem,
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

const createIEApp = (container) => {
    const ieContainer = createHTMLElem("div", "container__ie", container);
    ieContainer.classList.add("container__default");
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
    const ieOptionsHeader = createHTMLElem(
        "div",
        "container__default__options__header",
        ieContainer
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
};

export { createNotepadApp, createIEApp };
