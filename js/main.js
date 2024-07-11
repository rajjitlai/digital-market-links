function showMenu() {
    document.getElementById('navLinks').classList.add('show-menu');
}

function hideMenu() {
    document.getElementById('navLinks').classList.remove('show-menu');
}

window.addEventListener('scroll', function () {
    const navbar = document.getElementById('scrollNavbar');
    if (window.scrollY > 100) {
        navbar.style.display = 'block';
    } else {
        navbar.style.display = 'none';
    }
});

// newsletter
const newsScriptURL = "https://script.google.com/macros/s/AKfycbyhcYnCnOi_8aUkGtBPEirXfO6lc2YM1cRMoYovXif6FntxiRLnponCjQkVvKAmgAiZ2A/exec"
const nForm = document.forms['n-submit-to-google-sheet']

const nMsg = document.getElementById('nMsg')

document.addEventListener('DOMContentLoaded', function () {
    const clickedLinks = document.querySelectorAll(".dt-go")
    const popup = document.getElementById("popupNews");
    let targetUrl = "";

    clickedLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            targetUrl = link.getAttribute('data-target');

            if (localStorage.getItem('subscribed') !== "true") {
                popup.style.visibility = "visible"
            } else {
                window.location.href = targetUrl
            }
        })
    })

    document.getElementById('closePopup').addEventListener('click', function () {
        popup.style.visibility = 'hidden';
    });

    nForm.addEventListener('submit', function (e) {
        e.preventDefault();
        fetch(newsScriptURL, { method: 'POST', body: new FormData(nForm) })
            .then(response => {
                nMsg.innerHTML = "Thank you for subscribing to our newsletter!";
                nMsg.style.color = "#38ff42";
                localStorage.setItem('subscribed', 'true');
                setTimeout(function () {
                    nMsg.innerHTML = "";
                    popup.style.visibility = 'hidden';
                    window.location.href = targetUrl;
                }, 5000);
                nForm.reset();
            })
            .catch(error => {
                nMsg.innerHTML = "You cannot subscribe to newsletter. Please try again later!";
                nMsg.style.color = "red";
            });
    });

    window.addEventListener('click', function (e) {
        if (e.target == popup) {
            popup.style.visibility = 'hidden';
        }
    });
});

// contact
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