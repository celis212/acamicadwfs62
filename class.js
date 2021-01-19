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
  
    es_mayor () {
      if (this.edad >= 18) {
        return true
      } else {
        return false
      }
    }
  }
  
  let personas = []
  const lucas = new Persona("Lucas", "Gonzalez", 32)
  const jose = new Persona("Jose", "Gutierrez", 19)
  const luis = new Persona("Luis", "Perez", 13)
  
  personas.push(lucas)
  personas.push(jose)
  personas.push(luis)
  
  for (let i = 0; i < personas.length; i++) {
    console.log(personas[i].fullname())
  }