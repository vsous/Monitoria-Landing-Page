const botaoMenu = document.querySelector('.menu-toggle');
const listaMenu = document.querySelector('.nav-menu');
const overlay = document.querySelector('.overlay');

const toggleMenu = () => {
    listaMenu.classList.toggle('active');
    botaoMenu.classList.toggle('active');
    overlay.classList.toggle('active');
};

botaoMenu.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);