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
promesa.then((valor) => {
    console.log('resuelta con', valor);
    return sleep(3000);
}).then(()=>{
    console.log('resulta la segunda');
}).then(()=>{
    console.log('resulta la tercera');
}).catch(err =>{
    console.log('ha habido un error al llamar a sleep', err.message);
});