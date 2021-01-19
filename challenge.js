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

  count = undefined
  console.log(personas)
  function asistentes(listaPersonas) {
      for (let i=0; i<listaPersonas.length(); i++) {
        if (listaPersonas[i].asistente() != null) {
          count++
          console.log(count)
        }
      console.log(listaPersonas[i].asistente())
      }
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
  asistentes(personas)
  /**
   * La implementación debe ser:
   *
   * let totalAsistentes = asistentes(personas);
   * console.log(totalAsistentes); // debe ser 4
   */

//   📝 2. Sobre el sandbox anterior, desarrolla una función que te permita crear un nuevo array que tenga solo las personas asistentes. Es decir, que tengan la propiedad “asistente” dentro de su objeto, y que esta sea igual a “true”.

//   📝 3. Además, desarrolla una función que te permite crear un nuevo array que tenga solo las personas de la sección “platino”.
  
//   📝 4. Finalmente, crea una única función que cree un nuevo array según un filtro y un valor especificado, los cuales tendrán que ser pasados como argumentos a la función. Por ejemplo:
  
//   let speakers = filtrarPersonas(“rol”, “speaker”);
  
//   Lo anterior deberá retornar un nuevo array solo con los objetos donde la propiedad “rol” sea igual a “speaker. Encuentra unos tipos en [este sandbox]
  


// function filtrarPersonas(propiedad, valor) {
    // desarrolla tu función aquí
//   }
  
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
  