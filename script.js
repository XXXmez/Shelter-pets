document.addEventListener('DOMContentLoaded', () => {
    const burgerButton = document.querySelector('.burger'),
    headerNav = document.querySelector('.header-nav'),
    body = document.querySelector('body'),
    navItems = document.querySelectorAll('.nav-item'),
    slidersContainer = document.querySelector('.sliders-container'),
    sliderBack = document.querySelector('.slider-back'),
    sliderForward = document.querySelector('.slider-forward');

    
    // berger menu
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
        // console.log(e.target);
        if (e.target.classList.contains('header-nav')) {
            burgerRemove(burgerButton, 'burger-active');
            burgerRemove(headerNav, 'header-nav-active');
            burgerRemove(body, 'body-burger-active');
        }
    })


    // карточки питомцев
    function cardPet(pet) {
        let item = document.createElement('div');
        item.classList.add('slider-item');
        item.innerHTML = `
            <div class="slider-image">
                <img src=${pet.img} alt="${pet.name}" class="pets-image">
            </div>
            <div class="slider-text">${pet.name}</div>
            <button class="slider-more">Learn more</button>
        `;

        console.log(item);
        slidersContainer.append(item)
    }

    fetch('./assets/data/pets.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        if (data) {
            const arrIdPet = [];
            for (let i = 0; i < 3; i++){
                arrIdPet.push(i);
                console.log(data[i]);
                cardPet(data[i])
            }

            sliderForward.addEventListener('click', () => {
                slidersContainer.innerHTML = '';
                for (let i = 3; i < 6; i++){
                    console.log(data[i]);
                    cardPet(data[i])
                }
            });

            console.log(arrIdPet);
        }
    })
    .catch((error) => {
        console.log(error);
    })
});