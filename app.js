let mensaje;

function asignarTextoElemento(elemento, texto){
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}


function encriptar() {
  mensaje = document.getElementById("mensaje").value;
  document.getElementById("texto-procesado").innerHTML = mensaje;
  document.getElementById("areatexto").style.display = "none";
  console.log(mensaje);
  }

