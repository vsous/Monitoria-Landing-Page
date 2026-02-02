const botaoMenu = document.querySelector('.menu-toggle');
const listaMenu = document.querySelector('.nav-menu');

botaoMenu.addEventListener('click', () => {
    listaMenu.classList.toggle('active');
    botaoMenu.classList.toggle('active'); // Adiciona/remove 'active' no botão também
});