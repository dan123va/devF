
//Concatenar dos arreglos agregados por el usuario y mostrarlos con un console log o document.write 
//Concatenar dos arreglos agregados por el usuario y mostrarlos con un console log o document.write 
var palabras = '';
var contador1 = 0;
var contador2 = 0;
var arreglo1 = [];
var arreglo2 = [];

while (contador1 < 3) {
  palabras = prompt('Ingrese una palabra');
  arreglo1.push(palabras);
  contador1++;
}

while (contador2 < 3) {
  palabras = prompt('Ingrese una palabra');
  arreglo2.push(palabras);
  contador2++;
}

console.log('arreglo1 ', arreglo1);
console.log('arreglo2 ', arreglo2);
console.log('arreglos ', arreglo1.concat(arreglo2));
document.write(arreglo1.concat(arreglo2));
