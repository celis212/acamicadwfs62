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
    // Leer el stare para traer la lista que está en el carrito
    let stringCarrito = localStorage.getItem("carrito")
    // Validar lo que llega en el storage
    if (!stringCarrito) {
        stringCarrito = JSON.stringify([])
    }
    let carritos = JSON.parse(stringCarrito)
    // Verificacion de existencia del vehiculo en el carrito
    // en caso de que se encuentre aumentamos en 1 la cantidad
    // de lo contrario agregamos al array el elemento
    let elemento = carritos.find(vehiculo => vehiculo.key == i)
    if (elemento) {
        let index = carritos.indexOf(elemento);
        carritos[index].cantidad++;
    }
    else {
        carritos.push({
            key: i,
            nombre: item,
            cantidad: 1,
        })
    }
    localStorage.setItem("carrito", JSON.stringify(carritos))
    updateCart()
}

function updateCart() {
    let localItem = localStorage.getItem("carrito")
    let arraycars = JSON.parse(localItem)       
    let carrito = document.querySelector('#carrito')
    carrito.innerHTML=""
    if(arraycars){
        arraycars.forEach(item => {   
        carrito.innerHTML += `<div class="box">${item.nombre}</div>`   })
    }
}

let add = document.querySelector('#container')
cars.forEach((car, index) => {
    add.innerHTML += `<div class="box">${car.marca} <button class="btn" onclick="localstorage('${car.marca}', ${index})">add</button></div>`
});
updateCart()