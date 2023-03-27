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
        "../assets/ball.jpg",
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
    createMenuMidItemHtml(
        menuMidContentsLeft,
        "../assets/ie.png",
        "Internet Explorer"
    );
    createMenuMidItemHtml(menuMidContentsLeft, "../assets/email.png", "Email");
    createHTMLElem(
        "div",
        "menu__mid__contents__left__separator",
        menuMidContentsLeft
    );
    createMenuMidItemHtml(
        menuMidContentsLeft,
        "../assets/cmd.png",
        "Command Prompt"
    );
    createMenuMidItemHtml(menuMidContentsLeft, "../assets/MSN.png", "MSN");
    createMenuMidItemHtml(
        menuMidContentsLeft,
        "../assets/wmp.png",
        "Windows Media Player"
    );
    createMenuMidItemHtml(
        menuMidContentsLeft,
        "../assets/wmsg.png",
        "Windows Messenger"
    );
    createMenuMidItemHtml(menuMidContentsLeft, "../assets/npad.png", "Notepad");
    createMenuMidItemHtml(
        menuMidContentsLeft,
        "../assets/cal.png",
        "Calculator"
    );
    createHTMLElemMultiClass(
        "div",
        "menu__mid__contents__left__separator",
        "menu__mid__contents__left__separator__two",
        menuMidContentsLeft
    );
    createMenuMidItemHtmlAll(
        menuMidContentsLeft,
        "../assets/allpgms.ico",
        "All Programs"
    );
    const menuMidContentsRight = createHTMLElem(
        "div",
        "menu__mid__contents__right",
        menuMidContents
    );
    createMenuMidRightItemHtml(
        menuMidContentsRight,
        "../assets/mydocs.png",
        "My Documents"
    );
    createMenuMidRightItemHtml(
        menuMidContentsRight,
        "../assets/recentdocs.png",
        "My Recent Documents"
    );
    createMenuMidRightItemHtml(
        menuMidContentsRight,
        "../assets/mypics.png",
        "My Pictures"
    );
    createMenuMidRightItemHtml(
        menuMidContentsRight,
        "../assets/mymusic.png",
        "My Music"
    );
    createMenuMidRightItemHtml(
        menuMidContentsRight,
        "../assets/mypc.png",
        "My Computer"
    );
    createHTMLElem(
        "div",
        "menu__mid__contents__right__separator",
        menuMidContentsRight
    );
    createMenuMidRightItemHtml(
        menuMidContentsRight,
        "../assets/ctrlpnl.png",
        "Control Panel"
    );
    createMenuMidRightItemHtml(
        menuMidContentsRight,
        "../assets/default.png",
        "Set Program Access and Defaults"
    );
    createMenuMidRightItemHtml(
        menuMidContentsRight,
        "../assets/netconn.png",
        "Connect to"
    );
    createMenuMidRightItemHtml(
        menuMidContentsRight,
        "../assets/printfax.png",
        "Printers and Faxes"
    );
    createHTMLElem(
        "div",
        "menu__mid__contents__right__separator",
        menuMidContentsRight
    );
    createMenuMidRightItemHtml(
        menuMidContentsRight,
        "../assets/help.png",
        "Help and Support"
    );
    createMenuMidRightItemHtml(
        menuMidContentsRight,
        "../assets/search.png",
        "Search"
    );
    createMenuMidRightItemHtml(
        menuMidContentsRight,
        "../assets/run.png",
        "Run..."
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

export { createMenuHeaderHtml, createMenuMidHtml, createMenuFooterHtml };
