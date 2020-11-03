'use strict'

// Hacer un bucle asincrono

console.log('empiezo')

function escribreTras2Segundos(texto, callback){
    setTimeout(() => {
        console.log(texto);
        callback();
    },2000);
}

for(let i=0; i<5; i++){
    escribreTras2Segundos('texto' + i, () => {});
}

// escribreTras2Segundos('texto');
// console.log('termino');

