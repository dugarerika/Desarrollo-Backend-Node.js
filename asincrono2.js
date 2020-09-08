'use strict'

// Llamar dos vesces (texto1 y texto2). Deben salir los textos con sus pausas correspondientes.

// Al final escribir en la consola  "Fin".

//Llamada1 - 2 secs - texto1 - llamada2 - 2 secs - texto2 - Fin

console.log('empiezo')

function escribreTras2Segundos(texto, callback){
    setTimeout(() => {
        console.log(texto);
        callback();
    },2000);
}

escribreTras2Segundos('texto1', () => {
    escribreTras2Segundos('texto2', () => {
        console.log('termino');
    });
});

