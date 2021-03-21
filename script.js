const nav__links = document.querySelectorAll('.navigation__link');
const navigation__nav = document.querySelector('.navigation__nav');
const navigation__background = document.querySelector('.navigation__background');
const navigation__checkbox = document.querySelector('.navigation__checkbox');


nav__links.forEach(item => {
    item.addEventListener('click', () => {
        navigation__background.classList.toggle('show');
        navigation__nav.classList.toggle('showit');
    });
});

navigation__checkbox.addEventListener('click', () => {
    navigation__background.classList.toggle('show');
    navigation__nav.classList.toggle('showit');
});