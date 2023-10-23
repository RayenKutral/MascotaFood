const navToggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.menu');

document.addEventListener('DOMContentLoaded', () => {
  menu.classList.remove("nav-menu_visible");
});

navToggle.addEventListener('click', () => {
    menu.classList.toggle("nav-menu_visible");
    });
       