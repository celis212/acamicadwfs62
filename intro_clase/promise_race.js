const p1 = new Promise((resolve, reject) => {
  reject(1)
  // setTimeout(() => reject(1), 15000);
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(2), 500);
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => reject(3), 300);
})

Promise.race([p2, p3, p1])
  .then(response => {
    console.log("then", response) // 2
  })
  .catch(response => {
    console.log("catch", response) // 1
  })
