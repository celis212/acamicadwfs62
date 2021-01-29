//Agrega un nuevo ítem al menú de navegación desde Javascript.

// console.log("hello world")
// let firstT = document.createElement('li');
// firstT.textContent = 'Item 5';

// let addNavbar = document.querySelector('.nav-list')
// addNavbar.appendChild(firstT)


//Agrega una negrita a una sola palabra dentro de tu párrafo.

// let nodeElement = document.querySelector('.text p')
// console.log(nodeElement)
// let textToArray = Array.from(nodeElement)
// console.log(textToArray)

let logotipo = document.getElementById("logo")
logotipo.addEventListener('mouseover', () => {
    logotipo.classList.add('logoconborde')
})
logotipo.addEventListener('mouseout', () => {
    logotipo.classList.remove('logoconborde')
})