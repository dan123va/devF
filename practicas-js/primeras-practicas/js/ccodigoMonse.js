'use strict'
var resultado1, resultado2, operacion;

let uno = document.getElementById("uno");
uno.addEventListener('click', btnUno);
function btnUno() {
  resultado.textContent = resultado.textContent + "1";
}

let dos = document.getElementById("dos");
dos.addEventListener('click', btnDos);
function btnDos() {
  resultado.textContent = resultado.textContent + "2";
}

let tres = document.getElementById("tres");
tres.addEventListener('click', btnTres);
function btnTres() {
  resultado.textContent = resultado.textContent + "3";
}

let cuatro = document.getElementById("cuatro");
cuatro.addEventListener('click', btnCuatro);
function btnCuatro() {
  resultado.textContent = resultado.textContent + "4";
}

let cinco = document.getElementById("cinco");
cinco.addEventListener('click', btnCinco);
function btnCinco() {
  resultado.textContent = resultado.textContent + "5";
}

let seis = document.getElementById("seis");
seis.addEventListener('click', btnSeis);
function btnSeis() {
  resultado.textContent = resultado.textContent + "6";
}

let siete = document.getElementById("siete");
siete.addEventListener('click', btnSiete);
function btnSiete() {
  resultado.textContent = resultado.textContent + "7";
}

let ocho = document.getElementById("ocho");
ocho.addEventListener('click', btnOcho);
function btnOcho() {
  resultado.textContent = resultado.textContent + "8";
}

let nueve = document.getElementById("nueve");
nueve.addEventListener('click', btnNueve);
function btnNueve() {
  resultado.textContent = resultado.textContent + "9";
}

let cero = document.getElementById("cero");
cero.addEventListener('click', btnCero);
function btnCero() {
  resultado.textContent = resultado.textContent + "0";
}

let suma = document.getElementById("suma");
suma.addEventListener('click', btnSuma);
function btnSuma() {
  resultado1 = resultado.textContent;
  operacion = "+";
  limpiar();
}

let resta = document.getElementById("resta");
resta.addEventListener('click', btnResta);
function btnResta() {
  resultado1 = resultado.textContent;
  operacion = "-";
  limpiar();
}

let multiplicacion = document.getElementById("multiplicacion");
multiplicacion.addEventListener('click', btnMul);
function btnMul() {
  resultado1 = resultado.textContent;
  operacion = "x";
  limpiar();
}

let division = document.getElementById("division");
division.addEventListener('click', btnDiv);
function btnDiv() {
  resultado1 = resultado.textContent;
  operacion = "/";
  limpiar();
}

let igual = document.getElementById("igual");
igual.addEventListener('click', btnIgual);
function btnIgual() {
  resultado2 = resultado.textContent;
  resolver();
}

let reset = document.getElementById("reset");
reset.addEventListener('click', btnReset);

function btnReset() {
  resetear()
}

function limpiar() {
  resultado.textContent = "";
}

function resetear() {
  resultado.textContent = "";
  resultado1 = 0;
  resultado2 = 0;
  operacion = "";
}

function resolver() {
  let res = 0;
  switch (operacion) {
    case "+":
      res = parseFloat(resultado1) + parseFloat(resultado2);
      break;
    case "-":
      res = parseFloat(resultado1) - parseFloat(resultado2);
      break;
    case "x":
      res = parseFloat(resultado1) * parseFloat(resultado2);
      break;
    case "/":
      res = parseFloat(resultado1) / parseFloat(resultado2);
      break;
  }
  
  resetear()
  resultado.textContent = res;
}