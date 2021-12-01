
//ESTRUCTURA DE CONTROL DE REPETICION (BUCLE) DO WHILE
var index = 0;

do {
  index++;
  console.log('Conteo: ' + index);
} while (index < 10);

index = 0;

while (index < 10) {
  index++;
  console.log('Hola: ' + index);
}

//ESTRUCTURA DE CONTROL DE REPETICION (BUCLE) WHILE
var datos = [];
var userInput;

while (!(userInput == "")) {
  userInput = prompt('Ingresa Cualquier Palabra si no quieres continuar no agreges nada');
  datos.push(userInput);
}

console.log('Introduciste estos valores: ' + datos);

//ESTRUCTURA DE CONTROL DE REPETICION (BUCLE) FOR

var frutas = ['melon', 'sandia', 'pera', 'durazno'];

for (var index = 0; index < 21; index++) {

  function inserteDatos(dato1, dato2, dato3) {
    frutas.push(dato1);
    frutas.push(dato2);
    frutas.push(dato3);
    return frutas;
  }

  if (index == 5) {
    console.log(inserteDatos('Daniel', 25, 'M'));
  }
}







var frutas2 = ['melon', 'sandia', 'pera', 'durazno', {color1: 'verde', color2: 'Rojo', color3: 'Azul'}];

console.log('Este es el arreglo: ', frutas2);

