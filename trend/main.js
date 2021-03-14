fetch('https://api.giphy.com/v1/gifs/trending?api_key=VoyMtUR5a3aeKmGKj01JptIltKYBlN0D')
  .then(response => response.json())
  .then(response => {
    response.data.forEach(gif => {
      const image = document.createElement('img')
      image.src = gif.images.original.url
      document.querySelector('#trendings').appendChild(image)
    })
  })