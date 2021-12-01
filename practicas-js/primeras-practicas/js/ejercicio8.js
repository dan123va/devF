//Piramide Izquierda utilizando un for: 
// *   
// **   
// ***  
// ****  
// *****

var numero = prompt('Ingrese un numero');
var asterisco = 0;

for (let index = 0; index < numero; index++) {
  asterisco += numero;
  console.log(asterisco);
}
