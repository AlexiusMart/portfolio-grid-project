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

// percents
const percent = document.querySelectorAll('.skills__stat-percent'),
      lines = document.querySelectorAll('.skills__stat-frontline');

percent.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});