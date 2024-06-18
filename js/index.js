let navbar = document.querySelector('nav')
let menuLinks = document.getElementById("menuShow")
let iconChange = document.getElementById("iconChange")

window.onscroll = function() {
    if(window.scrollY > 0){
        navbar.style.background = "#fff";
    }else{
        navbar.style.background = "transparent";
    }
}

function toggleMenu() {
    menuLinks.classList.toggle("showMenu");
    iconChange.classList.add("uil-times")
    iconChange.classList.remove("uil-bars")
}