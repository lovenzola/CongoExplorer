/* Script de deconnexion */

// Variables utiles

const btnDisconnect = document.querySelector('.disconnect');

btnDisconnect.addEventListener('click', () => {
    setTimeout(() => {
        window.location.href = 'index.html#hero'; 
    }, 1000);
   
});

