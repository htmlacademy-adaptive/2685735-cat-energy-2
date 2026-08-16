const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

if (navMain && navToggle) {
  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', () => {
    navMain.classList.toggle('main-nav--opened');
    navMain.classList.toggle('main-nav--closed');
  });
}
