let mensaje;

function asignarTextoElemento(elemento, texto){
  mensaje = document.getElementById(elemento).value;
  document.getElementById(texto).innerHTML = mensaje;
  return;
}

function ocultar(elemento){
  document.getElementById(elemento).style.display = "none";
}


function encriptar() {
  asignarTextoElemento("mensaje", "texto-procesado");
  ocultar("areatexto");
  ocultar("texto_1");
  ocultar("texto_2");
  console.log(mensaje);
  }

  function desencriptar() {
    asignarTextoElemento("mensaje", "texto-procesado");
    ocultar("areatexto");
    ocultar("texto_1");
    ocultar("texto_2");
    console.log(mensaje);
    }