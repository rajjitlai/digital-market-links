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
