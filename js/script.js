/*==================================================================================================================
    SCRIPT DE NAVIGATION ENTRE LES PAGES & AUTRES UTILITAIRES

Variables utiles ===================================================================================================*/

const heroPage = document.querySelector('#hero')
const loginPage = document.querySelector('.login-form')
const subPage = document.querySelector('.sub-form')

const btnHero = document.querySelector('.btn-hero')
const homeLink = document.querySelector('.home-link')
const subLink = document.querySelector('.sub-link')
const connLink = document.querySelector('.connexion-link')

// Fonction d'affichage d'une page

export function showPage(page){

    page.classList.remove('hide')
    page.classList.add("show")
}

// Fonction pour cacher une page

export function hidePage(page){

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

connLink.addEventListener(('click'), (e)=>{
    e.preventDefault()
    hidePage(subPage)
    showPage(loginPage)
})

// Fonction d'affichage & masquage du mot de passe 

// Variables utiles

const loginPassword = document.querySelector('#login-password')
const subPassword = document.querySelector('#sub-password')
const subMdp = document.querySelector('#sub-mdp')

const faEyes = document.querySelectorAll('.fa-eye-slash')

// Fonction d'affichage 

function printPwd (input){

    input.type = 'text'
}

// Fonction de masquage 

function maskPwd(input){
    
    input.type = 'password'
}

// Changement de classes et types au clic

faEyes.forEach((eye)=> {
    eye.addEventListener(('click'), (e)=>{
        e.preventDefault()
        eye.classList.toggle('fa-eye')

        if(eye.classList.contains('fa-eye')){
            if(eye === faEyes[0]){
                printPwd(loginPassword)
            }else if(eye === faEyes[1]){
                printPwd(subPassword)
            }else if(eye === faEyes[2]){
                printPwd(subMdp)
            }
        }

        else if (eye.classList.contains('fa-eye-slash')){
            if(eye === faEyes[0]){
                maskPwd(loginPassword)
            }else if(eye === faEyes[1]){
                maskPwd(subPassword)
            }else if(eye === faEyes[2]){
                maskPwd(subMdp)
            }
        }
    })

})

// Fonction d'affichage de règles de mot de passe

// Variable utile
const subRules = document.querySelector('.sub-rules')
const password = document.querySelector('#password')
document.addEventListener("click", (e)=> {
    if(password.contains(e.target)){
        showPage(subRules)
    }
    else {
        hidePage(subRules)
    }
})
/*==================================================================================================================
            SCRIPT GERANT LA PARTIE D'INSCRIPTION 
====================================================================================================================

Fonction d'enregistrement dans le LocalStorage 
=================================================================================================*/

function loadUsers(){
    const data = localStorage.getItem("usersExplorer")

    return data ? JSON.parse(data) : []
}

// Fonction pour ajouter un utilisateur dans le LocalStorage

function addUser(name, mail, pwd){

    const user ={
        id : Date.now(),
        name : name,
        mail : mail,
        pwd : pwd
    }

    users.push(user)

    localStorage.setItem("usersExplorer", JSON.stringify(users))
}
// Variables qui contiendra les utilisateurs inscrits
let users = loadUsers()
/*==================================================================================================================*/

// Fonction d'enregistrement des inscrits

// Variables utiles

const subName = document.querySelector('#sub-input').value
const subMail = document.querySelector('#sub-email').value
const textMdp= subMdp.value
const rules = document.querySelectorAll('.rule')
rules.forEach(rule => invalidate(rule))
const btnSub = document.querySelector('#btn-sub')

/* Fonction de validation de mot de passe 
====================================================================================*/

//  Fonction d'ajout de la classe de validation d'une règle dans la liste
function validate(mdp){
    mdp.classList.add('correct')
    mdp.classList.remove('incorrect')
}

function invalidate(mdp){
    mdp.classList.add('incorrect')
    mdp.classList.remove('correct')
}

// Fonction pour checker les mots de passe

function checkPassword(pwd){

    return [
        /\d/.test(pwd),
        /[a-z]/.test(pwd),
        /[A-Z]/.test(pwd),
        /[^A-Za-z0-9]/.test(pwd),
        pwd.length >= 8
    ]
}

// Fonction pour verifier la validité du mdp

function isValid(mdps){

    return mdps.every(Boolean)
}

// Fonction pour modifier les règles selon la validation

function updateRules(results){

    rules.forEach((rule, index) => { 
        
        if(results[index]){
            validate(rule)
        }else{
            invalidate(rule)
        }
    })
}
// Ajout des fonctions dans l'input du mot de passe
subPassword.addEventListener(('input'), ()=>{
        
    // Valeur tapée pour le mdp
    let textPwd = subPassword.value

    // Tableaux de règles et modfication
    const rulesStates = checkPassword(textPwd)
    updateRules(rulesStates)
})

/*=================================================================================================================
            FONCTION D'INSCRIPTION
==================================================================================================================*/

// Fonctions d'ajout des messages d'alerte

// Variables utiles
let messages = document.querySelectorAll('.message')
let msgContent = document.querySelectorAll('.content')
let closes = document.querySelectorAll('.fa-close')

// Fonction pour vider un input

function clearInput(...inputs){
    inputs.forEach(input => input.value = '')
}

// Pour messages d'erreur
export function printErrorMessage(index,message){

    msgContent[index].textContent = message
    messages[index].classList.add('incorrect')
    showPage(messages[index])

}

// Pour messages de succes
export function printSuccessMessage(index, message){

    msgContent[index].textContent = message
    messages[index].classList.add('correct')
    messages[index].classList.remove('incorrect')
    showPage(messages[index])

}
// Fermeture des messages au clic sur la croix

closes.forEach((close, index) => {
    close.addEventListener(('click'), (e)=>{
        e.preventDefault()
        hidePage(messages[index])
    })
})

// Fonction de verification de l'existence de l'inscrit avant l'ajout

function isExisting(mail){

    return users.some(user => user.mail === mail)
}


// Fonction d'ajout de l'utilisateur à l'appui du bouton d'inscription
btnSub.addEventListener('click', (e)=>{

    e.preventDefault()

    // Recuperation des variables 

    let subName = document.querySelector('#sub-input').value.trim()
    let subMail = document.querySelector('#sub-email').value.trim()
    let textMdp= subMdp.value
    let textPwd = subPassword.value

    if(!subName || !subMail || !textMdp || !textPwd){
        printErrorMessage(1, "Veuillez remplir tous les champs")
        return
    }

    if(!isValid(checkPassword(textPwd))){
        printErrorMessage(1, "Votre mot de passe ne respecte pas les règles")
        return
    }

    if(textMdp !== textPwd){
        printErrorMessage(1, "Les mots de passe ne correspondent pas")
        return
    }

    if(isExisting(subMail)){
        printErrorMessage(1, "Un utilisateur avec cet email existe déjà.")
        return
    }

    addUser(subName, subMail, textPwd)
    clearInput(subName, subMail, textMdp, textPwd)
    printSuccessMessage(1, "Inscription réussie ! Vous pouvez maintenant vous connecter.")
 
})

/*==========================================================================================================
            SCRIPT GERANT LA PARTIE DE CONNEXION
==========================================================================================================*/

// Fonction qui verifie l'existence de l'utilisateur

function userExist(mail,mdp){

    return users.some(user => user.mail === mail && user.pwd === mdp)
}

/* Fonction d'inscription
=============================================================================*/

// Variable utile

const btnLogin = document.querySelector('#btn-login')

btnLogin.addEventListener(('click'), (e)=>{
    e.preventDefault()

    // Variables de manipulation

    let loginMail = document.querySelector('#login-email').value.trim()
    let loginPwd = document.querySelector('#login-password').value

    if(!loginMail || !loginPwd){
        printErrorMessage(0, "Veuillez remplir tous les champs")
        return
    }
    if(!isExisting(loginMail)){
        printErrorMessage(0, "Utilisateur inexistant! Inscrivez-vous")
        return
    }
    
    if(!userExist(loginMail, loginPwd)){
        printErrorMessage(0, "Email ou Mot de passe incorrect!")
        return
    }

    printSuccessMessage(0, "Connexion réussie")
    window.location.href = 'apropos.html#explo-container'

    clearInput(loginMail, loginPwd)
    
            
})


