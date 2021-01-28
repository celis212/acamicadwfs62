// 📝 Escribe un HTML que tenga la siguiente estructura:
// Nombre: [input de texto] [botón]Captura el click en el botón y da un alert que diga “Hola” + el nombre que escribieron en el input.
// **Challenge *opcional***
// 📝 Si el/la usuario/a presiona el botón y el input está vacío, realiza los siguientes pasos:
// - Muestra el background del input en rojo
// - Muestra un alert diciendo que el input está vacío
// - Cuando el usuario comience a escribir vuelve el background del input a blanco

let nameOne = document.querySelector('#numeroUno')
let clicMouse = document.querySelector('#botonUno')


clicMouse.addEventListener("click", popAlert)
clicMouse.addEventListener("keyup", popKey)
// debugger
function popAlert() {
    let fName = nameOne.value
    if (fName == "") {
        nameOne.style.backgroundColor = "red"
        return alert("No ingreso un dato correcto")
    }
    else {
        nameOne.style.backgroundColor = "white"
        return alert("Hola "+fName)
    }
}

function popKey() {
    let fNameO = nameOne.value
    if (fNameO != "") {
        nameOne.style.backgroundColor = "white"
    }
}
