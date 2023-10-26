setTimeout(() => {
  
  const navToggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".menu");
  
  navToggle.addEventListener('click', () => {
    menu.classList.toggle("nav-menu_visible");
  });
  
  window.addEventListener('scroll', () => {
    var header = document.querySelector(".caja");
    header.classList.toggle("abajo", window.scrollY > 5)
  });
  window.addEventListener('scroll', () => {
    var header = document.querySelector(".navegacion");
    header.classList.toggle("abajo1", window.scrollY > 5)
  });
}, 100);