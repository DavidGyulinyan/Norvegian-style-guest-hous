// mobile version menu, burger button

const burgerMenu = document.querySelector('.burger');

const menuIsActive = () => {
    burgerMenu.classList.toggle('active');
};

burgerMenu.addEventListener('click', menuIsActive);


// mobile version menu

const mobileMenu = document.querySelector('.mobileMenu');

const menuIsVisible = () => {
    mobileMenu.classList.toggle('activeMenu');
};

burgerMenu.addEventListener('click', menuIsVisible);



