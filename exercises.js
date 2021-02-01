/*Crear un script que permita ingresar solamente 5 valores mediante prompt y nos muestre la suma total de todos los valores ingresados*/

let count = 0
let total = 0
// console.log(count)
while (count < 5) {
    const inputNumber = parseInt(prompt("ingrese un numero: "))
    total = total + inputNumber
    count++
//     console.log(total)
}

/*A nuestro script agreguemos el promedio de todos los números ingresados.*/
`el total de la suma es + ${total} \n el promedio es + ${total/count}`


/* Ingresar N cantidad de edades mediante prompt hasta que se ingrese un cero. Al finalizar mostrar cuántos son mayores de edad*/
let age = undefined
upperAge = 0
lowAge = 0
while(age !== 0) {
  	age = parseInt(prompt("ingrese la edad: "))
    if (age > 18) {
        upperAge ++
    }
    else {
        lowAge ++
    }
}
console.log(upperAge)
console.log(lowAge)

/* Ingresar N cantidad de números mediante prompt. Mostrar el promedio de los números ingresados de 1 dígito. Terminar el programa con la palabra “salir”.*/
