// Crear un arreglo de palabras con información agregada por un usuario mostrar el Número de palabras, 
// primera palabra, última palabra, las palabras colocadas en orden inverso

var palabras = '';
var contador = 0;
var arreglo = [];

while (contador < 4) {
  palabras = prompt('Ingrese una palabra');
  arreglo.push(palabras);
  contador++;
}


console.log('arreglo ', arreglo);
console.log('Número de palabras ', arreglo.length);
console.log('primera palabra ', arreglo[0]);
console.log('última palabra ', arreglo[arreglo.length - 1]);
console.log('orden inverso ', arreglo.reverse());