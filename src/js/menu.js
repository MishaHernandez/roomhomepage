const menuIcon = document.getElementById("menuIcon");
const navbar = menuIcon.parentElement;
const logo = menuIcon.nextElementSibling;
const menu = navbar.lastElementChild;
const iconClose = "./images/icon-close.svg";
const iconHamburger = "./images/icon-hamburger.svg";

function changeMenuIcon() {
    if (menu.classList.contains('js-show-menu')) {
        menuIcon.setAttribute('src', iconClose);
    } else {
        menuIcon.setAttribute('src', iconHamburger);
    }
}

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('js-open-menu');
    logo.classList.toggle('js-hidden-logo');
    menu.classList.toggle('js-show-menu');
    changeMenuIcon();
})