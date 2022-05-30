let navMain = document.querySelector('.main-menu');
let navToggle = document.querySelector('.main-menu__toggle');
let header = document.querySelector('.page-header');

header.classList.remove('page-header--nojs');
header.classList.remove('body__page-header--nojs');
navMain.classList.remove('main-menu--nojs');
navMain.classList.add('main-menu--closed');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-menu--opened')) {
    navMain.classList.remove('main-menu--opened');
    navMain.classList.add('main-menu--closed');
    header.classList.remove('page-header__color-grey');
  } else {
    navMain.classList.add('main-menu--opened');
    navMain.classList.remove('main-menu--closed');
    header.classList.add('page-header__color-grey');
  }
});
