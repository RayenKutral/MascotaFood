const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('menu');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
