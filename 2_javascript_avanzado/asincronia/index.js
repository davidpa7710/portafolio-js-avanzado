
//Codigo ejecutado linea tras linea
// console.log('1 inicio');
// console.log('2 Ejecutando');
// console.log('3 Terminando');

// Ejecucion que toma tiempo siempre va al event queue
/*
console.log('1 Inicio');
setTimeout(() => {
    console.log('2 Ejecutando');
}, 0000)
console.log('3 Terminando');
*/

//EventLoop
// Solucion 1 Callbacks (NO ES RECOMENDADA por casos de callbackhell)
// function run() {
//     console.log('1 Inicio');
//     myFuncion(ejecutando);
//     console.log('4 Fin');
// }

// function myFuncion(ejecutando) {
//     setTimeout(() => {
//         console.log('2 Ejecutando');
//         ejecutando();
//     }, 0000)
// }

// function ejecutando() {
//     console.log('3 Terminando');
// }

// run();

//PROMESAS 

// function asincrono() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('2 Ejecutando');
//             resolve();
//             // reject(new Error('mi custom error'))
//         }, 1000);
//     });
// }

// console.log('1 inicio');
// asincrono().then(() => {
//     console.log('en el then');
//     console.log('3 Terminando');
// }).catch(error =>
//     console.log('error:', error))
//     .finally(() => {

//         console.log('4 FIN');
//         console.log('en el finallly');
//     })


//ASYNC AWAIT
function generateReport() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('2 en generacion del reporte');
            resolve();
        }, 4000)
    });
}

function getPromotions() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('3 obtiendo promociones');
            resolve();
        }, 4000)
    });
}

async function run() {
    console.log('1 Inicio');
    await generateReport();
    await getPromotions();
    console.log('4 Terminando');
}

run();