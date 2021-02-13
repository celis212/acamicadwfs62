const numbers = [31, 57, 22]
const promiseList = []

numbers.forEach( pokemonId => {//no es necesario poner pokemonId y index porque el index no lo necesitamos 
    const fetchPokemon = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    .then(res => res.json())
    promiseList.push(fetchPokemon)
})

const pokemonList = document.querySelector('.pokemon-list')
const showPokemon = (name, id, picture) => {
    const pokemonCard = document.createElement('div')
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

Promise.all(promiseList)
    .then(response => {//array con todos los response si se cambia por un race en lugar de all se recibe un rN
        response.forEach(pokemon => { //tocaria cambiar el responde.forEach por un response
            const name = pokemon.name
            const id = pokemon.id
            const picture = pokemon.sprites.front_default
            showPokemon(name, id, picture)
        })
        console.log(response)
    })