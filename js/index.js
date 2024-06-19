let navbar = document.querySelector('nav')
let menuLinks = document.getElementById("menuShow")
let iconChange = document.getElementById("iconChange")

window.onscroll = function () {
    if (window.scrollY > 0) {
        navbar.style.background = "#fff";
    } else {
        navbar.style.background = "transparent";
    }
}

function toggleMenu() {
    menuLinks.classList.toggle("showMenu");
}

iconChange.addEventListener("click", function () {
    if (iconChange.classList.contains('uil-bars')) {
        iconChange.classList.remove('uil-bars');
        iconChange.classList.add('uil-times');
    } else {
        iconChange.classList.remove('uil-times');
        iconChange.classList.add('uil-bars');
    }
});