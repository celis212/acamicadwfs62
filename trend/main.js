fetch('https://api.giphy.com/v1/gifs/trending?api_key=5296N97M94Fl7EKKQrVjAuKMfDpFWk4L&limit=3')
  .then(response => response.json())
  .then(response => {
    response.data.forEach(gif => {
      const image = document.createElement('img')
      image.src = gif.images.original.url
      document.querySelector('#trendings').appendChild(image)
    })
  })