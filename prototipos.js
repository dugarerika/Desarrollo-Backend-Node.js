'use strict';

// Definimos una funcion constructora de objetos
function Persona(nombre){
    this.nombre = nombre;
}

//crear un objeto
const luis = new Persona('Luis');

// Añadir propiedades al prototipo de las personas
console.log(Persona.prototype);

Persona.prototype.saluda = function(){
    console.log('Hola me llamo', this.nombre);
}

luis.saluda();

// Herencia de persona----------

// Funcion constructora de agentes

function Agente(nombre){
    // Heredar el constructor de las personas
    Persona.call(this, nombre);
}

// Heredar sus propiedades y métodos
Agente.prototype = Object.create(Persona.prototype);
Agente.prototype.constructor = Agente;

const smith = new Agente('Smith');

smith.saluda();

// console.log( smith instanceof Agente);
// console.log( smith instanceof Persona);
// console.log( smith instanceof Object);


// Herencia multiple

// Mixin superhero

function Superhero(){
    this.vuela = function(){
        console.log(this.nombre, 'vuela');
    }
}

// Copiar todas las propiedades de superheroe al prototipo agente
Object.assign(Agente.prototype, new Superhero());

smith.vuela();

