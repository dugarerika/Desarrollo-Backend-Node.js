'use strict'

function sleep(ms){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Si falla llamariamos a reject
            resolve('hola');
            // reject(new Error('Fatal!'));
        }, ms);     
    });
};

async function main(){
    const resultado = await sleep(3000);
    console.log(resultado);
}

main().catch(err =>{
    console.log('Hubo un error', err);
});