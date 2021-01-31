const numbers = []
let continueA = true
console.log(numbers)

function add(inputD) {
    console.log("entro")
    if (!isNaN(+inputD)) {
        numbers.push(+inputD);
    } else if (typeof(inputD) === "string" && inputD === "stop") {
        continueA = false
    } 
}  

do {
    const textInput = prompt("ingrese un inputD")
    add(textInput)
}while (continueA)
console.log(numbers)
