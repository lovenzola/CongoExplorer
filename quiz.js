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

// Fonction de boutons de contrôle du quiz

const btnNo = document.querySelector('.no')
const info = document.querySelector('.info')

btnNo.addEventListener(('click'), ()=> {
    info.classList.add('apparition')
})

// Affichage du main-quiz

const btnYes = document.querySelector('.yes')
const rules = document.querySelector('.rules')
const mainQuiz = document.querySelector('.main-quiz')

/*================================== FONCTION QUI DECLENCHE LE COMPTE A REBOURS =============================*/

// Variables utiles

let minutes = 5
let secondes = 0
let timer = document.querySelector('.timer')
let min = document.querySelector('.min')
let sec = document.querySelector('.sec')
let t 

// Fonction logique du compteur 

function compteur (){
    if (secondes === 0) {
        if (minutes === 0) {
            clearInterval(t)
            timer.textContent = "Temps écoulé! Veuillez réessayer la prochaine fois"
            timer.style.fontSize = "1.8rem"
            showScore()
            return
        }
        minutes--
        secondes = 59
    } else {
        secondes--
    }
    min.textContent= minutes
    sec.textContent = secondes < 10 ? "0" + secondes : secondes
}

// Ajout de la fonction
btnYes.addEventListener(('click'), ()=> {
    rules.classList.add('hide')
    mainQuiz.classList.add('showQuiz')
     
    if(t) return
    t = setInterval(compteur, 1000)
    
})
// ======================================== CODE POUR LE QUIZ ================================

// Questionnaire et réponses 

const quiz = [
    // ===================== LÉOPARD =====================

    {
        question: "Où trouve-t-on principalement le léopard en RDC ?",
        answers: [
            "Dans les déserts",
            "Dans les forêts du bassin du Congo",
            "Uniquement en ville",
            "Dans les océans"
        ],
        correct: 1
    },
    {
        question: "Le léopard vit surtout...",
        answers: [
            "En groupe",
            "En solitaire",
            "Avec les humains",
            "En troupeaux"
        ],
        correct: 1
    },

    {
        question: "Le léopard peut grimper aux arbres.",
        type: "trueFalse",
        answers: ["Vrai", "Faux"],
        correct: 0
    },

    // ===================== OKAPI =====================

    {
        question: "Où vit principalement l’okapi en RDC ?",
        answers: [
            "Forêts de l’Ituri",
            "Désert du Kalahari",
            "Montagnes glacées",
            "Océan Atlantique"
        ],
        correct: 0
    },
    {
        question: "L’okapi est proche parent de...",
        answers: [
            "Le cheval",
            "La girafe",
            "Le lion",
            "Le zèbre uniquement"
        ],
        correct: 1
    },

    {
        question: "L’okapi est une espèce endémique de la RDC.",
        type: "trueFalse",
        answers: ["Vrai", "Faux"],
        correct: 0
    },

    // ===================== GORILLE =====================

    {
        question: "Où trouve-t-on les gorilles en RDC ?",
        answers: [
            "Forêts de l’est du pays",
            "Désert",
            "Zones urbaines",
            "Plages"
        ],
        correct: 0
    },
    {
        question: "Les gorilles vivent...",
        answers: [
            "En groupes sociaux",
            "Toujours seuls",
            "Dans l’eau",
            "Sous terre"
        ],
        correct: 0
    },

    {
        question: "Les gorilles sont des animaux agressifs en permanence.",
        type: "trueFalse",
        answers: ["Vrai", "Faux"],
        correct: 1
    },

    // ===================== CROCODILE =====================

    {
        question: "Où vit le crocodile en RDC ?",
        answers: [
            "Fleuves et rivières",
            "Sommets des montagnes",
            "Forêts sèches uniquement",
            "Dans les déserts"
        ],
        correct: 0
    },
    {
        question: "Le crocodile reste souvent immobile pour chasser.",
        type: "trueFalse",
        answers: ["Vrai", "Faux"],
        correct: 0
    }
];


// Injection des questions et assertions

const question = document.querySelector('.question')
const number = document.querySelector('.number')
const choix = document.querySelector('.choices')
let score= 0

// Function pour  afficher les questions
// ======================================================================
function printQuestion( index){

    const q = quiz[index]
    number.textContent= index+1
    question.textContent = q.question

    q.answers.forEach((answer, index)=>{

        const input = document.createElement('input')
        input.type = 'radio'
        input.value = answer
        input.name = 'answer'

        const label = document.createElement('label')
        label.textContent= answer

        label.prepend(input)
        choix.appendChild(label)

        input.addEventListener(('change'), ()=>{

            if (index === q.correct){
                score++
            }
        })
    })
}

// Fonction qui affciche les scores !
function showScore(){

    clearInterval(t)
    const questionnaire = document.querySelector('.questionnaire')
    if(score >= 7){
        questionnaire.textContent = `Excellent travail! Votre score est de ${score} sur ${quiz.length}. Vous avez clôturé cette édition-faune avec succès!`
        questionnaire.classList.add('correct')
    } else {
        questionnaire.textContent = `Votre score est de ${score} sur ${quiz.length}! Desolée vous devez reprendre l'exploration pour passer le quiz à nouveau!`
    }
    choix.innerHTML = ""
}

//================================= LOGIQUE DE DEFILEMENT DES QUESTIONS ============================================================================= 

// Variables utiles
const btnNext = document.querySelector('.next')
const btnEx = document.querySelector('.precedent')

let index = 0
printQuestion(index)

// Logique pour passer à la question suivante 
btnNext.addEventListener('click', ()=>{

    if(index >= quiz.length - 1){
        btnNext.disabled = true
        return
    }

    index++
    choix.innerHTML = ""
    printQuestion(index)

    btnEx.disabled = false
})

// Logique pour passer à la question précédente
btnEx.addEventListener('click', ()=>{

    if(index <= 0){
        btnEx.disabled = true
        return
    }

    index--
    choix.innerHTML= ""
    printQuestion(index)

    btnNext.disabled = false
})

// Logique pour soumettre le quiz
const btnSubmit = document.querySelector('.submit')

btnSubmit.addEventListener('click', ()=>{
    showScore()
    btnNext.disabled = true
    btnEx.disabled = true
})
