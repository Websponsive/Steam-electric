//Navbar collapse functionality
const menuButton = document.querySelector('#menu-button');
const navbarList = document.querySelector('.navbar-list'); 
const navbar = document.querySelector('.navbar');
menuButton.addEventListener('click', () => {
    navbar.classList.toggle('nav-hidden');
    navbar.classList.toggle('nav-visible');

    if(!navbar.classList.contains('nav-scrolled')){
        navbar.classList.toggle('nav-scrolled');
    }
    
    let isOpen = menuButton.getAttribute('aria-expanded');
    if(isOpen === 'false'){
        menuButton.setAttribute('aria-expanded', 'true');
    } else if (isOpen === 'true'){
        menuButton.setAttribute('aria-expanded', 'false');
    }
});

// Intro header effect
// const header = document.querySelector('.intro-header');
// const letters = "-ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let iterations = 0;
// console.log(header.dataset.value.length)
// window.onload = () => {
//     const interval = setInterval(() => {
//         header.innerText = header.innerText.split("")
//         .map((letter, index) => {
//             if(index < iterations) {
//                 return header.dataset.value[index];
//             }

//             return letters[Math.floor(Math.random() * 27)];
//         }).join("");
        
//         iterations += 1 / 2;

//         if (iterations > header.dataset.value.length) clearInterval(interval);

//     }, 30);
// }