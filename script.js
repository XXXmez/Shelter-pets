const burgerButton = document.querySelector('.burger'),
    headerNav = document.querySelector('.header-nav'),
    body = document.querySelector('body');

burgerButton.addEventListener('click', () => {
    burgerButton.classList.toggle('burger-active');
    headerNav.classList.toggle('header-nav-active');
    body.classList.toggle('body-burger-active');
})