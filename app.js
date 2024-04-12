let mensaje;
var copiartexto;

function asignarTextoElemento(elemento, texto){
  mensaje = document.getElementById(elemento).value;
  document.getElementById(texto).innerHTML = mensaje;
  return;
}

function encriptartexto(){
  mensaje = mensaje.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
  document.getElementById("texto-procesado").innerHTML = mensaje;
  return;
}

function desencriptartexto(){
  mensaje = mensaje.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
  document.getElementById("texto-procesado").innerHTML = mensaje;
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
    encriptartexto();
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
      desencriptartexto();
      ocultar("areatexto");
      ocultar("texto_1");
      ocultar("texto_2");
      mostrar("copiar");
    }
    }

    function copiar() {
      copiartexto = mensaje;
      navigator.clipboard.writeText(copiartexto)
    }