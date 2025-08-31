// JavaScript for accessible navigation bar

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNavigation = document.getElementById('main-navigation');

    if (menuToggle && mainNavigation) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', String(!isExpanded));
            mainNavigation.classList.toggle('active');
            menuToggle.classList.toggle('active'); // Toggle active class on the button itself
        });
    }
});
