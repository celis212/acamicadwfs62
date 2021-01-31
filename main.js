//reto
var fruits = ["manzana", "pera", "sandia", "durazno"]
console.log(fruits.length)
for (let i=0; i<fruits.length; i++) {
    console.log(fruits[i])
}
let i=0
while (i<4) {
    console.log(fruits[i])
    i++
}

/*scope - var, let y const*/
/*variables locales y globales */
var var_test = "hola global";
/*variable global declarada por el var*/
if (true) {
    var var_test = "hola, dice var"; 
    /*variable local pero al ser llamada global con var desde aca se puede mmodificar*/
}
alert(var_test);


let let_test = "hola global";
//con let podemos manejar ambas global y local 
if (true) {
    let let_test = "hola, dice let";
}
alert(let_test);

const const_test = "hola global";
if (true) {
    const const_test = "hola, dice const";
}
alert(const_test);


// /*reasignación de valor de variables*/
var color = '#f00';
color = 'red'; 
console.log(color);

let color2 = '#f00';
color2 = 'red'; 
console.log(color2);

const COLOR_RED = '#f00';
COLOR_RED = 'red'; 
//descomentar esta línea para mostrar error que da la reasignación de una constante
console.log(COLOR_RED);



/*diferentes formas de crear un array*/
let car_brands = [];
car_brands[0] = 'Audi';
car_brands[1] = 'Bugatti';
car_brands[2] = 'BMW';
car_brands[3] = 'Ford';
car_brands[4] = 'Fiat';
car_brands[5] = 'Hyundai';
car_brands[6] = 'Lexus';
car_brands[7] = 'Peugeot';
car_brands[8] = 'Renault';
console.log(car_brands);

let car_brands2 = ['Audi','Bugatti','BMW','Ford','Fiat','Hyundai','Lexus','Peugeot','Renault'];
console.log(car_brands2);

let colors = new Array();
colors[0] = 'azul';
colors[1] = 'amarillo';
colors[2] = 'verde';
colors[3] = 'rojo';
console.log(colors);

let colors2 = new Array('azul','amarillo','verde','rojo');
console.log(colors2);

/*INDEXOF y acceder a solo una posición*/
console.log("Index del color 'verde': " + colors.indexOf('verde'));
console.log("Color con index 2: " + colors2[2]);


let shopping_list = new Array('leche', 'mostaza', 'fideos', 'arroz', 'arvejas', 'manzanas');
console.log("Lista de compras inicial: " + shopping_list);
/*UNSHIFT - agregar elemento al inicio*/
shopping_list.unshift('bananas');
console.log("Lista de compras tras unshift: " + shopping_list);
/*SHIFT - eliminar elemento al inicio*/
shopping_list.shift();
console.log("Lista de compras tras shift: " + shopping_list);
/*PUSH - agregar elemento al final*/
shopping_list.push('espinaca');
console.log("Lista de compras tras push: " + shopping_list);
/*POP - eliminar elemento al final*/
shopping_list.pop();
console.log("Lista de compras tras pop: " + shopping_list);


/*JOIN*/
let months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
console.log("Meses unidos con join : " + months.join(' - '));
/*LENGTH*/
console.log("length del array meses: " + months.length);
/*SPLICE, recortar segunda mitad del año dejando la primera mitad del año*/
months.splice(6, 12);
console.log("Meses después del primer splice: " + months);
/*SPLICE, reemplazando un elemento*/
months.splice(1, 1, '02');
console.log("Meses después del segundo splice: " + months);
/*SPLICE, agregar un elemento sin eliminar ninguno*/
months.splice(1, 0, 'nuevo mes');
console.log("Meses después del tercer splice: " + months);


// /*SORT y REVERSE*/
let countries =  ['Mexico', 'España', 'Argentina', 'Chile', 'Colombia', 'Venezuela', 'Perú', 'Costa Rica', 'Bolivia', 'Cuba', 'Ecuador', 'Uruguay', 'Paraguay'];
/*INVERTIR EL SENTIDO DE LA LISTA*/
console.log("Array reverse: " + countries.reverse());
/*ORDENAR EN ORDEN ALFABETICO Y LUEGO INVERTIRLO*/
console.log("Array sort y reverse: " + countries.sort().reverse());
/*ORDEN ALFABETICO  */
console.log("Array sort: " + countries.sort());
