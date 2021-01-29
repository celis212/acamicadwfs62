// Programemos juntos una clase persona que tenga las
// propiedades de nombre, apellido y edad con los 
// siguientes métodos:

// fullname: debe retornar el nombre y apellido
// concatenados con un espacio entre ambos

// es_mayor: debe retornar true o false 
// dependiendo si la persona es mayor de 18 años o no

// Construye diferentes objetos a partir de esta clase

class Persona {
    constructor (nombre, apellido, edad) {
      if (
        isNaN(parseInt(edad)) ||
        nombre.length < 4
      ) {
        console.log("No se pudo registrar la persona. Datos invalidos")
      } else {
        this.nombre = nombre.toString()
        this.apellido = apellido
        this.edad = parseInt(edad)
      }
    }
  
    fullname () {
      return `${this.nombre} ${this.apellido}`
    }
  
    cambiar_nombre (nombre) {
      this.nombre = nombre
    }
  
    es_mayor () {
      if (this.edad >= 18) {
        return true
      } else {
        return false
      }
    }
  }
  
  let personas = []
  
  for(let i = 0; i < 2; i++) {
    const nombre = prompt("Ingrese su nombre")
    const apellido = prompt("Ingrese su apellido")
    const edad = prompt("Ingrese su edad")
  
    const persona = new Persona(nombre, apellido, edad)
    personas.push(persona)
  } 