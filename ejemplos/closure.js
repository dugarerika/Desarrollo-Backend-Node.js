'use strict';

function creaSumador(a){
    // Aqui tenemos el argumetno a con un 5
    // y este contecto es capturado por la funcion que creamos y retornamos
    return function(b) {
        return b + a;
    }
}

const suma5 = creaSumador(5);
console.log(suma5(3),suma5(7));

// ------------------------

// Crear un factory de objetos

function creaAgente(nombre){
    return {
        getNombre: function(){
            return nombre;
        },
        setNombre: function(valor){
            nombre = valor;
        },
        saluda: function(){
            console.log('Hola soy el agente', nombre);
        }
    }
}

const jhones = creaAgente('Jhones');

jhones.saluda();

setTimeout(jhones.saluda,2000);