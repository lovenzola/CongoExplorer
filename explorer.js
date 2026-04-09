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

/* ================= Retour à la page d'accueil ================== */


