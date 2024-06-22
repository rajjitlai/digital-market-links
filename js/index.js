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

AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true
});

// contact and newsletter
const scriptURL = 'https://script.google.com/macros/s/AKfycbwDz4jyXJtUk-uzHIRO-hpjIAyOrnHERVyBLMbgNal35DSTtT1HMLM_bHf0u0XpfDK1LA/exec'
const form = document.forms['submit-to-google-sheet']

const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Thank you for contacting us! We may use your email address to contact you later! Kindly check your email and spam folders!"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 10000)

            form.reset()
        })
        .catch(error => {
            msg.innerHTML = "Your message could not be sent!"
            msg.style.color = "red"
        })
})