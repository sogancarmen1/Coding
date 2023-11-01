const toggleMenuBtn = document.querySelector('#menu-btn');
const toggleMenuI = document.querySelector('#menu-btn i');
const toggledMenu = document.querySelector('#toggled-menu');
const menuLinks = document.querySelector('#main-nav ul a');

toggleMenuBtn.addEventListener("click", toggleNav);

function toggleNav() {
    toggledMenu.classList.toggle("hidden");
    if (toggledMenu.classList.contains("hidden")) toggleMenuI.setAttribute("class", "fa-solid fa-bars");
    else toggleMenuI.setAttribute("class", "fa-solid fa-x");
}