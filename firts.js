/*Crea una promesa que elija un número al azar entre 0 y 10.
Si el número es par, considera la promesa exitosa.
Si el número es impar, rechaza la promesa.
Muestra por consola si la promesa finalizó con éxito o no y
el número al azar que salió.*/


const promesa = new Promise((resolver, rechazar) => {
    let number = Math.round(Math.random() * 10)
    setTimeout(() => {
        if (number % 2 == 0) {
        resolver(number)
        }
        else {
            rechazar(number)
        }
    }, 2000)
    
})
/*Al ejercicio anterior añade un retraso de 2 segundos con 
setTimeOut en la lógica de tu promesa.
Podrás observar por ti mismo que el mensaje solo se mostrará 
cuando la promesa se haya resuelto.*/

promesa
    .then((respuesta) => {
        console.log(`el numero es par ${respuesta}`)
    })
    .catch((respuesta) => {
        console.log(`el numero es impar ${respuesta}`)
    })