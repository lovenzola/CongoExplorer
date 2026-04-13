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

/* ================= Deconnexion ================ */

const btnDisconnect = document.querySelector('.disconnect');

btnDisconnect.addEventListener('click', () => {
    setTimeout(() => {
        window.location.href = 'index.html#hero'; 
    }, 1000);
   
});


// =================== AFFICHAGE DE DESCRIPTIONS DES ANIMAUX ==================

const btnCards = document.querySelectorAll('.btn-card')
const descriptions = document.querySelectorAll('.description')

btnCards.forEach((btn, index) =>{
    btn.addEventListener('click', (e)=>{
        e.preventDefault()
        
        descriptions.forEach(d => d.classList.remove('show'))
        descriptions[index].classList.add('show')

    })
})

//======================= CACHAGE DE DESCRIPTIONS DES ANIMAUX ===================

const btnDescribes = document.querySelectorAll('.btn-describe')
btnDescribes.forEach((btn, index)=>{
    btn.addEventListener(('click'), (e)=>{
        e.preventDefault()
        descriptions[index].classList.remove('show')
    })
} )

