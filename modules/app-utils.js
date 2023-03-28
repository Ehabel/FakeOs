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
    const notepadHeader = createHTMLElem(
        "div",
        "container__notepad__header",
        notepadContainer
    );
    const notepadHeaderIcons = createHTMLElem(
        "div",
        "container__notepad__header__icons",
        notepadHeader
    );
    createImgElem(
        "container__notepad__header__icons__img",
        "../assets/npad.png",
        notepadHeaderIcons
    );
    createPElem(
        "container__notepad__header__icons__text",
        "Untitled-Notepad",
        notepadHeaderIcons
    );
    const notepadOptionsHeader = createHTMLElem(
        "div",
        "container__notepad__options__header",
        notepadContainer
    );
    createPElem(
        "container__notepad__options__header__text",
        "File",
        notepadOptionsHeader
    );
    createPElem(
        "container__notepad__options__header__text",
        "Edit",
        notepadOptionsHeader
    );
    createPElem(
        "container__notepad__options__header__text",
        "Format",
        notepadOptionsHeader
    );
    createPElem(
        "container__notepad__options__header__text",
        "View",
        notepadOptionsHeader
    );
    createPElem(
        "container__notepad__options__header__text",
        "Help",
        notepadOptionsHeader
    );
    const notepadHeaderButtons = createHTMLElem(
        "div",
        "container__notepad__header__buttons",
        notepadHeader
    );
    createImgElem(
        "container__notepad__header__buttons__button",
        "../assets/minimize.png",
        notepadHeaderButtons
    );
    createImgElem(
        "container__notepad__header__buttons__button",
        "../assets/maximize.png",
        notepadHeaderButtons
    );
    createImgElemMultiClass(
        "container__notepad__header__buttons__button",
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

export { createNotepadApp };
