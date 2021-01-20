class Perros {
    constructor (nombre, raza, edad, estado) {
        this.nombre = nombre
        this.raza = raza
        this.edad = edad
        this.estado = estado
    }

    modificarEstado (estado) {
        this.estado = estado
    }

    estadoActual () {
        console.log(this.estado)
    }
}

