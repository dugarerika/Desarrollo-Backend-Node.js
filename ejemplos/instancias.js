'use strict'

// Crear una funcion para usarla como constructor de objetos

function Fruta(nombre){

    // this es el objeto que estamos creando
    this. nombre = nombre;

    this.getNombre = function() {
        return this.nombre;
    }

    // al utilizar esta funcion con 'new' esta nos devolvera this
}

const limon = new Fruta('limon');

console.log(limon.getNombre());

