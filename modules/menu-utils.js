import {
    createHTMLElem,
    createImgElem,
    createPElem,
} from "./create-elem-utils.js";

const createMenuHeaderHtml = (container) => {
    const menuHeader = createHTMLElem("div", "menu__header", container);
    const menuHeaderContents = createHTMLElem(
        "div",
        "menu__header__contents",
        menuHeader
    );
    createImgElem(
        "menu__header__image",
        "../assets/ball.jpg",
        menuHeaderContents
    );
    createPElem("menu__header__user", "USER", menuHeaderContents);
};

const createMenuFooterHtml = (container) => {
    const menuFooter = createHTMLElem("div", "menu__footer", container);
    const menuFooterContents = createHTMLElem(
        "div",
        "menu__footer__contents",
        menuFooter
    );
    const menuFooterContentsItemLogout = createHTMLElem(
        "div",
        "menu__footer__contents__item",
        menuFooterContents
    );
    createImgElem(
        "menu__footer__contents__item__image",
        "../assets/logout.png",
        menuFooterContentsItemLogout
    );
    createPElem(
        "menu__footer__contents__item__text",
        "Logout",
        menuFooterContentsItemLogout
    );
    const menuFooterContentsItemPower = createHTMLElem(
        "div",
        "menu__footer__contents__item",
        menuFooterContents
    );
    createImgElem(
        "menu__footer__contents__item__image",
        "../assets/power.png",
        menuFooterContentsItemPower
    );
    createPElem(
        "menu__footer__contents__item__text",
        "Turn Off Computer",
        menuFooterContentsItemPower
    );
};

export { createMenuHeaderHtml, createMenuFooterHtml };
