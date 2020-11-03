'use strict'

// Hacer un bucle asincrono

console.log('empiezo')

function escribreTras2Segundos(texto){
    setTimeout(() => {
        console.log(texto);
    },2000);
}

for(let i=0; i<5; i++){
    escribreTras2Segundos('texto' + i, () => {});
}

// escribreTras2Segundos('texto');
// console.log('termino');

