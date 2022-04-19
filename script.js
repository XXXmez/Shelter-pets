const burgerButton = document.querySelector('.burger'),
    headerNav = document.querySelector('.header-nav'),
    body = document.querySelector('body'),
    navItems = document.querySelectorAll('.nav-item'),
    headerNavLogoLink = document.querySelector('.header-nav-logo-link');

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
headerNav.addEventListener('click', e => {
    console.log(e.target);
    if (e.target.classList.contains('header-nav')) {
        burgerRemove(burgerButton, 'burger-active');
        burgerRemove(headerNav, 'header-nav-active');
        burgerRemove(body, 'body-burger-active');
    }
})


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1
        },
        // when window width is >= 480px
        768: {
          slidesPerView: 2
        },
        // when window width is >= 640px
        1280: {
          slidesPerView: 3
        }
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});