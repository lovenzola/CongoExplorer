/*========================================================================================
    SCRIPT DE REMPLACEMENT DE PAGE 

Variables utiles */

const heroPage = document.querySelector('.hero')
const loginPage = document.querySelector('.login-form')
const subPage = document.querySelector('.sub-form')

const btnHero = document.querySelector('.btn-hero')
const btnLogin = document.querySelector('.btn-login')
const homeLink = document.querySelector('.home-link')
const subLink = document.querySelector('.sub-link')


// Fonction d'affichage d'une page

function showPage(page){

    page.classList.remove('hide')
    page.classList.add("show")
}

// Fonction pour cacher une page

function hidePage(page){

    page.classList.remove("show")
    page.classList.add("hide")
}

// Ajout de ces fonctions aux differents boutons

btnHero.addEventListener(('click'), (e)=> {
    e.preventDefault()

    hidePage(heroPage)
    showPage(loginPage)
})

subLink.addEventListener(('click'), (e)=>{
    e.preventDefault()

    hidePage(loginPage)
    showPage(subPage)
})

homeLink.addEventListener(('click'), (e)=>{
    e.preventDefault()

    hidePage(subPage)
    showPage(heroPage)
})


