'use strict'
// Ingresar 5 valores enteros separados por comas 
// y con un console log o document.write mostrar los datos 
// ordenados de mayor a menor y también de menor a mayor

var numeros = '';
var contador = 0;
var arreglo = [];

while (contador < 5) {
  numeros = prompt('Ingrese valor numerico');
  arreglo.push(numeros);
  contador++;
}

console.log('numeros ', arreglo);
console.log('numeros ', arreglo.sort(function (a, b) { return a - b }));
console.log('numeros ', arreglo.sort(function (a, b) { return b - a }));