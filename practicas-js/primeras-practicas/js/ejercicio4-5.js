// Escribe un loop con for que dado un número entero n, 
// retorne un array con todos los números enteros de 1 a n.
// Mostrar todos los números de 1 a n aumentando de 1 en 1 donde n lo ingresa el usuario en un prompt.

var numeroN = prompt('Ingrese un numero');
var arreglo = [];

for (let index = 0; index < numeroN; index++) {
  arreglo.push(index + 1);
  console.log(index + 1);
}

console.log(arreglo);