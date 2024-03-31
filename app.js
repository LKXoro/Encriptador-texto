let mensaje;

function encriptar(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function condicionesIniciales(){
    asignarTextoElemento("p",`Elige un número del 1 al ${numeroMaximo}`);
}