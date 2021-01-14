//nombre y apellido
// var nameUser = Cesar
// var lastName = Celis
// alert(nameUser+" "+lastName)

//ingresa dos numeros

// var numberOne = parseInt(prompt("ingresa el primer numero: "))
// var numberTwo = parseInt(prompt("ingresa el segundo numero: "))
// var totalSum = numberOne+numberTwo
// alert("el resultado de la suma es: " + totalSum)

//automovil 

// var consumo = 15
// var tanque = 45
// var numberKilo = parseInt(prompt("cuantos kilometros va a recorrer?: "))
// if (numberKilo >= (consumo*tanque)) {
    // var numStop = numberKilo/(consumo*tanque)
    // alert("debes de realizar "+ Math.round(numStop) +" visita adicional a la estacion de gasolina")
// }
// else {
    // alert("puedes viajar con tranquilidad")
// }

//tanque de nafta

// var tanque = 50
// var modelo = prompt("que modelo de Motor tiene? : ")
// var numberKilo = parseInt(prompt("cuantos kilometros va a recorrer? : "))
// if (modelo==1.6) {
//     let capacity = 15*tanque
//     var numStop = numberKilo/capacity
//     alert("debes de realizar "+ Math.round(numStop) +" visita adicional a la estacion de gasolina")
// }
// else if (modelo==1.8) {
//     let capacity = 12*tanque
//     let numStop = numberKilo/capacity
//     alert("debes de realizar "+ Math.round(numStop) +" visita adicional a la estacion de gasolina")
// }
// else if (modelo==2.0){
//     let capacity = 10*tanque
//     let numStop = numberKilo/capacity
//     alert("debes de realizar "+ Math.round(numStop) +" visita adicional a la estacion de gasolina")
// }
// else {
//     alert("debes de ingresar un modelo valido")
// }

var dial = parseInt(prompt("Ingresa el Dial de la estacion: "))
if (dial%2!==0 && dial>=89.9 && dial<107.9) {
    alert("esta estacion de radio si existe")
}
else {
    alert("esta estacion de radio no existe intenta de nuevo")
}

