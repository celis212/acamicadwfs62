//injecto el precio en el elemento id = price
document.getElementById('price').innerHTML = 250;

/*Todas las promesas
“Tener una acción para cuando finalicen todas las promesas.”*/
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 200);
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2);
    }, 100);
});
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(3);
    }, 300);
});
Promise.all([p1, p2, p3]).then((resp) => {//nos devuelve un array con toda la informacion
    console.log(resp); // Logs [1,2,3]
}, (err) => {
    console.log(err); // Not executed con solo uno que falle este se ejecuta y aparece el primero de todos los que fallo 
});

/*Promesas en cadena
“Que la resolución de una promesa se ejecute al finalizar la anterior.”*/
new Promise((resolver, rechazar) => {
    console.log('Inicial');
    
    resolver();
})
.then(() => {
    throw new Error('Algo falló');
    
    console.log('Haz esto');
})
.catch(() => {
    console.log('Haz aquello');
})
.then(() => {
    console.log('Haz esto sin que importe lo que sucedió antes');
});

/*Carrera de promesas
“Capturar la primera promesa que se resuelva sin importar el resto de las promesas.” */
var p4 = new Promise( (resolve, reject) => {
    setTimeout(resolve, 500, "uno");
});
var p5 = new Promise( (resolve, reject) => {
    setTimeout(resolve, 100, "dos");
});

Promise.race([p4, p5])
    .then( response => {
        console.log(response); // "dos"
    });// Ambas se resuelven, pero la p2 antes. solo recibe la primera que se ejecute ya sea resuelta o rechazada
    .catch( response => {
        console.log(response);//si ponemos un catch y llega primero rechazada tomara este camino
    });