'use strict'

// Hacer un bucle asincrono

console.log('empiezo')

function escribreTras2Segundos(texto){
    setTimeout(() => {
        console.log(texto);
    },2000);
}

escribreTras2Segundos('texto');
console.log('termino');

