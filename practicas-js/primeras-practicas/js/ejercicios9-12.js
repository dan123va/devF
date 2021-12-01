// 10.- Dado el array = [1,2,3,4,5,6]
// 11.- Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en pantalla.
// 12.- Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en pantalla.
// 13.- Mostrar todos los elementos dentro de un array sumándole uno a cada uno. Calcular el promedio


var arreglo = [1,2,3,4,5,6];
var contador = 0;
var acumulador = 0;

while (contador < arreglo.length) {
  console.log('elemento while ', arreglo[contador]);
  contador++;
}

for (let index = 0; index < arreglo.length; index++) {
  console.log('elemento de for ', arreglo[index]);
}

for (let index = 0; index < arreglo.length; index++) {
  acumulador += arreglo[index];
}

console.log('Promedio ', acumulador / arreglo.length);
