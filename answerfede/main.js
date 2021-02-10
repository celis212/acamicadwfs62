let cars = [
    {  marca: 'Ford'
  },
    {  marca: 'Nissan'
  },
    {  marca: 'Kia'
  },
    {  marca: 'Fiat'
  }
  ]
  function mensaje(x,callback){
    return callback(x)
  }
  function mostrar(x){
    return alert(x)
  }
  function deleteItem(key){
    let stringCarrito = localStorage.getItem("carrito")
    let carritos = JSON.parse(stringCarrito)
    let elemento = carritos.find(vehiculo => vehiculo.key == key)
    if (elemento.cantidad >1) {
        let index = carritos.indexOf(elemento);
        carritos[index].cantidad--;
    }
    else if(elemento.cantidad == 1) {
        let index = carritos.indexOf(elemento);
        carritos.splice(index,1)
    }
    localStorage.setItem("carrito", JSON.stringify(carritos))  
    updateCart()
  }
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
    mensaje("item agregado al carrito",mostrar)
    updateCart()
  }
  function updateCart() {
      let localItem = localStorage.getItem("carrito")
      let arraycars = JSON.parse(localItem)       
      let carrito = document.querySelector('#carrito')
      carrito.innerHTML=""
      if(arraycars){
        arraycars.forEach(item => {   
        carrito.innerHTML += `<div class="box">${item.nombre} ${item.cantidad} <button class="btndelete" onclick="deleteItem('${item.key}')">delete</button></div>`   })
      }
    }
  let add = document.querySelector('#container')
  cars.forEach((car, index) => {
    add.innerHTML += `<div class="box">${car.marca} <button class="btn" onclick="localstorage('${car.marca}', ${index})">add</button></div>`
  });
  function compare( a, b ) {
    if ( a.nombre < b.nombre ){
      return -1;
    }
    if ( a.nombre > b.nombre ){
      return 1;
    }
    return 0;
  }
  function compare2( a, b ) {
    if ( a.nombre > b.nombre ){
      return -1;
    }
    if ( a.nombre < b.nombre ){
      return 1;
    }
    return 0;
  }
  function ordenarasc(){
    let stringCarrito = localStorage.getItem("carrito")
    let carritos = JSON.parse(stringCarrito)
    carritos.sort(compare)
    localStorage.setItem("carrito", JSON.stringify(carritos))    
    updateCart()
  }
  function ordenardesc(){
    let stringCarrito = localStorage.getItem("carrito")
    let carritos = JSON.parse(stringCarrito)
    carritos.sort(compare2)
    localStorage.setItem("carrito", JSON.stringify(carritos))    
    updateCart()
  }
  updateCart()