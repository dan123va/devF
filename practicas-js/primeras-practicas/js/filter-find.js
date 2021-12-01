'use strict'

let vegetales = ['Repollo', 'Nabo', 'Rábano', 'Zanahoria', 'Nabo'];

var vegetalEncontrado = vegetales.find(vegetal => vegetal === 'Nabo');
var vegetalesEncontrado = vegetales.filter(vegetal => vegetal === 'Nabo');

console.log('vegetalEncontrado ', vegetalEncontrado);
console.log('vegetalesEncontrado ', vegetalesEncontrado);

let usuarios = [{
  nombre: 'Alejandra',
  pais: 'Colombia'
}, {
  nombre: 'Aketzali',
  pais: 'Colombia'
}, {
  nombre: 'Marco',
  pais: 'México'
}, {
  nombre: 'Marco',
  pais: 'Colombia'
}, {
  nombre: 'Armando',
  pais: 'México'
}
];

var usuario1 = usuarios.find(usuario => usuario.nombre === 'Aketzali');
var usuario2 = usuarios.find(usuario => usuario.nombre === 'Marco' && usuario.pais === 'Colombia');
var usuario3 = usuarios.filter(usuario => usuario.nombre === 'Marco');

console.log('usuario1 ', usuario1);
console.log('usuario2 ', usuario2);
console.log('usuario3 ', usuario3);

var cuentas = [
  { nombre: "Mali", saldo: 200, password: 'helloworld' },
  { nombre: "Gera", saldo: 290, password: 'l33t' },
  { nombre: "Maui", saldo: 67, password: '123' }
];

// let usuario = prompt("Bienvenido a CAJERO DEV.F / Ingrese su Nombre de Usuario: ");
let cuenta = cuentas.find(cuenta => cuenta.nombre === 'Mali');
console.log('cuenta ', cuenta);
