const p1 = new Promise((resolve, reject) => {
  setTimeout(() => reject(1), 15000);
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(2), 500);
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => reject(3), 800);
})

Promise.all([p2, p3, p1])
  .then(response => {
    console.log(response) // [1, 2, 3]
  })
  .catch(response => {
    console.log(response) // 3
  })
