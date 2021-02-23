

const API_KEY = 'b9656e72'

const cardMovie = document.querySelector('.card')

const getMovie = async (title) => {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&t=${title}`)
    const data = await response.json()
    const { Poster, Title, Plot } = data
    const dataMovie = document.createElement('div')
    dataMovie.classList.add('card__data')
    const titleMovie = document.createElement('h2')
    titleMovie.textContent = Title
    const imageMovie = document.createElement('img')
    imageMovie.src = Poster
    const plotMovie = document.createElement('p')
    plotMovie.textContent = Plot
    cardMovie.appendChild(imageMovie)
    dataMovie.appendChild(titleMovie)
    dataMovie.appendChild(plotMovie)
    cardMovie.appendChild(dataMovie)
} 

getMovie('back to the future')