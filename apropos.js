/* Script de deconnexion */

// Variables utiles

const btnDisconnect = document.querySelector('.disconnect');

btnDisconnect.addEventListener('click', () => {
    setTimeout(() => {
        window.location.href = 'index.html#hero'; 
    }, 1000);
   
});

/*========= Menu burger ============*/

const menuBurger= document.querySelector('.fa-bars')

const menu = document.querySelector('.menu')

document.addEventListener('click', (e)=>{
    if (e.target !== menuBurger && e.target !== menu) {
        menuBurger.classList.remove('fa-close')
        menu.classList.remove('show')
    }

})

menuBurger.addEventListener('click', (e)=>{
    menuBurger.classList.toggle('fa-close')
    
    if (menuBurger.classList.contains('fa-close')) {
        menu.classList.add('show')
    } else {
        menu.classList.remove('show')
    }

})