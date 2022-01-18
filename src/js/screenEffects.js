const menuFlutuante = document.querySelector('[data-menu=menu-flutuante]');
const menuHamburger = document.querySelector('[data-header=menu-hamburger]');

menuHamburger.addEventListener('click',()=>{
    menuFlutuante.classList.toggle('menu-flutuante--shown')
    

})