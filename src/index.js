import "./styles.css";
import loadHome from "./scripts/home.js";
import loadMenu from "./scripts/menu.js";
import loadAbout from "./scripts/about.js";

function setActiveButton(activeButton) {
    const buttons = document.querySelectorAll("nav button, footer Button");
    buttons.forEach((button) => button.classList.remove("active"));
    if (activeButton) activeButton.classList.add("active");
}

loadHome();

// NAV BUTTONS
const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");

// FOOTER BUTTONS
const footerHomeButton = document.querySelector("#footer-home");
const footerMenuButton = document.querySelector("#footer-menu");
const footerAboutButton = document.querySelector("#footer-about");

setActiveButton(homeButton);

// HAMBURGER MENU
const hameMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

hameMenu.addEventListener("click", () => {
    const isActive = offScreenMenu.classList.toggle("active");
    hameMenu.classList.toggle("active");

    // prevents the ability to scroll when the menu is active
    if (isActive) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }
});

function linkButtons(buttons, callback, mainButton) {
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            callback();
            setActiveButton(mainButton);
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            hameMenu.classList.remove("active");
            offScreenMenu.classList.remove("active");
            document.body.style.overflow = "auto"; // restores window scroll ability
        });
    });
}

// LINK ALL BUTTONS
linkButtons([homeButton, footerHomeButton], loadHome, homeButton);
linkButtons([menuButton, footerMenuButton], loadMenu, menuButton);
linkButtons([aboutButton, footerAboutButton], loadAbout, aboutButton);

// CHECK CLICK INSIDE OUR OUTSIDE HAMBURGER MENU
document.addEventListener("click", (e) => {
    const isClickInsideMenu = offScreenMenu.contains(e.target);
    const isClickOnHam = hameMenu.contains(e.target);

    if (!isClickInsideMenu && !isClickOnHam) {
        hameMenu.classList.remove("active");
        offScreenMenu.classList.remove("active");
        document.body.style.overflow = "auto"; // restores window scroll ability
    }
});