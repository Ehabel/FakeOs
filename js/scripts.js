const startBtn = document.querySelector(".taskbar__start__button");
const menuApp = document.querySelector(".menu");
let isMenuOpen = false;
const menuHTML = `
<div class="menu__header">
<div class="menu__header__contents">
    <img
        src="./assets/ball.jpg"
        class="menu__header__image"
    />
    <p class="menu__header__user">USER</p>
</div>
</div>
<div class="menu__mid">
<div class="menu__mid__contents">
<div class="menu__mid__contents__orange__sep"></div>
    <div class="menu__mid__contents__left">
        <div class="menu__mid__contents__left__item">
            <img
                src="./assets/ie.png"
                class="menu__mid__contents__left__item__image"
            />
            <p
                class="menu__mid__contents__left__item__text"
            >
                Internet Explorer
            </p>
        </div>
        <div class="menu__mid__contents__left__item">
            <img
                src="./assets/email.png"
                class="menu__mid__contents__left__item__image"
            />
            <p
                class="menu__mid__contents__left__item__text"
            >
                Email
            </p>
        </div>
        <div class="menu__mid__contents__left__separator"></div>
        <div class="menu__mid__contents__left__item">
            <img
                src="./assets/cmd.png"
                class="menu__mid__contents__left__item__image"
            />
            <p
                class="menu__mid__contents__left__item__text"
            >
                Command Prompt
            </p>
        </div>
        <div class="menu__mid__contents__left__item">
            <img
                src="./assets/MSN.png"
                class="menu__mid__contents__left__item__image"
            />
            <p
                class="menu__mid__contents__left__item__text"
            >
                MSN
            </p>
        </div>
        <div class="menu__mid__contents__left__item">
            <img
                src="./assets/wmp.png"
                class="menu__mid__contents__left__item__image"
            />
            <p
                class="menu__mid__contents__left__item__text"
            >
                Windows Media Player
            </p>
        </div>
        <div class="menu__mid__contents__left__item">
            <img
                src="./assets/wmsg.png"
                class="menu__mid__contents__left__item__image"
            />
            <p
                class="menu__mid__contents__left__item__text"
            >
                Windows Messenger
            </p>
        </div>
        <div class="menu__mid__contents__left__item">
            <img
                src="./assets/npad.png"
                class="menu__mid__contents__left__item__image"
            />
            <p
                class="menu__mid__contents__left__item__text"
            >
                Notepad
            </p>
        </div>
        <div class="menu__mid__contents__left__item">
            <img
                src="./assets/cal.png"
                class="menu__mid__contents__left__item__image"
            />
            <p
                class="menu__mid__contents__left__item__text"
            >
                Calculator
            </p>
        </div>
        <div class="menu__mid__contents__left__separator menu__mid__contents__left__separator__two"></div>
        <div class="menu__mid__contents__left__all">
            <p
                class="menu__mid__contents__left__all__text"
            >
                All programs
            </p>    
            <img
                src="./assets/allpgms.ico"
                class="menu__mid__contents__left__all__image"
            />
        </div>
    </div>
    <div class="menu__mid__contents__right">
        <div class="menu__mid__contents__right__item">
            <img
                src="./assets/mydocs.png"
                class="menu__mid__contents__right__item__image"
            />
            <p
                class="menu__mid__contents__right__item__text"
            >
                My documents
            </p>
        </div>
        <div class="menu__mid__contents__right__item">
            <img
                src="./assets/recentdocs.png"
                class="menu__mid__contents__right__item__image"
            />
            <p
                class="menu__mid__contents__right__item__text"
            >
                My Recent documents
            </p>
        </div>
        <div class="menu__mid__contents__right__item">
            <img
                src="./assets/mypics.png"
                class="menu__mid__contents__right__item__image"
            />
            <p
                class="menu__mid__contents__right__item__text"
            >
                My Pictures
            </p>
        </div>
        <div class="menu__mid__contents__right__item">
            <img
                src="./assets/mymusic.png"
                class="menu__mid__contents__right__item__image"
            />
            <p
                class="menu__mid__contents__right__item__text"
            >
                My Music
            </p>
        </div>
        <div class="menu__mid__contents__right__item">
            <img
                src="./assets/mypc.png"
                class="menu__mid__contents__right__item__image"
            />
            <p
                class="menu__mid__contents__right__item__text"
            >
                My Computer
            </p>
        </div>
        <div class="menu__mid__contents__right__separator"></div>
        <div class="menu__mid__contents__right__item">
            <img
                src="./assets/ctrlpnl.png"
                class="menu__mid__contents__right__item__image"
            />
            <p
                class="menu__mid__contents__right__item__text"
            >
                Control Panel
            </p>
        </div>
        <div class="menu__mid__contents__right__item">
            <img
                src="./assets/default.png"
                class="menu__mid__contents__right__item__image"
            />
            <p
                class="menu__mid__contents__right__item__text"
            >
                Set Program Access and Defaults
            </p>
        </div>
        <div class="menu__mid__contents__right__item">
            <img
                src="./assets/netconn.png"
                class="menu__mid__contents__right__item__image"
            />
            <p
                class="menu__mid__contents__right__item__text"
            >
                Connect to
            </p>
        </div>
        <div class="menu__mid__contents__right__item">
            <img
                src="./assets/printfax.png"
                class="menu__mid__contents__right__item__image"
            />
            <p
                class="menu__mid__contents__right__item__text"
            >
                Printers and Faxes
            </p>
        </div>
        <div class="menu__mid__contents__right__separator"></div>
        <div class="menu__mid__contents__right__item">
            <img
                src="./assets/help.png"
                class="menu__mid__contents__right__item__image"
            />
            <p
                class="menu__mid__contents__right__item__text"
            >
                Help and Support
            </p>
        </div>
        <div class="menu__mid__contents__right__item">
            <img
                src="./assets/search.png"
                class="menu__mid__contents__right__item__image"
            />
            <p
                class="menu__mid__contents__right__item__text"
            >
                Search
            </p>
        </div>
        <div class="menu__mid__contents__right__item">
            <img
                src="./assets/run.png"
                class="menu__mid__contents__right__item__image"
            />
            <p
                class="menu__mid__contents__right__item__text"
            >
                Run...
            </p>
        </div>
    </div>
</div>
</div>
<div class="menu__footer">
<div class="menu__footer__contents">
<div class="menu__footer__contents__item">
        <img
            src="./assets/logout.png"
            class="menu__footer__contents__item__image"
        />
        <p
            class="menu__footer__contents__item__text"
        >
            Logout
        </p>
    </div>
    <div class="menu__footer__contents__item">
        <img
            src="./assets/power.png"
            class="menu__footer__contents__item__image"
        />
        <p
            class="menu__footer__contents__item__text"
        >
            Turn Off Computer
        </p>
    </div>
</div>
</div>`;

function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let AmOrPm = hours >= 12 ? "pm" : "am";
    let time = `${hours % 12}:${("0" + now.getMinutes()).slice(-2)} ${AmOrPm}`;
    document.querySelector(".taskbar__time").textContent = time;
    setTimeout(updateClock, 1000);
}
updateClock();

const createMenuHTML = () => {
    const divTag = document.createElement("div");
    divTag.classList.add("menu__container");
    menuApp.appendChild(divTag);
    const menuChild = document.getElementsByClassName("menu__container")[0];
    menuChild.innerHTML += menuHTML;
};

startBtn.addEventListener("click", () => {
    const menuChild = document.getElementsByClassName("menu__container")[0];
    // menuApp.classList.toggle("menu--show");
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
