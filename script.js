const burgerButton = document.querySelector('.burger'),
    headerNav = document.querySelector('.header-nav'),
    body = document.querySelector('body'),
    navItems = document.querySelectorAll('.nav-item');

function burgerMenu() {
    if (!burgerButton.classList.contains('burger-active')) {
        burgerButton.classList.add('burger-active');
    } else {
        burgerButton.classList.remove('burger-active');
    }

    if (!headerNav.classList.contains('header-nav-active')) {
        headerNav.classList.add('header-nav-active');
    } else {
        headerNav.classList.remove('header-nav-active');
    }

    if (!body.classList.contains('body-burger-active')) {
        body.classList.add('body-burger-active');
    } else {
        body.classList.remove('body-burger-active');
    }
}

burgerButton.addEventListener('click', () => burgerMenu());
navItems.forEach(e => {e.addEventListener('click', () => burgerMenu())})