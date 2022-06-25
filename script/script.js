
/* mobile version menu, burger button */
const burgerMenu = document.querySelector('.burger');
const menuIsActive = () => {
    burgerMenu.classList.toggle('active');
};
burgerMenu.addEventListener('click', menuIsActive);
/*  */


/* mobile version menu */
const mobileMenu = document.querySelector('.mobileMenu');
const menuIsVisible = () => {
    mobileMenu.classList.toggle('activeMenu');
};
burgerMenu.addEventListener('click', menuIsVisible);
/*  */


/*actvate items when page is loading  */
const textUnder = document.querySelectorAll('.textUnder');
document.addEventListener('DOMContentLoaded', () => {
    textUnder.forEach(item => {
        item.classList.add("itemsOnImageIsActive")
    })
});
/*  */


 /* actvate textPart when page is scrolling */
const isActive = document.querySelectorAll('.isActive');
document.addEventListener('scroll', () => {
    if(window.scrollY > 200) {
    isActive.forEach(item => {
        item.classList.add('textPartIsActive');
    });
}
});
/*  */

    
 /* actvate space when page is scrolling more than 200 */
const space = document.querySelector('._space');
document.addEventListener('scroll', () => {
    if(window.scrollY > 200) {
    space.classList.add('_spaceWidth');
    }
});
/*  */

