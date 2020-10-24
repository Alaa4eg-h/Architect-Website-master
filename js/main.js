const container = document.querySelector('.container');
const hamurgerMenu = document.querySelector('.hamburger-menu');
const scrollBtn = document.querySelector('.scroll-btn');

// Remove Spinner On Load
window.addEventListener('load', function () {
    setTimeout(() => {
        document.querySelector('body').classList.add('display');
    }, 4000);
});
// setTimeout(() => {
//     document.querySelector('body').classList.add('display');
// }, 1000);



// add Class On click

hamurgerMenu.addEventListener('click', function () {
    container.classList.toggle('change');
});

//Smooth Scrolling
scrollBtn.addEventListener('click', function () {
    document.querySelector('html').style.scrollBehavior = "smooth";
    setTimeout(() => {
        document.querySelector('html').style.scrollBehavior = "unset";
    }, 1000);
});

