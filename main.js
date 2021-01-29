// la funciones siempre llevan un return pero si no lo pone lo lleva implicito y queda como indefinido
function double(a) {
    return a * 2
}

//arrow function
// se le puede eliminar la palabra function
const doubleTwo (a) => {
    return a * 2
}

// se le puede quitar los corchetes y la palabra return, pero sola funciona cuando la funcion tiene una sola linea de codigo
const doubleThree = (a) => a * 2

//suprime los parentesis
const doubleFour = a => a * 2

