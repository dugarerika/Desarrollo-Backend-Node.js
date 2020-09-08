'use strict'

// Hacer una funcion asincrona
// Hacer una funcion que reciba un texto y tras 2 segundos lo escriba en la consola que llamaremos escribreTras2Segundos

console.log('empiezo')

function escribreTras2Segundos(texto){
    setTimeout(() => {
        console.log(texto);
    },2000);
}

escribreTras2Segundos('texto');
console.log('termino');

