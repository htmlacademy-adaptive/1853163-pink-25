let navMain = document.querySelector('.main-menu');
let navToggle = document.querySelector('.main-menu__toggle');
let header = document.querySelector('.page-header');

navMain.classList.remove('main-menu--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-menu--closed')) {
    navMain.classList.remove('main-menu--closed');
    navMain.classList.add('main-menu--opened');
    header.classList.remove('page-header__color-grey');
  } else {
    navMain.classList.add('main-menu--closed');
    navMain.classList.remove('main-menu--opened');
    header.classList.add('page-header__color-grey');
  }
});
