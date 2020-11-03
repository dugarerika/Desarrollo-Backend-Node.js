'use strict'

// Hacer un bucle asincrono

console.log('empiezo')

function escribreTras2Segundos(texto){
    setTimeout(() => {
        console.log(texto);
    },2000);
}

function serie(n,fnAEjecutar, callbackFinalizacion){

}

serie(5, escribreTras2Segundos, () => {
    console.log('Terminado');
});
