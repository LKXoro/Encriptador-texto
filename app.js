let mensaje;

function asignarTextoElemento(elemento, texto){
  mensaje = document.getElementById(elemento).value;
  document.getElementById(texto).innerHTML = mensaje;
  return;
}

function ocultar(elemento){
  document.getElementById(elemento).style.visibility = "hidden";
}

function mostrar(elemento){
  document.getElementById(elemento).style.visibility = "visible";
}

function encriptar() {
  asignarTextoElemento("mensaje", "texto-procesado");
  if(typeof mensaje === "string" && mensaje.length === 0){
    mostrar("areatexto");
    mostrar("texto_1");
    mostrar("texto_2");
    ocultar("copiar");
  } else{
    ocultar("areatexto");
    ocultar("texto_1");
    ocultar("texto_2");
    mostrar("copiar");
  }
  }

  function desencriptar() {
    asignarTextoElemento("mensaje", "texto-procesado");
    if(typeof mensaje === "string" && mensaje.length === 0){
      mostrar("areatexto");
      mostrar("texto_1");
      mostrar("texto_2");
      ocultar("copiar");
    } else{
      ocultar("areatexto");
      ocultar("texto_1");
      ocultar("texto_2");
      mostrar("copiar");
    }
    }