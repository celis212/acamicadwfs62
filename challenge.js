let personas = [
    {
      nombre: "Jhony",
      asistente: null,
      seccion: "gold",
      rol: "speaker"
    },
    {
      nombre: "Manuel",
      asistente: true,
      seccion: "vip",
      rol: "viewer"
    },
    {
      nombre: "Fran",
      asistente: true,
      seccion: "vip",
      rol: "viewer"
    },
    {
      nombre: "Cintia",
      seccion: "platino",
      rol: "viewer"
    },
    {
      nombre: "Marcos",
      asistente: null,
      seccion: "gold",
      rol: "viewer"
    },
    {
      nombre: "Victoria",
      asistente: true,
      seccion: "platino",
      rol: "speaker"
    }
  ];

  
  function asistentes(listaPersonas) {
    count = null
      for (let i = 0; i < listaPersonas.length; i++) {
        if (listaPersonas[i].asistente == true || listaPersonas[i].asistente === undefined) {
          count++
        }
      }
    return count
    
    /**
     * Esta fución debe calcular el total de asistentes
     * según una lista de personas.
     *
     * Se considera que una persona esta "asistente" si
     * la propiedad respectiva es distinta a null o undefined
     *
     * La función debe retornar el número de asistencias.
     */
  }
  let totalAsistentes = asistentes(personas);
  console.log("la cantidad de asistentes fueron "+ totalAsistentes)
  
  /**
   * La implementación debe ser:
   *
   * let totalAsistentes = asistentes(personas);
   * console.log(totalAsistentes); // debe ser 4
   */

function filtrarPersonas(listaAsistentes) {
  let new_person = []
  for (let i = 0; i < listaAsistentes.length; i++) {
    if (listaAsistentes[i].asistente == true) {
      let car = {
        nombre: listaAsistentes[i].nombre,
        asistente: listaAsistentes[i].asistente,
        seccion: listaAsistentes[i].seccion,
        rol: listaAsistentes[i].rol,
      }

      new_person.push(car)
    }

    else if (listaAsistentes[i].asistente === undefined) {
      let car = {
        nombre: listaAsistentes[i].nombre,
        seccion: listaAsistentes[i].seccion,
        rol: listaAsistentes[i].rol,
      }

      car.asistente = true
      new_person.push(car)
    }
  }
  return new_person
}
let nuevaLista = filtrarPersonas(personas)
console.log(nuevaLista)

//   📝 2. Sobre el sandbox anterior, desarrolla una función que te permita crear un nuevo array que tenga 
//solo las personas asistentes. Es decir, que tengan la propiedad “asistente” dentro de su objeto, y que esta sea igual a “true”.

function filtrarPlatino(listaPlatino) {
  let new_list_platino = []
  for (let i = 0; i < listaPlatino.length; i++) {
    if (listaPlatino[i].seccion == "platino" && listaPlatino[i].seccion == undefined) {
      let car = {
        nombre: listaPlatino[i].nombre,
        asistente: listaPlatino[i].asistente,
        seccion: listaPlatino[i].seccion,
        rol: listaPlatino[i].rol,
      }

      new_list_platino.push(car)
    }

    else if (listaPlatino[i].seccion == "platino" && listaPlatino.asistente === undefined) {
      let car = {
        nombre: listaPlatino[i].nombre,
        seccion: listaPlatino[i].seccion,
        rol: listaPlatino[i].rol,
      }

      car.listaPlatino = true
      new_list_platino.push(car)
    }
  }
  return new_list_platino
}
let nuevaListaPlatino = filtrarPlatino(personas)
console.log(nuevaListaPlatino)


//   📝 3. Además, desarrolla una función que te permite crear un nuevo array que tenga solo las personas de la sección “platino”.

  function mostrarPropiedad(propiedad, index) {
    constum_list = []
    console.log(personas[index][propiedad]);
  }

let custom_one = prompt("Que propiedad desea ver? ")
let custom_two = prompt("con que caracteristica? ")
let custom = mostrarPropiedad(custom_one, custom_two)
console.log(custom)
  
//   📝 4. Finalmente, crea una única función que cree un nuevo array según un filtro y un valor especificado, los cuales tendrán que ser pasados como 
//argumentos a la función. Por ejemplo:


  
//   let speakers = filtrarPersonas(“rol”, “speaker”);
  
//   Lo anterior deberá retornar un nuevo array solo con los objetos donde la propiedad “rol” sea igual a “speaker. Encuentra unos tipos en [este sandbox]
  



  
  /**
   * Puedes utilizar la notación brackets para acceder a
   * las propiedades de un objeto, por ejemplo:
   */
  
//   console.log("ACCEDIENDO A PROPIEDADES DE FORMA MANUAL");
//   console.log("---------------------------------------------");
//   console.log(personas[0]["nombre"]);
//   console.log(personas[1]["rol"]);
//   console.log(personas[2]["asistente"]);
//   console.log(personas[3]["seccion"]);
  
  /**
   * Podemos parametrizar el tipo de propiedad que queremos leer
   * dentro de una función, de la siguiente forma:
   *
   */
  
//   function mostrarPropiedad(propiedad, index) {
//     console.log(personas[index][propiedad]);
//   }
  
//   console.log("ACCEDIENDO A PROPIEDADES DE FORMA AUTOMÁTICA");
//   console.log("---------------------------------------------");
//   mostrarPropiedad("rol", 1);
//   mostrarPropiedad("nombre", 3);
//   mostrarPropiedad("rol", 0);
  