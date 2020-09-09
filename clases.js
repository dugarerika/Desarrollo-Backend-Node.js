'use strict'

class Mascota {
    constructor(nombre){
        this.nombre = nombre;
    }

    saluda(){
        console.log(`Hola soy  ${this.nombre}`);
    }
}

const mascota = new Mascota('Toby');

mascota.saluda();

class Perro extends Mascota{
    constructor(nombre) {
        super(nombre);
    }
}

let perro = new Perro('Niebla');

perro.saluda();