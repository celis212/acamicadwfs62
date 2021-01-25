class Perros {
    constructor (nombre, raza, edad, estado) {
        const opcion = parseInt(estado)
        if (opcion <= 3 && typeof(opcion) === 'number') {
            this.nombre = nombre
            this.raza = raza
            this.edad = edad
            
            if (opcion == 1) {
                this.estado = "En Adopcion"
            }
            
            else if (opcion == 2) {
                this.estado = "Proceso de Adopcion"
            }

            else if (opcion == 3) {
                this.estado = "Adoptado"
            }
        }
        else {
            console.log("Ingrese el numero de estado correcto \n 1. En adopcion \n 2. Proceso de adopcion \n 3. Adoptado")
        }
        
    }  
    

    modificarEstado (estado) {
        return this.estado = estado
    }

    estadoActual () {
        return console.log(this.estado)
    }
}


let listaPerros = []

while (true){
    const desition = () => {
        const actionUser = prompt("que accion desea realizar?: \n A. ingresar una mascota \n B. ver todos los perros \n C. ver los perros en adopcion \n D. ver los perros en proceso de adopcion \n E.ver los perros adoptados")
        return actionUser
    } 

    const newDog = () => {
        const dog = new Perros(`${prompt("Nombre")}`, `${prompt("Raza")}`, `${prompt("Edad")}`, `${prompt("Estado")}`)
        return listaPerros.push(dog)
    }

    let desicion = desition()

    if (desicion == 'a') {
        newDog()
        if (window.confirm('Desea ingresar un nuevo perro')) {
            newDog()
        }
        else {
            continue
        }
    }
    
    else if (desicion = "b") {
        console.log(listaPerros)
        if (window.confirm("desea continuar?")) {
            continue
        }
        else {
            window.open("exit.html", "Thanks for Visiting!");
        }
    }

    else if (desicion = "c") {
        // let perrosFiltrados = []
        // for (let i = 0; i<listaPerros.length; i++) {
        //     const item = listaPerros[i]
        //     if (item[estado] === "En Adopcion") {
        //         perrosFiltrados.push(item)
        //     }
        // }
        const perrosFiltrado = listaPerros.map((element) => {
            const item = element
            if (item[estado] === "En Adopcion") {
                return item
            }
        })
        console.log(perrosFiltrado)
    }


}
    // else {
    //     alert("ingrese un valor correcto")
    //     desition()
    // }




