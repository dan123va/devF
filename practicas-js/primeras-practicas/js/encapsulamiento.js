'use strict'

let Caninos = class {
  constructor(alto, largo) {
    this.alto = alto;
    this.largo = largo;
  }
}

class Doberman extends Caninos {
  constructor(alto, largo, color, manchas) {
    var nombre = 'doberman';
    super(alto, largo)
    this.color = color;
    this.manchas = manchas;
    this.getNombre = function() {
      return nombre;
    }
  }
}

class husky extends Caninos {
  constructor(alto, largo, color, manchas, colorOjos) {
    var nombre = 'husky';
    super(alto, largo)
    this.color = color;
    this.manchas = manchas;
    this.colorOjos = colorOjos;

    this.getNombre = function() {
      return nombre;
    }

    this.setNombre = function(nombreNuevo) {
      nombre = nombreNuevo;
    }
  }
}

var perritoDoberman1 = new Doberman(20, 50, 'cafe', 'no');
var perritoDoberman2 = new Doberman(20, 50, 'negro', 'si');
var perritoDoberman3 = new Doberman(20, 50, 'blanco', 'no');

var perritoHusky1 = new husky(20, 50, 'blanco', 'si', 'negros');
var perritoHusky2 = new husky(20, 50, 'negro', 'si', 'azul-verde');

console.log(`Alto del perrito1: ${perritoDoberman1.alto}, color ${perritoDoberman1.color}, La raza del perrito es ${perritoDoberman1.getNombre()}.`);
console.log(`Alto del perrito1: ${perritoDoberman2.alto}, color ${perritoDoberman2.color}, La raza del perrito es ${perritoDoberman2.getNombre()}.`);
console.log(`Alto del perrito1: ${perritoDoberman3.alto}, color ${perritoDoberman3.color}, La raza del perrito es ${perritoDoberman3.getNombre()}.`);
console.log('***************************************************');
console.log(`Alto del perrito1: ${perritoHusky1.alto}, color ${perritoHusky1.color}, La raza del perrito es ${perritoHusky1.getNombre()}.`);
console.log(`Alto del perrito1: ${perritoHusky2.alto}, color ${perritoHusky2.color}, La raza del perrito es ${perritoHusky2.getNombre()}.`);
console.log('***************************************************');
perritoHusky1.setNombre('Chihuahua');
console.log('***************************************************');
console.log(`Alto del perrito1: ${perritoHusky1.alto}, color ${perritoHusky1.color}, La raza del perrito es ${perritoHusky1.getNombre()}.`);
console.log(`Alto del perrito1: ${perritoHusky2.alto}, color ${perritoHusky2.color}, La raza del perrito es ${perritoHusky2.getNombre()}.`);
