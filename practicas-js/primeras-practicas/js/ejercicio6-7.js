// Realizar la suma de todos los números entre N y M donde N y M los ingresa un usuario.
// Realizar la sumatoria de los primeros N números, donde N es ingresado por el usuario. (editado) 

var numero1 = prompt('Ingrese un numero');
var numero2 = prompt('Ingrese un numero');
var acumulador = 0;
var acumulador2 = 0;

var valorMenor = Math.min(numero1, numero2);
var valorMayor = Math.max(numero1, numero2);


for (let index = valorMenor; index <= valorMayor; index++) {
  acumulador += parseInt(index);
}

for (let index2 = 0; index2 <= valorMayor; index2++) {
  acumulador2 += parseInt(index2);
}

console.log('acumulador ', acumulador);
console.log('acumulador2 ', acumulador2);