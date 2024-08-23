"use strict";

let isMenuOpen = false;

function updateHTML() {
    if (window.innerWidth <= 1039) {
        document.querySelector("main > img").src = "./images/image-hero-mobile.png";
        if (window.innerWidth <= 860) {
            document.querySelector("#menu-button").hidden = false;
            if (isMenuOpen == true) {
                document.body.className = "dimmed";
            }
        }
        else {
            document.querySelector("#menu-button").hidden = true;
            document.body.className = "";
        }
    }
    else {
        document.querySelector("main > img").src = "./images/image-hero-desktop.png";
        document.querySelector("#menu-button").hidden = true;
    }
}

updateHTML();
window.addEventListener("resize", updateHTML);

document.querySelector("#menu-button").addEventListener("click", () => {
    if (isMenuOpen == false) {
        document.body.className = "dimmed";
        document.querySelector("#menu-button").src = "./images/icon-close-menu.svg";
        document.querySelector("#menu-button").alt = "close menu button";
        document.querySelector("header div").style = "display: block;";
        isMenuOpen = true;
    }
    else {
        document.querySelector("header div").style = "";
        document.querySelector("#menu-button").src = "./images/icon-menu.svg";
        document.querySelector("#menu-button").alt = "menu button";
        document.body.className = "";
        isMenuOpen = false;
    }
});


for (const dropdown of document.querySelectorAll(".dropdown")) {
    let isOpen = false;
    dropdown.addEventListener("click", (event) => {
        if (event.target != dropdown) {
            return;
        }
        if (isOpen == false) {
            dropdown.firstElementChild.src = "./images/icon-arrow-up.svg";
            dropdown.firstElementChild.alt = "upwards arrow";
            dropdown.lastElementChild.style = "display: flex;";
            isOpen = true;
        }
        else {
            dropdown.lastElementChild.style = "";
            dropdown.firstElementChild.src = "./images/icon-arrow-down.svg";
            dropdown.firstElementChild.alt = "downwards arrow";
            isOpen = false;
        }
    });
}