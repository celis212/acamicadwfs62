let cars = [
  {  marca: 'Ford'
},
  {  marca: 'Nissan'
},
  {  marca: 'Kia'
},
  {  marca: 'fiat'
}
]

function localstorage(item, i) {
  console.log(item)
  console.log(i)
  let stringCarrito = localStorage.getItem("carrito")
  if (!stringCarrito) {
    stringCarrito = JSON.stringify([])
  }
  let carritos = JSON.parse(stringCarrito)
  //verificacion de existencia del value
  let elemento = carritos.find(vehiculo => vehiculo.key == i)
  if (elemento) {
    elemento.cantidad++
  }
  else {}
  carritos.push(
    {
      key: i,
      nombre: item,
      cantidad: 1,
    })
  localStorage.setItem("carrito", JSON.stringify(carritos))
  
}

function caradd() {
  for (let i = 0; i<cars.length; i++) {
    let localItem = localStorage.getItem(i)
    let carrito = document.querySelector('#carrito')
    carrito.innerHTML += `<div class="box">${localItem}</div>`
  }
}

let add = document.querySelector('#container')
cars.forEach((car, index) => {
  add.innerHTML += `<div class="box">${car.marca} <button class="btn" onclick="localstorage('${car.marca}', ${index})">add</button></div>`
});

caradd()
