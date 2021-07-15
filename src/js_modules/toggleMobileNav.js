const navbarToggleBtnEl = document.querySelector(".navbar__toggle-btn");
const navbarLinks = document.querySelector(".navbar-links");
let height = navbarLinks.scrollHeight;

/*allows it to transition from 0 to auto smoothly*/
navbarLinks.style.setProperty('--max-height', height + 'px');

export const toggleMobileNavMenu = _ => {
    navbarLinks.classList.toggle("navbar-links--active");
}

navbarToggleBtnEl.addEventListener("click", toggleMobileNavMenu);