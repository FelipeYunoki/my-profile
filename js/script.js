document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const headerNav = document.getElementById('menu');

    hamburgerMenu.addEventListener('click', function () {
        headerNav.classList.toggle('active');
    });
});