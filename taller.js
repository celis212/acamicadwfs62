/*Genera un array con 10 posiciones numéricas.

Toma de manera aleatoria 3 elementos.

A.  Lanza 3 fetch al mismo Endpoint de Pokemon y muestra solamente la primera respuesta.
Cambia uno de los elementos de tu array a un valor tipo string.

Repite el proceso: toma de manera aleatoria 3 elementos.

Lanza 3 fetch al mismo Endpoint de Pokemon y muestra los siguientes resultados:
Si los 3 request finalizaron correctamente, muestra los resultados por pantalla.
Si algún request falló (te tocó el valor string en la elección aleatoria), muestra un error por pantalla.*/

let promiseList = []
let listNumbers = [1,2,3,4,5,6,7,8,9,10]

const randomUno = Math.round(Math.random() * 9)
const randomDos = Math.round(Math.random() * 9)
const randomTres = Math.round(Math.random() * 9)

const listNumberRandom = [
    listNumbers[randomUno], 
    listNumbers[randomDos], 
    listNumbers[randomTres]
]

// listNumberRandom.forEach( number => {
//     const fetchList = fetch(`https://pokeapi.co/api/v2/pokemon/${number}`)
//     .then(response => response.json())
//     promiseList.push(fetchList)
// })

// A
const pokemonUno = new Promise((resolve, reject) =>{
  resolve(
    fetch(`https://pokeapi.co/api/v2/pokemon/${listNumberRandom[0]}`)
    .then(response => response.json())
  )
})

const pokemonDos = new Promise((resolve, reject) =>{
  resolve(
    fetch(`https://pokeapi.co/api/v2/pokemon/${listNumberRandom[1]}`)
    .then(response => response.json())
  )
})

const pokemonTres = new Promise((resolve, reject) =>{
  resolve(
    fetch(`https://pokeapi.co/api/v2/pokemon/${listNumberRandom[2]}`)
    .then(response => response.json())
  )
})

const pokemonList = document.querySelector('.pokemon-list')
const showPokemon = (name, id, picture) => {
  const pokemonCard = document.createElement('div');
  pokemonCard.classList.add('pokemon-list__card')
  const pokemonName = document.createElement('h2');
  pokemonName.classList.add('pokemon-list__card__title')
  pokemonName.textContent = `${name} #${id}`
  const pokemonImage = document.createElement('img')
  pokemonImage.src = picture
  pokemonCard.appendChild(pokemonName)
  pokemonCard.appendChild(pokemonImage)

  pokemonCard.addEventListener('click', () => {
    alert(`clicked ${name}`)
  })
  pokemonList.appendChild(pokemonCard)
}

Promise.race([pokemonUno, pokemonDos, pokemonTres])
  // .then(response => {
  //   response.forEach(pokemon => {
  //     const name = pokemon.name
  //     console.log(pokemon)
  //     const id = pokemon.id
  //     const picture = pokemon.sprites.front_default
  //     showPokemon(name, id, picture)
  //   })
  // })

//A
  .then(
    response =>  {
      const name = response.name
      console.log(response.name)
      const id = response.id
      const picture = response.sprites.front_default
      showPokemon(name, id, picture)
    }
  )

  .catch(
    response => {
        alert('no encontrado')
    }
  )