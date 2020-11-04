'use strict';

function creaAgente(nombre){
    var edad = 0
    return {
        ponNombre: function(nuevoNombre){
            return nuevoNombre;
        },
        leeNombre: function(valor){
            return nombre;
        },
        ponEdad: function(nuevaEdad){
            edad = nuevaEdad;
        },
        leeNombre: function(){
            return edad;
        }
    }
}