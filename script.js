// JavaScript
const menuToggle = document.getElementById('menuToggle');
const closeMobileNav = document.getElementById('closeMobileNav');
const mobileNav = document.getElementById('mobileNav');

menuToggle.addEventListener('click', () => {
    mobileNav.classList.add('navigation-open');
});

closeMobileNav.addEventListener('click', () => {
    mobileNav.classList.remove('navigation-open');
});
