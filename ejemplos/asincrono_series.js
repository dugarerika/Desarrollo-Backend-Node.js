'use strict'

// Hacer un bucle asincrono

console.log('empiezo')

function escribreTras2Segundos(texto, callback){
    setTimeout(() => {
        console.log(texto);
        callback();
    },2000);
}

function serie(n, fnAEjecutar, callbackFinalizacion){
    if(n==0){
        callbackFinalizacion();
        return;
    }
    n=n-1;
    fnAEjecutar('texto' + n, () => {
        serie(n, fnAEjecutar,callbackFinalizacion);
    })
}

serie(5, escribreTras2Segundos, () => {
    console.log('Terminado');
});
