document.addEventListener('DOMContentLoaded', () => {
    const burgerButton = document.querySelector('.burger'),
    headerNav = document.querySelector('.header-nav'),
    body = document.querySelector('body'),
    navItems = document.querySelectorAll('.nav-item'),
    slidersContainer = document.querySelector('.sliders-container'),
    sliderBack = document.querySelector('.slider-back'),
    sliderForward = document.querySelector('.slider-forward'),
    btnSlider = document.querySelectorAll('.btn-slider');

    
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
                <img width="270" height="270" src=${pet.img} alt="${pet.name}" class="pets-image">
            </div>
            <div class="slider-text">${pet.name}</div>
            <button class="slider-more">Learn more</button>
        `;

        item.addEventListener('click', () => {
            console.log(pet.description, pet.age);
        })

        slidersContainer.append(item)
    }

    

    fetch('./assets/data/pets.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        // console.log(data);
        if (data) {
            let arrPet = [0,1,2];
            arrPet.forEach(e => {
                cardPet(data[e])
            })

            btnSlider.forEach(btn => {
                btn.addEventListener('click', () => {
                    const arrNew = [];
                    
                    for (let i = 0; i < 3; i++){
                        let rand = Math.round(Math.random() * ((data.length - 1)));
    
                        if (arrPet.indexOf(rand) == -1 && arrNew.indexOf(rand)  == -1 ) {
                            arrNew.push(rand)
                        } else {
                            i--
                        }
                    }
    
                    arrPet = arrNew;
    
                    slidersContainer.innerHTML = '';
                    arrPet.forEach(e => {
                        cardPet(data[e])
                        console.log(data[e], e);
                    })
                });
            })
        }
    })
    .catch((error) => {
        console.log(error);
    })
});