// const p1 = new Promise(res => {
//     setTimeout(() => {
//         res("promesa resuelta")
//     }, 3000)
// })

// console.log("1")
// console.log("2")
// console.log(2+3)

//el .then hace que no se detenga el hilo de ejecucion
// p1
//     .then(response => {
//         console.log(response)
//     })

// console.log("3")
// console.log("4")
//ORDEN
//1
//2
//5
//3
//4
//PROMESA RESUELTA
//CON aSYNC Y aWAIT PODEMOS DETENER EL HILO DE EJECUCION 
//async lo que nos va a permitir es usar el await, estas son hermanas una no funciona sin la otra
//await lo que nos va a decir es que espere a que llegue una funcion que sea asincrona
/*#1*/ async function main () {
    async function mensajeRetrasado () {
    return p1 = new Promise(res => {
        setTimeout(() => {
            res("promesa resuelta")
        }, 3000)
    })    
    }

    console.log("1")
    console.log("2")
    console.log(2+3)
    //aca tenemos a la funcion asincrona
    //como todo debe de ir dentro de la funcion asincrona ponemos lo que vemos en el punto #1
    //recuerde que esto no nos va a traer nada 
    await mensajeRetrasado()
    //si queremos que se vea algo podemos hacer 
    //si quitamos el await lo que hacemos es que se vuelva una promesa es decir sincrono
    const response = await mensajeRetrasado()
    console.log(response)
    //esta segunda opcion 
    mensajeRetrasado
        .then(response => {
            console.log(response)
        })

    console.log("3")
    console.log("4")
}
main()

//ORDEN
//1
//2
//5
//3
//4