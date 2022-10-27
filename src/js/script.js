// menu
const menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});