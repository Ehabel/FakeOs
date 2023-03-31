import {
    createHTMLElem,
    createHTMLElemMultiClass,
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
        "./assets/ball.jpg",
        menuHeaderContents
    );
    createPElem("menu__header__user", "USER", menuHeaderContents);
};

const createMenuMidItemHtml = (container, src, text) => {
    const menuMidContentsLeftItem = createHTMLElem(
        "div",
        "menu__mid__contents__left__item",
        container
    );
    createImgElem(
        "menu__mid__contents__left__item__image",
        src,
        menuMidContentsLeftItem
    );
    createPElem(
        "menu__mid__contents__left__item__text",
        text,
        menuMidContentsLeftItem
    );
};

const createMenuMidItemClickable = (container, src, text, appName) => {
    const menuMidContentsLeftItem = createHTMLElemMultiClass(
        "div",
        "menu__mid__contents__left__item",
        `menu__mid__contents__left__item__${appName}`,
        container
    );
    createImgElem(
        "menu__mid__contents__left__item__image",
        src,
        menuMidContentsLeftItem
    );
    createPElem(
        "menu__mid__contents__left__item__text",
        text,
        menuMidContentsLeftItem
    );
};

const createMenuMidRightItemHtml = (container, src, text) => {
    const menuMidContentsLeftItem = createHTMLElem(
        "div",
        "menu__mid__contents__right__item",
        container
    );
    createImgElem(
        "menu__mid__contents__right__item__image",
        src,
        menuMidContentsLeftItem
    );
    createPElem(
        "menu__mid__contents__right__item__text",
        text,
        menuMidContentsLeftItem
    );
};

const createMenuMidItemHtmlAll = (container, src, text) => {
    const menuMidContentsLeftAll = createHTMLElem(
        "div",
        "menu__mid__contents__left__all",
        container
    );
    createPElem(
        "menu__mid__contents__left__all__text",
        text,
        menuMidContentsLeftAll
    );
    createImgElem(
        "menu__mid__contents__left__all__image",
        src,
        menuMidContentsLeftAll
    );
};

const createMenuLeft = (container, leftMenuItem, LeftMenuName) => {
    for (let i = 0; i < leftMenuItem.length; i++) {
        createMenuMidItemHtml(
            container,
            `./assets/${leftMenuItem[i]}.png`,
            `${LeftMenuName[i]}`
        );
    }
};

const createMenuRight = (container, rightMenuItem, rightMenuName) => {
    for (let i = 0; i < rightMenuItem.length; i++) {
        createMenuMidRightItemHtml(
            container,
            `./assets/${rightMenuItem[i]}.png`,
            `${rightMenuName[i]}`
        );
    }
};

const createMenuMidHtml = (container) => {
    const menuMid = createHTMLElem("div", "menu__mid", container);
    const menuMidContents = createHTMLElem(
        "div",
        "menu__mid__contents",
        menuMid
    );
    createHTMLElem("div", "menu__mid__contents__orange__sep", menuMidContents);
    const menuMidContentsLeft = createHTMLElem(
        "div",
        "menu__mid__contents__left",
        menuMidContents
    );
    createMenuMidItemClickable(
        menuMidContentsLeft,
        "./assets/ie.png",
        "Internet Explorer",
        "ie"
    );
    createMenuMidItemClickable(
        menuMidContentsLeft,
        "./assets/solitaire.png",
        "Solitaire",
        "ste"
    );
    createHTMLElem(
        "div",
        "menu__mid__contents__left__separator",
        menuMidContentsLeft
    );
    createMenuMidItemClickable(
        menuMidContentsLeft,
        "./assets/npad.png",
        "Notepad",
        "notepad"
    );
    createMenuLeft(
        menuMidContentsLeft,
        ["cmd", "MSN", "wmp", "wmsg", "cal"],
        [
            "Command Prompt",
            "MSN",
            "Windows Media Player",
            "Windows Messenger",
            "Calculator",
        ]
    );
    createHTMLElemMultiClass(
        "div",
        "menu__mid__contents__left__separator",
        "menu__mid__contents__left__separator__two",
        menuMidContentsLeft
    );
    createMenuMidItemHtmlAll(
        menuMidContentsLeft,
        "./assets/allpgms.ico",
        "All Programs"
    );
    const menuMidContentsRight = createHTMLElem(
        "div",
        "menu__mid__contents__right",
        menuMidContents
    );
    createMenuRight(
        menuMidContentsRight,
        ["mydocs", "recentdocs", "mypics", "mymusic", "mypc"],
        [
            "My Documents",
            "My Recent Documents",
            "My Pictures",
            "My Music",
            "My Computer",
        ]
    );
    createHTMLElem(
        "div",
        "menu__mid__contents__right__separator",
        menuMidContentsRight
    );
    createMenuRight(
        menuMidContentsRight,
        ["ctrlpnl", "default", "netconn", "printfax"],
        [
            "Control Panel",
            "Set Program Access and Defaults",
            "Connect to",
            "Printers and Faxes",
        ]
    );
    createHTMLElem(
        "div",
        "menu__mid__contents__right__separator",
        menuMidContentsRight
    );
    createMenuRight(
        menuMidContentsRight,
        ["help", "search", "run"],
        ["Help and Support", "Search", "Run..."]
    );
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
        "./assets/Logout.png",
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
        "./assets/Power.png",
        menuFooterContentsItemPower
    );
    createPElem(
        "menu__footer__contents__item__text",
        "Turn Off Computer",
        menuFooterContentsItemPower
    );
};

export { createMenuHeaderHtml, createMenuMidHtml, createMenuFooterHtml };
