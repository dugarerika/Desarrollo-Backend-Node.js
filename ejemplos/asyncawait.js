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

    const resultado2 = await sleep(1000);
    console.log(resultado2);
}

main();

main().catch(err =>{
    console.log('Hubo un error', err);
});

// await consume una promesa

// async function blucleAsincronoEnSerie(){
//     for(let i = 0; i<5; i++){
//         const info = await row.findNext();
//         console.log(info.name);
//     }
// }

// blucleAsincronoEnSerie();

// blucleAsincronoEnSerie().catch(err =>{
//     console.log('Hubo un error', err);
// });
