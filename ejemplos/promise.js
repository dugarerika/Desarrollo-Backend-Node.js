'use strict'

const { resolve } = require("path");

// Funcion que devuelve una promesa

function sleep(ms){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Si falla llamariamos a reject
            resolve('hola');
            // reject(new Error('Fatal!'));
        }, ms);     
    });
};

// Convertir funcion que usa callbacks a promesa (sleep1)

const sleep1 = ms => new Promise(resolve => setTimeout(resolve, ms));

const promesa = sleep(3000);

console.log(promesa);

// Cuando se resuelva la promersa hacemos otras cosas
promesa.catch(err => {
    console.log('fallo la primera invocacion');
    return 'chungo'
}).then((valor) => {
    console.log('resuelta con', valor);
    return sleep(3000);
}).then(()=>{
    console.log('resulta la segunda');
    return sleep(3000);
}).then(()=>{
    console.log('resulta la tercera');
}).catch(err =>{
    console.log('ha habido un error al llamar a sleep', err.message);
});

// Ejemplo de  promesas en paralelo
Promise.all([sleep(1000), sleep(2000), sleep(3000)])
.then(()=> { // Se activa cuando todas las promesas de cumplan
    console.log('terminaron los 3');
});



