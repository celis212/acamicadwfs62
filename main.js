//Tarea 

// var count = 0;
// var text = "";

// while (count < 10) {
//     count++;
//     alert("the number using while is " + count)
// }

// var count_two = null;

// for (count_two = 1; count_two <= 10; count_two++) {
//     alert("the number using for is " + count_two)
// }

/*ciclo FOR para contar de 10 a 1*/
console.log("CICLO FOR:");
for (var i = 10; i > 0; i--){
    if(i === 1){
        console.log(i + " oveja");
    } else {
        console.log(i + " ovejas");
    }
}

/*ciclos while y do while, comparación de casos similares*/
/*DO WHILE*/
var num_do_while = 5;
do {
    console.log("DO WHILE dice: " + num_do_while);
    num_do_while++;
} while (num_do_while < 5);
console.log("Después del DO WHILE dice: " + num_do_while);
/*WHILE*/
var num_while = 5;
while (num_while < 5) {
    /*no se ejecuta ni una sola vez porque no cumple la condición*/
    console.log("WHILE dice: " + num_while);
    num_while++;
}
console.log("Después del WHILE dice: " + num_while);


/*condicional SWITCH*/
console.log("SWITCH:");
var num1 = parseInt(prompt("Ingrese un número"));
var operation = prompt("Ingrese operación a realizar: - + / *");
var num2 = parseInt(prompt("Ingrese otro número"));

switch (operation) {
    case "+":
        console.log(num1 + " + " + num2 + " = " + (num1 + num2));
        break;
    case "-":
        console.log(num1 + " - " + num2 + " = " + (num1 - num2));
        break;
    case "/":
        console.log(num1 + " / " + num2 + " = " + (num1 / num2));
        break;
    case "*":
        console.log(num1 + " * " + num2 + " = " + (num1 * num2));
        break;
    default:
        console.log("Perdón, no conozco esa operación");
}


/*FUNCTION */
var input_name = prompt("Ingrese su nombre");

function call_name (name) {
    alert("Function call_name dice: Hola " + name);
    console.log("Function call_name dice: Hola " + name);
}

/*llamar una función */
call_name(input_name);

//datos del usuario con los que comparar input
var user = "AcamStu";
var password = "pass123";

//pedido de input al usuario hasta que ingrese datos correctos
do {
	var userInput = prompt("Ingrese usuario");
	var passwordInput = prompt("Ingrese password");
 	var login = validate(userInput, passwordInput);
} while (login == false);

//mensaje bienvenida tras ingreso de datos correctos
alert("Bienvenido " + user);

//función de validación
function validate(userInput, passwordInput){
	return (userInput == user && passwordInput == password)? true : false;
}