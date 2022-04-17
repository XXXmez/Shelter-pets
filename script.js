const burgerButton = document.querySelector('.burger'),
    headerNav = document.querySelector('.header-nav'),
    body = document.querySelector('body'),
    navItems = document.querySelectorAll('.nav-item');

function burgerMenu() {
    if (!burgerButton.classList.contains('burger-active')) {
        burgerAdd(burgerButton, 'burger-active');
    } else {
        burgerRemove(burgerButton, 'burger-active');
    }

    if (!headerNav.classList.contains('header-nav-active')) {
        burgerAdd(headerNav, 'header-nav-active');
    } else {
        burgerRemove(headerNav, 'header-nav-active');
    }

    if (!body.classList.contains('body-burger-active')) {
        burgerAdd(body, 'body-burger-active');
    } else {
        burgerRemove(body, 'body-burger-active');
    }
}

function burgerAdd(elem, className) {
    elem.classList.add(className);
}
function burgerRemove(elem, className) {
    elem.classList.remove(className);
}

burgerButton.addEventListener('click', () => burgerMenu());
navItems.forEach(e => {e.addEventListener('click', () => {
    burgerRemove(burgerButton, 'burger-active');
    burgerRemove(headerNav, 'header-nav-active');
    burgerRemove(body, 'body-burger-active');
})});