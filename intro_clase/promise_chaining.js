const p1 = new Promise((resolve, reject) => {
  resolve(2)
})

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(res => console.log(res))
