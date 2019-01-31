var buttonNav = document.querySelector('.main-navigation__button');
var siteList = document.querySelector('.site-list');

buttonNav.addEventListener('click', function (event) {
  event.preventDefault();
  siteList.classList.toggle('site-list--open');
});
